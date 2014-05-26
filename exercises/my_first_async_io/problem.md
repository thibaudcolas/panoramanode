Écris un programme qui utilise une seule opération de système de fichier **asynchrone** pour lire un fichier et afficher le nombre de lignes qu'il contient sur la console (stdout), de la même manière que le ferait `cat file | wc -l`.

Le chemin complet vers le fichier à lire sera fourni via le premier argument de ligne de commande.

----------------------------------------------------------------------
## Conseils

La solution à ce problème est *quasiment* la même qu'au précédent, à l'exception qu'il faut maintenant réaliser la lecture **the Node.js way** : en asynchrone.

À la place de `fs.readFileSync()`, il faudra utiliser `fs.readFile()` et récupérer le contenu du fichier via un callback passé comme deuxième argument de la méthode de lecture.

Les callbacks idiomatiques de Node.js ont la signature :

```js
function callback (err, data) { /* ... */ }
```

afin de savoir si une erreur a été levée en vérifiant si le premier argument est *truthy* (`if (err) { /* handle error */ }`). S'il n'y a pas d'erreur, l'objet `Buffer` est en deuxième argument. Comme pour `readFileSync()`, le deuxième argument peut être 'utf8' pour récupérer une `String` au lieu d'un `Buffer`.

La documentation du module `fs` est disponible dans le fichier :
  {rootdir:/doc/node_apidoc/fs.html}

----------------------------------------------------------------------
