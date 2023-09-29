var x =5;
x+=1;
document.getElementById("1").innerHTML=x;

var x = 100;
x--;
document.getElementById("2").innerHTML=x;

var x = 50;
var y = x++;
document.getElementById("3").innerHTML=y;

var y = 50;
var z = --y;
document.getElementById("4").innerHTML=z;

var num = 42;
var newNum = num--; 
document.getElementById("5").innerHTML=("num: " + num);       
document.getElementById("6").innerHTML=("newNum: " + newNum); 

var originalVariable = 5;  
var newVariable = ++originalVariable; 

document.getElementById("7").innerHTML=("originalVariable: " + originalVariable); 
document.getElementById("8").innerHTML=("newVariable: " + newVariable);         

var myNumber = 10; 
myNumber++;       

alert("The new value is: " + myNumber);









