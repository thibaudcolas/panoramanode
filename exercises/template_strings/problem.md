Écris un programme qui affichera un message sur deux lignes en utilisant les template strings de ES6.

----------------------------------------------------------------------
## Conseils

Les template strings de ES6 sont une nouvelle syntaxe de string, qui utilise des backticks `\`` à la place des guillemets simples `'` ou doubles `"`. Cette syntaxe donne plus de flexibilité dans la construction de chaînes de caractères. Elle permet l'interpolation de strings, avec la syntaxe suivante :

```js
`Hello, ${person}! 1 + 1 = ${1 + 1}!`
```

Elles peuvent également être multi-lignes, en plaçant simplement des retours à la ligne dans la string :

```js
`Hello,
world!`
```

----------------------------------------------------------------------
## Paramètres

Le premier argument de ligne du commande sera un nom (`process.argv[2]`). Il faudra afficher un message de deux lignes, en se basant sur le modèle suivant où le nom est `"Domenic"`.

```
Hello, Domenic!
Your name lowercased is "domenic".
```

Il est possible de commencer avec une syntaxe ES5, mais la solution correcte doit utiliser une _unique_ template string de ES6.

----------------------------------------------------------------------
