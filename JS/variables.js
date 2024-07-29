console.log("Tutorial On Variables Video 55")

var a = 5 //Numeric
var b = 10
var c = "Atharva" //String


console.log(a + b)

//Typeof Operator

console.log("Type of Var a is: " +typeof a, "Type of Var c is: " + typeof c)
 
//Object

let employee = {
    //Key: Value(Format of Object)

    "Name": "Atharva",
    "Experience": 5 + "Yrs",
    "Salary": 150000,
    "Job Role": "Senior Developer",
}

console.table(employee)

//Updations in Object

console.log("Updations are as Follows ----->")
employee.Experience = 8 + "Yrs"
employee.Salary = 500000
employee["Job Role"] = "CEO"

console.table(employee)