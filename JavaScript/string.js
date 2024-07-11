let fact = prompt("Enter number to find factorial: ")
let temp = 1; 
var flag;
for (let i = fact; i>0 ; i--) {
    temp = temp*i;
}
console.log(temp)