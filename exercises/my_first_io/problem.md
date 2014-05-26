Écris un programme qui utilise une seule opération de système de fichier **synchrone** pour lire un fichier et afficher le nombre de lignes qu'il contient sur la console (stdout), de la même manière que le ferait `cat file | wc -l`.

Le chemin complet vers le fichier à lire sera fourni via le premier argument de ligne de commande.

----------------------------------------------------------------------
## Conseils

Pour réaliser une opération de système de fichier il faudra utiliser le module `fs` provenant de la librairie standard de Node. Pour charger ce genre de module, ou tout autre module "global", on utilise la syntaxe suivante :

```js
var fs = require('fs')
```

Le module `fs` complet est maintenant disponible dans une variable appelée `fs`.

Toutes les opérations i/o synchrone (ou bloquante) du module `fs` finissent par 'Sync'. Pour lire un fichier, on utilisera `fs.readFileSync('/path/to/file')`. Cette méthode *retournera* un objet `Buffer` contenant le contenu complet du fichier.

La documentation du module `fs` est disponible dans le fichier :
  {rootdir:/doc/node_apidoc/fs.html}

`Buffer` objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. `Buffer` objects can be converted to strings by simply calling the `toString()` method on them. e.g. `var str = buf.toString()`.

La documentation sur les `Buffer`s est disponible dans le fichier :
  {rootdir:/doc/node_apidoc/buffer.html}

If you're looking for an easy way to count the number of newlines in a string, recall that a JavaScript `String` can be `.split()` into an array of substrings and that '\n' can be used as a delimiter. Note that the test file does not have a newline character ('\n') at the end of the last line, so using this method you'll end up with an array that has one more element than the number of newlines.

----------------------------------------------------------------------
