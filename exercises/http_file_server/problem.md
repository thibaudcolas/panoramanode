Écris un **serveur** HTTP renvoyant le même fichier texte pour chaque requête qu'il reçoit.

Ce serveur devra écouter sur le port passé en premier argument du programme.

Le deuxième argument de ligne de commande sera le chemin du fichier à servir. Il est **obligatoire** d'utiliser la méthode `fs.createReadStream()` pour streamer le contenu du fichier en réponse.

----------------------------------------------------------------------
## Conseils

Puisque nous devons créer un serveur HTTP pour cet exercice plutôt qu'un serveur TCP générique, nous devrions utiliser le module `http` du core de Node. Comme le module `net`, `http` a également une méthode `http.createServer()` mais qui créé ici un serveur pouvant communiquer en HTTP.

`http.createServer()` prend en paramètre un callback appelé une fois pour chaque connexion reçue par le serveur. Ce callback a la signature :

```js
function callback (request, response) { /* ... */ }
```

Où les deux paramètres sont des objets représentant la requête HTTP et la réponse correspondant à cette requête. `request` est utilisé pour récupérer les propriétés (header, query-string par exemple) alors que `response` sert à envoyer les données au client (header et body).

`request` et `response` sont tous deux des Streams Node. Cela signifie que nous pouvons utiliser les abstractions des streams pour envoyer et recevoir des données.

`http.createServer()` retourne également une instance de `server`. Il faut appeler `server.listen(portNumber)` pour démarrer l'écoute sur un port.

Un serveur HTTP Node typique ressemble à : 

```js
var http = require('http')
var server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

La documentation du module `http` est disponible dans le fichier :
  {rootdir:/doc/node_apidoc/http.html}

Le module core `fs` a également des APIs de streaming, pour les fichiers. Il faudra utiliser `fs.createReadStream()` pour créer un stream représentant le fichier donné comme argument au programme. La méthode retourne un stream sur lequel on peut utiliser `src.pipe(dst)` pour transférer les données du stream `src` au stream `dst`. De cette manière, il est possible de relier un stream de lecture de fichier à un stream d'écriture de réponse HTTP.

----------------------------------------------------------------------
