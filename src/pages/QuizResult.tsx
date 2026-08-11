import { useEffect, useRef } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { calculateScoreMessage } from "../utils/quizUtils";
import { useProgress } from "../hooks/useProgress";

interface QuizResultState {
  score: number;
  total: number;
}

export default function QuizResult() {
  const location = useLocation();
  const state = location.state as QuizResultState | null;
  const { recordQuizResult } = useProgress();
  const hasRecorded = useRef(false);

  useEffect(() => {
    if (state && !hasRecorded.current) {
      recordQuizResult(state.score, state.total);
      hasRecorded.current = true;
    }
  }, [state, recordQuizResult]);

  if (!state) {
    return <Navigate to="/quiz" replace />;
  }

  const { score, total } = state;
  const percentage = total === 0 ? 0 : Math.round((score / total) * 100);
  const message = calculateScoreMessage(score, total);

  return (
    <div className="mx-auto max-w-lg px-4 py-10 text-center">
      <h1 className="text-2xl font-bold text-slate-900">
        Resultado do Quiz
      </h1>

      <p className="mt-6 text-5xl font-bold text-brand-600">
        {score} de {total}
      </p>
      <p className="mt-1 text-lg text-slate-600">{percentage}% de acertos</p>

      <p className="mt-4 text-base font-medium text-slate-800">{message}</p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/quiz"
          replace
          className="min-h-[44px] rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Refazer Quiz
        </Link>
        <Link
          to="/dicionario"
          className="min-h-[44px] rounded-full border border-brand-600 px-6 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          Voltar ao Dicionário
        </Link>
      </div>
    </div>
  );
}
