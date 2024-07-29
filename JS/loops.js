//Tutorial on Loops Video 57

//Types Of Loops
/*  1.For
    2.For In
    3.For of
    4.While
    5.Do-While*/

a = 1

console.log("For Loop")
for (let i = 0; i < 5; i++) {
    console.log(a+i)
}

let employee = {
    //Key: Value(Format of Object)

    "Name": "Atharva",
    "Experience": 5 + "Yrs",
    "Salary": 150000,
    "Job Role": "Senior Developer",
}

// For In
// for (const key in employee) {
//         const element = employee[key];
//         console.log(key,element)
// }

console.log("While Loop")
let i = 0
while(i<6){
    console.log(i)
    i++
}