var variable1 = 5;
var variable2 = 7;

if (variable1 >= variable2) {
  alert("Variable 1 is greater than or equal to Variable 2");
} else {
  alert("Variable 1 is less than Variable 2");
}


var marks = parseFloat(prompt("Enter your marks:"));

if (!isNaN(marks)) {
  var percentage = (marks / 100) * 100; // Assuming 100 is the maximum marks
  var grade;

  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  alert("Your percentage is " + percentage.toFixed(2) + "%, and your grade is " + grade);
} else {
  alert("Invalid input. Please enter valid marks.");
}

var a=parseInt(prompt("Enter Number"));
if (a === 10) {
    alert("a is 10");
  } else {
    alert("The correct value of a is 10"); // You can fill in the blank with the correct value
  }


  var city = prompt("Enter a city:");

  if (city === "Karachi") {
    alert("Acknowledging it's Karachi.");
  } else if (city === "Lahore") {
    alert("Acknowledging it's Lahore.");
  } else {
    alert("City not recognized.");
  }