// 1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
var myDate = new Date();
alert(myDate);

// 2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
var currentDate = new Date();
var dateStr = currentDate.toString();
alert(dateStr);

// 3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.
var someDate = new Date();
var dayOfWeek = someDate.getDay();
alert(dayOfWeek);

// 4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
var currentDate = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = daysOfWeek[currentDate.getDay()];
alert(currentDay);

// 5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
var fullDate = new Date();
var dateParts = {
  year: fullDate.getFullYear(),
  month: fullDate.getMonth(),
  day: fullDate.getDate(),
  hours: fullDate.getHours(),
  minutes: fullDate.getMinutes(),
  seconds: fullDate.getSeconds(),
};
alert(JSON.stringify(dateParts));

// 6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.
var lastDayOf2020 = new Date(2020, 11, 31);
alert(lastDayOf2020);

// 7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
var specialDate = new Date(1992, 1, 2);
alert(specialDate);

// 8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.
var referenceDate = new Date(1980, 0, 1);
var millisecondsElapsed = specialDate - referenceDate;
alert(millisecondsElapsed);

// 9. How do you change the year of a date in JavaScript?
var myNewDate = new Date();
myNewDate.setFullYear(2023); // Change the year to 2023
alert(myNewDate);

// 10. Write a JavaScript function to change the month of a given date to January.
function changeMonthToJanuary(inputDate) {
  inputDate.setMonth(0); // January is represented by 0
  return inputDate;
}
var myDateToChange = new Date();
var modifiedDate = changeMonthToJanuary(myDateToChange);
alert(modifiedDate);

// 11. What is the method to change the day of the week for a specific date in JavaScript?
var dateToModify = new Date();
dateToModify.setDate(10); // Change the day of the month to 10
alert(dateToModify);

// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
function changeMinutes(inputTime) {
  var newMinutes = parseInt(prompt("Enter new minutes:"));
  inputTime.setMinutes(newMinutes);
  return inputTime;
}
var myTime = new Date();
var modifiedTime = changeMinutes(myTime);
alert(modifiedTime);

// 13. Write a JavaScript function to add a specific number of hours to a given time.
function addHours(inputTime) {
  var hoursToAdd = parseInt(prompt("Enter hours to add:"));
  inputTime.setHours(inputTime.getHours() + hoursToAdd);
  return inputTime;
}
var myTimeToAdd = new Date();
var updatedTime = addHours(myTimeToAdd);
alert(updatedTime);

// 14. You have to create an age calculator in JavaScript.
function calculateAge(birthYear) {
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;
  alert("Your age is: " + age);
}
var userBirthYear = parseInt(prompt("Enter your birth year:"));
calculateAge(userBirthYear);

