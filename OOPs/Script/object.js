//How to create an object 
//how to print the value of an object
//adding a constructor
//adding function inside a construct


//Create a Constructor
function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}
//constructor object
var student1 = new Student("Shahidul islam", 24, 3.12, ["bangla", "english"]);
var student2 = new Student("shakhawat hussen", 21, 3.11, ["bangla", "hindi"]);

//constructor function call and print
student2.display();

//manual print
/*
console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lang);

console.log(student2.name);
console.log(student2.age);
console.log(student2.cgpa);
console.log(student2.lang);
*/


//create a object
/*
var student1 = {
    name:"Shahidul Islam",
    age: 24,
    cgpa:3.12,
    lang:["bangle","english"]
}
console.log(student1);
console.log(student2);
*/