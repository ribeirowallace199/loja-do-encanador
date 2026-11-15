import type { FC } from 'react';
import { storeInfo } from '../data/storeInfo';
import { Truck, Clock, CreditCard, MessageCircle, CheckCircle } from 'lucide-react';

export const DeliveryBanner: FC = () => {
  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de saber sobre a entrega de materiais em Itaú de Minas / região.')}`;

  return (
    <section id="entrega" className="py-12 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-blue-900 via-sky-900 to-blue-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Decoração de fundo */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-sky-500/30 border border-sky-400/40 text-sky-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                <Truck className="w-4 h-4 text-sky-300" />
                <span>Logística Própria em Itaú de Minas</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Fazemos Entregas em Itaú de Minas e Região!
              </h2>

              <p className="mt-3 text-sky-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                O cano estourou? Faltou conexão, mangueira ou louça no meio da obra? Não pare seu trabalho! A <strong>Loja do Encanador</strong> separa seu pedido e entrega direto no seu endereço com rapidez e cuidado.
              </p>

              {/* Grid de Benefícios da Entrega */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-sky-300 font-bold text-sm mb-1">
                    <Clock className="w-4 h-4" />
                    <span>Envio Ágil na Cidade</span>
                  </div>
                  <p className="text-xs text-sky-100">Pedidos expressos para emergências hidráulicas.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-sky-300 font-bold text-sm mb-1">
                    <Truck className="w-4 h-4" />
                    <span>Canos de 6 Metros</span>
                  </div>
                  <p className="text-xs text-sky-100">Transporte seguro de barras inteiras de água e esgoto.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/10">
                  <div className="flex items-center gap-2 text-sky-300 font-bold text-sm mb-1">
                    <CreditCard className="w-4 h-4" />
                    <span>InfinitePay & Cartão</span>
                  </div>
                  <p className="text-xs text-sky-100">Pague online pelo InfinitePay ou maquininha na entrega.</p>
                </div>
              </div>

            </div>

            {/* Coluna CTA de Solicitação */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-full max-w-sm">
                <div className="text-sm font-semibold text-sky-200 mb-1">Precisa de materiais agora?</div>
                <div className="text-lg font-black text-white mb-4">Peça sua entrega pelo WhatsApp</div>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pedir Entrega na Obra</span>
                </a>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-sky-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Atendimento imediato no horário comercial</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
