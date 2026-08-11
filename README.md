# ConectaLibras

Plataforma web para auxiliar no aprendizado da Língua Brasileira de Sinais
(LIBRAS), reunindo um dicionário visual, um quiz interativo e um
acompanhamento simples de progresso.

## Contexto acadêmico

Este projeto foi desenvolvido como atividade de extensão universitária do
curso de Análise e Desenvolvimento de Sistemas (ADS) do IFSP, com o objetivo
de aproximar estudantes e a comunidade da LIBRAS por meio de uma ferramenta
digital simples, acessível e de fácil uso.

## Funcionalidades

- **Dicionário visual**: busca em tempo real e filtro por categoria entre os
  sinais cadastrados, cada um com descrição resumida do movimento.
- **Detalhes do sinal**: página individual com descrição ampliada do
  movimento e opção de favoritar.
- **Favoritos**: marcação de sinais para consulta rápida, salva no navegador.
- **Quiz**: rodada de 10 perguntas geradas dinamicamente a partir da base de
  sinais, com alternativas embaralhadas e feedback imediato (acerto/erro).
- **Resultado do quiz**: pontuação final com mensagem de acordo com o
  desempenho, opção de refazer o quiz ou voltar ao dicionário.
- **Progresso**: melhor pontuação e quantidade de quizzes realizados, salvos
  no navegador.

## Tecnologias

- React + Vite + TypeScript
- Tailwind CSS
- React Router DOM
- Vitest (testes unitários)
- ESLint + Prettier
- `localStorage` para persistência de favoritos e progresso (sem backend)

## Estrutura do projeto

```
src/
  components/   componentes de interface reutilizáveis
  pages/        páginas da aplicação (rotas)
  data/         base de dados dos sinais (signs.ts)
  hooks/        hooks de estado persistido (favoritos, progresso)
  utils/        funções puras (geração e avaliação do quiz)
  types/        tipos TypeScript compartilhados
```

## Como instalar e executar

Pré-requisitos: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

Outros comandos disponíveis:

```bash
npm run build     # gera a versão de produção
npm run preview   # serve a versão de produção localmente
npm run lint       # verifica o código com ESLint
npm run test       # executa os testes com Vitest
```

## Como adicionar novos sinais

Os sinais ficam centralizados em [`src/data/signs.ts`](src/data/signs.ts).
Para adicionar um novo, inclua um objeto seguindo a interface `Sign`
(definida em [`src/types/sign.ts`](src/types/sign.ts)):

```ts
{
  id: 27,
  word: "Exemplo",
  category: "Saudações",
  image: "/images/signs/exemplo.gif",
  description: "Descrição resumida do movimento do sinal.",
}
```

O `id` deve ser único e a `category` precisa ser uma das categorias já
definidas em `CATEGORIES`. O sinal aparece automaticamente no dicionário e
passa a fazer parte do banco de perguntas do quiz.

## Como substituir as imagens demonstrativas por GIFs reais

Atualmente cada sinal é representado por uma ilustração gerada em tela
(ícone + texto "Imagem demonstrativa"), já que ainda não há um acervo de
GIFs cadastrado. Para usar imagens reais:

1. Adicione o arquivo de imagem/GIF em `public/images/signs/`, usando o
   mesmo nome referenciado no campo `image` de cada sinal (por exemplo,
   `public/images/signs/ola.gif` para o sinal "Olá").
2. Atualize os componentes `SignCard` e `SignDetails` para renderizar uma
   tag `<img src={sign.image} alt={...} />` no lugar do componente
   `SignPlaceholder`, mantendo o fallback para sinais sem imagem cadastrada.

## Sobre o quiz

As perguntas do quiz nunca ficam fixas no código: a cada rodada, a função
`generateQuizQuestions` (em [`src/utils/quizUtils.ts`](src/utils/quizUtils.ts))
seleciona aleatoriamente 10 sinais da base de dados, monta 4 alternativas
únicas para cada um (a palavra correta e três distratoras) e embaralha tanto
a ordem das perguntas quanto das alternativas. Ao final, a pontuação é
comparada a faixas percentuais para exibir uma mensagem de desempenho.

## Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`).
- Navegação completa por teclado, com foco visível em todos os elementos
  interativos.
- Uso de `aria-label`, `aria-pressed` e `role` em botões, filtros e barra de
  progresso.
- Feedback de acerto/erro no quiz combinando cor, ícone e texto, sem
  depender apenas da cor.
- Áreas de toque com altura mínima confortável (44px) em botões e links.
- Layout responsivo, do celular ao desktop.

## Aviso sobre o conteúdo linguístico

As descrições dos sinais têm fins didáticos e ilustrativos. Para o
aprendizado formal da LIBRAS e suas variações regionais, recomenda-se
sempre consultar dicionários oficiais e instrutores surdos qualificados.
