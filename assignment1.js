// Assignment 1:
// Create variables for each primitive data type in JavaScript (string, number, boolean,
// null, undefined, symbol, and bigint).
// Use the typeof operator to display the type of each variable in the console.

let string = "This is a string";
let int = 1;
let double = 2.3;
let boolean = true;
let n = null;
let symbol = Symbol("hi");
let undefined;

console.log(typeof (string) + "\n"
    + typeof (int) + "\n"
    + typeof (double) + "\n"
    + typeof (boolean) + "\n"
    + typeof (n) + "\n"
    + typeof (symbol) + "\n"
    + typeof (undefined)+ "\n"
);

console.log("-----------------------------");

// Assignment 2:
// Create variables of different primitive data types.
// Write expressions to compare them using comparison operators (==, ===, !=, !==,
// <, >, etc.).
// Display the results in the console.

let a = 200;
let b = "200.0";
let c = false;

if (a == b)
    console.log("a == b");

if (a === b)
    console.log("a === b");

if (a == c)
    console.log("a == c");

if (b == c)
    console.log("b == c");
    
console.log("-----------------------------");

// Assignment 3:
// Write code that demonstrates converting between primitive data types (e.g.,
// from string to number, number to boolean, etc.).
// Use functions like parseInt(), parseFloat(), toString(), and Boolean conversion.
// Display the results in the console.

console.log(a.toString());
console.log(Boolean(a));
console.log(parseInt(b));
console.log(parseFloat(b));


console.log("-----------------------------");

// Assignment 4:
// Create variables with null and undefined values.
// Write code that checks if a variable is null or undefined using comparison and
// logical operators.
// Display appropriate messages based on the value in the console.

function checkVariable(variable)
{
    if (variable === null)
    {
        console.log('The variable is null.');
    }
    else if (variable === undefined)
    {
        console.log('The variable is undefined.');
    }
    else
    {
        console.log('The variable has a value:', variable);
    }
}

checkVariable(undefined);
checkVariable(n);