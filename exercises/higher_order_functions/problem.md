Implémente une fonction d'ordre supérieur (higher-order function) qui prend une fonction en paramètre et l'appelle 'n' fois.

----------------------------------------------------------------------
## Fonctions d'ordre supérieur

Une fonction d'ordre supérieur (forme fonctionnelle, functor) est une fonction qui a au moins l'une de ces propriétés :

* prend une ou plusieurs fonctions comme entrée
* renvoie une fonction en sortie

Toutes les autres fonctions sont de premier ordre.

## Paramètres

* operation : Une fonction, ne prend pas de paramètre, ne retourne rien.
* num : le nombre d'appels de `operation` à effectuer.

## Ressources

* https://en.wikipedia.org/wiki/Higher-order_function

## Conseils : récursion

Il est possible d'utiliser une boucle pour l'implémentation, points bonus en s'en passant.

## Base

```js
function repeat(operation, num) {
  // SOLUTION GOES HERE
}

module.exports = repeat
```

----------------------------------------------------------------------
