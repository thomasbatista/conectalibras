import { useEffect, useState } from "react";
import SignPlaceholder from "./SignPlaceholder";

interface SignVideoProps {
  word: string;
  videoUrl?: string;
}

export default function SignVideo({ word, videoUrl }: SignVideoProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [videoUrl]);

  if (!videoUrl) {
    return <SignPlaceholder word={word} size="lg" />;
  }

  if (hasError) {
    return (
      <div>
        <SignPlaceholder word={word} size="lg" />
        <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <p>Não foi possível carregar o vídeo agora.</p>
          <a
            href="http://dicionario.ines.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
          >
            Abrir no Dicionário de Libras — INES
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <video
        key={videoUrl}
        controls
        preload="metadata"
        className="aspect-video w-full bg-slate-900"
        aria-label={`Vídeo do sinal de ${word} em Libras`}
        onError={() => setHasError(true)}
      >
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta a reprodução deste vídeo.
      </video>
      <p className="border-t border-slate-100 bg-slate-50 px-4 py-2 text-xs text-slate-500">
        Vídeo:{" "}
        <a
          href="http://dicionario.ines.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-2 hover:text-brand-700"
        >
          Dicionário de Libras — INES
        </a>
      </p>
    </div>
  );
}
