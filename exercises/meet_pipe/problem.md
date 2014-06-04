Écris un programme qui accepte un fichier comme argument et qui utilise `fs.createReadStream()` pour transférer (__pipe__) le fichier en question dans `process.stdout`.

----------------------------------------------------------------------
## Conseils

`fs.createReadStream()` prend un fichier comme argument et retourne un stream de lecture sur lequel on peut appeler `.pipe()`. Voici un exemple de stream qui transfère ses données vers `process.stderr`:

```js
var fs = require('fs');
fs.createReadStream('data.txt').pipe(process.stderr);
```

Ce programme suivra le même principe, mais le nom du fichier proviendra de `process.argv[2]`, et le pipe sera fait vers stdout.

----------------------------------------------------------------------
