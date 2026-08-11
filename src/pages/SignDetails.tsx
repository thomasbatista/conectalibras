import { Link, useParams } from "react-router-dom";
import { signs } from "../data/signs";
import SignPlaceholder from "../components/SignPlaceholder";
import FavoriteButton from "../components/FavoriteButton";
import { useFavorites } from "../hooks/useFavorites";

export default function SignDetails() {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const sign = signs.find((item) => item.id === Number(id));

  if (!sign) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-10 text-center">
        <h1 className="text-xl font-semibold text-slate-900">
          Sinal não encontrado
        </h1>
        <p className="mt-2 text-slate-600">
          O sinal que você está procurando não existe ou foi removido.
        </p>
        <Link
          to="/dicionario"
          className="mt-6 inline-block min-h-[44px] rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Voltar ao dicionário
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link
        to="/dicionario"
        className="inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-brand-700"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
        </svg>
        Voltar ao dicionário
      </Link>

      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <SignPlaceholder word={sign.word} size="lg" />

        <div className="p-6">
          <span className="w-fit rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
            {sign.category}
          </span>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            {sign.word}
          </h1>
          <p className="mt-3 text-slate-600">{sign.description}</p>

          <div className="mt-6">
            <FavoriteButton
              isFavorite={isFavorite(sign.id)}
              onToggle={() => toggleFavorite(sign.id)}
              label={sign.word}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
