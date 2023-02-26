const xyz = require('./people');
// console.log(xyz);        //If we use exports in other file it returns the value exported

// console.log(people)   //Results in people undefined.

// console.log(xyz.ages);

const os = require('os');

console.log(os.platform(), os.homedir());