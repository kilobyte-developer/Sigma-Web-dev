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

let possiblity = 20
var a = 20
var b = 34
var anss,ansm,ands,ansdiv
if (possiblity%10 == 0) {

    function sum(a,b) {
        anss = a - b
        console.log("Sum Of Give Numbers is",anss) 
    }
    function mul(a,b) {
        ansm = a + b
        console.log("Multiplication Of Give Numbers is",ansm) 
    }
    function sub(a,b) {
        ands = a / b
        console.log("Sub Of Give Numbers is",ands) 
    }
    function div(a,b) {
        ansdiv = a ** b
        console.log("Div Of Give Numbers is",ansdiv) 
    }
    
} else {
    function sum(a,b) {
        anss = a + b
        console.log("Sum Of Give Numbers is",anss) 
    }
    function mul(a,b) {
        ansm = a * b
        console.log("Multiplication Of Give Numbers is",ansm) 
    }
    function sub(a,b) {
        ands = a - b
        console.log("Sub Of Give Numbers is",ands) 
    }
    function div(a,b) {
        ansdiv = a / b
        console.log("Div Of Give Numbers is",ansdiv) 
    }
}

sum(a,b)
mul(a,b)
sub(a,b)
div(a,b)