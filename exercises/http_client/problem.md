Écris un programme qui réalise une requête HTTP GET sur une URL passée comme premier argument de ligne de commande. Affiche la String du contenu de **chaque** évènement "data" de la réponse sur une ligne de la console (stdout)

----------------------------------------------------------------------
## Conseils

Pour cet exercice il faudra utiliser le module core `http`.

La documentation du module `http` est disponible dans le fichier :
  {rootdir:/doc/node_apidoc/http.html}

La méthode `http.get()` est un raccourci pour les requêtes GET simples, et peut être utilisée dans cet exercice. Le premier argument de `http.get()` est l'URL à requêter, et le second le callback de traitement de la réponse.

Contrairement aux autres callback, celui-ci a la signature :

```js
function callback (response) { /* ... */ }
```

Où l'objet `response` est un **Stream** Node. Les Streams peuvent être considérés comme des objets émettant des évènements, les trois évènements les plus importants étant : "data", "error" et "end". On écoute un évènement ainsi :

```js
stream.on("data", function (data) { /* ... */ })
```

"data" est émis quand une poriton de donnée est disponbile et peut être traitée. La taille de la portion dépend de la source de données sous-jacente.

L'objet / Stream `response` obtenu de `http.get()` a aussi une méthode `setEncoding()`. Elle peut être appelée avec "utf8" pour que l'évènement "data" émette des Strings plutôt que des `Buffer`s Node qu'il faudrait ensuite explicitement convertir.

----------------------------------------------------------------------
