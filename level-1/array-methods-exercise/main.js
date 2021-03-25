// Array methods Exercise

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. through 10

vegetables.pop()
fruit.shift()
var indexOfOrange = fruit.indexOf("orange")
fruit.push(indexOfOrange)
var lengthOfVegies = vegetables.length
vegetables.push(lengthOfVegies)
var food = fruit.concat(vegetables)
food.splice(4, 2)
food.reverse()
var foodString = food.join(" ")



console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log(foodString)

// this should return a string that looks like this "3, pepper, 1, watermelon, orange, apple"