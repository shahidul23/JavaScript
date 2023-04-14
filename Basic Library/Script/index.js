var text = "Bangladesh";

var len = text.length;

document.write("Number of Character " + len);
/*
document.write("<hr/>");

var userInputText = prompt("Enter your name:");

document.write("Number of Character :"+ userInputText.length);
*/
document.write("<hr/>");

var test = "Bangladesh";

var test1 = " is beautiful country";

document.write(test.charAt(2),"<br/>");
document.write(test.toLocaleUpperCase(),"<br/>");
document.write(test.toLocaleLowerCase(),"<br/>");
document.write(test.toLocaleLowerCase(),"<br/>");

document.write(test.concat(test1))
document.write("<hr/>");

var char = "bangladesh";

var slice = char.slice(0, 4);
document.write(slice);

document.write("<hr/>");
//get first name
var firstName = prompt("Enter your first Name");
//get last name
var lastName = prompt("Enter your last name : ");
// add to String 
var fullName = firstName + " " + lastName;
//print full name
document.write(fullName,"<br/>");

//print full name 
document.write("Your name length is " + fullName.length,"<br/>");
//full name convert into uppercase
document.write(fullName.toLocaleUpperCase(),"<br/>");
//print the 2nd position from full name
document.write(fullName.charAt(2),"<br/>");


