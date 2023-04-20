var num = new Array();
for(var i=0;i<5;i++){
    num[i] = Number(prompt("Enter the number :"));
}

var sum = 0;

for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
    sum += num[i];
}
console.log(sum);