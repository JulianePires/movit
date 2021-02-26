# NLW#4 - React.Js - Dia 3

Created: Feb 22, 2021
Created by: JULIANE PIRES
Tecnologies: React, Typescript
Type: Imersões

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