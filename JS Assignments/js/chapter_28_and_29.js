// 1. How do you convert a string to an integer in JavaScript?
// To convert a string to an integer, I can use parseInt() function.

// 2. Write a JavaScript function to convert the string "123" to an integer.
function convertStringToInt() {
    var str = "123";
    var intValue = parseInt(str);
    console.log(intValue);
  }
  
  convertStringToInt();
  
  // Output:
  // 123
  
  // 3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?
  // To convert a string containing a decimal number to a floating-point number, I can use parseFloat() function.
  
  // 4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?
  // I can use isNaN() function to check if a string can be successfully converted to a number.
  
  // Example:
  var str1 = "42";
  if (!isNaN(str1)) {
    var intVal = parseInt(str1);
    console.log(intVal);
  } else {
    console.log("Not a valid number.");
  }
  
  // Output:
  // 42
  
  // 5. How can you convert a number to a string in JavaScript?
  // To convert a number to a string, I can use the toString() method.
  
  // 6. Write a JavaScript function to convert the number 42 to a string.
  function convertNumberToString() {
    var num = 42;
    var str = num.toString();
    console.log(str);
  }
  
  convertNumberToString();
  
  // Output:
  // "42"
  
  // 7. Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?
  // I can convert a string representing a decimal number to an integer using parseInt(), but it will truncate the decimal part.
  
  // Example:
  var decimalStr = "3.14";
  var intVal = parseInt(decimalStr);
  console.log(intVal);
  
  // Output:
  // 3
  