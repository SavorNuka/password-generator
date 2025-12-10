let passwordLength = 16 * 2
let generateButton = document.getElementById("generate-button")
let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")
let messageOfTheDay = document.getElementById("message-of-the-day")

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
} else if (capLettersElected === true && digitsElected === false && symbolsElected === true) {
    passwordCharacters = passwordCharacters.concat(lowerLetters, upperLetters, symbolChars)
} else if (capLettersElected === true && digitsElected === true && symbolsElected === false) {
    passwordCharacters = passwordCharacters.concat(lowerLetters, upperLetters, digitChars)
} else if (capLettersElected === false && digitsElected === true && symbolsElected === true) {
    passwordCharacters = passwordCharacters.concat(lowerLetters, digitChars, symbolChars)
} else if (capLettersElected === true && digitsElected === false && symbolsElected === false) {
    passwordCharacters = passwordCharacters.concat(lowerLetters, upperLetters)
} else if (capLettersElected === false && digitsElected === true && symbolsElected === false) {
    passwordCharacters = passwordCharacters.concat(lowerLetters, digitChars)
} else if (capLettersElected === false && digitsElected === false && symbolsElected === true) {
    passwordCharacters = passwordCharacters.concat(lowerLetters, symbolChars)
} else if (capLettersElected === false && digitsElected === false && symbolsElected === false) {
    passwordCharacters = passwordCharacters.concat(lowerLetters)
}
// Add remaining possible permutations

/* console.log(passwordCharacters) */

// Output a psuedorandom passwords strings
function passwordsOutput() {
    let result = ""
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        result += passwordCharacters[randomIndex];
    }
    return result
}

// Initialize event listener for generate button
generateButton.addEventListener("click", function() {
    let optionOneOut = passwordsOutput();
    let optionTwoOut = passwordsOutput();
    var i = 0;
    var speed = 50;
/*     optionOne.textContent = optionOneOut; */
/*     optionTwo.textContent = optionTwoOut; */
    
    // Animate the generated password outputs
    function typingOutput() {
        if (i < optionOneOut.length) {
        optionOne.textContent += optionOneOut.charAt(i);
        i++;
        setTimeout(typingOutput, speed);
      }
      if (i < optionTwoOut.length) {
        optionTwo.textContent += optionTwoOut.charAt(i);
        i++;
      }
    } typingOutput()
    // Reset element outputs
    optionOne.textContent = "";
    optionTwo.textContent = "";
});

function quippyStart() {
    let greetingQuips = [
        "If your password is 'password123,' you're not fooling anyone. Not even a highly confused house cat trying to log in.", // Comedy gold
        "Your password should be like a good secret agent: untraceable, unforgettable (to you), and never written on a napkin.", 
        "A password manager is like a digital vault, and your brain is currently using a shoebox under the bed. Time to upgrade!",
        "If you use the same password for everything, when one site gets hacked, it's not a breach—it's a going-out-of-business sale for your identity.",
        "Choosing your pet's name as your password means you're just asking for a cyber-catastrophe. Good job, Mittens1!",
        "The minimum password requirement these days is: one uppercase, one lowercase, one number, one symbol, and a blood sample from a unicorn.",
        "Change your password regularly... Your old one is getting lonely and is thinking about running away with a hacker.",
        "Two-factor authentication (2FA) is like giving your bank account a bouncer. Sure, it's annoying, but nobody gets in without permission.",
        "If a website says your password is 'too common,' it's judging you. It knows you're using your favorite pizza topping.",
        "Don't recycle passwords. They don't magically become stronger the second time around; they just become tired, predictable targets.",
        "Treat passwords like underwear... change it often and don't share it with strangers."
    ]
    let randomGreeting = greetingQuips[Math.floor(Math.random() * greetingQuips.length)];
    messageOfTheDay.textContent = randomGreeting;
    }

console.log(messageOfTheDay)
window.onbeforeunload = quippyStart();