// This is The Colossal Adventer Console RPG

var readlineSync = require('readline-sync');

// This greets the player and stores their name
const playersName = readlineSync.question(`Greetings Adventurer, we are looking for a brave soul to kill some enemies and save the king's puppy! Before we send you out, please give us your name so we know what name to put on the statue... or gravestone: `)
console.log(`Alright ${playersName}, let's get started! You will need to WALK to get one step closer to saving the puppy!`)

// THIS IS THE CHARACTER INFORMATION

// This stores the players information
const player = {
    name: playersName,
    hp: 100,
    items: ['knife']
}

// This function determines the random attack power of the character
function randomAttackPower(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// This calculates the random amount of damage the player does everytime
function playerAttackPower() {
    return randomAttackPower(30, 61)
}

// Recreation of Enemies using a constructor function to more easily call random attack damage
function enemyCreation(name, hp, item, damageMin, damageMax) {
    this.name = name
    this.hp = hp
    this.item = item
    this.characterAttackPower = function(){ 
        return randomAttackPower(damageMin, damageMax)
    }
}

// Creates the enemy "The Dragon"
const dragon = new enemyCreation(`The Dragon`, 110, `Fire Breath`, 15, 71)

// Creates the enemy "Gator Man"
const gatorMan = new enemyCreation(`Gator Man`, 50, `Gator Tooth`, 40, 101)

// Creates the enemy "Sam The Slug"
const samSlug = new enemyCreation(`Sam The Slug`, 170, `slime`, 5, 21)

const enemyArray = [dragon, gatorMan, samSlug]

// console.log(enemyArray)

// THESE FUNCTIONS RUN THE GAME

// This function is random number selector
function randomSelector(num) {
    return Math.floor(Math.random() * num)
}

// This function allows the user to run or attack
function runOrAttack(enemy) {
    let flightOrFight = readlineSync.question(`Do you want to try fight ${enemy.name}? Or do you want to run? (enter "a" to attack and "r" to run): `)

    if (flightOrFight === `a`) {
        attack(enemy);
    } else if (flightOrFight === `r`) {
        console.log("wussy")
    } else {
        console.log(`I am sorry ${flightOrFight} is not an option, please try again.`)
        runOrAttack(enemy);
    }
}

//This is the attack function
function attack(enemy) {
    let playerFirstAttack = playerAttackPower();
    let playerSecondAttack = playerAttackPower();
    let playerThirdAttack = playerAttackPower();

    console.log(`Nice shot, you dealt ${playerFirstAttack} damage to ${enemy.name}!`)

    let enemyHealth = enemy.hp - playerFirstAttack

    console.log(`The enemy now has ${enemyHealth} hp left`)

    console.log(`You got him again, you dealt ${playerSecondAttack} damage to ${enemy.name}`)
    
}

//This is the run function




// This function runs the game

function playGame() {

    // // create a while loop
    // while(isAlive === true) {
    //     if(player.hp === 0) {
    //         isAlive = false
    //     }
    // }

    // This function allows the player to walk the walk
    function walk () {
        const walking = readlineSync.question(`Please enter "w" to walk: `)

        // This conditional statement calcuates if they run into an enemy
        if (walking === `w`) {

            // This gives them a 1/3 chance of running into an enemy
            let chance = randomSelector(3)
            if (chance === 0) {

                // This randomly decides the enemy
                let enemySelector = randomSelector(3)
                if (enemySelector === 0) {
                    console.log(`It looks like ${dragon.name} has decided to land in your path!`)
                    runOrAttack(dragon);
                } else if (enemySelector === 1) {
                    console.log(`It looks like ${gatorMan.name} is trying to sneak attack you from the swamp!`)
                    runOrAttack(gatorMan);
                } else if (enemySelector === 2) {
                    console.log(`It looks like ${samSlug.name} has plopped down in front of you!`)
                    runOrAttack(samSlug);
                }
                
            } else {
                walk();
            }
            
        } else if (walking != `w`) {
            console.log(`I am sorry "${walking}" is not a valid move, Please try again.`)
            walk();
        }

    }
    walk();

}

playGame()




// THIS CODE EITHER DIDN'T WORK, DIDN'T SERVE IT'S PURPOSE, OR WAS REFACTORED!

// // This stores the information for the enemy "Dragon"
// const dragon = {
//     name: `The Dragon`,
//     hp: 110,
//     attackPower: randomAttackPower(15, 71),
//     item: 'Fire Breath'
// }

// // This stores the information for the enemy "Gator Man"
// const gatorMan = {
//     name: 'Gator Man',
//     hp: 50,
//     attackPower: randomAttackPower(40, 101),
//     item: 'Gator Tooth'
// }

// // This stores the information for the enemy "Sam The Slug"
// const samSlug = {
//     name: `Sam The Slug`,
//     hp: 170,
//     attackPower: randomAttackPower(4, 21),
//     item: `Slime`
// }