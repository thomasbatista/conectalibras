export type Category =
  | "Saudações"
  | "Expressões"
  | "Família"
  | "Escola"
  | "Alimentos"
  | "Números"
  | "Cores";

export interface Sign {
  id: number;
  word: string;
  category: Category;
  image: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  "Saudações",
  "Expressões",
  "Família",
  "Escola",
  "Alimentos",
  "Números",
  "Cores",
];
