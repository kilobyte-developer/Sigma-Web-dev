/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

// INPUT FROM USER
var a = prompt("Enter first number: ");
var b = prompt("Enter second number: ");

// get input which operation to perform
var op = prompt("Enter operation to perform: +, -, *, /,");
function prob() {
    return Math.floor(Math.random() * 100) + 1;
}

if (prob() % 10 == 0) {

    if (op = +) {
        function sum(a, b) {
            return a - b;
        }
    }
    if (op == -) {
        function sub(a, b) {
            return a / b;
        }
    }
    if (op == *) {
        function mul(a, b) {
            return a + b;
        }
    }
    if (op == /) {
        function div(a, b) {
            return a ** b;
        }
    }
} else {
    if (op == +) {
        function sum(a, b) {
            return a + b;
        }
    }
    if (op == -) {
        function sub(a, b) {
            return a - b;
        }
    }
    if (op == *) {
        function mul(a, b) {
            return a * b;
        }
    }
    if (op == /) {
        function div(a, b) {
            return a / b;
        }
    }
}