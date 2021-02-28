var readlineSync = require("readline-sync");

var num1 = readlineSync.question("Please enter your first number: ");

var num2 = readlineSync.question("Please enter your second number: ");

var opperation = readlineSync.question(
	"Please enter the operation you would like to preform ('add', 'sub', 'mul', 'div'): "
);

function nodeCalculation() {
	if (opperation === "add") {
		var addResult = Number(num1) + Number(num2);
		console.log(addResult);
	} else if (opperation === "sub") {
		console.log(num1 - num2);
	} else if (opperation === "mul") {
		console.log(num1 * num2);
	} else if (opperation === "div") {
		console.log(num1 / num2);
	} else {
		console.log("invalid opperation please try again");
	}
}

nodeCalculation();
