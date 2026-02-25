<script setup>
import { ref, computed } from 'vue'
import { Search, FileText, ShoppingCart, User, ShieldCheck, Package, ChevronLeft, ChevronRight } from 'lucide-vue-next'

// --- DADOS DO JSON ---
const rawData = [
  { "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60146, "PRODUTO_CODFAB": "35506-BF0-CG02", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 0.7268, "PRODUTO_VALOR_TOTAL": 14318.54 },
  { "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60134, "PRODUTO_CODFAB": "35503-BF0-CG04", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 0.4108, "PRODUTO_VALOR_TOTAL": 14318.54 },
  { "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60231, "PRODUTO_CODFAB": "91500-BF3-CG02", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 2.8993, "PRODUTO_VALOR_TOTAL": 14318.54 },
  { "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60312, "PRODUTO_CODFAB": "11200-BF0-CG10", "PRODUTO_QUANTIDADE": 2, "PRODUTO_VALOR": 104.28, "PRODUTO_VALOR_TOTAL": 14318.54 },
  { "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60369, "PRODUTO_CODFAB": "31201-BF0-CG08", "PRODUTO_QUANTIDADE": 20, "PRODUTO_VALOR": 2.9072, "PRODUTO_VALOR_TOTAL": 14318.54 },
  { "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60458, "PRODUTO_CODFAB": "41260-BF0-CG07", "PRODUTO_QUANTIDADE": 200, "PRODUTO_VALOR": 1.1771, "PRODUTO_VALOR_TOTAL": 14318.54 },
  // ... adicionei alguns para o exemplo, o filtro funcionará com o array completo que você colou
];

// --- ESTADOS ---
const searchNF = ref('');
const searchProduct = ref('');
const resultData = ref(null);
const currentPage = ref(1);
const itemsPerPage = 5;

// --- LÓGICA DE CONSULTA ---
const consultar = () => {
  const filtered = rawData.filter(item => item.NOTAFISCAL_NUMERO.toString() === searchNF.value);
  if (filtered.length > 0) {
    resultData.value = {
      nf: filtered[0],
      pedido: filtered[0],
      cliente: filtered[0],
      rca: filtered[0],
      produtos: filtered
    };
    currentPage.value = 1;
  } else {
    alert('Nota Fiscal não encontrada!');
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

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));
</script>

<template>
  <div class="min-h-screen p-4 md:p-8">
    <!-- Header -->
    <header class="mb-10 text-center">
      <h1 class="text-4xl font-extrabold text-slate-800 tracking-tight">SAC - <span class="text-primary">Sistema de Atendimento ao Consumidor</span></h1>
      <p class="text-slate-500 mt-2 text-lg">Consulta de Nota Fiscal</p>
    </header>

    <!-- Barra de Busca Principal -->
    <div class="max-w-xl mx-auto mb-10">
      <div class="flex gap-2 p-2 bg-white rounded-2xl shadow-xl border border-slate-100">
        <div class="relative flex-1">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            v-model="searchNF"
            type="text" 
            placeholder="Número da Nota Fiscal (ex: 28116)" 
            class="w-full pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700"
            @keyup.enter="consultar"
          />
        </div>
        <button 
          @click="consultar"
          class="bg-primary hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/30 active:scale-95"
        >
          CONSULTAR
        </button>
      </div>
    </div>

    <div v-if="resultData" class="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <!-- Cards de Resumo -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Card Nota Fiscal -->
        <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-primary">
          <div class="flex items-center gap-3 mb-4 text-primary">
            <FileText class="w-6 h-6" />
            <h3 class="font-bold uppercase tracking-wider text-sm">Nota Fiscal</h3>
          </div>
          <p class="text-slate-500 text-xs uppercase font-semibold">Número</p>
          <p class="text-xl font-bold text-slate-800 mb-2">{{ resultData.nf.NOTAFISCAL_NUMERO }}</p>
          <p class="text-slate-500 text-xs uppercase font-semibold">Emissão</p>
          <p class="font-medium text-slate-700">{{ resultData.nf.NOTAFISCAL_DATA }}</p>
        </div>

        <!-- Card Pedido -->
        <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-secondary">
          <div class="flex items-center gap-3 mb-4 text-secondary">
            <ShoppingCart class="w-6 h-6" />
            <h3 class="font-bold uppercase tracking-wider text-sm">Pedido</h3>
          </div>
          <p class="text-slate-500 text-xs uppercase font-semibold">Número / Filial</p>
          <p class="text-xl font-bold text-slate-800 mb-2">{{ resultData.pedido.PEDIDO_NUMERO }} / {{ resultData.pedido.PEDIDO_FILIAL }}</p>
          <p class="text-slate-500 text-xs uppercase font-semibold">Data Pedido</p>
          <p class="font-medium text-slate-700">{{ resultData.pedido.PEDIDO_DATA }}</p>
        </div>

        <!-- Card Cliente -->
        <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-emerald-500">
          <div class="flex items-center gap-3 mb-4 text-emerald-500">
            <User class="w-6 h-6" />
            <h3 class="font-bold uppercase tracking-wider text-sm">Cliente</h3>
          </div>
          <p class="text-slate-800 font-bold leading-tight mb-2">{{ resultData.cliente.CLIENTE_NOME }}</p>
          <p class="text-slate-500 text-sm">{{ resultData.cliente.CLIENTE_CNPJ }}</p>
          <p class="text-slate-500 text-sm">{{ resultData.cliente.CLIENTE_EMAIL }}</p>
        </div>

        <!-- Card RCA -->
        <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-orange-500">
          <div class="flex items-center gap-3 mb-4 text-orange-500">
            <ShieldCheck class="w-6 h-6" />
            <h3 class="font-bold uppercase tracking-wider text-sm">RCA / Agente</h3>
          </div>
          <p class="text-slate-800 font-bold leading-tight mb-1">{{ resultData.rca.RCA_NOME }}</p>
          <p class="text-orange-600 text-xs font-bold uppercase mb-2">{{ resultData.rca.RCA_AGENTE }}</p>
          <p class="text-slate-500 text-sm">Gerente: {{ resultData.rca.RCA_GERENTE }}</p>
        </div>
      </div>

      <!-- Seção de Produtos (DataGrid) -->
      <div class="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
        <div class="p-6 border-b border-slate-50 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="bg-primary p-2 rounded-lg text-white">
              <Package class="w-5 h-5" />
            </div>
            <h2 class="text-xl font-bold text-slate-800">Itens da Nota</h2>
          </div>
          
          <!-- Busca Interna no Grid -->
          <div class="relative w-full md:w-72">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              v-model="searchProduct"
              type="text" 
              placeholder="Filtrar Código ou Fabr." 
              class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest font-bold">
                <th class="px-6 py-4">Cód. Produto</th>
                <th class="px-6 py-4">Cód. Fabricante</th>
                <th class="px-6 py-4 text-center">Quantidade</th>
                <th class="px-6 py-4 text-right">Valor Unit.</th>
                <th class="px-6 py-4 text-right">Valor Total Geral</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="prod in paginatedProducts" :key="prod.PRODUTO_CODIGO" class="hover:bg-slate-50/80 transition-colors">
                <td class="px-6 py-4 font-bold text-slate-700">{{ prod.PRODUTO_CODIGO }}</td>
                <td class="px-6 py-4 text-slate-600">{{ prod.PRODUTO_CODFAB }}</td>
                <td class="px-6 py-4 text-center">
                  <span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold">
                    {{ prod.PRODUTO_QUANTIDADE }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right font-medium text-slate-600">R$ {{ prod.PRODUTO_VALOR.toFixed(4) }}</td>
                <td class="px-6 py-4 text-right font-bold text-primary">R$ {{ prod.PRODUTO_VALOR_TOTAL.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Paginação -->
        <div class="p-4 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
          <p class="text-sm text-slate-500">
            Mostrando <b>{{ paginatedProducts.length }}</b> de <b>{{ filteredProducts.length }}</b> produtos
          </p>
          <div class="flex gap-2">
            <button 
              @click="currentPage--" 
              :disabled="currentPage === 1"
              class="p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 disabled:opacity-30 transition-all"
            >
              <ChevronLeft class="w-5 h-5" />
            </button>
            <span class="flex items-center px-4 text-sm font-bold text-slate-700">
              Página {{ currentPage }} de {{ totalPages }}
            </span>
            <button 
              @click="currentPage++" 
              :disabled="currentPage === totalPages"
              class="p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 disabled:opacity-30 transition-all"
            >
              <ChevronRight class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 opacity-40">
      <Search class="w-16 h-16 mx-auto mb-4 text-slate-300" />
      <p class="text-xl">Digite o número da nota para iniciar a consulta.</p>
    </div>
  </div>
</template>

<style>
.animate-in {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>