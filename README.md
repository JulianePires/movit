# Ketchup.it
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

## NLW#4 - React.Js - Dia 3

No dia 3 tivemos início com a configuração das propriedades e funcionalidades da aplicação

De cara uma dica dada é sempre nomear uma variável que remete a um booleano com um nome que 

Foi mostrado também o famosinho If ternário, onde expõe-se uma condição e apresenta-se duas alternativas, ficando:

```jsx
{ isActive ? "Abandonar ciclo" : "Iniciar um ciclo" }
// Se a condição é verdadeira, a mensagem "'Abandonar ciclo" é mostrada, caso contrário, mostra-se a mensagem "Iniciar um ciclo"
```

Ajustando os dois botões para serem alternados ao alterar o estado:

```jsx
{ isActive ? (
  <button 
  type="button" 
  className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
  onClick={resetCountdown}
>
  Abandonar ciclo
</button>
) : (
  <button 
  type="button" 
  className={styles.countdownButton}
  onClick={startCountdown}
  >
    Iniciar um ciclo
  </button>
) }
```

Com um detalhe para a concatenação de strings ao adicionar uma classe ao botão "Abandonar ciclo"

```jsx
className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
```

Para "setar" o reset do botão, criamos uma função chamada *resetCountdown* e um recurso do Node.js chamado Timeout, que reseta a contagem e evita que a função setTimeout continue a execução após o botão ser clicado. Temos:

```jsx
let countdownTimeout = NodeJS.Timeout;

// que recebe:
countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)

// e a função:
function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
		setTime(25 * 60);
  }
```

Para anunciar o encerramento do ciclo, temos uma nova condicional

```jsx
{ hasFinished ? (
        <button
          disabled
          className={`${styles.countdownButton}`}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          { isActive ? (
        <button 
        type="button" 
        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        onClick={resetCountdown}
      >
        Abandonar ciclo
      </button>
      ) : (
        <button 
        type="button" 
        className={styles.countdownButton}
        onClick={startCountdown}
        >
          Iniciar um ciclo
        </button>
      ) }
        </>
      ) }
```

E uma nova notação de CSS (nova para mim rs)

```jsx
.countdownButton:not(:disabled):hover {
  background: var(--blue-dark);
}
```

Também tivemos o "segredinho" de utilizar a redução do brilho para dar efeito de hover aos botões do desafio

```jsx
.challengeActive footer button:hover {
  filter: brightness(0.9);
}
```

O grande lance desse episódio foi o lançamento do API Context - uma forma de fazer os componentes da aplicação se comunicarem (SUPER IMPORTANTE) 

Dentro do contexto, exportamos uma função que tem como parâmetro "children", pois o carregamento dos componentes se dará dentro do ContextProvider, essa propriedade é tipada como *ReactNode* pois abrange componente como tipo.

E ai que entra o lance da função de alteração de level utilizando o setState(), onde a gente vai passar um level inicial e criar uma função de incremento alterando o estado do level para level + 1

A função startNewChallenge é passada através de um contexto para o contador para que, ao zerar, ele "chame" a função e crie um novo desafio

O mais interessante da integração do contexto do React, é que podemos atualizar um atributo em um componente e mostrar o resultado em outro

## NLW#4 - React.Js - Dia 4

O dia 4 foi basicamente para fechar toda regra de negócio (no countdown context)

A adição do setHasFinished(false); à função de reset do countdown fez o botão voltar ao estado inicial

A chamada de função pelos botões do desafio (falhei e completei) foram trocadas por uma função do tipo *handle,* uma completando o desafio, outra resetando o desafio, ambas chamando o reset do countdown

Para pedir permissões pro envio de informações ao usuário, utilizamos o useEffect()

Side effects → toda vez que uma aplicação muda, uma função é executada

O useEffect é utilizado para requisitar permissão para enviar notificação

```jsx
useEffect(() => {
    Notification.requestPermission();
  }, []);
```

Então, ao ceder permissão, o usuário receberá uma notificação sempre que um novo desafio for carregado

Para isto, em startNewChallenge carregamos  o áudio e a notificação

```jsx
new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 👊', {
        body: `Valendo ${challenge.amount}xp`
      });
    }
```