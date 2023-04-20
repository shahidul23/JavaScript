// Creating function

function square(num){
    var result = num * num;
    document.write("Result = "+result+"<br/>");
}
//calling function
square(6)
square(8)
document.write("<hr/>")

function sum(num1, num2){
    return num1 + num2;
}
document.write("sumation = "+sum(5,6));
document.write("<hr/>")

function sub(num1, num2){
    return num1 - num2;
}
var result = sub(9, 3);
document.write("Subtraction = "+result);