import { useMemo, useState } from "react";
import { signs } from "../data/signs";
import { CATEGORIES, type Category } from "../types/sign";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SignCard from "../components/SignCard";
import { useFavorites } from "../hooks/useFavorites";

export default function Dictionary() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "Todos">("Todos");
  const { isFavorite, toggleFavorite } = useFavorites();

  const filteredSigns = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return signs.filter((sign) => {
      const matchesSearch = sign.word.toLowerCase().includes(normalizedSearch);
      const matchesCategory = category === "Todos" || sign.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900">
        Dicionário de LIBRAS
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Busque um sinal pelo nome ou filtre por categoria.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          categories={CATEGORIES}
          selected={category}
          onSelect={setCategory}
        />
      </div>

      {filteredSigns.length === 0 ? (
        <p className="mt-10 text-center text-slate-500">
          Nenhum sinal encontrado para essa busca.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSigns.map((sign) => (
            <SignCard
              key={sign.id}
              sign={sign}
              isFavorite={isFavorite(sign.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
