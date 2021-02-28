var readlineSync = require("readline-sync");

var name = readlineSync.question("What is your name kid? ");

console.log("Hey " + name + ", how did you end up in a place like this?");
