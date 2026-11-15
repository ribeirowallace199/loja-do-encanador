import { useState, useMemo, type FC } from 'react';
import { products } from '../data/products';
import type { Product } from '../types';
import { storeInfo } from '../data/storeInfo';
import { CategoryFilter } from './CategoryFilter';
import { ProductModal } from './ProductModal';
import { Search, MessageCircle, Plus, Check, Ruler, Eye, AlertCircle, Sparkles, ShoppingBag, ExternalLink } from 'lucide-react';

interface ProductCatalogProps {
  budgetItems: Product[];
  onToggleBudget: (product: Product) => void;
}

export const ProductCatalog: FC<ProductCatalogProps> = ({
  budgetItems,
  onToggleBudget,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtragem dos produtos
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const matchCategory =
        selectedCategory === 'todos' || prod.category === selectedCategory;

      const term = searchTerm.toLowerCase().trim();
      const matchSearch =
        term === '' ||
        prod.name.toLowerCase().includes(term) ||
        prod.description.toLowerCase().includes(term) ||
        prod.measures.some((m) => m.toLowerCase().includes(term)) ||
        (prod.brands && prod.brands.some((b) => b.toLowerCase().includes(term)));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  const isProductInBudget = (productId: string) => {
    return budgetItems.some((item) => item.id === productId);
  };

  const getWhatsAppProductLink = (product: Product) => {
    const text = encodeURIComponent(
      `Olá! Vi no site da Loja do Encanador o item *${product.name}* e gostaria de saber o valor e se tem pronta entrega!`
    );
    return `https://wa.me/${storeInfo.whatsapp}?text=${text}`;
  };

  return (
    <section id="produtos" className="py-16 bg-slate-50/60 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/80 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Vitrine de Produtos & Cubas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Encontre Tudo Para o Seu Encanamento e Banheiro
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Canos em todas as bitolas, cubas de apoio, torneiras, reparos, sifões e mangueiras. Peça direto pelo WhatsApp ou aproveite nossa loja no InfinitePay!
          </p>

          {/* Banner de Acesso Rápido ao InfinitePay */}
          <div className="mt-5 p-3.5 bg-gradient-to-r from-sky-100 via-white to-sky-100 border border-sky-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2.5 text-left">
              <div className="p-2 bg-blue-900 text-white rounded-xl">
                <ShoppingBag className="w-5 h-5 text-sky-300" />
              </div>
              <div>
                <span className="block text-xs sm:text-sm font-extrabold text-blue-950">
                  Compre também pela nossa Loja Online InfinitePay
                </span>
                <span className="text-[11px] text-slate-500">
                  Produtos selecionados com facilidade de pagamento digital e cartão
                </span>
              </div>
            </div>

            <a
              href={storeInfo.infinitePayUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-xs shrink-0"
            >
              <span>Acessar Loja InfinitePay</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-300" />
            </a>
          </div>
        </div>

        {/* Barra de Pesquisa e Filtros */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar por produto, medida ou marca (ex: 50mm, sifão, torneira, Tigre, mangueira)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Abas de Categorias */}
          <CategoryFilter
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Contagem e Status */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-6 px-1">
          <span>
            Exibindo <strong>{filteredProducts.length}</strong> produtos
            {selectedCategory !== 'todos' && ` nesta categoria`}
            {searchTerm && ` para "${searchTerm}"`}
          </span>
          <span className="hidden sm:inline text-sky-700 font-medium">
            💡 Dica: Clique no card para ver todas as medidas disponíveis
          </span>
        </div>

        {/* Grid de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const inBudget = isProductInBudget(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Bloco Superior: Imagem e Badges */}
                  <div>
                    <div 
                      className="relative h-48 bg-sky-50/50 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                        {product.popular && (
                          <span className="bg-amber-400 text-amber-950 font-bold text-[10px] px-2 py-0.5 rounded-md shadow-sm">
                            ★ Mais Procurado
                          </span>
                        )}
                        {product.highlight && (
                          <span className="bg-blue-900 text-white font-bold text-[10px] px-2 py-0.5 rounded-md shadow-sm">
                            {product.highlight}
                          </span>
                        )}
                      </div>

                      {/* Botão Hover "Espiar Detalhes" */}
                      <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="bg-white/95 text-blue-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" /> Ver Detalhes
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="p-4 sm:p-5">
                      <h3
                        onClick={() => setSelectedProduct(product)}
                        className="font-extrabold text-blue-950 text-base leading-tight hover:text-sky-600 transition-colors cursor-pointer line-clamp-2"
                      >
                        {product.name}
                      </h3>

                      <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Amostra de Medidas */}
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700 mb-1.5">
                          <Ruler className="w-3 h-3 text-sky-600" />
                          <span>Medidas disponíveis:</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {product.measures.slice(0, 3).map((m, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-medium bg-sky-50 text-sky-800 px-1.5 py-0.5 rounded border border-sky-100"
                            >
                              {m}
                            </span>
                          ))}
                          {product.measures.length > 3 && (
                            <span className="text-[10px] font-bold text-sky-700 self-center">
                              +{product.measures.length - 3} mais
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ações do Card */}
                  <div className="p-4 pt-0 sm:p-5 sm:pt-0 space-y-2">
                    <a
                      href={getWhatsAppProductLink(product)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Pedir Preço no Zap</span>
                    </a>

                    <button
                      onClick={() => onToggleBudget(product)}
                      className={`w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl border transition-colors cursor-pointer ${
                        inBudget
                          ? 'bg-sky-100 border-sky-300 text-sky-900'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {inBudget ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Adicionado à Lista</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-sky-600" />
                          <span>Adicionar à Lista de Orçamento</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-10 text-center max-w-lg mx-auto border border-slate-200 shadow-sm">
            <AlertCircle className="w-12 h-12 text-sky-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-blue-950">Nenhum produto encontrado</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              Não encontrou o que procura? Nós provavelmente temos no balcão! Envie uma mensagem direta para conferirmos o estoque.
            </p>
            <a
              href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(`Olá! Procuro pelo item: ${searchTerm}. Vocês têm disponível?`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow hover:bg-emerald-500"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consultar Peça no WhatsApp</span>
            </a>
          </div>
        )}

      </div>

      {/* Modal de Detalhes do Produto */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToBudget={onToggleBudget}
        isInBudget={selectedProduct ? isProductInBudget(selectedProduct.id) : false}
      />
    </section>
  );
};
