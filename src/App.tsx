import { useState } from 'react';
import type { Product } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DeliveryBanner } from './components/DeliveryBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { MeasuresGuide } from './components/MeasuresGuide';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GoogleReviews } from './components/GoogleReviews';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { BudgetDrawer } from './components/BudgetDrawer';

export function App() {
  const [budgetItems, setBudgetItems] = useState<Product[]>([]);
  const [isBudgetDrawerOpen, setIsBudgetDrawerOpen] = useState(false);

  const handleToggleBudget = (product: Product) => {
    setBudgetItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveBudgetItem = (id: string) => {
    setBudgetItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearBudget = () => {
    setBudgetItems([]);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        budgetCount={budgetItems.length}
        onOpenBudget={() => setIsBudgetDrawerOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section com Nome Destacado e Apresentação */}
        <Hero />

        {/* Faixa / Seção de Destaque para Entrega na Cidade */}
        <DeliveryBanner />

        {/* Catálogo Visual de Produtos (Canos, Sifões, Torneiras, Mangueiras, Conexões) */}
        <ProductCatalog
          budgetItems={budgetItems}
          onToggleBudget={handleToggleBudget}
        />

        {/* Guia Visual de Medidas e Bitolas */}
        <MeasuresGuide />

        {/* Diferenciais da Loja */}
        <WhyChooseUs />

        {/* Avaliações do Google (Nota 4.9 e Depoimentos) */}
        <GoogleReviews />

        {/* Localização, Horários e Mapa */}
        <LocationSection />

        {/* Perguntas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppFloating />

      {/* Drawer da Lista de Orçamento para o WhatsApp */}
      <BudgetDrawer
        isOpen={isBudgetDrawerOpen}
        onClose={() => setIsBudgetDrawerOpen(false)}
        items={budgetItems}
        onRemoveItem={handleRemoveBudgetItem}
        onClear={handleClearBudget}
      />
    </div>
  );
}

export default App;
