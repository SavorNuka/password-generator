console.log(window.isSecureContext);
let passwordLength = 15
let generateButton = document.getElementById("generate-button")
let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")
let messageOfTheDay = document.getElementById("message-of-the-day")
let configElections = document.getElementsByClassName("config-container")

// Password option bool elections
let capLettersElected = true
let digitsElected = true
let symbolsElected = true

// Define password characters
let passwordCharacters = []
let lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let digitChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbolChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

// Adjust password characters used to generate options based on user configuration
function rebuildPasswordCharacters() {
    passwordCharacters = [...lowerLetters];
    
    if (capLettersElected) passwordCharacters.push(...upperLetters);
    if (digitsElected) passwordCharacters.push(...digitChars);
    if (symbolsElected) passwordCharacters.push(...symbolChars);
}

/* Set the checked state of elections */
function electedCheck() {

    capLettersElected = document.getElementById("config-cap").checked;
    digitsElected = document.getElementById("config-dig").checked;
    symbolsElected = document.getElementById("config-spc").checked;

    rebuildPasswordCharacters();
}

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
    electedCheck();

    let optionOneOut = passwordsOutput();
    let optionTwoOut = passwordsOutput();

    optionOne.textContent = "";
    optionTwo.textContent = "";

    let i = 0;
    let speed = 50;
    
    // Animate the generated password outputs
    function typingOutput() {
        if (i < optionOneOut.length) {
            optionOne.textContent += optionOneOut.charAt(i);
        }
        if (i < optionTwoOut.length) {
            optionTwo.textContent += optionTwoOut.charAt(i);
        }
        if (i < optionOneOut.length || i < optionTwoOut.length) {
            i++;
            setTimeout(typingOutput, speed);
        }
    }

    typingOutput();
});

async function copyOptionOne() {
    const copyPass1 = document.getElementById("option-one");
    const text1 = copyPass1.textContent;

    try {
        await navigator.clipboard.writeText(text1);
        alert("Password: '" + text1 + "' is ready to paste!");
    } catch (err) {
        console.error("Copy failed:", err);
        alert("Copy failed. See console.");
    }
}

async function copyOptionTwo() {
    const copyPass2 = document.getElementById("option-two");
    const text2 = copyPass2.textContent;

    try {
        await navigator.clipboard.writeText(text2);
        alert("Password: '" + text2 + "' is ready to paste!");
    } catch (err) {
        console.error("Copy failed:", err);
        alert("Copy failed. See console.");
    }
}

function quippyStart() {
    let greetingQuips = [
        "If your password is 'password123,' you're not fooling anyone. Not even a highly confused house cat trying to log in.", // Comedy gold
        "Your password should be like a good secret agent: untraceable, unforgettable (to you), and never written on a napkin.", 
        "A password manager is like a digital vault, and your brain is currently using a shoebox under the bed. Time to upgrade!",
        "If you use the same password for everything, when one site gets hacked, it's not a breach—it's a going-out-of-business sale for your identity.", // Slightly lame — should replace ahead of deployment
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
window.onbeforeunload = quippyStart(), electedCheck()

