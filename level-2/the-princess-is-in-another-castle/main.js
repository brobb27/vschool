// The Princess is in Another Castle!

const readlineSync = require(`readline-sync`);

// This is a class for the player

class Player {
    constructor() {
        this.name = ''
        this.totalCoins = 0
        this.status = 'Big'
        this.hasStar = false
        this.gameActive = true
    }

    // This set name method

    setName() {
        const userSelection = readlineSync.question(`Choose your character! (m for Mario or l for Luigi): `)
        if (userSelection === 'm') {
            this.name = `Mario`
        } else if (userSelection === `l`) {
            this.name = `Luigi`
        } else {
            console.log(`I am sorry that is not a valid option. Try again.`)
            this.setName()
        }
    }

    // This is the gotHit method

    gotHit() {
        if (this.hasStar === true) {
            console.log(`Your star protected you!`)
            this.hasStar = false
        } else if (this.hasStar === false) {
            if (this.status === `Powered Up`) {
                this.status = 'Big'
            } else if (this.status === 'Big') {
                this.status = `Small`
            } else if (this.status === `Small`) {
                this.status = `Dead`
                this.gameActive = false
            }
        }
    }

    // This is the gotPowerUp method

    gotPowerUp() {
        if (this.status === `Powered Up` && this.hasStar === true) {
            console.log(`You are all powered up`)
        } else if (this.status === 'Powered Up') {
            console.log(`Congratulations! You got a star!`)
            this.hasStar = true
        } else if (this.status === `Big`) {
            this.status = `Powered Up`
        } else if (this.status === `Small`) {
            this.status = `Big`
        }

    }

    // This is the addCoin method

    addCoin() {
        this.totalCoins++
    }

    // This prints the player information

    print() {
        console.log(`Name: ${this.name} 
Status: ${this.status} 
Total Coins: ${this.totalCoins}
`
)
    }



}

// This creates a new player and lets the user choose between Mario & Luigi

const playerOne = new Player()
playerOne.setName()
playerOne.print()

// This creates a random number

function randomNumberGen(num) {
    return Math.floor(Math.random() * num)
}

// This determines if the player got hit, got a power up, or added a coin

function runCode() {
     const number = randomNumberGen(3)

    if (playerOne.gameActive === true) {
        playerOne.print()
        if (number === 0) {
            playerOne.gotHit()
        } else if (number === 1) {
            playerOne.gotPowerUp()
        } else if (number === 2) {
            playerOne.addCoin()
        }
    } else {
        clearInterval(intervalId)
        console.log(`You lost the game!`)
        playerOne.print()
    }
}

// This is the interval

let intervalId

intervalId = setInterval(runCode, 1000)



