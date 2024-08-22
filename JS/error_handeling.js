let a = prompt("Enter First Number:")
let b = prompt("Enter Second Number:")

if(isNaN(a) || isNaN(b)){
    throw new Error("Enter Integer");
    
}
let sum = parseInt(a) + parseInt(b)

try {
    console.log("The Sum is  :", sum*x);
} catch (error) {
    console.log('Error alo re !');
    
}
