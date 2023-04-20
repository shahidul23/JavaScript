// traditional function 
function display1(){
    console.log("hello");
}

display1();

//iife function 
(function display2(message){
    console.log(message);
})("hello");

// Create a IIFEs that print sum of 2 number
(function addition(x, y){
    var result = x + y;
    console.log(result);
})(5,7);

// Function Expression
var display3 = function displayMessage(message){
    console.log(message);
} 
display3("i am message test");