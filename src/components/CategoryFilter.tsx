import type { Category } from "../types/sign";

interface CategoryFilterProps {
  categories: Category[];
  selected: Category | "Todos";
  onSelect: (category: Category | "Todos") => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  const options: (Category | "Todos")[] = ["Todos", ...categories];

  return (
    <div
      role="group"
      aria-label="Filtrar sinais por categoria"
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const isActive = option === selected;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            aria-pressed={isActive}
            className={`min-h-[40px] rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              isActive
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand-300"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
