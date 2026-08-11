import type { Sign } from "../types/sign";

// Descrições em linguagem simplificada, com fins didáticos. Para o sinal
// oficial e suas variações regionais, consulte sempre um dicionário de
// LIBRAS reconhecido ou um instrutor surdo qualificado.
export const signs: Sign[] = [
  {
    id: 1,
    word: "Olá",
    category: "Saudações",
    image: "/images/signs/ola.gif",
    description:
      "Mão aberta próxima à testa, com um leve movimento para frente, como uma continência descontraída.",
  },
  {
    id: 2,
    word: "Bom dia",
    category: "Saudações",
    image: "/images/signs/bom-dia.gif",
    description:
      "As duas mãos em formato de concha se encontram na altura do peito e sobem levemente, imitando o nascer do sol.",
  },
  {
    id: 3,
    word: "Boa noite",
    category: "Saudações",
    image: "/images/signs/boa-noite.gif",
    description:
      "Uma mão passa por cima da outra, encobrindo-a, representando o sol se pondo no horizonte.",
  },
  {
    id: 4,
    word: "Tchau",
    category: "Saudações",
    image: "/images/signs/tchau.gif",
    description:
      "Mão aberta próxima ao rosto, com os dedos se abrindo e fechando suavemente, como um aceno.",
  },
  {
    id: 5,
    word: "Obrigado",
    category: "Expressões",
    image: "/images/signs/obrigado.gif",
    description:
      "Mão espalmada toca o queixo e se move para frente e para baixo, em direção à pessoa a quem se agradece.",
  },
  {
    id: 6,
    word: "Sim",
    category: "Expressões",
    image: "/images/signs/sim.gif",
    description:
      "Mão fechada, com o polegar visível, realiza um movimento de cima para baixo, semelhante a um aceno de cabeça.",
  },
  {
    id: 7,
    word: "Não",
    category: "Expressões",
    image: "/images/signs/nao.gif",
    description:
      "Dedos indicador e médio se juntam ao polegar em um movimento curto de abrir e fechar, à frente do corpo.",
  },
  {
    id: 8,
    word: "Amor",
    category: "Expressões",
    image: "/images/signs/amor.gif",
    description:
      "Os braços se cruzam sobre o peito, com as mãos fechadas, em um gesto que lembra um abraço em si mesmo.",
  },
  {
    id: 9,
    word: "Família",
    category: "Família",
    image: "/images/signs/familia.gif",
    description:
      "As duas mãos em formato de \"F\" se tocam pelos polegares e giram lado a lado, descrevendo um círculo.",
  },
  {
    id: 10,
    word: "Amigo",
    category: "Família",
    image: "/images/signs/amigo.gif",
    description:
      "Os dedos indicadores das duas mãos se engancham e trocam de posição, representando uma união.",
  },
  {
    id: 11,
    word: "Mãe",
    category: "Família",
    image: "/images/signs/mae.gif",
    description:
      "Mão aberta com o polegar tocando o queixo, seguido de um leve movimento para baixo.",
  },
  {
    id: 12,
    word: "Pai",
    category: "Família",
    image: "/images/signs/pai.gif",
    description:
      "Mão aberta com o polegar tocando a testa, seguido de um leve movimento para baixo.",
  },
  {
    id: 13,
    word: "Escola",
    category: "Escola",
    image: "/images/signs/escola.gif",
    description:
      "As duas mãos batem palmas suavemente duas vezes, representando o chamado para a sala de aula.",
  },
  {
    id: 14,
    word: "Professor",
    category: "Escola",
    image: "/images/signs/professor.gif",
    description:
      "As duas mãos partem da testa e se abrem para frente, como se estivessem transmitindo conhecimento.",
  },
  {
    id: 15,
    word: "Aluno",
    category: "Escola",
    image: "/images/signs/aluno.gif",
    description:
      "As duas mãos partem da testa e se fecham em direção ao corpo, como se estivessem recebendo conhecimento.",
  },
  {
    id: 16,
    word: "Livro",
    category: "Escola",
    image: "/images/signs/livro.gif",
    description:
      "As duas mãos espalmadas se encostam pelas palmas e se abrem como as páginas de um livro.",
  },
  {
    id: 17,
    word: "Água",
    category: "Alimentos",
    image: "/images/signs/agua.gif",
    description:
      "A letra \"A\" em LIBRAS toca o queixo repetidamente, indicando o ato de beber.",
  },
  {
    id: 18,
    word: "Comida",
    category: "Alimentos",
    image: "/images/signs/comida.gif",
    description:
      "Os dedos em formato de pinça tocam a boca repetidamente, representando o ato de comer.",
  },
  {
    id: 19,
    word: "Pão",
    category: "Alimentos",
    image: "/images/signs/pao.gif",
    description:
      "Uma mão em formato de lâmina desliza sobre o dorso da outra mão, como se fatiasse um pão.",
  },
  {
    id: 20,
    word: "Fruta",
    category: "Alimentos",
    image: "/images/signs/fruta.gif",
    description:
      "Os dedos em formato de pinça giram levemente próximos à bochecha, indicando algo doce.",
  },
  {
    id: 21,
    word: "Um",
    category: "Números",
    image: "/images/signs/um.gif",
    description:
      "Mão fechada com o dedo indicador estendido para cima, parada à frente do corpo.",
  },
  {
    id: 22,
    word: "Dois",
    category: "Números",
    image: "/images/signs/dois.gif",
    description:
      "Mão fechada com os dedos indicador e médio estendidos, formando um \"V\".",
  },
  {
    id: 23,
    word: "Três",
    category: "Números",
    image: "/images/signs/tres.gif",
    description:
      "Mão fechada com o polegar, indicador e médio estendidos, parada à frente do corpo.",
  },
  {
    id: 24,
    word: "Vermelho",
    category: "Cores",
    image: "/images/signs/vermelho.gif",
    description:
      "O dedo indicador toca o lábio inferior e desliza para baixo, uma ou duas vezes.",
  },
  {
    id: 25,
    word: "Azul",
    category: "Cores",
    image: "/images/signs/azul.gif",
    description:
      "A letra \"A\" em LIBRAS balança levemente de um lado para o outro, à altura do ombro.",
  },
  {
    id: 26,
    word: "Verde",
    category: "Cores",
    image: "/images/signs/verde.gif",
    description:
      "A letra \"V\" em LIBRAS gira levemente sobre o próprio eixo, à altura do peito.",
  },
];
