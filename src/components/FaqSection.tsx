import { useState, type FC } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como funciona a entrega na cidade e nas obras?',
      a: 'Basta enviar os itens desejados pelo WhatsApp ou ligar para nós. Nossa equipe confere os materiais, combina o horário e envia com nosso veículo até o seu endereço. Entregamos tanto pedidos de emergência quanto barras longas de 6 metros.',
    },
    {
      q: 'Não sei o nome da peça nem a medida, como posso pedir?',
      a: 'Não se preocupe! Tire uma foto nítida da peça com defeito, do cano ou do registro que está vazando e envie no nosso WhatsApp. Nossos atendentes técnicos identificam a peça e indicam a solução exata.',
    },
    {
      q: 'Vocês vendem mangueiras e canos fracionados ou apenas barras fechadas?',
      a: 'Trabalhamos com opções flexíveis! As mangueiras de jardim vendemos tanto em rolos fechados quanto por metro linear na medida que você precisar. Também possuímos canos em barras padrão de 6 metros e opções cortadas de 3 metros.',
    },
    {
      q: 'Se eu comprar uma conexão com medida errada, posso trocar?',
      a: 'Com certeza! Se a peça não tiver sido colada ou danificada, você pode efetuar a troca no nosso balcão por outra medida ou modelo adequado sem nenhuma complicação.',
    },
    {
      q: 'Quais são as formas de pagamento aceitas?',
      a: 'Aceitamos Pix com confirmação imediata, cartões de crédito e débito (levamos a maquininha na entrega), dinheiro e faturamento especial para obras e construtoras cadastradas.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
            Tire Suas Dúvidas Sobre Nossos Produtos e Serviços
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-blue-950 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
