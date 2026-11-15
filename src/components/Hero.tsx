import type { FC } from 'react';
import { storeInfo } from '../data/storeInfo';
import { MessageCircle, CheckCircle2, Truck, ShieldCheck, Sparkles, ShoppingBag, MapPin } from 'lucide-react';

export const Hero: FC = () => {
  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent('Olá! Acessei o site da Loja do Encanador e gostaria de um orçamento / tirar uma dúvida sobre materiais.')}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-sky-100">
      {/* Elementos visuais de fundo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Texto Principal */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tag de Destaque com Cidade */}
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-sky-900 mb-6 shadow-sm">
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Itaú de Minas - MG • Entregas Rápidas na Sua Obra</span>
            </div>

            {/* Título Principal: LOJA DO ENCANADOR */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-blue-950 tracking-tight leading-tight sm:leading-none">
              LOJA DO <span className="text-sky-600">ENCANADOR</span>
            </h1>
            
            <p className="mt-3 text-lg sm:text-2xl font-bold text-sky-900">
              Materiais de Construção, Hidráulica e Cubas em Itaú de Minas
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Do cano de esgoto ao acabamento fino de torneiras, chuveiros e <strong>cubas de apoio para banheiro</strong>. Temos <strong>todas as medidas e bitolas</strong>, mangueiras, conexões e ferramentas a pronta entrega na <strong>Rua João Kirchner, 703-B</strong>.
            </p>

            {/* Botões de Ação */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>Pedir no WhatsApp: (35) 3536-2325</span>
              </a>

              {/* Botão InfinitePay Loja Online */}
              <a
                href={storeInfo.infinitePayUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-base px-6 py-4 rounded-2xl shadow-md transition-all transform hover:-translate-y-0.5"
                title="Acessar nossa loja online no InfinitePay"
              >
                <ShoppingBag className="w-5 h-5 text-sky-300" />
                <span>Loja InfinitePay</span>
              </a>
            </div>

            {/* Mini Vantagens em Pílulas */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-sky-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Canos em todas medidas</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-sky-100 shadow-sm">
                <Truck className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Entrega rápida na cidade</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-sky-100 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Pagamento pelo InfinitePay</span>
              </div>
            </div>

          </div>

          {/* Coluna Card Visual / Destaque de Itens */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura Principal de Destaque */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-100 overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-sky-500 to-blue-600 text-white text-xs font-black uppercase px-4 py-1.5 rounded-bl-2xl shadow">
                  Pronta Entrega
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-sky-100 text-sky-700 rounded-2xl">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-blue-950 text-lg">O que você encontra aqui:</h3>
                    <p className="text-xs text-slate-500">Itaú de Minas - MG</p>
                  </div>
                </div>

                {/* Lista de Principais Produtos com Ícones */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50/70 border border-sky-100 hover:bg-sky-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🛁</span>
                      <div>
                        <div className="text-sm font-bold text-blue-950">Cubas de Apoio para Banheiro</div>
                        <div className="text-xs text-slate-500">Redonda, quadrada e retangular em louça</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sky-600 bg-white px-2 py-1 rounded-md border border-sky-200">Destaque</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50/70 border border-sky-100 hover:bg-sky-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚿</span>
                      <div>
                        <div className="text-sm font-bold text-blue-950">Torneiras de Chuveiro & Registros</div>
                        <div className="text-xs text-slate-500">Bases, cartuchos, reparos e acabamentos</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sky-600 bg-white px-2 py-1 rounded-md border border-sky-200">Completo</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50/70 border border-sky-100 hover:bg-sky-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📏</span>
                      <div>
                        <div className="text-sm font-bold text-blue-950">Canos em Todas as Medidas</div>
                        <div className="text-xs text-slate-500">PVC 20mm a 110mm, Esgoto e PPR Água Quente</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sky-600 bg-white px-2 py-1 rounded-md border border-sky-200">Barras 6m</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50/70 border border-sky-100 hover:bg-sky-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔄</span>
                      <div>
                        <div className="text-sm font-bold text-blue-950">Sifões & Canos Sanfonados</div>
                        <div className="text-xs text-slate-500">Universal, duplo, cromado e com copo</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sky-600 bg-white px-2 py-1 rounded-md border border-sky-200">Universal</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50/70 border border-sky-100 hover:bg-sky-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌱</span>
                      <div>
                        <div className="text-sm font-bold text-blue-950">Mangueiras & Adaptadores</div>
                        <div className="text-xs text-slate-500">Jardim por metro, engates inox e conexões</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sky-600 bg-white px-2 py-1 rounded-md border border-sky-200">Linha Total</span>
                  </div>
                </div>

                {/* Bloco de Atendimento Imediato com WhatsApp */}
                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-950 to-sky-900 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs text-sky-200 font-medium">Tem foto da peça ou cuba que procura?</div>
                    <div className="text-sm font-bold">Mande no Zap: (35) 3536-2325</div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors shrink-0"
                  >
                    Enviar Foto
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
