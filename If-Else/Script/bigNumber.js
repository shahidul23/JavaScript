var num1 = prompt("Enter num 1 :");
var num2 = prompt("Enter num 2 :");
var num3 = prompt("Enter num 3 :");

if (num1 > num2 && num1 > num3) {
    document.write("Larger Number = "+ num1)
} else if (num2 > num1 && num2 > num3){
    document.write("Larger Number = "+num2)
}else{
    document.write("Larger Number = "+num3)
}