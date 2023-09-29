var product_cost = 3.45;

var nameofBand;

var student_age=19;

var firstName = "John";
var lastName = "Doe";

var fullName = firstName + lastName;
console.log(fullName); 

// Legal Variable Names
var legalVariableNames = [
    "myVariable",
    "myVar",
    "my_variable",
    "_privateVariable",
    "$currency",
    "variable123"
  ];

  // Illegal Variable Names
var illegalVariableNames = [
    "123variable",       // Cannot start with a number
    "my-variable",       // Hyphens are not allowed
    "my variable",       // Spaces are not allowed
    "my.variable",       // Dots are not allowed
    "var"                // Reserved keywords cannot be used as variable names
  ];
  
  console.log("Legal Variable Names:");
  console.log(legalVariableNames);
  
  console.log("\nIllegal Variable Names:");
  console.log(illegalVariableNames);
