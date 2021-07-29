// Caesar Cipher

readline = require('readline-sync')

const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

const shift = parseInt(readline.question('How many letters would you like to shift? '))

const alpha = 'abcdefghijk lmnopqrstuvwxyz'
const alphaArr = alpha.split('')

const cipher = (input, shift) => {
    // Changes the string into an array
    const stringArr = input.split('')

    // Maps the new array and turns it into the character code shifts x amount of spots
    const cipheredArr = stringArr.map(letter => {
        
        // Checks to see if the letter is part of the alphabet
        const partOfAlpha = alphaArr.some(item => item === letter)

        if (letter === ' ') {
            return 32
        } else if (partOfAlpha === true) {
            return letter.charCodeAt() + shift
        } else {
            return letter.charCodeAt()
        }
    })

    // Maps array and turns the character code back to the character
    const newLetters = cipheredArr.map(letter => {
        if (letter > 122) {
            letter = letter - 26
        } 
        
        return String.fromCharCode(letter)
    })

    // Joins the letters back to one string
    const newPhrase = newLetters.join('')

    // Returns the ciphered phrase
    return newPhrase
}

console.log(cipher(input, shift))