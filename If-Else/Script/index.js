//check even odd condition
var num = 5;
if (num % 2) {
    document.write("Even");
} else {
    document.write("odd");
}
document.write("<hr/>");
// check if else-if else condition
// var marks = prompt("Enter a number : ");
// if (marks > 0) {
//     document.write("Positive");
// }else if(marks < 0) {
//     document.write("Negative");
// } else{
//     document.write("zero");
// }
//letter grade
var marks = prompt("Enter your marks : ")

if (marks>100 || marks<0) {
    document.write("Invalid Number ")
}
else if (marks>= 80 && marks<=100) {
    document.write("A+");
}else if(marks>=70 && marks<=79){
    document.write("A")
}
else if(marks>=60 && marks<=69){
    document.write("A-")
}
else if(marks>=50 && marks<=59){
    document.write("B")
}
else if(marks>=40 && marks<=49){
    document.write("C")
}
else if(marks>=33 && marks<=39){
    document.write("D")
}
else{
    document.write("Fail");
}
