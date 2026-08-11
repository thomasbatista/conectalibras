interface SignPlaceholderProps {
  word: string;
  size?: "sm" | "lg";
}

export default function SignPlaceholder({
  word,
  size = "sm",
}: SignPlaceholderProps) {
  const heightClass = size === "lg" ? "h-64 sm:h-80" : "h-40";
  const iconSizeClass = size === "lg" ? "h-20 w-20" : "h-12 w-12";

  return (
    <div
      role="img"
      aria-label={`Ilustração demonstrativa do sinal para ${word}`}
      className={`flex ${heightClass} w-full flex-col items-center justify-center gap-2 rounded-t-xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700`}
    >
      <svg
        viewBox="0 0 64 64"
        className={iconSizeClass}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 30V16a4 4 0 0 1 8 0v10" />
        <path d="M28 26V12a4 4 0 0 1 8 0v14" />
        <path d="M36 26V14a4 4 0 0 1 8 0v16" />
        <path d="M44 30v-6a4 4 0 0 1 8 0v14c0 8-6 16-16 16h-2c-8 0-12-4-16-10l-6-10a4 4 0 0 1 7-4l3 4" />
      </svg>
      <span className="text-xs font-medium uppercase tracking-wide text-brand-600">
        Imagem demonstrativa
      </span>
    </div>
  );
}
