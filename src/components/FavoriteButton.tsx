interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  label: string;
}

export default function FavoriteButton({
  isFavorite,
  onToggle,
  label,
}: FavoriteButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={
        isFavorite
          ? `Remover ${label} dos favoritos`
          : `Adicionar ${label} aos favoritos`
      }
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 17.3l-5.4 3 1.4-6-4.7-4.1 6.2-.5L12 4l2.5 5.7 6.2.5-4.7 4.1 1.4 6z"
        />
      </svg>
      <span className={isFavorite ? "text-amber-600" : ""}>
        {isFavorite ? "Favoritado" : "Favoritar"}
      </span>
    </button>
  );
}
