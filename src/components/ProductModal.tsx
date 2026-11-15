import type { FC } from 'react';
import type { Product } from '../types';
import { storeInfo } from '../data/storeInfo';
import { X, MessageCircle, Check, Plus, Tag, ShieldCheck, Ruler } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToBudget: (product: Product) => void;
  isInBudget: boolean;
}

export const ProductModal: FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToBudget,
  isInBudget,
}) => {
  if (!product) return null;

  const getWhatsAppProductLink = () => {
    const text = encodeURIComponent(
      `Olá! Estava no site da Loja do Encanador e gostaria de consultar preço e disponibilidade do item:\n- *${product.name}*\n(Medidas/Observações: ${product.measures.slice(0, 3).join(', ')})`
    );
    return `https://wa.me/${storeInfo.whatsapp}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-sky-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 shadow-md transition-all cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Imagem do Produto */}
          <div className="md:col-span-5 bg-sky-50 relative min-h-[240px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback elegante se houver falha de rede na imagem
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80';
              }}
            />
            {product.highlight && (
              <div className="absolute top-3 left-3 bg-sky-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                {product.highlight}
              </div>
            )}
          </div>

          {/* Informações Detalhadas */}
          <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wide mb-1">
                <Tag className="w-3.5 h-3.5" />
                <span>Loja do Encanador • Catálogo</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-blue-950 leading-snug">
                {product.name}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Bitolas e Medidas Disponíveis */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-950 mb-2">
                  <Ruler className="w-4 h-4 text-sky-600" />
                  <span>Medidas & Bitolas Disponíveis:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.measures.map((measure, idx) => (
                    <span
                      key={idx}
                      className="bg-sky-50 text-sky-900 border border-sky-200 text-xs font-semibold px-2.5 py-1 rounded-md"
                    >
                      {measure}
                    </span>
                  ))}
                </div>
              </div>

              {/* Marcas Atendidas */}
              {product.brands && product.brands.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Marcas em estoque:</strong> {product.brands.join(', ')}
                  </span>
                </div>
              )}
            </div>

            {/* Ações / Botões */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
              <a
                href={getWhatsAppProductLink()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Pedir no WhatsApp</span>
              </a>

              <button
                onClick={() => onAddToBudget(product)}
                className={`inline-flex items-center justify-center gap-2 font-bold text-sm py-3 px-4 rounded-xl border transition-all cursor-pointer ${
                  isInBudget
                    ? 'bg-sky-100 border-sky-300 text-sky-900'
                    : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800'
                }`}
              >
                {isInBudget ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Na sua lista</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-sky-700" />
                    <span>+ Adicionar à Lista</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
