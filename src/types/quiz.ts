import type { Sign } from "./sign";

export interface QuizQuestion {
  id: number;
  sign: Sign;
  options: string[];
  correctAnswer: string;
}

export interface QuizProgress {
  bestScore: number;
  quizzesTaken: number;
}
