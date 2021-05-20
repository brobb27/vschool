// Catch me if you can!

// 1) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw Error(`One or more of the arguments is not a number`)
    }
    return x + y;
}

try {
sum(1, 2)
}
catch(err) {
    console.log(err)
}


// 2) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

const userOne = {username: `Jacob`, password: `ilovecheese`}

function login(username, password) {
    if (username != userOne.username || password != userOne.password) {
        throw Error(`Username or password is not valid doe!`)
    } else {
        console.log(`login successful!`)
    }
}

try {
    login(`Jacob`, `ilovecheese`)
}
catch(err) {
    console.log(err)
}