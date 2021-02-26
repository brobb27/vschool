// var something = document.getElementById( "click", enter function here)

/* if (document.getElementById("yourName") && document.getElementById("loverName") == "") {
    alert("Please enter your names") 
} else {} */

// This is the love Calculator

var calculate = document.getElementById("calculation");
calculate.addEventListener("click", function () {
	var loveScore = Math.random() * 100;
	loveScore = Math.floor(loveScore) + 1;

	if (loveScore === 100) {
		alert(
			"It looks like y'all are " +
				loveScore +
				"% compatible, you are literally perfect for eachother!"
		);
	} else if (loveScore >= 70) {
		alert(
			"It looks like y'all are " +
				loveScore +
				"% compatible, it's going to be a great love story!"
		);
	} else if (loveScore > 40) {
		alert(
			"It looks like y'all are " +
				loveScore +
				"% compatible, I wish y'all the best!"
		);
	} else {
		alert(
			"It looks like y'all are " +
				loveScore +
				"% compatible, you might want to rethink this one..."
		);
	}
});

// This is the child counter

var childCounter = document.getElementById("childCounter");
childCounter.addEventListener("click", function () {
	var howMany = [
		"1? That's it?",
		"2? Hey the first one will have a friend!",
		"3? I mean it is a lucky number.",
		"4? Not a bad number for amusement parks.",
		"5? One of them might feel left out.",
		"6? You're going to need a big house or some bunk beds.",
		"7? Is your significant other okay with this?",
		"8? Okay that's probably enough... tap the button again and let's this again.",
	];
	for (i = 0; i < howMany.length; i++) {
		console.log(i);
		alert(howMany[i]);
	}
});

// This is an object that has nothing to do with my website

var favTesla = {
	model: 3,
	type: {
		motors: "dual",
		battery: "long range",
	},
	isFast: true,
	colorsAvailable: ["red", "white", "blue", "black", "grey"],
};

console.log(favTesla.model);
console.log(favTesla["type"].motors);

// Code that didn't work & questions

/*

How do I stop the function from running if the required fields aren't filled?
Can I use adEventListener's into if/else statements?


var yourName = document.getElementById("yourName");
var loverName = document.getElementById("loverName");
var calculate = document.getElementById("calculation");

if (calculate.addEventListener("click")) while (yourName.addEventListener("invalid")) {
    alert("Please fill out your name")
} else { function () {
	var loveScore = Math.random() * 100;
	loveScore = Math.floor(loveScore) + 1;

	if (loveScore === 100) {
		alert(
			"It looks like y'all are " +
				loveScore +
				"% compatible, you are literally perfect for eachother!"
		);
	} else if (loveScore >= 70) {
		alert(
			"It looks like y'all are " +
				loveScore +
				"% compatible, it's going to be a great love story!"
		);
	} else if (loveScore > 40) {
		alert(
			"It looks like y'all are " +
				loveScore +
				"% compatible, I wish y'all the best!"
		);
	} else {
		alert(
			"It looks like y'all are " +
				loveScore +
				"% compatible, you might want to rethink this one..."
		);
	}
}}; */
