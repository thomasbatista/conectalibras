import { useState } from "react";
import type { Category } from "../types/sign";
import SignIllustration from "./SignIllustration";

interface SignVideoPreviewProps {
  word: string;
  videoUrl?: string;
  category: Category;
}

export default function SignVideoPreview({
  word,
  videoUrl,
  category,
}: SignVideoPreviewProps) {
  const [hasError, setHasError] = useState(false);

  if (!videoUrl || hasError) {
    return <SignIllustration word={word} category={category} />;
  }

  return (
    <div className="relative h-40 w-full overflow-hidden bg-slate-900">
      <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-brand-700 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        Prévia
      </span>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-contain"
        aria-label={`Prévia do vídeo do sinal de ${word} em Libras`}
        onError={() => setHasError(true)}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}
