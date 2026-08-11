import type { QuizQuestion as QuizQuestionType } from "../types/quiz";
import SignPlaceholder from "./SignPlaceholder";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
}

export default function QuizQuestion({
  question,
  selectedOption,
  onSelectOption,
}: QuizQuestionProps) {
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <h2 className="mb-4 text-center text-lg font-semibold text-slate-900">
        Qual palavra corresponde a este sinal?
      </h2>

      <div className="mx-auto mb-6 max-w-xs overflow-hidden rounded-xl">
        <SignPlaceholder word={question.sign.word} size="lg" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Alternativas">
        {question.options.map((option) => {
          const isSelected = option === selectedOption;
          const isCorrectOption = option === question.correctAnswer;

          let optionClassName =
            "border-slate-200 bg-white text-slate-700 hover:border-brand-300";

          if (isAnswered && isCorrectOption) {
            optionClassName = "border-emerald-500 bg-emerald-50 text-emerald-800";
          } else if (isAnswered && isSelected && !isCorrectOption) {
            optionClassName = "border-red-500 bg-red-50 text-red-800";
          }

          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isAnswered}
              onClick={() => onSelectOption(option)}
              className={`min-h-[48px] rounded-lg border px-4 py-2 text-left text-sm font-medium transition disabled:cursor-not-allowed ${optionClassName}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <p
          role="status"
          className={`mt-4 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            isCorrect
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {isCorrect ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          )}
          {isCorrect
            ? "Resposta correta!"
            : `Resposta incorreta. A resposta correta é: ${question.correctAnswer}.`}
        </p>
      )}
    </div>
  );
}
