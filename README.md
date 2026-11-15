# 🚿 Casa do Encanador - Site Institucional & Vitrine de Produtos

Site moderno, responsivo e de alta performance desenvolvido especialmente para a **Casa do Encanador**.

> **Objetivo:** Apresentação visual da loja e vitrine de materiais hidráulicos (canos de todas as medidas, torneiras de chuveiro, sifões sanfonados, conexões, mangueiras e ferramentas), com destaque para **entregas rápidas na cidade**, botão direto para **WhatsApp**, **avaliações do Google** e **localização**. Não é e-commerce de carrinho com pagamento online, mas sim um canal direto para os clientes tirarem dúvidas e pedirem orçamentos rápidos.

---

## 🎨 Identidade Visual
- **Cores principais:** Branco, Azul Claro (`sky-500` / `sky-600`), Azul Escuro (`blue-900` / `blue-950`).
- **Nome em destaque:** Tipografia marcante com logo em degradê com gota de água e chave de conexão.
- **Botão do WhatsApp:** Sempre visível (no topo, no banner, em cada card de produto e em botão flutuante pulsante).

---

## 🚀 Como Iniciar no Seu Computador

1. Dê **dois cliques** no arquivo `iniciar.bat` (ou execute `iniciar.ps1` no PowerShell).
2. O navegador abrirá automaticamente em `http://localhost:5173`.
3. Ou pelo terminal:
   ```bash
   cd C:\Users\Desktop\.gemini\antigravity\scratch\casa-do-encanador
   npm run dev
   ```

---

## ✏️ Como Reeditar as Informações da Loja

Tudo foi centralizado em arquivos simples para que você possa alterar rapidamente quando me passar os dados:

### 1. Dados de Contato, Endereço e Avaliações do Google
Abra o arquivo [`src/data/storeInfo.ts`](file:///C:/Users/Desktop/.gemini/antigravity/scratch/casa-do-encanador/src/data/storeInfo.ts):
- **WhatsApp:** altere o número (formato com DDD: `5511999999999`)
- **Endereço e Referência:** rua, número, bairro, cidade e CEP
- **Google Maps:** link direto de rota e URL de incorporação (embed)
- **Horário de Funcionamento:** dias de semana e sábados
- **Avaliações do Google:** nota média, quantidade de avaliações e comentários dos clientes

### 2. Produtos, Medidas e Fotos
Abra o arquivo [`src/data/products.ts`](file:///C:/Users/Desktop/.gemini/antigravity/scratch/casa-do-encanador/src/data/products.ts):
- Adicione, remova ou edite produtos, fotos, marcas atendidas e medidas (ex: 20mm, 25mm, 50mm, 100mm).

---

## 📦 Funcionalidades Inclusas

- **Hero & Apresentação Marcante:** Slogan, nome destacado e atalhos rápidos.
- **Faixa de Entrega na Cidade:** Destaque para entrega de barras de 6 metros, emergências hidráulicas e máquina de cartão levada na entrega.
- **Vitrine Interativa com Filtros e Busca:**
  - Filtro por categorias: *Canos & Tubulações*, *Conexões & Adaptadores*, *Sifões & Sanfonados*, *Torneiras & Chuveiros*, *Mangueiras & Flexíveis*, *Vedações & Ferramentas*.
  - Pesquisa em tempo real por nome, bitola (ex: "50mm") ou marca (ex: "Tigre").
- **Botão "Pedir no WhatsApp" por Produto:** Abre o WhatsApp com o nome e as medidas do produto já preenchidos na mensagem.
- **Lista de Orçamento Rápido:** O cliente pode clicar em *"+ Adicionar à Lista"* em vários itens e enviar todos de uma só vez para o WhatsApp com observações.
- **Guia Visual de Medidas & Bitolas:** Tabela de conversão prática (mm para polegadas) para tirar dúvidas de clientes.
- **Seção de Avaliações do Google:** Estrelas, nota 4.9 e depoimentos com selo de verificação.
- **Localização & Horários:** Endereço completo, mapa e botão de rota.
- **Perguntas Frequentes (FAQ):** Respostas sobre trocas de conexões, compras fracionadas e formas de pagamento.
- **Botão Flutuante do WhatsApp:** Com efeito pulsante e balãozinho chamativo.
