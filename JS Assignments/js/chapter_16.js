var myArray = ["Hello"];
myArray.push("World"); 
alert(myArray[myArray.length - 1]); 

var sampleAlphabet1 = ["h", "i", "j", "k"];
sampleAlphabet1.pop(); // Remove the last element from the array.
alert(sampleAlphabet1); //Displays the output an an alert.

var sampleAlphabet2 = ["h", "i", "j", "k"];
sampleAlphabet2.push(42); // Add a new element (number) to the end of the array
alert(sampleAlphabet2); // Display the modified array in the console

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift(); // Remove the first element of the array
console.log(sizes); // Display the modified array in the console

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3); // Add three number elements to the beginning of the array.
console.log(sizes); // Display the modified array in the console

var myArray = ["Element 1"];
myArray.unshift("New Element"); // Add a second element to the beginning of the array
alert(myArray[0]); // Display the new first element in an alert

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift(); // Remove the first element of the array
alert(sizes); // Alert the modified array

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3); // Add three number elements to the beginning of the array
alert(sizes); // Alert the modified array

var myArray = ["Element 1"];
myArray.unshift("New Element"); // Add a second element to the beginning of the array
alert(myArray[0]); // Alert the new first element

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L"); // Insert "L" between "M" and "XL"
alert(sizes); // Alert the modified array

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); // Copy the first 3 sizes to a new array
alert(regSizes); // Alert the new array

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "elephant", "giraffe"); // Add 2 elements after "dog" and remove "cat," "ox," and "duck"
alert(pets); // Alert the modified array

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); // Remove "cat" and "ox"
alert(pets); // Alert the modified array

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5); // Reduce it to "duck" and "frog"
alert(reducedPets); // Alert the reduced array
