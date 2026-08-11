import SignPlaceholder from "./SignPlaceholder";

interface SignVideoProps {
  word: string;
  videoUrl?: string;
}

export default function SignVideo({ word, videoUrl }: SignVideoProps) {
  if (!videoUrl) {
    return <SignPlaceholder word={word} size="lg" />;
  }

  return (
    <div>
      <video
        key={videoUrl}
        controls
        preload="metadata"
        className="aspect-video w-full bg-slate-900"
        aria-label={`Vídeo do sinal de ${word} em Libras`}
      >
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta a reprodução deste vídeo.
      </video>
      <p className="border-t border-slate-100 bg-slate-50 px-4 py-2 text-xs text-slate-500">
        Vídeo:{" "}
        <a
          href="https://dicionario.ines.gov.br/"
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
