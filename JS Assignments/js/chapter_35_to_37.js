// Initialize a string to store all the results
var results = "";

// 1. Code the first line of a function displayAlert.
function displayAlert() {
    // First line of the function
    results += "Function displayAlert executed.\n";
}

// 2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
function askName() {
    var userName = prompt("Enter name");
    results += "Hello, " + userName + "!\n";
}

// 3. Code a function that calls 2 other functions.
function callTwoFunctions() {
    function1();
    function2();
}

// 4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
function displayName() {
    var name = prompt("Enter name");
    results += "Hello, " + name + "!\n";
}

// Call the function
displayName();

// 5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
function concat(a, b, c) {
    // First line of the function
}

// 6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.
function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    results += "Concatenated strings: " + result + "\n";
}

// Call the function
concatenateStrings("Hello", " World!");

// 7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
function multiplyNumbers(num1, num2, num3) {
    var result = num1 * num2 * num3;
    results += "Result of multiplication: " + result + "\n";
}

// Call the function
multiplyNumbers(2, 3, 4);

// 8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    results += "Average: " + average + "\n";
}

// Call the function
calculateAverage([1, 2, 3, 4, 5]);

// 9. Write a JavaScript function that takes two parameters and returns their sum.
function addNumbers(num1, num2) {
    var sum = num1 + num2;
    results += "Sum: " + sum + "\n";
}

// Call the function
addNumbers(10, 20);

// 10. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    results += "Average: " + average + "\n";
}

// Call the function
calculateAverage([2, 4, 6, 8, 10]);

// 11. You have to capture the returned value from a function and store it in a variable?
var someFunctionResult = someFunction(); // Replace someFunction with the actual function call

// 12. Write a function which tells letter counts of (word).
function countLetters(word) {
    var count = word.length;
    results += "Letter count: " + count + "\n";
}

// Call the function
countLetters("JavaScript");

// 13. Write a function to set (year) in a date object.
function setDateYear(dateObj, year) {
    dateObj.setFullYear(year);
    results += "Date set to year: " + year + "\n";
}

var myDate = new Date();
setDateYear(myDate, 2023);

// 14. Write a function which tells the age of a person who was born on (dateOfBirth).
function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    results += "Age: " + age + " years\n";
}

// Call the function
calculateAge("1990-01-15");

// 15. Write a function which tells the presence of (word) in an array.
function checkPresence(word, array) {
    var isPresent = array.includes(word);
    results += "Is '" + word + "' present in the array? " + isPresent + "\n";
}

// Example array:
var names = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];

// Call the function to check if 'zaid' is present
checkPresence('zaid', names);

// 16. Write a function which repeats (letter) 10 times.
function repeatLetter(letter) {
    var repeated = letter.repeat(10);
    results += "Repeated letter: " + repeated + "\n";
}

// Call the function to repeat 'a' 10 times
repeatLetter('a');

// 17. Write a function which reverses an array.
function reverseArray(arr) {
    var reversed = arr.reverse();
    results += "Reversed array: " + reversed + "\n";
}

// Example array:
var myArray = ['a', 'b', 'c', 'd', 'e'];

// Call the function to reverse the array
reverseArray(myArray);

// Display all results in a single alert
alert(results);
