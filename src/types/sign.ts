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
  /**
   * Vídeo do sinal no Dicionário de Libras do INES (dicionario.ines.gov.br).
   * Nem todo sinal tem correspondência exata no acervo do INES — quando
   * ausente, a interface usa a ilustração de categoria como alternativa.
   */
  videoUrl?: string;
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
