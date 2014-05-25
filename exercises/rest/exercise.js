"use strict";

var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var setupBasics = require('../../lib/setup-basics');
var traceurProcessor = require('../../lib/traceur-processor');
var verifyProcessor = require("./verify-processor");

module.exports = verifyProcessor(traceurProcessor(setupBasics(filecheck(exercise))));
