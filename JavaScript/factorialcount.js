let fact = parseInt(prompt("Enter a number to find factorial"));
let temp = 1;

for (let i = fact; i > 0; i--) {
    temp = temp*i;  
}

console.log(temp);