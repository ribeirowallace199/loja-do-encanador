import type { FC } from 'react';
import { googleReviews, storeInfo } from '../data/storeInfo';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

export const GoogleReviews: FC = () => {
  return (
    <section id="avaliacoes" className="py-16 bg-gradient-to-b from-white to-sky-50/50 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Avaliações */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full mb-3">
              <span className="text-amber-500 font-black">★★★★★</span>
              <span>Reputação no Google</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black text-blue-950 tracking-tight">
              O Que Nossos Clientes Dizem no Google
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              A confiança de quem constrói, reforma e compra em Itaú de Minas com a <strong>Loja do Encanador</strong>.
            </p>
          </div>

          {/* Selo Google */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-sky-200 shadow-md">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 border border-slate-100">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-blue-950">{storeInfo.googleRating.score}</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Mais de {storeInfo.googleRating.totalReviews} avaliações no Google Meu Negócio
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Cards de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {googleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Estrelas & Tempo */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.timeAgo}</span>
                </div>

                {/* Comentário */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Autor */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover border border-sky-100"
                />
                <div>
                  <div className="text-xs font-bold text-blue-950 flex items-center gap-1">
                    <span>{review.author}</span>
                  </div>
                  <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Avaliação Verificada</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aviso de Edição e Ação */}
        <div className="mt-10 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-sky-900 text-left">
            <span className="font-bold">⭐ Dica:</span> Quando você me passar o texto oficial da sua avaliação do Google, atualizamos aqui na mesma hora!
          </div>
          <a
            href={storeInfo.address.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 shrink-0"
          >
            <span>Ver perfil no Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
