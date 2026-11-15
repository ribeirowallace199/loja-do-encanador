import { useState, type FC } from 'react';
import { storeInfo } from '../data/storeInfo';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloating: FC = () => {
  const [showBubble, setShowBubble] = useState(true);

  // Fecha o balãozinho temporariamente se o usuário clicar no X
  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent('Olá! Acessei o site da Loja do Encanador (Itaú de Minas) e gostaria de um atendimento.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Balãozinho Convidativo */}
      {showBubble && (
        <div className="relative bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-sky-100 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute top-1 right-1 p-1 text-slate-400 hover:text-slate-600 rounded-full cursor-pointer"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5 pr-2">
            <span className="text-xl">👋</span>
            <div>
              <p className="text-xs font-bold text-blue-950">Precisa de ajuda com peças?</p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Chame a gente no WhatsApp para ver preços e entregas!
              </p>
            </div>
          </div>
          {/* Triângulo apontando pro botão */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-sky-100" />
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative group bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer"
        aria-label="Conversar no WhatsApp"
      >
        {/* Anel pulsante */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-70 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />

        {/* Tooltip no Hover (Desktop) */}
        <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
          Fale Conosco no WhatsApp
        </span>
      </a>

    </div>
  );
};
