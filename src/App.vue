<script setup>
import { ref, computed, onMounted } from 'vue'
import { Search, FileText, ShoppingCart, User, ShieldCheck, Package, ChevronLeft, ChevronRight, UserCog, Loader2 } from 'lucide-vue-next'

// --- LÓGICA DA ANIMAÇÃO DE ABERTURA ---
const showIntro = ref(true);

onMounted(() => {
  // Após 2 segundos, a logo começa a sumir e subir
  setTimeout(() => {
    showIntro.value = false;
  }, 2000);
});
// --------------------------------------

const searchCliente = ref(''); // Pode ser CNPJ ou Código
const searchFilial = ref('14'); // Padrão 14
const searchNF = ref('');
const searchProduct = ref('');
const resultData = ref(null);
const loading = ref(false);

// const API_URL = 'https://saclark.brothermotos.com.br/consultaCompleta';
const API_URL = 'https://saclark.brothermotos.com.br/consultaCompletaDetalhada';

// Grid Logic
const currentPage = ref(1);
const itemsPerPage = 8;

const filteredProducts = computed(() => {
  if (!resultData.value || !resultData.value.ITENS) return [];
  return resultData.value.ITENS.filter(p => 
    p.PRODUTO_CODIGO.toString().includes(searchProduct.value) || 
    p.PRODUTO_CODFAB.toLowerCase().includes(searchProduct.value.toLowerCase())
  );
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredProducts.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage) || 1);

const consultar = async () => {
  if (!searchNF.value || !searchFilial.value) {
    alert('Número da Nota e Filial são obrigatórios!');
    return;
  }

  loading.value = true;
  resultData.value = null;

  try {
    const url = new URL(API_URL);
    if (searchCliente.value) url.searchParams.append('nfCnpj', searchCliente.value);
    url.searchParams.append('nfFilial', searchFilial.value);
    url.searchParams.append('nfNumNota', searchNF.value);

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      resultData.value = data[0];
      currentPage.value = 1;
    } else {
      alert('Nenhuma nota encontrada.');
    }
  } catch (error) {
    alert('Erro ao conectar com o servidor.');
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <!-- OVERLAY DA LOGO (INTRO) -->
  <Transition name="logo-transition">
    <div v-if="showIntro" class="fixed inset-0 z-[100] bg-[#F8FAFC] flex items-center justify-center">
      <img 
        :src="'/logo-black.png'" 
        alt="Logo" 
        class="w-[150px] h-auto animate-fade-in"
      />
    </div>
  </Transition>

  <!-- PÁGINA PRINCIPAL -->
  <Transition name="content-fade">
    <div v-if="!showIntro" class="min-h-screen p-2 md:p-8 bg-[#F8FAFC]">
      
      <header class="mb-6 text-center">
        <h1 class="text-2xl md:text-4xl font-black text-slate-800 tracking-tight">
          SAC - <span class="text-indigo-600">Sistema de Atendimento ao Consumidor</span>
        </h1>
      </header>

      <!-- Barra de Pesquisa -->
      <div class="max-w-5xl mx-auto mb-8">
        <div class="bg-white p-2 md:p-3 rounded-3xl shadow-xl flex flex-col md:flex-row gap-2 border border-slate-100">
          <input 
            v-model="searchCliente" 
            type="text" 
            placeholder="CNPJ ou Cód. Cliente" 
            class="flex-[1.5] px-4 py-3 bg-slate-50 rounded-xl focus:outline-none font-bold text-sm"
          />
          
          <select 
            v-model="searchFilial"
            class="w-full md:w-32 px-4 py-3 bg-slate-50 rounded-xl focus:outline-none font-bold text-sm appearance-none border-none cursor-pointer" required
          >
            <option value="5">Matriz 05</option>
            <option value="14">Filial 14 - SC</option>
            <option value="15">Filial 15 - CE</option>
          </select>

          <input 
            v-model="searchNF" 
            type="text" 
            placeholder="Nº Nota" 
            class="flex-1 px-4 py-3 bg-slate-50 rounded-xl focus:outline-none font-bold text-sm" 
            @keyup.enter="consultar"
          />
          <button 
            @click="consultar" 
            :disabled="loading"
            class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-black transition-all flex items-center justify-center gap-2"
          >
            <Loader2 v-if="loading" class="w-4 h-4 animate-spin" />
            <Search v-else class="w-4 h-4" /> BUSCAR
          </button>
        </div>
      </div>

      <!-- Resultados -->
      <div v-if="resultData" class="max-w-7xl mx-auto space-y-6 animate-in">
        
        <!-- Cards Superiores -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
          <!-- Card Nota Fiscal -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-indigo-500">
            <div class="flex items-center gap-2 mb-4 text-indigo-600">
              <FileText class="w-5 h-5" />
              <h3 class="font-black uppercase text-[10px] tracking-widest">Nota Fiscal</h3>
            </div>
            <div class="space-y-3">
              <div>
                <p class="text-[9px] font-black text-slate-400 uppercase">Número da Nota</p>
                <p class="text-3xl font-black text-slate-800 tracking-tighter">{{ resultData.NOTAFISCAL_NUMERO }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-slate-400 uppercase">Data Emissão</p>
                <p class="text-sm font-bold text-slate-600">{{ resultData.NOTAFISCAL_DATA }}</p>
              </div>
            </div>
          </div>

          <!-- Card Pedido -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-cyan-500">
            <div class="flex items-center gap-2 mb-4 text-cyan-500">
              <ShoppingCart class="w-5 h-5" />
              <h3 class="font-black uppercase text-[10px] tracking-widest">Pedido / Filial</h3>
            </div>
            <div class="space-y-3">
              <div>
                <p class="text-[9px] font-black text-slate-400 uppercase">Número Pedido</p>
                <p class="text-xl font-black text-slate-800 leading-none">{{ resultData.PEDIDO_NUMERO }}</p>
              </div>
              <div class="flex justify-between border-t pt-2 border-slate-50">
                <div>
                  <p class="text-[9px] font-black text-slate-400 uppercase">Filial</p>
                  <p class="text-sm font-bold text-cyan-600">{{ resultData.PEDIDO_FILIAL }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-slate-400 uppercase text-right">Data Pedido</p>
                  <p class="text-sm font-bold text-slate-600 text-right">{{ resultData.PEDIDO_DATA }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Cliente -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-emerald-500">
            <div class="flex items-center gap-2 mb-4 text-emerald-500">
              <User class="w-5 h-5" />
              <h3 class="font-black uppercase text-[10px] tracking-widest">Dados do Cliente</h3>
            </div>
            <div class="space-y-3">
              <div>
                <p class="text-[9px] font-black text-slate-400 uppercase">Razão Social (Cód: {{ resultData.CLIENTE_CODIGO }})</p>
                <p class="text-[13px] font-black text-slate-800 leading-tight uppercase">{{ resultData.CLIENTE_NOME }}</p>
              </div>
              <div class="space-y-1 text-xs font-bold text-slate-500">
                <p>CNPJ: {{ resultData.CLIENTE_CNPJ }}</p>
                <p class="truncate">E-Mail: {{ resultData.CLIENTE_EMAIL }}</p>
                <p>Whats: {{ resultData.CLIENTE_FONE }}</p>
              </div>
            </div>
          </div>

          <!-- Card RCA -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-orange-500">
            <div class="flex items-center gap-2 mb-4 text-orange-500">
              <ShieldCheck class="w-5 h-5" />
              <h3 class="font-black uppercase text-[10px] tracking-widest">Representação RCA</h3>
            </div>
            <div class="space-y-3">
              <div>
                <p class="text-[9px] font-black text-slate-400 uppercase">Nome RCA</p>
                <p class="text-[13px] font-black text-slate-800 leading-tight uppercase">{{ resultData.RCA_NOME }}</p>
              </div>
              <div class="space-y-1 text-xs">
                <p class="text-orange-600 font-black flex items-center gap-2 bg-orange-50 p-1 rounded">
                  <UserCog class="w-3 h-3"/> Agente: {{ resultData.RCA_AGENTE }}
                </p>
                <p class="text-slate-500 font-bold italic border-t pt-1 border-slate-50">Gerente: {{ resultData.RCA_GERENTE }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabela de Produtos Otimizada -->
        <div class="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
          <div class="p-5 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4 border-b">
            <h2 class="text-lg font-black text-slate-800 flex items-center gap-2">
              <Package class="w-5 h-5 text-indigo-600" /> Itens
            </h2>
            <input v-model="searchProduct" type="text" placeholder="Filtrar item..." class="w-full md:w-64 px-4 py-2 bg-white border rounded-lg text-xs font-bold" />
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="bg-slate-100/80 text-slate-500 text-[9px] md:text-[11px] font-black uppercase tracking-tighter md:tracking-widest">
                  <th class="hidden md:table-cell px-4 md:px-8 py-4">Código</th>
                  <th class="px-3 md:px-8 py-4">Fabricante</th>
                  <th class="px-2 md:px-8 py-4 text-center">Qtd</th>
                  <th class="px-2 md:px-8 py-4 text-right">Valor</th>
                  <th class="px-3 md:px-8 py-4 text-right text-indigo-600">Total</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="prod in paginatedProducts" :key="prod.PRODUTO_CODIGO" class="hover:bg-slate-50">
                  <td class="hidden md:table-cell px-8 py-5 font-black text-slate-700 text-sm">{{ prod.PRODUTO_CODIGO }}</td>
                  <td class="px-3 md:px-8 py-4 text-slate-500 font-bold text-[10px] md:text-sm leading-tight">{{ prod.PRODUTO_CODFAB }}</td>
                  <td class="px-2 md:px-8 py-4 text-center">
                    <span class="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-black text-[10px] md:text-xs">{{ prod.PRODUTO_QUANTIDADE }}</span>
                  </td>
                  <td class="px-2 md:px-8 py-4 text-right text-slate-600 font-bold text-[10px] md:text-sm">
                    {{ prod.PRODUTO_VALOR_UNITARIO.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}
                  </td>
                  <td class="px-3 md:px-8 py-4 text-right font-black text-slate-900 text-[10px] md:text-sm">
                    {{ (prod.PRODUTO_QUANTIDADE * prod.PRODUTO_VALOR_UNITARIO).toLocaleString('pt-br', {minimumFractionDigits: 2}) }}
                  </td>
                </tr>
              </tbody>
              
              <tfoot class="bg-slate-900 text-white">
                <tr>
                  <td colspan="3" class="md:table-cell hidden"></td>
                  <td colspan="3" class="md:hidden px-4 py-6 text-right font-black text-[10px] uppercase italic opacity-70">TOTAL NOTA:</td>
                  <td class="hidden md:table-cell px-8 py-8 text-right font-black text-[12px] uppercase tracking-widest opacity-70 italic">VALOR TOTAL DA NOTA:</td>
                  <td class="px-4 md:px-8 py-6 md:py-8 text-right text-xl md:text-3xl font-black text-indigo-400">
                    R$ {{ resultData.VALOR_TOTAL_NOTA.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <!-- Paginação compacta -->
          <div class="p-4 flex justify-between items-center text-[10px] font-black text-slate-400 border-t">
            <span>{{ filteredProducts.length }} itens</span>
            <div class="flex gap-4 items-center">
              <button @click="currentPage--" :disabled="currentPage === 1" class="disabled:opacity-20"><ChevronLeft class="w-4 h-4"/></button>
              <span class="text-indigo-600">{{ currentPage }} / {{ totalPages }}</span>
              <button @click="currentPage++" :disabled="currentPage === totalPages" class="disabled:opacity-20"><ChevronRight class="w-4 h-4"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
/* ANIMAÇÃO INICIAL: FADE IN NA LOGO */
@keyframes fadeInLogo {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fadeInLogo 0.8s ease-out forwards;
}

/* TRANSIÇÃO DE SAÍDA DA LOGO: SOBE E SOME */
.logo-transition-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.logo-transition-leave-to {
  opacity: 0;
  transform: translateY(-150px); /* Move para o topo */
}

/* TRANSIÇÃO DE ENTRADA DO CONTEÚDO */
.content-fade-enter-active {
  transition: opacity 0.6s ease-in;
}
.content-fade-enter-from {
  opacity: 0;
}

/* Estilos Padrão do seu Projeto */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234F46E5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1rem;
}
</style>
