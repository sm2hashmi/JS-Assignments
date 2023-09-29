var firstName = prompt("Enter first name");

var country = prompt("State your Country's Name", "China");

var yourName = prompt("Enter Your Name");

var userInput = prompt("Please enter something:", "Default Value");

var firstVariable = "What is your favorite color?";
var secondVariable = "Blue";
var thirdVariable = prompt(firstVariable, secondVariable);

var promptMessage = "What is your favorite food?";
var defaultResponse = "Pizza";
var userResponse = prompt(promptMessage, defaultResponse);

if (userResponse !== null) {
  alert("You entered: " + userResponse);
} else {
  alert("You canceled the prompt.");
}
