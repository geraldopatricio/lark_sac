<script setup>
import { ref, computed } from 'vue'
import { Search, FileText, ShoppingCart, User, ShieldCheck, Package, ChevronLeft, ChevronRight, Hash, IdentificationCard } from 'lucide-vue-next'

// --- DADOS DO JSON ---
const rawData = [
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60146, "PRODUTO_CODFAB": "35506-BF0-CG02", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 0.7268, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60134, "PRODUTO_CODFAB": "35503-BF0-CG04", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 0.4108, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60231, "PRODUTO_CODFAB": "91500-BF3-CG02", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 2.8993, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60312, "PRODUTO_CODFAB": "11200-BF0-CG10", "PRODUTO_QUANTIDADE": 2, "PRODUTO_VALOR": 104.28, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60369, "PRODUTO_CODFAB": "31201-BF0-CG08", "PRODUTO_QUANTIDADE": 20, "PRODUTO_VALOR": 2.9072, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60458, "PRODUTO_CODFAB": "41260-BF0-CG07", "PRODUTO_QUANTIDADE": 200, "PRODUTO_VALOR": 1.1771, "PRODUTO_VALOR_TOTAL": 14318.54 }
];

// --- ESTADOS ---
const searchClient = ref(''); // Pode ser CNPJ ou Código
const searchNF = ref('');
const searchProduct = ref('');
const resultData = ref(null);
const currentPage = ref(1);
const itemsPerPage = 5;

// --- LÓGICA DE CONSULTA ---
const consultar = () => {
  if (!searchClient.value || !searchNF.value) {
    alert('Por favor, preencha o campo do Cliente e o Número da Nota Fiscal.');
    return;
  }

  const filtered = rawData.filter(item => {
    const matchNF = item.NOTAFISCAL_NUMERO.toString() === searchNF.value;
    const matchClient = 
      item.CLIENTE_CODIGO.toString() === searchClient.value || 
      item.CLIENTE_CNPJ === searchClient.value;
    
    return matchNF && matchClient;
  });

  if (filtered.length > 0) {
    resultData.value = {
      nf: filtered[0],
      pedido: filtered[0],
      cliente: filtered[0],
      rca: filtered[0],
      produtos: filtered
    };
    currentPage.value = 1;
    searchProduct.value = '';
  } else {
    alert('Nenhum registro encontrado para os dados informados.');
    resultData.value = null;
  }
};

// --- FILTRO E PAGINAÇÃO DO DATAGRID ---
const filteredProducts = computed(() => {
  if (!resultData.value) return [];
  return resultData.value.produtos.filter(p => 
    p.PRODUTO_CODIGO.toString().includes(searchProduct.value) || 
    p.PRODUTO_CODFAB.toLowerCase().includes(searchProduct.value.toLowerCase())
  );
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredProducts.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage) || 1);
</script>

<template>
  <div class="min-h-screen p-4 md:p-8">
    <!-- Header -->
    <header class="mb-10 text-center">
      <h1 class="text-4xl font-extrabold text-slate-800 tracking-tight">SAC - <span class="text-primary">Sistema de Atendimento ao Consumidor</span></h1>
      <p class="text-slate-500 mt-2 text-lg font-medium">Consulta Nota Fiscal</p>
    </header>

    <!-- Barra de Busca Dupla -->
    <div class="max-w-4xl mx-auto mb-10">
      <div class="bg-white p-3 rounded-3xl shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-3">
        
        <!-- Campo Cliente -->
        <div class="relative flex-[1.5]">
          <IdentificationCard class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            v-model="searchClient"
            type="text" 
            placeholder="CNPJ ou Cód. Cliente (Ex: 20044)" 
            class="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700 font-medium"
            @keyup.enter="consultar"
          />
        </div>

        <!-- Campo NF -->
        <div class="relative flex-1">
          <Hash class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            v-model="searchNF"
            type="text" 
            placeholder="Nota Fiscal (Ex: 28116)" 
            class="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700 font-medium"
            @keyup.enter="consultar"
          />
        </div>

        <!-- Botão Consultar -->
        <button 
          @click="consultar"
          class="bg-primary hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/30 active:scale-95 flex items-center justify-center gap-2"
        >
          <Search class="w-5 h-5" />
          CONSULTAR
        </button>
      </div>
      <p class="text-center text-slate-400 text-xs mt-4 uppercase tracking-widest font-semibold">Informe os dados acima para buscar os detalhes da operação</p>
    </div>

    <div v-if="resultData" class="max-w-7xl mx-auto space-y-8 animate-in">
      
      <!-- Cards de Resumo -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Card Nota Fiscal -->
        <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-primary">
          <div class="flex items-center gap-3 mb-4 text-primary">
            <FileText class="w-6 h-6" />
            <h3 class="font-bold uppercase tracking-wider text-xs">Informações da Nota</h3>
          </div>
          <p class="text-slate-400 text-[10px] uppercase font-bold">Número NF</p>
          <p class="text-2xl font-black text-slate-800 mb-2">{{ resultData.nf.NOTAFISCAL_NUMERO }}</p>
          <p class="text-slate-400 text-[10px] uppercase font-bold">Data Emissão</p>
          <p class="font-bold text-slate-700">{{ resultData.nf.NOTAFISCAL_DATA }}</p>
        </div>

        <!-- Card Pedido -->
        <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-secondary">
          <div class="flex items-center gap-3 mb-4 text-secondary">
            <ShoppingCart class="w-6 h-6" />
            <h3 class="font-bold uppercase tracking-wider text-xs">Detalhes do Pedido</h3>
          </div>
          <p class="text-slate-400 text-[10px] uppercase font-bold">Número / Filial</p>
          <p class="text-xl font-bold text-slate-800 mb-2">{{ resultData.pedido.PEDIDO_NUMERO }} <span class="text-slate-300 mx-1">|</span> FL {{ resultData.pedido.PEDIDO_FILIAL }}</p>
          <p class="text-slate-400 text-[10px] uppercase font-bold">Data do Pedido</p>
          <p class="font-bold text-slate-700">{{ resultData.pedido.PEDIDO_DATA }}</p>
        </div>

        <!-- Card Cliente -->
        <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-emerald-500">
          <div class="flex items-center gap-3 mb-4 text-emerald-500">
            <User class="w-6 h-6" />
            <h3 class="font-bold uppercase tracking-wider text-xs">Dados do Cliente</h3>
          </div>
          <p class="text-slate-800 font-bold leading-tight mb-2 text-sm">{{ resultData.cliente.CLIENTE_NOME }}</p>
          <div class="space-y-1">
            <p class="text-slate-500 text-xs flex items-center gap-1"><b>CNPJ:</b> {{ resultData.cliente.CLIENTE_CNPJ }}</p>
            <p class="text-slate-500 text-xs flex items-center gap-1 truncate"><b>E-mail:</b> {{ resultData.cliente.CLIENTE_EMAIL }}</p>
            <p class="text-slate-500 text-xs flex items-center gap-1"><b>Fone:</b> {{ resultData.cliente.CLIENTE_FONE }}</p>
          </div>
        </div>

        <!-- Card RCA -->
        <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-orange-500">
          <div class="flex items-center gap-3 mb-4 text-orange-500">
            <ShieldCheck class="w-6 h-6" />
            <h3 class="font-bold uppercase tracking-wider text-xs">Representação (RCA)</h3>
          </div>
          <p class="text-slate-800 font-bold leading-tight mb-1 text-sm">{{ resultData.rca.RCA_NOME }}</p>
          <p class="text-orange-600 text-[10px] font-black uppercase mb-3 bg-orange-50 px-2 py-1 rounded-md inline-block">{{ resultData.rca.RCA_AGENTE }}</p>
          <p class="text-slate-500 text-xs italic">Gerente: {{ resultData.rca.RCA_GERENTE }}</p>
        </div>
      </div>

      <!-- Seção de Produtos (DataGrid) -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div class="p-6 border-b border-slate-50 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="bg-slate-800 p-2 rounded-xl text-white">
              <Package class="w-5 h-5" />
            </div>
            <h2 class="text-xl font-extrabold text-slate-800">Itens da Nota Fiscal</h2>
          </div>
          
          <div class="relative w-full md:w-80">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              v-model="searchProduct"
              type="text" 
              placeholder="Filtrar por Código ou Fabricante..." 
              class="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium shadow-sm"
            />
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-100/50 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black">
                <th class="px-6 py-4 border-b border-slate-100">Cód. Interno</th>
                <th class="px-6 py-4 border-b border-slate-100">Cód. Fabricante</th>
                <th class="px-6 py-4 border-b border-slate-100 text-center">Qtd</th>
                <th class="px-6 py-4 border-b border-slate-100 text-right">Valor Unitário</th>
                <th class="px-6 py-4 border-b border-slate-100 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              <tr v-for="prod in paginatedProducts" :key="prod.PRODUTO_CODIGO" class="hover:bg-indigo-50/30 transition-colors group">
                <td class="px-6 py-5 font-bold text-slate-700 group-hover:text-primary">{{ prod.PRODUTO_CODIGO }}</td>
                <td class="px-6 py-5 text-slate-500 font-medium">{{ prod.PRODUTO_CODFAB }}</td>
                <td class="px-6 py-5 text-center">
                  <span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-black group-hover:bg-primary group-hover:text-white transition-colors">
                    {{ prod.PRODUTO_QUANTIDADE }}
                  </span>
                </td>
                <td class="px-6 py-5 text-right font-medium text-slate-600">R$ {{ prod.PRODUTO_VALOR.toFixed(4) }}</td>
                <td class="px-6 py-5 text-right">
                  <span class="font-black text-slate-800">R$ {{ (prod.PRODUTO_QUANTIDADE * prod.PRODUTO_VALOR).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-slate-50/80 font-bold">
                <td colspan="4" class="px-6 py-4 text-right text-slate-500 uppercase text-xs tracking-widest">Valor Total da Nota:</td>
                <td class="px-6 py-4 text-right text-primary text-xl font-black">R$ {{ resultData.produtos[0].PRODUTO_VALOR_TOTAL.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <!-- Paginação -->
        <div class="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
          <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Exibindo {{ paginatedProducts.length }} de {{ filteredProducts.length }} itens
          </p>
          <div class="flex items-center gap-1">
            <button 
              @click="currentPage--" 
              :disabled="currentPage === 1"
              class="p-2 rounded-xl hover:bg-slate-100 disabled:opacity-20 transition-all text-slate-600"
            >
              <ChevronLeft class="w-5 h-5" />
            </button>
            <div class="flex gap-1">
              <span v-for="n in totalPages" :key="n" 
                @click="currentPage = n"
                :class="['w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold cursor-pointer transition-all', 
                currentPage === n ? 'bg-primary text-white shadow-md shadow-primary/30' : 'text-slate-400 hover:bg-slate-100']"
              >
                {{ n }}
              </span>
            </div>
            <button 
              @click="currentPage++" 
              :disabled="currentPage === totalPages"
              class="p-2 rounded-xl hover:bg-slate-100 disabled:opacity-20 transition-all text-slate-600"
            >
              <ChevronRight class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-24 opacity-30">
      <div class="bg-slate-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <Search class="w-10 h-10 text-slate-400" />
      </div>
      <p class="text-xl font-medium text-slate-600">Aguardando dados para consulta...</p>
      <p class="text-sm text-slate-500 mt-1 font-bold italic">Dica: Use Cód. Cliente 20044 e NF 28116</p>
    </div>
  </div>
</template>

<style>
.animate-in {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

body {
  background: radial-gradient(circle at top right, #fdfdff, #f1f5f9);
}
</style>
