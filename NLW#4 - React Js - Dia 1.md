# NLW#4 - React.Js - Dia 1

Created: Feb 22, 2021
Created by: JULIANE PIRES
Tecnologies: React, Typescript
Type: Imersões

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