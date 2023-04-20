//array - is an object; collection of variable
//type One
var names = new Array(5);
names[0] = "A";
names[1] = "B";
names[2] = "C";
names[3] = "D";
names[4] = "E";

console.log(names[1]);
//type Two
var names = ['A','B','C','D','E'];

console.log(names.length);

names.push('E','F');

console.log(names.length);

names.pop()
console.log(names);

// Array Concat
var array1 = ["A","B","C"];
var array2 = ["X","Y","X"];

var array = array1.concat(array2);
console.log(array);

//
