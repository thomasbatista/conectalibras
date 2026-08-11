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
- **Vídeo do sinal**: cada sinal cadastrado tem um vídeo real, do Dicionário
  de Libras do INES, exibido na página de detalhes.
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
  videoUrl: "https://dicionario.ines.gov.br/public/media/palavras/videos/exemploSm_Prog001.mp4",
  description: "Descrição resumida do movimento do sinal.",
}
```

O `id` deve ser único e a `category` precisa ser uma das categorias já
definidas em `CATEGORIES`. O campo `videoUrl` é opcional: quando não
informado, a interface usa automaticamente a ilustração de categoria como
alternativa (veja a seção seguinte). O sinal aparece automaticamente no
dicionário e passa a fazer parte do banco de perguntas do quiz.

## Vídeos dos sinais

A demonstração de cada sinal é feita por um vídeo real do
[Dicionário de Libras do INES](https://dicionario.ines.gov.br/) — Instituto
Nacional de Educação de Surdos, vinculado ao Ministério da Educação. Os
vídeos não são copiados para este repositório: o campo `videoUrl` de cada
sinal aponta diretamente para o arquivo hospedado no site do INES, e é
exibido na página de detalhes (componente
[`SignVideo`](src/components/SignVideo.tsx)) com um crédito visível à fonte.

Nem toda palavra tem correspondência no acervo do INES — em geral, ele lista
palavras isoladas, não expressões compostas (por exemplo, não há um vídeo
único para a saudação "bom dia"). Por isso os 26 sinais cadastrados foram
escolhidos entre os que têm vídeo disponível. Ao adicionar um novo sinal sem
`videoUrl`, a interface usa a ilustração de categoria gerada em tela como
alternativa, com o texto "Imagem demonstrativa".

Para adicionar o vídeo de um novo sinal, procure a palavra no dicionário do
INES, copie o endereço do arquivo `.mp4` reproduzido na página e use-o como
`videoUrl` em `src/data/signs.ts`.

## Sobre o quiz

As perguntas do quiz nunca ficam fixas no código: a cada rodada, a função
`generateQuizQuestions` (em [`src/utils/quizUtils.ts`](src/utils/quizUtils.ts))
seleciona aleatoriamente 10 sinais da base de dados, monta 4 alternativas
únicas para cada um (a palavra correta e três distratoras) e embaralha tanto
a ordem das perguntas quanto das alternativas. Quando o sinal sorteado tem
vídeo cadastrado, a pergunta mostra o vídeo do INES para o usuário assistir
e adivinhar a palavra; caso contrário, mostra a descrição do movimento. Ao
final, a pontuação é comparada a faixas percentuais para exibir uma
mensagem de desempenho.

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

## Créditos

Os vídeos de demonstração dos sinais pertencem ao
[Dicionário de Libras do INES](https://dicionario.ines.gov.br/) (Instituto
Nacional de Educação de Surdos), produzido com apoio da Presidência da
República e do Ministério da Ciência, Tecnologia e Inovação. Este projeto
apenas referencia os vídeos publicamente disponíveis no site oficial do
INES; nenhum arquivo é copiado ou redistribuído neste repositório.
