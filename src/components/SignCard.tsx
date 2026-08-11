import { Link } from "react-router-dom";
import type { Sign } from "../types/sign";
import SignPlaceholder from "./SignPlaceholder";
import FavoriteButton from "./FavoriteButton";

interface SignCardProps {
  sign: Sign;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function SignCard({
  sign,
  isFavorite,
  onToggleFavorite,
}: SignCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <SignPlaceholder word={sign.word} />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
          {sign.category}
        </span>
        <h3 className="text-lg font-semibold text-slate-900">{sign.word}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-slate-600">
          {sign.description}
        </p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <Link
            to={`/sinais/${sign.id}`}
            className="inline-flex min-h-[44px] items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
          >
            Visualizar
          </Link>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={() => onToggleFavorite(sign.id)}
            label={sign.word}
          />
        </div>
      </div>
    </article>
  );
}
