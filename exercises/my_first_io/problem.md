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

Les objets `Buffer` sont la manière Node de représenter efficacement des tableaux de données arbitraires (ASCII, binaire ou autre). Les `Buffer`s peuvent être convertis en strings en appelant leur méthode `toString()`. Exemple : `var str = buf.toString()`.

La documentation sur les objets `Buffer` est disponible dans le fichier :
  {rootdir:/doc/node_apidoc/buffer.html}

Pour une façon simple de compter le nombre de retours chariot dans une chaîne de caractère, une `String` Javascript peut être découpée (`.split()`) en un tableau de sous-chaînes et '\n' peut être utilisé comme délimiteur. Note : le fichier de test n'a pas de retour chariot en fin de fichier, cette méthode donnera donc un tableau d'une case de plus que le nombre de lignes dans le fichier.

----------------------------------------------------------------------
