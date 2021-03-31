// This is fizzbuzz

// This creats a for loop that prints the numbers 1-100

let tally = {
    fizzBuzzCount: 0,
    fizzCount: 0,
    buzzCount: 0,
}

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
        tally.fizzBuzzCount++
    } else if (i % 3 === 0) {
        console.log("Fizz")
        tally.fizzCount++
    } else if (i % 5 === 0) {
        console.log("Buzz")
        tally.buzzCount++
    } else {
        console.log(i)
    }
    
}


console.log(tally)
