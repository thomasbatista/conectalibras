import { Link } from "react-router-dom";

const FEATURES = [
  {
    title: "Dicionário visual",
    description:
      "Explore sinais organizados por categoria, com busca em tempo real e descrições dos movimentos.",
  },
  {
    title: "Quiz interativo",
    description:
      "Teste seus conhecimentos com perguntas geradas dinamicamente e feedback imediato.",
  },
  {
    title: "Favoritos e progresso",
    description:
      "Marque os sinais que mais usa e acompanhe sua evolução direto no navegador.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Bem-vindo ao ConectaLibras
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Uma plataforma simples e acessível para praticar a Língua
          Brasileira de Sinais (LIBRAS) por meio de um dicionário visual e de
          um quiz interativo, desenvolvida como projeto de extensão
          universitária.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          A LIBRAS é a língua natural da comunidade surda brasileira,
          reconhecida oficialmente pela Lei nº 10.436/2002. Aprender seus
          sinais é um passo importante para uma comunicação mais inclusiva e
          acessível para todos.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/dicionario"
            className="min-h-[44px] rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Explorar Dicionário
          </Link>
          <Link
            to="/quiz"
            className="min-h-[44px] rounded-full border border-brand-600 px-6 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Começar Quiz
          </Link>
        </div>
      </section>

      <section className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-base font-semibold text-slate-900">
              {feature.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
