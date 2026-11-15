import type { FC } from 'react';
import { storeInfo } from '../data/storeInfo';
import { Droplets, Wrench, MessageCircle, MapPin, Clock, Truck, ShoppingBag, Mail } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

export const Footer: FC = () => {
  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent('Olá! Acessei o site da Loja do Encanador e gostaria de um atendimento.')}`;

  return (
    <footer className="bg-slate-950 text-white pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Coluna 1: Nome Destacado e Apresentação */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center shadow-lg">
                <Droplets className="w-6 h-6 text-white" />
                <div className="absolute -bottom-1 -right-1 bg-amber-400 text-blue-950 p-1 rounded-full">
                  <Wrench className="w-3 h-3" />
                </div>
              </div>
              <div>
                <span className="block text-2xl font-black tracking-tight text-white leading-none">
                  LOJA DO <span className="text-sky-400">ENCANADOR</span>
                </span>
                <span className="text-xs font-semibold text-sky-300 tracking-wider uppercase block mt-1">
                  Materiais de Construção & Hidráulica • Itaú de Minas - MG
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Sua referência completa em canos de todas as bitolas, cubas de apoio, torneiras, reparos para chuveiros, sifões sanfonados e conexões. Atendimento especializado e entrega rápida em Itaú de Minas e região.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-sky-300 font-semibold">
              <Truck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Entregamos na sua obra em Itaú de Minas e região</span>
            </div>
          </div>

          {/* Coluna 2: Navegação & Links Oficiais */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-sky-400">
              Navegação & Lojas
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">📦 Catálogo de Produtos & Cubas</a>
              </li>
              <li>
                <a href={storeInfo.infinitePayUrl} target="_blank" rel="noreferrer" className="text-sky-300 hover:text-white font-semibold transition-colors flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Loja Online InfinitePay</span>
                </a>
              </li>
              <li>
                <a href={storeInfo.instagramUrl} target="_blank" rel="noreferrer" className="text-pink-400 hover:text-white font-semibold transition-colors flex items-center gap-1.5">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram @loja_do_encanador</span>
                </a>
              </li>
              <li>
                <a href="#entrega" className="hover:text-white transition-colors">🚚 Entregas na Cidade</a>
              </li>
              <li>
                <a href="#medidas" className="hover:text-white transition-colors">📐 Guia de Medidas & Bitolas</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">📍 Endereço e Horários</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Atendimento */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-sky-400">
              Fale Conosco
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{storeInfo.address.street}, {storeInfo.address.number} - {storeInfo.address.city} - {storeInfo.address.state} • CEP {storeInfo.address.zipCode}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{storeInfo.businessHours.weekdays} | {storeInfo.businessHours.saturday}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{storeInfo.email}</span>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp & Fixo: {storeInfo.whatsappDisplay}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Linha Inferior com Copyright e Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Loja do Encanador - Itaú de Minas / MG. Todos os direitos reservados.</p>
          <p className="text-slate-400">
            Site institucional para apresentação de produtos, pedidos via WhatsApp e loja InfinitePay.
          </p>
        </div>

      </div>
    </footer>
  );
};
