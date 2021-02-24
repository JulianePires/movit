# movit
A SSR application created using Next.js during the NLW#4 event by Rocketseat

# LogBook
## NLW#4 - React.Js - Dia 1

```
Created: Feb 22, 2021
Created by: JULIANE PIRES
Tecnologies: React, Typescript
Type: Imersões
```

Hoje iniciou-se a NLW, semana de imersão da Rocketseat que vem pra impulsionar os conhecimentos para um próximo nível.

Eu curto muito a didática do Diego, além de dominar o assunto e ser super dinâmico, ele consegue transparecer o conteúdo de forma clara e precisa.

Primeiro que consegui esclarecer de uma vez por todas a utilização de propriedades no elemento

```jsx
// cria a interface de tipagem do botão
interface ButtonProps {
	color: string;
}

// define o conjunto de propriedades a serem utilizadas no componente
export function Button (props: ButtonProps) {
	return (
		<button type="button">
			{props.child}
		</button>
	);
}

// quando o componente é chamado, podemos então atualizar as propriedades
<Button color='red'> BOTAO </Button>
```

Também compreendi o conceito de useState( ) do react, que altera o estado de uma constante ou variável.

```jsx
import { useState } from 'react' // importa a função useState()

interface ButtonProps{
	color: string;
	children: string;
}

export function Botao () {
	const [counter, setCounter] = useState(1); // define o contador e a função de alteração
	//função de incremento que altera o estado da constante counter
	function increment() {
		setCounter(counter + 1);
	}

	return(
		//ao clique o botão chama a função de incremento
		<button 
			type="button" 
			style={{ backgroundColor: props.color }}
			onClick={increment} 
		>
			{props.children} <strong>{counter}</strong> // onde o contador será mostrado
		</button>
	);
	
}
```

O componente pode ser verificado dentro da estrutura quando segue um padrão de repetição ou quando é um elemento especial e você deseja mantê-lo separado

## NLW#4 - React.Js - Dia 2

```
Created: Feb 22, 2021
Created by: JULIANE PIRES
Tecnologies: React, Typescript
Type: Imersões
```

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

CSS modules são utilizados para evitar que os estilos de um componente interfiram no estilo do restante da página

A utilização de dimensionamento em *rem* que remete ao tamanho base da fonte (```1 rem  = 16px```) para manter a página responsiva foi outro ponto interessante

Temos também o método ```padStart(maxLenght, fillString)``` que preenche com o conteúdo de fillString o número máximo de caracteres em maxLenght à esquerda (caso fosse à direita, o método seria padEnd)

O método ```split('')``` divide a string a partir do espaçamento definido entre as aspas

useEffect (hook) - utilizado para gerar "efeitos colaterais" (como a chamada de uma função) quando houver alteração de comportamento - primeiro parâmetro ⇒ função a ser executada (pode ser arrow function ```() ⇒ { }```) | segundo parâmetro ⇒ em que ação essa função deve ser executada (ex: click)

Array de dependências → dependências que terão o estado observado pelo useEffect

