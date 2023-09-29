// 1. Code a statement that rounds a number represented by num to 4 places,
// converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
var num = 123.456789;
var newNum = num.toFixed(4).toString();
alert(newNum);

// Output (alert):
// "123.4568"

// 2. In a single statement, round a number represented by a variable to 2 places,
// convert it to a string, convert it back to a number, and assign it to the same variable.
var myNumber = 7.12345;
myNumber = parseFloat(myNumber.toFixed(2));
alert(myNumber);

// Output (alert):
// 7.12

// 3. Code the first line of an if statement that tests whether the number represented by num,
// rounded to 2 digits and converted to a string, has more than 4 characters in it.
var num = 42.12345;
var strNum = num.toFixed(2).toString();
if (strNum.length > 4) {
  alert("Number has more than 4 characters.");
} else {
  alert("Number has 4 or fewer characters.");
}

// Output (alert):
// "Number has more than 4 characters."

// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal places and converted to a string.
var decimalNumber = 123.456789;
var roundedStr = decimalNumber.toFixed(2).toString();
alert(roundedStr);

// Output (alert):
// "123.46"
