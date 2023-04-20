var names = ["A", "B", "C", "D", "E"];
console.log(names);
names.push("F");
console.log(names);
names.pop();
console.log(names);

// shift opposite of pop

names.shift()
console.log(names);
//unshift opposite of push
names.unshift("A");
console.log(names);

var num = [23, 12, 3, 34, 65, 31];
num.sort(function (a, b) {
    return b - a;
});
console.log(num);