import { useState } from "react";
import type { Category } from "../types/sign";

interface SignIllustrationProps {
  word: string;
  imageUrl?: string;
  hasVideo?: boolean;
  category?: Category;
}

export default function SignIllustration({
  word,
  imageUrl,
  hasVideo = false,
  category,
}: SignIllustrationProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-40 w-full overflow-hidden bg-brand-50">
      {hasVideo && (
        <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-brand-700 shadow-sm">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Vídeo
        </span>
      )}
      {imageUrl && !hasError ? (
        <img
          src={imageUrl}
          alt={`Ilustração demonstrativa do sinal para ${word}`}
          className="h-full w-full object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <DemoSignIllustration word={word} category={category} />
      )}
    </div>
  );
}

function DemoSignIllustration({
  word,
  category,
}: {
  word: string;
  category?: Category;
}) {
  const isGreeting = category === "Saudações";
  const isNumber = category === "Números";
  const isFood = category === "Alimentos";
  const isColor = category === "Cores";

  return (
    <svg
      viewBox="0 0 640 320"
      className="h-full w-full"
      role="img"
      aria-label={`Ilustração demonstrativa do sinal para ${word}`}
    >
      <title>Ilustração do sinal {word}</title>
      <circle cx="320" cy="160" r="108" fill={getCategoryColor(category)} />
      <CategoryMotif category={category} />
      <path
        d="M273 245c-20-20-27-48-19-77l20-73c4-14 24-13 25 2l3 42 7-76c1-16 24-16 25 0l3 76 7-91c1-16 24-15 25 1l2 91 9-70c2-15 24-13 25 2l3 80c1 35-13 65-39 85l-11 8H273Z"
        fill="#f8c99b"
        stroke="#9a5b34"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d={
          isGreeting
            ? "M259 93c-15-24-34-40-57-47M263 111c-25-13-49-17-73-12"
            : isNumber
              ? "M250 91c-22-17-42-24-66-23M257 108c-27-7-49-5-69 5"
              : isFood
                ? "M390 90c27-8 50-6 71 7M395 108c25 3 44 13 58 29"
                : isColor
                  ? "M235 120c-22-16-39-20-59-17M237 142c-25-4-43 1-58 11"
                  : "M245 105c-20-19-39-27-60-28M250 126c-24-9-44-8-62 0"
        }
        fill="none"
        stroke="#2563eb"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d={
          isGreeting
            ? "M315 245c21-18 38-40 48-66"
            : isNumber
              ? "M301 243c-10-28-10-55 0-81"
              : isFood
                ? "M382 238c20-22 31-46 33-72"
                : "M315 245c21-18 38-40 48-66"
        }
        fill="none"
        stroke="#d99062"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function getCategoryColor(category?: Category) {
  switch (category) {
    case "Saudações":
      return "#bae6fd";
    case "Expressões":
      return "#fbcfe8";
    case "Família":
      return "#fed7aa";
    case "Escola":
      return "#bbf7d0";
    case "Alimentos":
      return "#fef08a";
    case "Números":
      return "#ddd6fe";
    case "Cores":
      return "#fecaca";
    default:
      return "#bae6fd";
  }
}

function CategoryMotif({ category }: { category?: Category }) {
  const motifProps = {
    fill: "none",
    stroke: "#2563eb",
    strokeWidth: 7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    opacity: 0.75,
  };

  switch (category) {
    case "Saudações":
      return (
        <path
          {...motifProps}
          d="M145 104c-13-13-13-34 0-47m28 61c-18-20-18-51 0-71M495 104c13-13 13-34 0-47m-28 61c18-20 18-51 0-71"
        />
      );
    case "Expressões":
      return (
        <path
          {...motifProps}
          d="M176 167c0-25 20-45 45-45 20 0 34 12 45 27 11-15 25-27 45-27 25 0 45 20 45 45 0 38-45 63-90 87-45-24-90-49-90-87Z"
        />
      );
    case "Família":
      return (
        <g {...motifProps}>
          <circle cx="178" cy="116" r="22" />
          <circle cx="462" cy="116" r="22" />
          <path d="M143 192c0-24 16-40 35-40s35 16 35 40m214 0c0-24 16-40 35-40s35 16 35 40M213 196c12-28 33-43 55-43s43 15 55 43" />
        </g>
      );
    case "Escola":
      return (
        <path
          {...motifProps}
          d="m145 126 175-55 175 55-175 55-175-55Zm55 17v55c45 30 95 30 140 0v-55m155-17v78"
        />
      );
    case "Alimentos":
      return (
        <g {...motifProps}>
          <path d="M154 83v88m-16-88v35m32-35v35M138 118h32M486 83v95m-20-95v42c0 15 10 25 20 25s20-10 20-25V83" />
        </g>
      );
    case "Números":
      return (
        <g {...motifProps}>
          <path d="M166 89v72m0 0 26-24m-26 24 26 24M474 89v72m0 0-26-24m26 24-26 24" />
          <circle cx="320" cy="92" r="12" fill="#2563eb" stroke="none" />
        </g>
      );
    case "Cores":
      return (
        <g {...motifProps}>
          <circle cx="168" cy="105" r="18" fill="#ef4444" stroke="none" />
          <circle cx="472" cy="105" r="18" fill="#22c55e" stroke="none" />
          <circle cx="168" cy="205" r="18" fill="#eab308" stroke="none" />
          <circle cx="472" cy="205" r="18" fill="#3b82f6" stroke="none" />
        </g>
      );
    default:
      return null;
  }
}
