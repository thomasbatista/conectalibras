import { useCallback, useEffect, useState } from "react";
import type { QuizProgress } from "../types/quiz";

const STORAGE_KEY = "conectalibras:progress";

const DEFAULT_PROGRESS: QuizProgress = {
  bestScore: 0,
  quizzesTaken: 0,
};

function readProgress(): QuizProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored
      ? { ...DEFAULT_PROGRESS, ...(JSON.parse(stored) as QuizProgress) }
      : DEFAULT_PROGRESS;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<QuizProgress>(() =>
    readProgress(),
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const recordQuizResult = useCallback((score: number, total: number) => {
    const percentage = total === 0 ? 0 : Math.round((score / total) * 100);

    setProgress((current) => ({
      bestScore: Math.max(current.bestScore, percentage),
      quizzesTaken: current.quizzesTaken + 1,
    }));
  }, []);

  return { progress, recordQuizResult };
}
