import { useState, type FC } from 'react';
import type { Product } from '../types';
import { storeInfo } from '../data/storeInfo';
import { X, MessageCircle, Trash2, ShoppingBag, FileText, CheckCircle2 } from 'lucide-react';

interface BudgetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (id: string) => void;
  onClear: () => void;
}

export const BudgetDrawer: FC<BudgetDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClear,
}) => {
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = () => {
    let message = `*SOLICITAÇÃO DE ORÇAMENTO - LOJA DO ENCANADOR*\n\n`;
    message += `Olá! Montei minha lista de materiais no site da Loja do Encanador (Itaú de Minas) e gostaria de saber os valores e disponibilidade para entrega:\n\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Medidas: ${item.measures.slice(0, 3).join(', ')}\n`;
    });

    if (customerNotes.trim()) {
      message += `\n*Observações / Quantidades:*\n${customerNotes.trim()}\n`;
    }

    message += `\nFazem entrega no meu endereço? Aguardo o retorno. Obrigado!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${storeInfo.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="p-5 border-b border-sky-100 flex items-center justify-between bg-sky-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-sky-600 text-white rounded-xl">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-blue-950 text-base">Minha Lista de Orçamento</h3>
              <p className="text-xs text-slate-500">{items.length} itens selecionados</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-blue-950 text-sm">Sua lista está vazia</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Navegue pelo catálogo e clique em "+ Adicionar à Lista" nos canos, torneiras e conexões que você precisa.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                <span>Itens para cotação:</span>
                <button
                  onClick={onClear}
                  className="text-red-500 hover:text-red-700 font-medium cursor-pointer"
                >
                  Limpar tudo
                </button>
              </div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-colors shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover bg-slate-100 shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-blue-950 truncate">{item.name}</h5>
                    <p className="text-[11px] text-slate-500 truncate">
                      {item.measures.slice(0, 2).join(', ')}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-slate-400 hover:text-red-500 p-1 cursor-pointer transition-colors"
                    title="Remover da lista"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Campo para Observações do Cliente */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Quantidades ou dúvidas específicas (opcional):
                </label>
                <textarea
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  placeholder="Ex: Preciso de 4 barras de 25mm, 1 sifão duplo e 2 adaptadores..."
                  rows={3}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-start gap-2 text-xs text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Nossa equipe confere o estoque, calcula o frete de entrega na sua cidade e responde com os valores na hora!
                </span>
              </div>
            </>
          )}
        </div>

        {/* Rodapé com Botão Enviar WhatsApp */}
        <div className="p-5 border-t border-slate-100 bg-white">
          <button
            onClick={handleSendWhatsApp}
            disabled={items.length === 0}
            className={`w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-black text-sm shadow-md transition-all cursor-pointer ${
              items.length > 0
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Enviar Lista no WhatsApp ({items.length})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
