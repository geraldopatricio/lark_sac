<script setup>
import { ref, computed, onMounted } from 'vue'
import { Search, FileText, ShoppingCart, User, ShieldCheck, Package, ChevronLeft, ChevronRight } from 'lucide-vue-next'

// LOG PARA DEBUG: Aperte F12 no navegador e vá em "Console" para ver se carregou
onMounted(() => {
  console.log("Sistema SAC Carregado com Sucesso!");
});

// --- SEUS DADOS ORIGINAIS COMPLETOS ---
const rawData = [
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60146, "PRODUTO_CODFAB": "35506-BF0-CG02", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 0.7268, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60134, "PRODUTO_CODFAB": "35503-BF0-CG04", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 0.4108, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60231, "PRODUTO_CODFAB": "91500-BF3-CG02", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 2.8993, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60312, "PRODUTO_CODFAB": "11200-BF0-CG10", "PRODUTO_QUANTIDADE": 2, "PRODUTO_VALOR": 104.28, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60369, "PRODUTO_CODFAB": "31201-BF0-CG08", "PRODUTO_QUANTIDADE": 20, "PRODUTO_VALOR": 2.9072, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60458, "PRODUTO_CODFAB": "41260-BF0-CG07", "PRODUTO_QUANTIDADE": 200, "PRODUTO_VALOR": 1.1771, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60515, "PRODUTO_CODFAB": "52110-BF0-CB03", "PRODUTO_QUANTIDADE": 6, "PRODUTO_VALOR": 50.8365, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60516, "PRODUTO_CODFAB": "52110-BF0-CG01", "PRODUTO_QUANTIDADE": 6, "PRODUTO_VALOR": 39.2867, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60542, "PRODUTO_CODFAB": "81140-BF0-CG17", "PRODUTO_QUANTIDADE": 5, "PRODUTO_VALOR": 42.9444, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60543, "PRODUTO_CODFAB": "81140-BF0-CG19", "PRODUTO_QUANTIDADE": 15, "PRODUTO_VALOR": 44.7693, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60785, "PRODUTO_CODFAB": "91500-BF0-TD00", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 2.1883, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60935, "PRODUTO_CODFAB": "11200-BF0-CG15", "PRODUTO_QUANTIDADE": 3, "PRODUTO_VALOR": 114.2498, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 61091, "PRODUTO_CODFAB": "41240-DF0-CG01", "PRODUTO_QUANTIDADE": 30, "PRODUTO_VALOR": 35.3762, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 61112, "PRODUTO_CODFAB": "52110-DF0-CG01", "PRODUTO_QUANTIDADE": 10, "PRODUTO_VALOR": 43.5211, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 61313, "PRODUTO_CODFAB": "11510-DF0-FZ01", "PRODUTO_QUANTIDADE": 50, "PRODUTO_VALOR": 3.7762, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 61566, "PRODUTO_CODFAB": "81140-DF0-XR01", "PRODUTO_QUANTIDADE": 4, "PRODUTO_VALOR": 61.5805, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 61796, "PRODUTO_CODFAB": "89600-DF0-CG03", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 2.0303, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 61866, "PRODUTO_CODFAB": "12101-DF0-FZ01", "PRODUTO_QUANTIDADE": 2, "PRODUTO_VALOR": 116.2406, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 61882, "PRODUTO_CODFAB": "12101-DF0-CG01", "PRODUTO_QUANTIDADE": 5, "PRODUTO_VALOR": 75.0816, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 62176, "PRODUTO_CODFAB": "41130-DF0-CG07", "PRODUTO_QUANTIDADE": 20, "PRODUTO_VALOR": 18.0278, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 62301, "PRODUTO_CODFAB": "41300-DF0-YS01", "PRODUTO_QUANTIDADE": 30, "PRODUTO_VALOR": 38.923301, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 62348, "PRODUTO_CODFAB": "81140-DF0-FZ03", "PRODUTO_QUANTIDADE": 15, "PRODUTO_VALOR": 44.2163, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 62494, "PRODUTO_CODFAB": "81140-DF0-CG14", "PRODUTO_QUANTIDADE": 10, "PRODUTO_VALOR": 46.2703, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 62507, "PRODUTO_CODFAB": "37420-DB0-CG05", "PRODUTO_QUANTIDADE": 50, "PRODUTO_VALOR": 33.18, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 63568, "PRODUTO_CODFAB": "37410-DB0-CG08", "PRODUTO_QUANTIDADE": 50, "PRODUTO_VALOR": 42.2413, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 64039, "PRODUTO_CODFAB": "11510-DF0-YS01", "PRODUTO_QUANTIDADE": 50, "PRODUTO_VALOR": 3.262701, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 64170, "PRODUTO_CODFAB": "41240-DF1-FZ01", "PRODUTO_QUANTIDADE": 5, "PRODUTO_VALOR": 53.5225, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60027, "PRODUTO_CODFAB": "91500-BF0-CG08", "PRODUTO_QUANTIDADE": 50, "PRODUTO_VALOR": 3.2153, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60054, "PRODUTO_CODFAB": "12130-BF0-CG15", "PRODUTO_QUANTIDADE": 10, "PRODUTO_VALOR": 42.6995, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60084, "PRODUTO_CODFAB": "12130-BF0-CG08", "PRODUTO_QUANTIDADE": 10, "PRODUTO_VALOR": 38.8206, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60103, "PRODUTO_CODFAB": "11200-BF0-CG08", "PRODUTO_QUANTIDADE": 3, "PRODUTO_VALOR": 103.7428, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60131, "PRODUTO_CODFAB": "35501-BF0-CG01", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 2.5991, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60132, "PRODUTO_CODFAB": "35505-BF0-CG02", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 0.2291, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60133, "PRODUTO_CODFAB": "35503-BF0-CG01", "PRODUTO_QUANTIDADE": 50, "PRODUTO_VALOR": 0.4819, "PRODUTO_VALOR_TOTAL": 14318.54 },
	{ "NOTAFISCAL_DATA": "23/04/2025", "NOTAFISCAL_NUMERO": 28116, "PEDIDO_DATA": "23/04/2025", "PEDIDO_NUMERO": 300001580, "PEDIDO_FILIAL": "14", "CLIENTE_CODIGO": 20044, "CLIENTE_CNPJ": "49.543.207/0001-00", "CLIENTE_EMAIL": "piziolocaio@gmail.com", "CLIENTE_FONE": "(11)3689-1188", "CLIENTE_NOME": "49.543.207 CAIO SANTANA PIZIOLO", "RCA_CODIGO": 300, "RCA_NOME": "JAYME RICARDO WRIGHT 06496879818", "RCA_CNPJ": "47.381.823/0001-78", "RCA_FONE": "11) 98654-011", "RCA_EMAIL": "JAYMEREPRESENTANTE@GMAIL.COM", "RCA_GERENTE": "EUGÊNIO MACHADO MALTA", "RCA_AGENTE": "DAIANA COSTA OLIVEIRA ", "PRODUTO_CODIGO": 60229, "PRODUTO_CODFAB": "91500-BF0-CG02", "PRODUTO_QUANTIDADE": 100, "PRODUTO_VALOR": 2.3147, "PRODUTO_VALOR_TOTAL": 14318.54 }
];

// --- ESTADOS ---
const searchClient = ref('');
const searchNF = ref('');
const searchProduct = ref('');
const resultData = ref(null);
const currentPage = ref(1);
const itemsPerPage = 5;

// --- CONSULTA ---
const consultar = () => {
  const filtered = rawData.filter(item => {
    const matchNF = item.NOTAFISCAL_NUMERO.toString() === searchNF.value;
    const matchClient = item.CLIENTE_CODIGO.toString() === searchClient.value || item.CLIENTE_CNPJ === searchClient.value;
    return matchNF && matchClient;
  });

  if (filtered.length > 0) {
    resultData.value = { nf: filtered[0], pedido: filtered[0], cliente: filtered[0], rca: filtered[0], produtos: filtered };
    currentPage.value = 1;
    searchProduct.value = '';
  } else {
    alert('Nota não encontrada! Use Cliente 20044 e NF 28116.');
    resultData.value = null;
  }
};

// --- GRID LOGIC ---
const filteredProducts = computed(() => {
  if (!resultData.value) return [];
  return resultData.value.produtos.filter(p => 
    p.PRODUTO_CODIGO.toString().includes(searchProduct.value) || 
    p.PRODUTO_CODFAB.toLowerCase().includes(searchProduct.value.toLowerCase())
  );
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredProducts.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage) || 1);

// O valor total da nota fiscal vindo do JSON
const valorTotalNotaGeral = computed(() => {
  return resultData.value ? resultData.value.produtos[0].PRODUTO_VALOR_TOTAL : 0;
});
</script>

<template>
  <div class="min-h-screen p-4 md:p-8 bg-[#F8FAFC]">
    
    <!-- Cabeçalho -->
    <header class="mb-10 text-center">
      <h1 class="text-4xl font-black text-slate-800 tracking-tight">
        SAC - <span class="text-indigo-600">Sistema de Atendimento ao Consumidor</span>
      </h1>
      <p class="text-slate-500 mt-2 text-lg font-bold">Consulta Nota Fiscal</p>
    </header>

    <!-- Barra de Pesquisa -->
    <div class="max-w-4xl mx-auto mb-10">
      <div class="bg-white p-3 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-3 border border-slate-100">
        <input 
          v-model="searchClient" 
          type="text" 
          placeholder="CNPJ ou Código do Cliente (Ex: 20044)" 
          class="flex-[1.5] px-6 py-4 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 font-bold" 
        />
        <input 
          v-model="searchNF" 
          type="text" 
          placeholder="Número da Nota (Ex: 28116)" 
          class="flex-1 px-6 py-4 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 font-bold" 
          @keyup.enter="consultar"
        />
        <button 
          @click="consultar" 
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
        >
          <Search class="w-5 h-5" /> CONSULTAR
        </button>
      </div>
    </div>

    <!-- Resultados -->
    <div v-if="resultData" class="max-w-7xl mx-auto space-y-8 animate-in">
      
      <!-- Cards Superiores -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Card Nota Fiscal -->
        <div class="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-indigo-500">
          <div class="flex items-center gap-2 mb-4 text-indigo-600">
            <FileText class="w-5 h-5" />
            <h3 class="font-black uppercase text-[10px] tracking-widest">Nota Fiscal</h3>
          </div>
          <div class="space-y-3">
            <div>
              <p class="text-[9px] font-black text-slate-400 uppercase">Número da Nota</p>
              <p class="text-3xl font-black text-slate-800 tracking-tighter">{{ resultData.nf.NOTAFISCAL_NUMERO }}</p>
            </div>
            <div>
              <p class="text-[9px] font-black text-slate-400 uppercase">Data Emissão</p>
              <p class="text-sm font-bold text-slate-600">{{ resultData.nf.NOTAFISCAL_DATA }}</p>
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
              <p class="text-xl font-black text-slate-800 leading-none">{{ resultData.pedido.PEDIDO_NUMERO }}</p>
            </div>
            <div class="flex justify-between border-t pt-2 border-slate-50">
              <div>
                <p class="text-[9px] font-black text-slate-400 uppercase">Filial</p>
                <p class="text-sm font-bold text-cyan-600 flex items-center gap-1">{{ resultData.pedido.PEDIDO_FILIAL }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-slate-400 uppercase text-right">Data Pedido</p>
                <p class="text-sm font-bold text-slate-600 text-right">{{ resultData.pedido.PEDIDO_DATA }}</p>
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
              <p class="text-[9px] font-black text-slate-400 uppercase">Razão Social (Cód: {{ resultData.cliente.CLIENTE_CODIGO }})</p>
              <p class="text-[13px] font-black text-slate-800 leading-tight uppercase">{{ resultData.cliente.CLIENTE_NOME }}</p>
            </div>
            <div class="space-y-1 text-xs">
              <p class="text-slate-500 font-bold flex items-center gap-2"><strong>CNPJ:</strong> {{ resultData.cliente.CLIENTE_CNPJ }}</p>
              <p class="text-slate-500 font-bold flex items-center gap-2 truncate"><strong>E-Mail:</strong> {{ resultData.cliente.CLIENTE_EMAIL }}</p>
              <p class="text-slate-500 font-bold flex items-center gap-2"><strong>Whatsapp:</strong> {{ resultData.cliente.CLIENTE_FONE }}</p>
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
              <p class="text-[13px] font-black text-slate-800 leading-tight uppercase">{{ resultData.rca.RCA_NOME }}</p>
            </div>
            <div class="space-y-1 text-xs">
              <p class="text-orange-600 font-black flex items-center gap-2 bg-orange-50 p-1 rounded"><UserCog class="w-3 h-3"/> Agente: {{ resultData.rca.RCA_AGENTE }}</p>
              <p class="text-slate-500 font-bold italic border-t pt-1 border-slate-50">Gerente: {{ resultData.rca.RCA_GERENTE }}</p>
              <p class="text-slate-400 font-medium text-[10px] truncate">{{ resultData.rca.RCA_EMAIL }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabela de Produtos -->
      <div class="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
        <div class="p-8 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4 border-b">
          <h2 class="text-2xl font-black text-slate-800 flex items-center gap-2">
            <Package class="w-6 h-6 text-indigo-600" /> Itens da Nota
          </h2>
          <input 
            v-model="searchProduct" 
            type="text" 
            placeholder="Filtrar por Código ou Fabricante..." 
            class="w-full md:w-72 px-4 py-3 bg-white border rounded-xl text-sm font-bold focus:outline-none" 
          />
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="bg-slate-100/80 text-slate-500 text-[11px] font-black uppercase tracking-widest">
                <th class="px-8 py-5">Código</th>
                <th class="px-8 py-5">Fabricante</th>
                <th class="px-8 py-5 text-center">Quantidade</th>
                <th class="px-8 py-5 text-right">Valor Unitário</th>
                <!-- COLUNA TOTAL (Multiplicação) -->
                <th class="px-8 py-5 text-right text-indigo-600 font-black">Total</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="prod in paginatedProducts" :key="prod.PRODUTO_CODIGO" class="hover:bg-slate-50 transition-all">
                <td class="px-8 py-6 font-black text-slate-700">{{ prod.PRODUTO_CODIGO }}</td>
                <td class="px-8 py-6 text-slate-500 font-bold text-sm">{{ prod.PRODUTO_CODFAB }}</td>
                <td class="px-8 py-6 text-center">
                  <span class="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-xl font-black text-xs">
                    {{ prod.PRODUTO_QUANTIDADE }}
                  </span>
                </td>
                <td class="px-8 py-6 text-right text-slate-600 font-bold italic">R$ {{ prod.PRODUTO_VALOR.toFixed(4) }}</td>
                <!-- CÁLCULO DE MULTIPLICAÇÃO AQUI -->
                <td class="px-8 py-6 text-right font-black text-slate-900">
                  R$ {{ (prod.PRODUTO_QUANTIDADE * prod.PRODUTO_VALOR).toLocaleString('pt-br', {minimumFractionDigits: 2}) }}
                </td>
              </tr>
            </tbody>
            
            <!-- RODAPÉ PRETO COM VALOR TOTAL GERAL -->
            <tfoot class="bg-slate-900 text-white">
              <tr>
                <td colspan="4" class="px-8 py-8 text-right font-black text-[14px] uppercase tracking-[0.2em] opacity-90 italic">
                  Valor Total Geral da Nota Fiscal:
                </td>
                <td class="px-8 py-8 text-right text-3xl font-black text-indigo-400">
                  R$ {{ valorTotalNotaGeral.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <!-- Paginação -->
        <div class="p-6 flex justify-between items-center text-[10px] font-black text-slate-400 border-t">
          <span>Página {{ currentPage }} de {{ totalPages }}</span>
          <div class="flex gap-2 items-center">
            <button @click="currentPage--" :disabled="currentPage === 1" class="p-2 disabled:opacity-20"><ChevronLeft class="w-5 h-5"/></button>
            <button @click="currentPage++" :disabled="currentPage === totalPages" class="p-2 disabled:opacity-20"><ChevronRight class="w-5 h-5"/></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mensagem Inicial -->
    <div v-else class="text-center py-32 opacity-25">
      <div class="bg-slate-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"><Search class="w-12 h-12 text-slate-400" /></div>
      <p class="text-2xl font-black text-slate-600">Aguardando consulta...</p>
    </div>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

body { 
    background-color: #F1F5F9; 
    font-family: 'Inter', sans-serif; 
}

.animate-in { 
    animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
}

@keyframes slideUp { 
    from { opacity: 0; transform: translateY(40px); } 
    to { opacity: 1; transform: translateY(0); } 
}

/* Scrollbar personalizada para manter o visual limpo */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #f1f1f1; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
</style>
