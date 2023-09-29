// Declare a global variable
var globalVar = "I am a global variable";

// Function that demonstrates a local variable
function localVariableDemo() {
    // Declare a local variable
    var localVar = "I am a local variable";

    // Access and display both global and local variables
    console.log("Inside the function:");
    console.log("Global variable: " + globalVar);
    console.log("Local variable: " + localVar);
}

// Call the function
localVariableDemo();

// Attempt to access the local variable from outside the function (will result in an error)
console.log("Outside the function:");
console.log("Global variable: " + globalVar);
console.log("Local variable: " + localVar); // This will throw an error because localVar is not defined outside the function

// Access the global variable from outside the function
console.log("Accessing the global variable outside the function: " + globalVar);
