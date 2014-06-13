Utilise Array#filter pour écrire une fonction appelée `getShortMessages`.

`getShortMessages` prend un tableau d'objets avec des propriétés '.message' et retourne un tableau de messages étant *longs de moins de 50 caractères*.

----------------------------------------------------------------------
## Paramètres

* messages: un tableau de 10 à 100 objets aléatoires ressemblant à :

```js
{
  message: 'Esse id amet quis eu esse aute officia ipsum.' // random
}
```

## Conditions

* Ne pas utiliser de boucle for ni Array#forEach.

## Conseils

* Il faut essayer de chaîner des méthodes de tableau !

## Sortie attendue

La fonction doit retourner un tableau contenant directement les messages, *sans leur objet conteneur*.

i.e.
```
[ 'Tempor quis esse consequat sunt ea eiusmod.',
  'Id culpa ad proident ad nulla laborum incididunt.',
  'Ullamco in ea et ad anim anim ullamco est.',
  'Est ut irure irure nisi.' ]
```

## Ressources

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Base

```js
function getShortMessages(messages) {
  // SOLUTION GOES HERE
}

module.exports = getShortMessages
```

----------------------------------------------------------------------
