import type { FC } from 'react';
import { storeInfo } from '../data/storeInfo';
import { Ruler, HelpCircle, MessageCircle, CheckCircle2 } from 'lucide-react';

export const MeasuresGuide: FC = () => {
  const measuresData = [
    { mm: '20 mm', polegada: '1/2"', uso: 'Água fria residencial, torneiras comuns e chuveiros' },
    { mm: '25 mm', polegada: '3/4"', uso: 'Ramais principais de entrada e alimentação de caixa d\'água' },
    { mm: '32 mm', polegada: '1"', uso: 'Coluna de distribuição predial e vazão intermediária' },
    { mm: '40 mm', polegada: '1 1/4"', uso: 'Esgoto secundário de pias, tanques e lavatórios' },
    { mm: '50 mm', polegada: '1 1/2"', uso: 'Esgoto de ralos, sifões e tubulação de recalque' },
    { mm: '75 mm', polegada: '2 1/2"', uso: 'Coletores de esgoto e águas pluviais verticais' },
    { mm: '100 mm', polegada: '4"', uso: 'Esgoto primário de vasos sanitários e prumadas' },
    { mm: '150 mm', polegada: '6"', uso: 'Redes coletoras condominiais e galerias pluviais' },
  ];

  return (
    <section id="medidas" className="py-16 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Coluna Texto & Explicação */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full mb-3">
              <Ruler className="w-3.5 h-3.5 text-sky-600" />
              <span>Dicionário Prático de Encanamento</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-blue-950 tracking-tight leading-tight">
              Tabela Rápida de <span className="text-sky-600">Medidas & Bitolas</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Está na dúvida se o seu cano é de <strong>1/2" ou 20mm</strong>? Na hidráulica, muitos canos são medidos em milímetros (mm) e os registros em polegadas (").
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sky-50 border border-sky-100">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong>Temos adaptadores de todas as transições:</strong> Se você precisa ligar um cano antigo roscável em um PVC novo soldável, nós temos a peça certa.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sky-50 border border-sky-100">
                <HelpCircle className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong>Não sabe qual é a medida?</strong> Tire uma foto com uma régua ou moeda ao lado e envie no nosso WhatsApp que ajudamos a identificar!
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre qual medida de cano/conexão preciso comprar.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tirar Dúvida de Medida no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna Tabela Visual */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-sky-200 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 to-sky-800 text-white px-6 py-4 flex items-center justify-between">
                <span className="font-bold text-sm sm:text-base">Equivalência de Bitolas Mais Comuns</span>
                <span className="text-xs text-sky-200">Pronta entrega na loja</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-sky-50/70 border-b border-sky-100 text-slate-700 font-bold">
                      <th className="py-3 px-4">Milímetros (mm)</th>
                      <th className="py-3 px-4">Polegadas (")</th>
                      <th className="py-3 px-4">Onde é mais utilizado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {measuresData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/40 transition-colors">
                        <td className="py-3 px-4 font-bold text-blue-950">{row.mm}</td>
                        <td className="py-3 px-4 font-extrabold text-sky-700">{row.polegada}</td>
                        <td className="py-3 px-4 text-xs">{row.uso}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 bg-slate-50 text-[11px] text-slate-500 border-t border-slate-100 text-center">
                *Trabalhamos também com canos para esgoto pesados e linha predial industrial até 200mm.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
