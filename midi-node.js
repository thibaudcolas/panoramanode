#!/usr/bin/env node

'use strict';

var workshopper = require('workshopper');
var path = require('path');

workshopper({
    name: 'midi-node',
    title: 'Découvrons Node ! — Une série d\'exercices interactifs en français pour apprendre les bases de Node.',
    subtitle: '\x1b[23mPick one and press \x1b[3mEnter\x1b[23m',
    exerciseDir: path.resolve(__dirname, 'exercises'),
    appDir: __dirname,
    helpFile: path.resolve(__dirname, 'help.txt'), // doesn't seem to be working
    menuItems: [] // https://github.com/rvagg/workshopper/commit/cef8219ca2919964113c6daedd78a5db8404051b
});
