var userInput=prompt("Enter something in capital: ")
var allLower = userInput.toLowerCase();
alert(allLower);

var x="academic";
x = x.toLowerCase();
alert(x);

var y="nihal";
y = y.toUpperCase();
alert(y);

var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();
alert(lowerCaseString);

var myArray = ["Apple", "Banana", "Cherry"];
var lowerCaseElement = myArray[0].toLowerCase();
alert(lowerCaseElement);

var myString = "Hello, World!";
alert(myString.toUpperCase());

var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
alert(cityName);