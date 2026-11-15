import { useState, type FC } from 'react';
import { storeInfo } from '../data/storeInfo';
import { Clock, Menu, X, MessageCircle, FileText, Truck, ShoppingCart, Package, Ruler } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

interface NavbarProps {
  budgetCount: number;
  onOpenBudget: () => void;
}

export const Navbar: FC<NavbarProps> = ({ budgetCount, onOpenBudget }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getWhatsAppLink = (msg?: string) => {
    const text = encodeURIComponent(msg || `Olá! Gostaria de falar com o atendimento da Loja do Encanador em Itaú de Minas.`);
    return `https://wa.me/${storeInfo.whatsapp}?text=${text}`;
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-sky-100">
      {/* Top Banner de Entrega, Horário, Redes Sociais e Telefone */}
      <div className="bg-gradient-to-r from-blue-950 via-sky-900 to-blue-950 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Entrega rápida em Itaú de Minas e região */}
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center justify-center bg-sky-500 text-white px-2.5 py-0.5 rounded-full text-xs font-bold shadow-xs">
              <Truck className="w-3.5 h-3.5 mr-1" /> ENTREGA RÁPIDA
            </span>
            <span className="hidden sm:inline font-semibold">Entrega rápida em Itaú de Minas e região!</span>
            <span className="sm:hidden font-semibold">Entrega em Itaú de Minas!</span>
          </div>

          {/* Horários, Instagram, InfinitePay e WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 text-sky-100 text-xs">
            <div className="hidden md:flex items-center gap-1.5 text-sky-200">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Seg a Sex: 08:00 às 18h | Sáb: 08:00 às 12:30</span>
            </div>

            <a
              href={storeInfo.infinitePayUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden xl:inline-flex items-center gap-1 text-sky-200 hover:text-white transition-colors"
              title="Acesse nossa Loja Online InfinitePay"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-sky-300" />
              <span>Loja InfinitePay</span>
            </a>

            <a
              href={storeInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sky-200 hover:text-white transition-colors"
              title="Instagram da Loja do Encanador"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-sky-300" />
              <span className="hidden sm:inline">@loja_do_encanador</span>
              <span className="sm:hidden">Instagram</span>
            </a>

            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1 font-bold text-emerald-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{storeInfo.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Oficial Recriado da Fachada */}
          <a href="#" className="flex items-center gap-3 group shrink-0" title="Loja do Encanador - Início">
            <img 
              src="./images/logo.svg" 
              alt="Logo Oficial Loja do Encanador" 
              className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-xs sm:text-[13px] font-extrabold text-sky-800 tracking-wide block leading-tight">
                Material de Construções e Hidráulica
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wider block leading-tight">
                Itaú de Minas - MG
              </span>
            </div>
          </a>

          {/* Navegação Desktop com os 5 botões em formato circular/cápsula bem organizados */}
          <nav className="hidden lg:flex items-center gap-2.5 xl:gap-3">
            {/* 1. Produtos */}
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-full border border-sky-200/90 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-900 text-xs xl:text-sm font-semibold transition-all shadow-xs hover:shadow-sm hover:border-sky-300 group"
              title="Ver catálogo de produtos"
            >
              <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Package className="w-3.5 h-3.5" />
              </span>
              <span>Produtos</span>
            </a>

            {/* 2. Entrega ágil */}
            <a
              href="#entrega"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-full border border-sky-200/90 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-900 text-xs xl:text-sm font-semibold transition-all shadow-xs hover:shadow-sm hover:border-sky-300 group"
              title="Informações de entrega na cidade e região"
            >
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Truck className="w-3.5 h-3.5" />
              </span>
              <span>Entrega ágil</span>
            </a>

            {/* 3. Guia de bitolas */}
            <a
              href="#medidas"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-full border border-sky-200/90 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-900 text-xs xl:text-sm font-semibold transition-all shadow-xs hover:shadow-sm hover:border-sky-300 group"
              title="Tabela de bitolas e medidas de canos"
            >
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Ruler className="w-3.5 h-3.5" />
              </span>
              <span>Guia de bitolas</span>
            </a>

            {/* 4. Lista de orçamento */}
            <button
              onClick={onOpenBudget}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-full border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-950 text-xs xl:text-sm font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer group"
              title="Abrir minha lista de orçamento"
            >
              <span className="relative w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                <FileText className="w-3.5 h-3.5" />
                {budgetCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-400 text-blue-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {budgetCount}
                  </span>
                )}
              </span>
              <span>Lista de orçamento</span>
            </button>

            {/* 5. Pedido pelo WhatsApp */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 xl:px-4.5 xl:py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs xl:text-sm font-bold transition-all shadow-md hover:shadow-emerald-600/30 hover:-translate-y-0.5 group"
              title="Fazer pedido direto no WhatsApp"
            >
              <span className="w-7 h-7 rounded-full bg-emerald-700/60 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>Pedido pelo WhatsApp</span>
            </a>
          </nav>

          {/* Botões Mobile (Orçamento rápido + Menu Hamburger) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBudget}
              className="relative p-2 rounded-full bg-sky-50 border border-sky-200 text-sky-900 text-xs font-bold flex items-center gap-1.5 shadow-xs"
              title="Lista de Orçamento"
            >
              <span className="w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center">
                <FileText className="w-3.5 h-3.5" />
              </span>
              <span className="hidden sm:inline">Orçamento</span>
              {budgetCount > 0 && (
                <span className="bg-amber-400 text-blue-950 text-[10px] font-black px-1.5 py-0.5 rounded-full">
                  {budgetCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Organizado com os círculos */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-sky-100 space-y-2 pb-2">
            {/* 1. Produtos */}
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-full border border-sky-100 bg-sky-50/50 hover:bg-sky-50 text-slate-800 font-semibold text-sm transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Package className="w-4 h-4" />
              </span>
              <span>Produtos (Catálogo & Vitrine)</span>
            </a>

            {/* 2. Entrega ágil */}
            <a
              href="#entrega"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-full border border-sky-100 bg-sky-50/50 hover:bg-sky-50 text-slate-800 font-semibold text-sm transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4" />
              </span>
              <span>Entrega ágil em Itaú de Minas</span>
            </a>

            {/* 3. Guia de bitolas */}
            <a
              href="#medidas"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-full border border-sky-100 bg-sky-50/50 hover:bg-sky-50 text-slate-800 font-semibold text-sm transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Ruler className="w-4 h-4" />
              </span>
              <span>Guia de bitolas & medidas de canos</span>
            </a>

            {/* 4. Lista de orçamento */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBudget();
              }}
              className="w-full flex items-center gap-3 p-2.5 rounded-full border border-sky-200 bg-sky-100/70 hover:bg-sky-100 text-sky-950 font-bold text-sm transition-colors text-left"
            >
              <span className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </span>
              <span className="flex-1">Lista de orçamento</span>
              {budgetCount > 0 && (
                <span className="bg-amber-400 text-blue-950 text-xs font-black px-2 py-0.5 rounded-full">
                  {budgetCount} itens
                </span>
              )}
            </button>

            {/* 5. Pedido pelo WhatsApp */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-emerald-700/60 text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 fill-current" />
              </span>
              <span>Pedido pelo WhatsApp: (35) 3536-2325</span>
            </a>

            {/* Links Extras: InfinitePay, Avaliações e Localização */}
            <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
              <a
                href={storeInfo.infinitePayUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-blue-900 text-white font-bold py-2 px-3 rounded-full shadow-xs"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-sky-300" />
                <span>Loja InfinitePay</span>
              </a>

              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 border border-slate-200 text-slate-700 font-semibold py-2 px-3 rounded-full hover:bg-slate-50"
              >
                <span>📍 Onde Estamos</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
