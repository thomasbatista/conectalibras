import { describe, expect, it } from "vitest";
import { generateQuizQuestions, shuffleArray } from "./quizUtils";
import type { Sign } from "../types/sign";

const sampleSigns: Sign[] = [
  { id: 1, word: "Olá", category: "Saudações", image: "", description: "" },
  { id: 2, word: "Sim", category: "Expressões", image: "", description: "" },
  { id: 3, word: "Não", category: "Expressões", image: "", description: "" },
  { id: 4, word: "Família", category: "Família", image: "", description: "" },
  { id: 5, word: "Escola", category: "Escola", image: "", description: "" },
  { id: 6, word: "Água", category: "Alimentos", image: "", description: "" },
];

describe("shuffleArray", () => {
  it("mantém todos os itens originais, apenas reordenados", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(original);

    expect(shuffled).toHaveLength(original.length);
    expect(shuffled.sort()).toEqual([...original].sort());
  });

  it("não modifica o array original", () => {
    const original = [1, 2, 3];
    shuffleArray(original);

    expect(original).toEqual([1, 2, 3]);
  });
});

describe("generateQuizQuestions", () => {
  it("gera o número solicitado de perguntas, respeitando o total disponível", () => {
    const questions = generateQuizQuestions(sampleSigns, 4);
    expect(questions).toHaveLength(4);
  });

  it("cada pergunta possui exatamente 4 alternativas sem duplicatas", () => {
    const questions = generateQuizQuestions(sampleSigns, sampleSigns.length);

    for (const question of questions) {
      expect(question.options).toHaveLength(4);
      expect(new Set(question.options).size).toBe(4);
    }
  });

  it("a resposta correta está sempre entre as alternativas", () => {
    const questions = generateQuizQuestions(sampleSigns, sampleSigns.length);

    for (const question of questions) {
      expect(question.options).toContain(question.correctAnswer);
    }
  });
});
