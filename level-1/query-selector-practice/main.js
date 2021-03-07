// This Code Work

var listItems = document.getElementsByClassName("sensitiveInfo");

for (var i = 0; i < listItems.length; i++) {
	listItems[i].innerHTML = "** sensitive Information **";
}

// this code works too

document.querySelector("#sensitiveList").style.color = "red";
