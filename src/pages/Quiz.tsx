import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signs } from "../data/signs";
import { generateQuizQuestions } from "../utils/quizUtils";
import QuizQuestionCard from "../components/QuizQuestion";
import ProgressBar from "../components/ProgressBar";

const QUESTIONS_PER_ROUND = 10;

export default function Quiz() {
  const navigate = useNavigate();
  const [questions] = useState(() =>
    generateQuizQuestions(signs, QUESTIONS_PER_ROUND),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  function handleSelectOption(option: string) {
    if (selectedOption !== null) return;

    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setScore((current) => current + 1);
    }
  }

  function handleNext() {
    if (isLastQuestion) {
      navigate("/quiz/resultado", {
        state: { score, total: questions.length },
      });
      return;
    }

    setCurrentIndex((current) => current + 1);
    setSelectedOption(null);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900">Quiz de LIBRAS</h1>
      <p className="mt-1 text-sm text-slate-600">
        Responda às perguntas e veja seu desempenho ao final.
      </p>

      <div className="mt-6">
        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </div>

      <div className="mt-6">
        <QuizQuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
        />
      </div>

      {selectedOption !== null && (
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className="min-h-[44px] rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            {isLastQuestion ? "Ver resultado" : "Próxima pergunta"}
          </button>
        </div>
      )}
    </div>
  );
}
