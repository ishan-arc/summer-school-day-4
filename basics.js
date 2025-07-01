
let myString = "Hello";
const myNumber = 42;
var myBoolean = true;
let myUndefined;
const myNull = null;

console.log(typeof myString);    // should print: string
console.log(typeof myNumber);    // should print: number
console.log(typeof myBoolean);   // should print: boolean
console.log(typeof myUndefined); // should print: undefined
console.log(typeof myNull);      // should print: object (this is a JS thing)

// 2. Hoisting Demo
console.log(varVariable); // prints undefined because of hoisting
// console.log(letVariable); // this will cause an error if uncommented

var varVariable = "I am var";
// let letVariable = "I am let";

/*
Explanation:
- var variables are hoisted and initialized with undefined, so you can access them before declaration but get undefined.
- let variables are hoisted but not initialized, so accessing them before declaration causes an error.
*/

// 3. User Greeting (Conditionals)
const name = prompt("What is your name?");
const age = Number(prompt("How old are you?"));

if (age < 18) {
  alert("Hey " + name + ", you’re a teen!");
} else if (age >= 18 && age <= 60) {
  alert("Welcome " + name + ", you’re an adult!");
} else {
  alert("Hello " + name + ", you’re a senior citizen!");
}

// 4. Looping Numbers

// for loop from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while loop to print even numbers from 2 to 20
let j = 2;
while (j <= 20) {
  console.log(j);
  j = j + 2;
}

// do...while loop to print numbers from 10 down to 1
let k = 10;
do {
  console.log(k);
  k = k - 1;
} while (k >= 1);

// 5. Functions

// function to add two numbers
function add(a, b) {
  return a + b;
}

// function expression to square a number
const square = function(n) {
  return n * n;
};

// arrow function to greet a user
const greet = (userName) => {
  return "Hello, " + userName + "!";
};

// calling the functions and printing results
console.log(add(3, 4));        // 7
console.log(square(5));         // 25
console.log(greet("Alice"));    // Hello, Alice!

// 6. Callback Practice

function processNumber(num, callback) {
  callback(num);
}

// example usage
processNumber(5, function(n) {
  console.log("Double is " + (n * 2));
});
