import type { FC } from 'react';
import { storeInfo } from '../data/storeInfo';
import { MapPin, MessageCircle, Clock, Navigation, ExternalLink, Mail, ShoppingBag, Star, ShieldCheck, ThumbsUp, Quote, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

export const LocationSection: FC = () => {
  const address = storeInfo.address;
  const reviewUrl = storeInfo.googleRating.reviewUrl || address.googleMapsUrl;

  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida com a Loja do Encanador em Itaú de Minas.')}`;

  return (
    <section id="localizacao" className="py-16 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Nossa Loja Física em Itaú de Minas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Venha Nos Visitar ou Peça no WhatsApp
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Localização de fácil acesso na Rua João Kirchner, 703-B, com retirada rápida no balcão e entregas em toda a cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna Esquerda: Dados de Contato e Horários */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Endereço */}
            <div className="bg-sky-50/70 rounded-3xl p-6 sm:p-7 border border-sky-200 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 bg-blue-900 text-white rounded-2xl shrink-0">
                  <MapPin className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-blue-950">Endereço da Loja</h3>
                  <p className="text-xs text-slate-500">Itaú de Minas - MG</p>
                </div>
              </div>

              <div className="text-sm text-slate-700 space-y-1 pl-1">
                <p className="font-bold text-base text-blue-950">
                  {address.street}, {address.number}
                </p>
                <p>{address.city} - {address.state}</p>
                <p className="text-xs text-slate-500">CEP: {address.zipCode} • Brasil</p>
                <div className="mt-3 p-2.5 bg-white rounded-xl border border-sky-100 text-xs text-sky-900 font-medium">
                  📍 <strong>Referência:</strong> {address.reference}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-sky-200/60 flex flex-wrap gap-3">
                <a
                  href={address.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-sm transition-all text-center"
                >
                  <Navigation className="w-4 h-4 text-sky-400" />
                  <span>Como Chegar no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Horário de Atendimento Oficial */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-sky-100 text-sky-800 rounded-2xl shrink-0">
                  <Clock className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-base font-black text-blue-950">Horário de Funcionamento</h3>
                  <p className="text-xs text-slate-500">Atendimento presencial e WhatsApp</p>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold">Segunda a Sexta:</span>
                  <span className="text-blue-950 font-bold">08:00 às 18:00</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold">Sábado:</span>
                  <span className="text-blue-950 font-bold">08:00 às 12:30</span>
                </li>
                <li className="flex justify-between py-1.5 text-slate-400">
                  <span>Domingo:</span>
                  <span className="font-semibold text-rose-600">Fechada</span>
                </li>
              </ul>
            </div>

            {/* Canais Digitais e Contato */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Canais de Contato Direto
              </h4>

              {/* WhatsApp & Fixo */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-600 text-white rounded-xl">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-800 font-semibold">Telefone Fixo & WhatsApp</div>
                    <div className="text-sm font-black text-emerald-950">{storeInfo.whatsappDisplay}</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-200">
                  Chamar
                </span>
              </a>

              {/* InfinitePay */}
              <a
                href={storeInfo.infinitePayUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-sky-50 hover:bg-sky-100/80 border border-sky-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-900 text-white rounded-xl">
                    <ShoppingBag className="w-4 h-4 text-sky-300" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-900 font-semibold">Loja Online InfinitePay</div>
                    <div className="text-xs font-bold text-slate-600">loja.infinitepay.io/lojadoencanador</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-900" />
              </a>

              {/* Instagram */}
              <a
                href={storeInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-pink-50 hover:bg-pink-100/80 border border-pink-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-xl">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-pink-900 font-semibold">Instagram Oficial</div>
                    <div className="text-xs font-bold text-slate-700">@loja_do_encanador</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-pink-700" />
              </a>

              {/* Email Hotmail */}
              <a
                href={`mailto:${storeInfo.email}`}
                className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700 text-white rounded-xl">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">E-mail</div>
                    <div className="text-xs font-bold text-slate-800">{storeInfo.email}</div>
                  </div>
                </div>
                <span className="text-xs text-slate-400">Enviar</span>
              </a>

            </div>

          </div>

          {/* Coluna Direita: Mapa Interativo + Card de Avaliação do Google (Preenchendo todo o espaço vertical) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Bloco 1: Mapa (Alinhado com Endereço) */}
            <div className="bg-white rounded-3xl border border-sky-200 shadow-md overflow-hidden flex flex-col shrink-0">
              <div className="bg-gradient-to-r from-blue-950 to-sky-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Localização: Itaú de Minas - MG</span>
                </div>
                <span className="text-xs text-sky-200">
                  R. João Kirchner, 703-B
                </span>
              </div>

              {/* Iframe do Mapa */}
              <div className="relative w-full h-[280px] bg-slate-100">
                <iframe
                  title="Localização Loja do Encanador"
                  src={storeInfo.address.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Overlay Informativo */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-sky-100 shadow-md flex items-center justify-between gap-3">
                  <div>
                    <div className="font-extrabold text-blue-950 text-xs sm:text-sm">LOJA DO ENCANADOR</div>
                    <div className="text-[11px] text-slate-500">R. João Kirchner, 703-B - Itaú de Minas</div>
                  </div>
                  <a
                    href={address.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow shrink-0"
                  >
                    <span>Abrir no Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bloco 2: Card de Avaliação do Google (Expandido para crescer para baixo e alinhar perfeitamente) */}
            <div className="flex-1 bg-gradient-to-br from-white via-sky-50/40 to-white rounded-3xl p-6 sm:p-7 border-2 border-sky-200 shadow-lg flex flex-col justify-between relative overflow-hidden">
              
              {/* Parte Superior: Cabeçalho Google, Nota e Badges */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    {/* Ícone Oficial Google */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs shrink-0">
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
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                        ★ Google Avaliações
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-blue-950 mt-0.5">
                        Avalie a Loja do Encanador no Google
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl shrink-0 shadow-xs">
                    <span className="text-base font-black text-amber-900">{storeInfo.googleRating.score}</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Sua opinião é fundamental para nós! Se você já comprou conosco na Rua João Kirchner ou foi atendido pelo WhatsApp, <strong>deixe sua avaliação de 5 estrelas no Google</strong>. Isso fortalece o comércio local e ajuda outros moradores e encanadores de Itaú de Minas!
                </p>

                {/* Métricas e Selos de Confiança Local */}
                <div className="grid grid-cols-3 gap-2.5 mb-4 text-center">
                  <div className="bg-white p-2.5 rounded-2xl border border-sky-100 shadow-xs">
                    <div className="text-sm font-black text-blue-950 flex items-center justify-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-current" /> 4.9 / 5.0
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Nota no Google</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-2xl border border-sky-100 shadow-xs">
                    <div className="text-sm font-black text-emerald-700 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 100%
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Loja Verificada</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-2xl border border-sky-100 shadow-xs">
                    <div className="text-sm font-black text-sky-700 flex items-center justify-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5" /> +98%
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Recomendações</div>
                  </div>
                </div>

                {/* Depoimentos de Clientes Locais de Itaú de Minas */}
                <div className="space-y-2.5 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Quote className="w-3.5 h-3.5 text-sky-600" />
                    <span>O que dizem os clientes e encanadores da cidade:</span>
                  </div>

                  <div className="p-3 bg-white/90 rounded-2xl border border-sky-100 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-blue-950">Carlos M. (Encanador em Itaú de Minas)</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 italic">
                      "Atendimento nota 10, encontrei todas as conexões e canos marrons Tigre na medida certa. Entrega rápida na obra aqui na cidade!"
                    </p>
                  </div>

                  <div className="p-3 bg-white/90 rounded-2xl border border-sky-100 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-blue-950">Mariana S. (Cliente Residencial)</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 italic">
                      "Comprei a cuba de apoio e as torneiras pelo WhatsApp. Peças de primeira linha, preço honesto e atendimento muito prestativo."
                    </p>
                  </div>
                </div>
              </div>

              {/* Parte Inferior: Botão Chamativo de Avaliação no Google */}
              <div className="pt-3 border-t border-sky-100 space-y-2.5">
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-900 via-sky-800 to-blue-900 hover:from-blue-950 hover:to-sky-900 text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg shadow-sky-900/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
                >
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span>Clique Aqui para Avaliar no Google</span>
                  <ExternalLink className="w-4 h-4 text-sky-300" />
                </a>

                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-500 text-center">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Leva menos de 30 segundos
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Abre direto no celular ou PC
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
