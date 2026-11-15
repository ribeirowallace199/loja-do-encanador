import type { FC } from 'react';
import { categories } from '../data/products';
import { Layers, Cylinder, GitFork, Waves, ShowerHead, Disc, Wrench, Bath } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Cylinder': return <Cylinder className="w-4 h-4" />;
      case 'GitFork': return <GitFork className="w-4 h-4" />;
      case 'Waves': return <Waves className="w-4 h-4" />;
      case 'ShowerHead': return <ShowerHead className="w-4 h-4" />;
      case 'Disc': return <Disc className="w-4 h-4" />;
      case 'Wrench': return <Wrench className="w-4 h-4" />;
      case 'Bath': return <Bath className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full overflow-x-auto pb-3 pt-1 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap shadow-sm ${
                isActive
                  ? 'bg-blue-900 text-white shadow-blue-900/20 shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-800 border border-slate-200'
              }`}
            >
              <span className={isActive ? 'text-sky-300' : 'text-sky-600'}>
                {renderIcon(cat.icon)}
              </span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
