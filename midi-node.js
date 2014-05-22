#!/usr/bin/env node

'use strict';

var workshopper = require('workshopper');
var path = require('path');

workshopper({
    name: 'midi-node',
    title: 'Découvrons les bases de Node : TODO',
    subtitle: '\x1b[23mSélectionner un éxercice et presser \x1b[3mEntrée\x1b[23m pour démarrer',
    exerciseDir: path.resolve(__dirname, 'exercises'),
    appDir: __dirname,
    helpFile: path.resolve(__dirname, 'help.txt'), // doesn't seem to be working
    menuItems: [] // https://github.com/rvagg/workshopper/commit/cef8219ca2919964113c6daedd78a5db8404051b
});
