import type { FC } from 'react';
import { Truck, Layers, Wrench, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

export const WhyChooseUs: FC = () => {
  const benefits = [
    {
      icon: Layers,
      title: 'Canos em Todas as Medidas',
      desc: 'Do fino 20mm de água fria até canos de esgoto de 150mm e linha PPR de água quente. Sem falta de bitola.',
    },
    {
      icon: Truck,
      title: 'Entrega na Cidade & Obra',
      desc: 'Logística rápida para quem está com obra em andamento ou emergência de vazamento. Levamos barras de 6 metros.',
    },
    {
      icon: Wrench,
      title: 'Atendimento Técnico de Verdade',
      desc: 'Nossa equipe não empurra peças: nós ajudamos você a descobrir qual conexão, adaptador ou reparo resolve o problema.',
    },
    {
      icon: ShieldCheck,
      title: 'Marcas Líderes do Mercado',
      desc: 'Trabalhamos com marcas certificadas pelas normas da ABNT: Tigre, Deca, Amanco, Astra, Krona, Docol e Blukit.',
    },
    {
      icon: Clock,
      title: 'Aberto Bem Cedinho',
      desc: 'Abrimos a partir das 07h30 da manhã para o encanador e o pedreiro retirarem os materiais antes de iniciar a jornada.',
    },
    {
      icon: ThumbsUp,
      title: 'Cotação Descomplicada',
      desc: 'Mande sua lista por áudio, foto de papel de pão ou texto no WhatsApp. Respondemos com orçamento sem compromisso.',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Por Que Comprar na <span className="text-sky-600">Loja do Encanador</span>?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            O parceiro ideal de encanadores profissionais, construtores e moradores de Itaú de Minas e região.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 hover:border-sky-300 hover:bg-sky-50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-sky-200 text-sky-600 group-hover:bg-blue-900 group-hover:text-white transition-colors flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-blue-950 text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
