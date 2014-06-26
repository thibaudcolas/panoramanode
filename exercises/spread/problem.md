Écris un programme qui prend plusieurs nombres en entrée et qui retourne le plus petit en utilisant le spread de ES6.

----------------------------------------------------------------------
## Conseils

ES6 fournit deux concepts proches, _rest_ et _spread_, pour écrire des fonctions variadiques (nombre d'arguments variable).

Un exemple de fonction variadique est `Math.max`, qui peut être appelée avec n'importe quel nombre d'arguments : `Math.max(1, 2)` ou `Math.max(1, 2, 3)` ou ...

Avec ES6, il est possible d'utiliser la syntaxe `...args` pour "étaler" ("spread") un tableau depuis ces paramètres.

```js
var numbers = [1, 1, 2, 3, 5, 8];
var max = Math.max(...numbers);
```

Cette syntaxe permet de se passer du bon vieux `.apply`. Bon débarras !

----------------------------------------------------------------------
## Paramètres 

Le programme recevra une quantité variable de nombre en argument (`process.argv[2]` et la suite). Il faut utiliser l'opérateur spread de ES6 pour récupérer la plus petite valeur dans ces nombres et l'afficher sur la console. Il faut également afficher la liste de nombres, pour la route.

Voici un exemple de sortie attendue :

```
The minimum of { 18, 5, 7, 24 } is 5
```

----------------------------------------------------------------------
