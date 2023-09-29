// Define a variable
var dayOfWeek = "Monday";

// Switch statement based on the day of the week
switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the workweek.");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("It's a weekday.");
        break;
    case "Friday":
        console.log("TGIF! It's Friday!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Invalid day of the week.");
}


