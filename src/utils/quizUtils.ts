import type { Sign } from "../types/sign";
import type { QuizQuestion } from "../types/quiz";

export function shuffleArray<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildOptions(sign: Sign, allSigns: Sign[]): string[] {
  const distractorPool = allSigns
    .filter((candidate) => candidate.id !== sign.id)
    .map((candidate) => candidate.word);

  const distractors = shuffleArray(distractorPool).slice(0, 3);
  return shuffleArray([sign.word, ...distractors]);
}

export function generateQuizQuestions(
  signs: Sign[],
  count = 10,
): QuizQuestion[] {
  const questionSigns = shuffleArray(signs).slice(0, Math.min(count, signs.length));

  return questionSigns.map((sign) => ({
    id: sign.id,
    sign,
    options: buildOptions(sign, signs),
    correctAnswer: sign.word,
  }));
}

export function calculateScoreMessage(score: number, total: number): string {
  const percentage = total === 0 ? 0 : (score / total) * 100;

  if (percentage >= 90) return "Excelente! Você está indo muito bem!";
  if (percentage >= 70) return "Muito bom! Continue praticando.";
  if (percentage >= 50) return "Bom começo! Continue estudando.";
  return "Continue praticando. Você consegue melhorar!";
}
