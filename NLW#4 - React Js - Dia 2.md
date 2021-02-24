# NLW#4 - React.Js - Dia 2

Created: Feb 22, 2021
Created by: JULIANE PIRES
Tecnologies: React, Typescript
Type: Imersões

Dá-se início ao dia 2 da NLW e o foco dessa vez é em Next.js

SPA → Single Page Application (Mantém elementos repetíveis e carrega-se somente os alternáveis na troca de rota)

[https://whimsical.com/embed/AGnJuzzdwq11kB9REX3iWo@2Ux7TurymMT5LtXKsgJq](https://whimsical.com/embed/AGnJuzzdwq11kB9REX3iWo@2Ux7TurymMT5LtXKsgJq)

SSR → Server Side Render (renderização no lado do servidor, como no caso do Next, que renderiza a página e entrega pronta pro usuário)

[https://whimsical.com/embed/AGnJuzzdwq11kB9REX3iWo@2Ux7TurymNBBFitjHDj3](https://whimsical.com/embed/AGnJuzzdwq11kB9REX3iWo@2Ux7TurymNBBFitjHDj3)

SSG → Static Site Generation (geração de páginas estáticas, mantém-se uma parte comumente utilizada e não atualizada de forma estática, salva em memória para que não tenha que consultar o servidor novamente - Gatsby)

Next é uma camada intermediária entre o back end (Node) e o front end (React), no caso, o usuário interage diretamente com o Next, que faz contato com a API e retorna os dados HTML e CSS para o front

O Next consegue unir esses três conceitos e por isso tem tido grande valor de mercado

Quanto à organização dos arquivos, é recomendado que se deixe a parte estática no arquivo _app e a parte dinâmica nos arquivos das páginas

Ao primeiro contato com a página, o conteúdo é renderizado no servidor Node do Next e essa informação fica armazenada, vindo ao front somente a página estática carregada

Css modules são utilizados para evitar que os estilos de um componente interfiram no estilo do restante da página

A utilização de dimensionamento em *rem* que remete ao tamanho base da fonte (1 rem  = 16px) para manter a página responsiva foi outro ponto interessante

Temos também o método padStart(maxLenght, fillString) que preenche com o conteúdo de fillString o número máximo de caracteres em maxLenght à esquerda (caso fosse à direita, o método seria padEnd)

O método split('') divide a string a partir do espaçamento definido entre as aspas

useEffect (hook) - utilizado para gerar "efeitos colaterais" (como a chamada de uma função) quando houver alteração de comportamento - primeiro parâmetro ⇒ função a ser executada (pode ser arrow function "() ⇒ { }") | segundo parâmetro ⇒ em que ação essa função deve ser executada (ex: click)

Array de dependências → dependências que terão o estado observado pelo useEffect