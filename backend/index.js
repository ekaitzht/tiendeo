#!/usr/bin/env node

const simulateDrones = require("./simulationDrones.js");

const input = `5 5
3 3 E
L
3 3 E
MMRMMRMRRM
1 2 N
LMLMLMLMMLMLMLMLMM`;

console.log(simulateDrones(input));
