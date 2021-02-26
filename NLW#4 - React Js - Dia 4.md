# NLW#4 - React.Js - Dia 4

Created: Feb 22, 2021
Created by: JULIANE PIRES
Tecnologies: React, Typescript
Type: Imersões

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