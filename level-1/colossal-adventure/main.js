// This is The Colossal Adventer Console RPG

var readlineSync = require('readline-sync');

// This greets the player and stores their name
const playersName = readlineSync.question(`Greetings Adventurer, we are looking for a brave soul to kill some enemies and save the king's puppy! Before we send you out, please give us your name so we know what name to put on the statue... or gravestone: `)
console.log(`Alright ${playersName}, let's get started! You will need to WALK to get one step closer to saving the puppy! Please enter "info" at anytime to get your player information.`)

// THIS IS THE CHARACTER INFORMATION

// This stores the players information
const player = {
    name: playersName,
    hp: 110,
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
const dragon = new enemyCreation(`The Dragon`, 105, `Fire Breath`, 25, 61)

// Creates the enemy "Gator Man"
const gatorMan = new enemyCreation(`Gator Man`, 50, `Gator Tooth`, 20, 71)

// Creates the enemy "Sam The Slug"
const samSlug = new enemyCreation(`Sam The Slug`, 170, `slime`, 9, 26)

const enemyArray = [dragon, gatorMan, samSlug]

// THESE FUNCTIONS RUN THE GAME

// This function is random number selector
function randomSelector(num) {
    return Math.floor(Math.random() * num)
}

// This function allows the user to run or attack
function runOrAttack(enemy) {
    let fightOrFlight = readlineSync.question(`Do you want to attack ${enemy.name}? Or do you want to run? (enter "a" to attack and "r" to run): `)

    if (fightOrFlight === `a`) {
        attack(enemy);
    } else if (fightOrFlight === `r`) {
        run(enemy);
    } else if (fightOrFlight === `info`) {
        console.log(player)
        runOrAttack(enemy);
    } else {
        console.log(`I am sorry ${fightOrFlight} is not an option, please try again.`)
        runOrAttack(enemy);
    }
}

// This is the attack function
function attack(enemy) {
    // Attack damage of the respective parties
    let playerAttackDmg = playerAttackPower();
    let enemyAttackDmg = enemy.characterAttackPower();

    // Place holder for their health points
    let playersLifePoints = player.hp
    let enemysLifePoints = enemy.hp

    // equation to see how much damage they dealt and their remaining health points
    let playersNewHp = playersLifePoints - enemyAttackDmg
    let enemysNewHp = enemysLifePoints - playerAttackDmg

        if (playersNewHp > 0 && enemysNewHp > 0) {
            console.log(`Nice shot, you dealt ${playerAttackDmg} damage to ${enemy.name}!`)
            console.log(`${enemy.name} struck back and dealt ${enemyAttackDmg} damage!`)
            console.log(`You now have ${playersNewHp} hp and ${enemy.name} has ${enemysNewHp} hp left!`)
            player.hp = playersNewHp
            enemy.hp = enemysNewHp
            runOrAttack(enemy)
        } else if (playersNewHp > 0 && enemysNewHp <= 0) {
            console.log(`${enemy.name} attacked and dealt ${enemyAttackDmg} damage leaving you with ${playersNewHp} hp, BUT all is well brave Soldier because you struck back for ${playerAttackDmg} damage and defeated ${enemy.name}. You have been rewarded with 50 hp and ${enemy.item}!`)
            enemy.hp = enemysNewHp
            player.hp = playersNewHp + 50;
            player.items.push(enemy.item)
        } else if (playersNewHp <= 0 && enemysNewHp > 0) {
            console.log(`${player.name}, I am sorry, ${enemy.name} dealt a wopping ${enemyAttackDmg} damage and killed you. You fought the good fight and perished. In your honor we have done... nothiing... because you lost!`)
            player.hp = playersNewHp
        } else if (playersNewHp <= 0 && enemysNewHp <= 0) {

            const lifeOrDeath = randomSelector(3) 
            if (lifeOrDeath === 0) {
                console.log(`This is awkward... You and ${enemy.name} struck eachother at the exact same time and killed eachother... LOL better luck next time!`)
                player.hp = playersNewHp
            } else {
                console.log(`${player.name}, you got lucky and struck first for ${playerAttackDmg} damage and killed ${enemy.name}! because it was so close you will only be rewarded 20 hp along with ${enemy.item}!`)
                enemy.hp = enemysNewHp
                player.hp = playersLifePoints + 15
                player.items.push(enemy.item)
            }
        }

}
    
//This is the run function
function run(enemy) {
    let escapeChance = randomSelector(2)
    let enemyAttackDmg = enemy.characterAttackPower();

    let playersLifePoints = player.hp
    let playersNewHp = playersLifePoints - enemyAttackDmg

    if (escapeChance === 0 && playersNewHp > 0) {
        console.log(`Congrats you got away from ${enemy.name}... This time... Not very "hero like" to run though.`)
    } else if (escapeChance === 1 && playersNewHp > 0) {
        console.log(`You didn't get away and ${enemy.name} dealt ${enemyAttackDmg}! You now have ${playersNewHp} hp left!`)
        player.hp = playersNewHp
        runOrAttack(enemy);
    } else if (playersNewHp <= 0) {
        console.log(`${player.name}, I am sorry, you did not escape and ${enemy.name} dealt a wopping ${enemyAttackDmg} damage and killed you. You fought the good fight and perished. In your honor we have done... nothiing... because you lost!`)
        player.hp = playersNewHp
    }
}



// This function runs the game

function playGame() {

    // // create a while loop
    while (player.hp > 0) {
        walk();
    }

    // This function allows the player to walk the walk
    function walk () {
        const walking = readlineSync.question(`Please enter "w" to walk: `)

        // This conditional statement calcuates if they run into an enemy
        if (walking === `w`) {

            // This gives them a 1/3 chance of running into an enemy
            let chance = randomSelector(3)
            if (chance === 0) {

                // Randomly decides the enemy
                let enemySelector = randomSelector(3)
                if (enemySelector === 0 && dragon.hp > 0) {
                    console.log(`It looks like ${dragon.name} has decided to land in your path!`)
                    runOrAttack(dragon);
                } else if (enemySelector === 1 && gatorMan.hp > 0) {
                    console.log(`It looks like ${gatorMan.name} is trying to sneak attack you from the swamp!`)
                    runOrAttack(gatorMan);
                } else if (enemySelector === 2 && samSlug.hp > 0) {
                    console.log(`It looks like ${samSlug.name} has plopped down in front of you!`)
                    runOrAttack(samSlug);
                } else if (enemySelector >=0 && dragon.hp <= 0 && gatorMan.hp <= 0 && samSlug.hp <= 0) {
                    console.log(`${player.name}, You have done it!! You killed all the enemies, walked the beaten path, and found the King's Puppy! There will be legends about you and statues built of you! You're a hero kid!`)
                    player.hp = 0
                }               
            } 
            
        } else if (walking === `info`){
            console.log(player)
        } else if (walking =! `info` && walking != `w`) {
            console.log(`I am sorry "${walking}" is not a valid move, Please try again.`)
        }

    }

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


//     console.log(`Nice shot, you dealt ${playersAttacks[0]} damage to ${enemy.name}!`)
//     console.log(`${enemy.name} struck back for ${enemysAttacks[0]}`)

//     let enemyHealth = enemy.hp - playersAttacks[0]
//     player.hp = player.hp - enemysAttacks[0]

//     console.log(`${enemy.name} now has ${enemyHealth} hp left`)

//     // player.hp = player.hp - enemyFirstAttack

//     console.log(`You got him again, you dealt ${playersAttacks[1]} damage to ${enemy.name}`)
