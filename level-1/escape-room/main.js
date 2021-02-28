var readlineSync = require("readline-sync");

function playGame() {
	var firstResponse = readlineSync.question(
		"What's your move: 1. Put your hand in the hole 2. Find the key, or 3. Open the door (Please respond with a 1, 2, or 3): "
	);

	if (firstResponse == 1) {
		console.log(
			"You have died. You really stuck your hand in a random dark hole? lawlz "
		);
		var diedResponse = readlineSync.question(
			"Would you like to try agian? (y/n): "
		);
		if (diedResponse == "y") {
			playGame();
		} else {
			console.log("Okay bye... Quitter");
		}
	} else if (firstResponse == 2) {
		var secondResponse = readlineSync.question(
			"You have found the key. Now what would you like to do? 1. Put your hand in the hole, or 3. Open the door: "
		);
		if (secondResponse == 3) {
			console.log(
				"Congratulations! You have escaped the escape room! Yay.. Wahoo.. Go conquer the world now or something useful."
			);
		} else if (secondResponse == 1) {
			console.log(
				"You died! Really? You thought sticking your hand in a random dark hole was a good idea? "
			);
			var diedResponse = readlineSync.question(
				"Would you like to try agian? (y/n): "
			);
			if (diedResponse == "y") {
				playGame();
			} else {
				console.log("Okay bye... Quitter");
			}
		} else {
			var invalidResponse = readlineSync.question(
				"I am sorry " +
					secondResponse +
					" is not a valid response. Would you like to try again? (y/n): "
			);
			if (invalidResponse == "y") {
				playGame();
			} else {
				console.log("Okay bye... Quitter");
			}
		}
	} else if (firstResponse == 3) {
		console.log("Sorry the door is locked! Maybe try finding the key first? ");
		var lockedResponse = readlineSync.question(
			"Would you like to try and find the key? (y/n): "
		);
		if (lockedResponse == "y") {
			playGame();
		} else {
			console.log("Okay bye... Quitter");
		}
	} else {
		var invalidResponse = readlineSync.question(
			"I am sorry " +
				firstResponse +
				" is not a valid response. Would you like to try again? (y/n): "
		);
		if (invalidResponse == "y") {
			playGame();
		} else {
			console.log("Okay bye... Quitter");
		}
	}
}

playGame();

// Code that didn't work

// switch (firstResponse) {
// 	case "1":
// 		console.log("You have died. Try again.");
// 		break;
// 	case "2":
// 		var secondResponse = readlineSync.question(
// 			"You now have the key. Now what would you like to do? 1. Put hand in hole, or 3. Open the door "
// 		);
// 	case "1":
// 		console.log("You have died. Try again.");
// 		break;
// 	case "3":
// 		console.log("Congratualtions! You have escaped the room!");
// 		break;
// 	case "3":
// 		console.log("The door is locked. Try again");
// 		break;
// 	default:
// 		console.log("Invalid option. Please try again.");
// }
