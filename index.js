let passwordLength = 15
let result = ""

let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")

// Password option bool elections
let capLettersElected = true
let digitsElected = true
let symbolsElected = true

// Define password characters.
let passwordCharacters = []
let lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let digitChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbolChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

// Conditional logic for passwordCharacters
if (capLettersElected === true && digitsElected === true && symbolsElected === true) {
    passwordCharacters = passwordCharacters.concat(lowerLetters, upperLetters, digitChars, symbolChars)
} else if (capLettersElected === false && digitsElected === true && symbolsElected === true) {
    passwordCharacters = passwordCharacters.concat(lowerLetters, digitChars, symbolChars)
} else if (capLettersElected === false && digitsElected === false && symbolsElected === true) {
    passwordCharacters = passwordCharacters.concat(lowerLetters, symbolChars)
} else if (capLettersElected === false && digitsElected === false && symbolsElected === false) {
    passwordCharacters = passwordCharacters.concat(lowerLetters)
}

/* console.log(passwordCharacters) */

// Output a psuedorandom passwords strings
function generatePasswords () {
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        result += passwordCharacters[randomIndex];
    }
    return result
}
generatePasswords()

console.log(result)