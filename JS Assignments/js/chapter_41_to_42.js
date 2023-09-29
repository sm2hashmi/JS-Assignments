var i = 0;

while (i < 2) {
    // This loop runs twice but does nothing
    i++;
}

var animals = ["horse", "ox", "cow", "pig", "duck"];
var i = 0;

while (i < animals.length) {
    if (animals[i] === "pig") {
        alert("Found it!");
        break;
    }
    i++;
}

var i = 1;

while (i <= 10) {
    alert(i);
    i++;
}

var userInput;
while (true) {
    userInput = prompt("Enter a number:");
    if (userInput !== null) {
        alert("You entered: " + userInput);
        break;
    }
}

var number = parseInt(prompt("Enter a number:"));

while (!isNaN(number)) {
    if (number % 2 === 0) {
        alert(number + " is even.");
    } else {
        alert(number + " is odd.");
    }
    number = parseInt(prompt("Enter another number (or press Cancel to exit):"));
}

var randomNumber = Math.floor(Math.random() * 100) + 1;
var guess;
var attempts = 0;

while (true) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else {
        attempts++;

        if (guess === randomNumber) {
            alert("Congratulations! You guessed the number " + randomNumber + " in " + attempts + " attempts.");
            break;
        } else if (guess < randomNumber) {
            alert("Try a higher number.");
        } else {
            alert("Try a lower number.");
        }
    }
}

// Using a while loop
var countdown = 5;

while (countdown > 0) {
    alert("Countdown: " + countdown);
    countdown--;
}

// Using a do-while loop
var countdown2 = 5;

do {
    alert("Countdown 2: " + countdown2);
    countdown2--;
} while (countdown2 > 0);
