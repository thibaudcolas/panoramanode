Votre script recevra une passphrase sur `process.argv[2]` et des données encryptées en 'aes256' seront envoyées sur stdin. Il devra décrypter les données et streamer le résultat sur `process.stdout`.

----------------------------------------------------------------------
## Conseils

Il faut utiliser l'API `crypto.createDecipher()` du core de Node pour résoudre cet exercice. Voici un exemple :

    var crypto = require('crypto');
    var stream = crypto.createDecipher('RC4', 'robots');
    stream.pipe(process.stdout);
    stream.write(Buffer([ 135, 197, 164, 92, 129, 90, 215, 63, 92 ]));
    stream.end();

Au lieu d'appeler `.write()` manuellement, il faudra faire un pipe de stdin dans notre stream de décryptage.

----------------------------------------------------------------------
