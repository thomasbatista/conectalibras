import { Link } from "react-router-dom";
import { signs } from "../data/signs";
import { useFavorites } from "../hooks/useFavorites";
import SignCard from "../components/SignCard";

export default function Favorites() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const favoriteSigns = signs.filter((sign) => favorites.includes(sign.id));

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900">Meus Favoritos</h1>
      <p className="mt-1 text-sm text-slate-600">
        Sinais que você marcou para revisar com mais frequência.
      </p>

      {favoriteSigns.length === 0 ? (
        <div className="mt-10 text-center">
          <p className="text-slate-500">
            Você ainda não adicionou nenhum sinal aos favoritos.
          </p>
          <Link
            to="/dicionario"
            className="mt-4 inline-block min-h-[44px] rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Explorar Dicionário
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteSigns.map((sign) => (
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
