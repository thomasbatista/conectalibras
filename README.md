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
  videoUrl: "http://dicionario.ines.gov.br/public/media/palavras/videos/exemploSm_Prog001.mp4",
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

O ConectaLibras foi desenvolvido com conformidade **WCAG 2.1 nível AA** em
mente, garantindo que a plataforma seja acessível para pessoas com
deficiências, incluindo cegueira, baixa visão e deficiências motoras.

### Recursos técnicos implementados

#### HTML semântico
- Uso correto de tags semânticas: `<header>`, `<nav>`, `<main>`,
  `<section>`, `<article>`, `<footer>`.
- Cada página tem um `<main id="main-content">` único.
- Headings em ordem hierárquica (H1 → H2 → H3, sem pulos).

#### Navegação por teclado
- **Navegação completa**: todos os elementos interativos podem ser acessados
  com Tab/Shift+Tab.
- **Skip link**: pressione Tab na homepage para "Pular para conteúdo
  principal" e ir direto ao conteúdo.
- **Menu mobile**: abre/fecha com clique ou Enter; fecha com Esc.
- **Foco visível**: todos os botões, links e inputs têm indicador visual de
  foco (ring azul).
- **Radiobuttons no quiz**: navegáveis com Arrow Keys (implementados como
  `<input type="radio">` nativo).

#### Atributos ARIA
- `aria-label`: descreve o propósito de botões, filtros e ícones.
- `aria-pressed`: indica estado ativo/inativo de botões toggle (favoritos,
  filtros).
- `aria-live="polite"`: anuncia mudanças dinâmicas (pergunta nova do quiz).
- `aria-atomic="true"`: leitor de tela anuncia a pergunta inteira, não só a
  mudança.
- `role="group"` + `aria-label`: agrupa filtros de categoria semanticamente.
- `role="progressbar"`: barra de progresso com valores ARIA.
- `role="status"`: feedback de acerto/erro no quiz.
- `aria-hidden="true"`: oculta ícones decorativos de leitores de tela.

#### Cores e contraste
- Contraste de texto >= 4.5:1 (WCAG AA normal) e >= 3:1 (WCAG AA large).
- Feedback de acerto/erro **não depende só de cor**: combina ícone + texto +
  cor.
- Estados visuais (selecionado, hover) usam mudanças de cor + mudanças de
  border/background.

#### Tamanhos e áreas de toque
- Botões e links: mínimo 44px × 44px (recomendação WCAG 2.1).
- Inputs de busca e campos: mínimo 44px de altura.
- Espaçamento adequado entre elementos interativos.

#### Imagens e vídeos
- Todas as imagens/SVGs decorativos têm `aria-hidden="true"`.
- Vídeos têm `aria-label` descritivo (ex: "Vídeo demonstrando o sinal de
  Olá em Língua Brasileira de Sinais").
- Se vídeo não carregar, mostra descrição textual alternativa do sinal.

#### Responsividade
- Aplicação funciona em todos os tamanhos de tela (mobile-first).
- Navegação mobile permanece acessível mesmo em telas pequenas.

### Testando a acessibilidade

#### Com leitor de tela (NVDA)
1. Baixe [NVDA](https://www.nvaccess.org/download/) (grátis, Windows/Linux).
2. Abra o site em `http://localhost:5173`.
3. Pressione `Ctrl+Alt+N` para ligar NVDA.
4. Navegue com **Tab** e **Setas**.
5. Pressione **H** para ouvir lista de headings (devem estar em ordem).
6. Teste cada funcionalidade:
   - Menu (abrir/fechar com Esc)
   - Buscar sinais
   - Filtro de categoria
   - Favoritar um sinal
   - Responder o quiz

#### Com teclado apenas
1. Desconecte o mouse.
2. Navegue o site inteiro usando:
   - **Tab**: próximo elemento
   - **Shift+Tab**: elemento anterior
   - **Enter**: ativar botão/link
   - **Esc**: fechar menu mobile
   - **Setas**: navegar em radiobuttons (quiz)
3. Todos os elementos devem ser alcançáveis e funcionais.

#### Ferramentas automatizadas
- [axe DevTools](https://www.deque.com/axe/devtools/): extensão grátis de
  browser (Chrome, Firefox, Edge).
- [WAVE](https://wave.webaim.org/): analisador online de acessibilidade.

### Limitação conhecida: Quiz visual

O quiz foi desenvolvido com a pergunta "qual palavra corresponde a este
sinal?" mostrando um vídeo/imagem do sinal. Embora acessível
tecnicamente, a estrutura da pergunta é **intrinsecamente visual**:

- Um usuário cego pode entender a **descrição textual** do movimento e
  tentar adivinhar, mas é significativamente mais difícil do que para um
  usuário vidente.
- Uma alternativa pedagógica seria inverter: "qual é o sinal de [palavra]?"
  com alternativas textuais.

Para o aprendizado formal de LIBRAS com foco em acessibilidade completa,
recomenda-se usar recursos como:
- Instrutores surdos qualificados.
- Plataformas com descrição de áudio profissional dos sinais.
- Comunidades de prática surdas.

### Recursos de acessibilidade por página

- **Homepage**: skip link, botões com foco visível, cards semânticos.
- **Dicionário**: busca com label acessível, filtros com aria-pressed,
  cards estruturados como `<article>`.
- **Detalhes do sinal**: vídeo com aria-label, descrição textual, botão
  favoritar com aria-label dinâmico.
- **Favoritos**: lista com semântica clara, mensagem acessível se vazio.
- **Quiz**: aria-live na pergunta, radiobuttons com keyboard nav, feedback
  com ícone+texto+cor.

### Conformidade declarada

Este projeto segue as diretrizes [WCAG 2.1 nível AA](https://www.w3.org/WAI/WCAG21/quickref/).
Para relatos de problemas de acessibilidade, abra uma issue no repositório.

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