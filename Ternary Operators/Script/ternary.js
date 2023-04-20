var num1 = Number(prompt("Enter Number One :"));
var num2 = Number(prompt("Enter Number Two "));
var num3 = Number(prompt("Enter Number Three : "));


if(num1>0){
    document.write("Positive")
}else if(num1<0){
    document.write("Negative")
}
else{
    document.write("Zero")
}
document.write("<hr/>")

var result = num1 > 0 ? "Positive" : "Negative";
document.write(result)
document.write("<hr/>")

var result = num1>0 ? "Positive" : num1<0 ? "Negative" : "Zero";
document.write(result)
document.write("<hr/>")

var result = num1 > num2 && num1 > num3 ? "Largest Number " + num1 :
    num2 > num1 && num2 > num3 ? "Largest Number " + num2 : "Largest Number " + num3 
document.write(result)