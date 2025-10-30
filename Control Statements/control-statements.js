//conditional Statements
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

//for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

//while loop
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

//do-while loop
let num = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 5);  