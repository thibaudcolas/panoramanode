Écris un programme qui accepte un ou plusieurs nombres comme arguments de ligne de commande et qui affiche la somme de ces nombres à la console (stdout).

----------------------------------------------------------------------
## Conseils

Les arguments de ligne de commande sont accessibles via l'objet global `process`. L'objet `process` a une propriété `argv` qui est un tableau contenant la ligne de commande complète.

Pour commencer, écris un programme contenant simplement :

```js
console.log(process.argv)
```

Il faut le lancer avec `node program.js` et quelques nombres comme arguments. Exemple :

```sh
$ node program.js 1 2 3
```

Dans ce cas de figure, le résultat serait un tableau ressemblant à :

```js
[ 'node', '/path/to/your/program.js', '1', '2', '3' ]
```

Il faudra trouver un moyen de boucler sur tous les nombres passés en argument pour n'afficher que leur somme. Le premier élément du tableau `process.argv` est toujours 'node', et le deuxième élément est toujours le chemin vers le fichier program.js, il faut donc commencer au troisième élément du tableau (index 2), en ajoutant chaque item au total jusqu'à atteindre la fin du tableau.

Attention également : tous les éléments de `process.argv` sont des strings et il sera peut-être nécessaire de les convertir en nombres. Cela peut être fait en préfixant la propriété avec `+` ou en la passant comme paramètre à `Number()`. Exemple : `+process.argv[2]` ou `Number(process.argv[2])`.

{appname} passera des arguments au programme quand il sera vérifié avec `{appname} verify program.js`, il n'est donc pas nécessaire d'en fournir manuellement. Pour tester la solution sans la vérifier, il faut utiliser `{appname} run program.js`. Avec `run`, c'est l'environnement de test mis en place par {appname} pour chaque exercice qui est utilisé pour l'appel.

----------------------------------------------------------------------
