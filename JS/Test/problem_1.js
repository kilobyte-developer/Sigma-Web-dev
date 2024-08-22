// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let names = [];

const count = prompt("Enter Number of Students")
for (let i = 0; i < count; i++) {
    let name = prompt("Enter name " + (i + 1) + ":");
    names.push(name);
}

console.log("The names you entered are:");
//console.log(names)
var gryffindor = [];
var hufflepuff = [];
var ravenclaw = [];
var slytherin = [];
function magical_hat(names) {

    for (let index = 0; index < count; index++) {
        if (names[index].length < 6) {
            gryffindor.push(names[index])
        } else if (names[index].length < 8) {
            hufflepuff.push(names[index])
        } else if (names[index].length < 12) {
            ravenclaw.push(names[index])
        } else {
            slytherin.push(names[index])
        }
    }

}
magical_hat(names);
console.log("gryffindor",gryffindor);
console.log("hufflepuff",hufflepuff);
console.log("ravenclaw",ravenclaw);
console.log("slytherin",slytherin);
