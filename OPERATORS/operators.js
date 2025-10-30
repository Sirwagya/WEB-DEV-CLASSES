//Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + (a * b)); // 50
console.log("Division: " + (a / b)); // 2
console.log("Modulus: " + (a % b)); // 0

//Assignment Operators
let c = 20;
c += 5; // c = c + 5
console.log("c after += 5: " + c); // 25
c -= 3; // c = c - 3
console.log("c after -= 3: " + c); // 22
c *= 2; // c = c * 2
console.log("c after *= 2: " + c); // 44
c /= 4; // c = c / 4
console.log("c after /= 4: " + c); // 11   

//Comparison Operators
let x = 10;
let y = 20;

console.log("x == y: " + (x == y)); // false
console.log("x != y: " + (x != y)); // true
console.log("x > y: " + (x > y)); // false
console.log("x < y: " + (x < y)); // true
console.log("x >= y: " + (x >= y)); // false
console.log("x <= y: " + (x <= y)); // true
console.log("x === y: " + (x === y)); // false
console.log("x !== y: " + (x !== y)); // true


//Logical Operators
let p = true;
let q = false;

console.log("p && q: " + (p && q)); // false
console.log("p || q: " + (p || q)); // true
console.log("!p: " + (!p)); // false
console.log("!q: " + (!q)); // true

//Increment and Decrement Operators
let m = 5;

console.log("m before increment: " + m); // 5
m++;
console.log("m after increment: " + m); // 6
m--;
console.log("m after decrement: " + m); // 5

//String Concatenation Operator
let str1 = "Hello";
let str2 = "World";
console.log("String Concatenation: " + (str1 + " " + str2)); // Hello World