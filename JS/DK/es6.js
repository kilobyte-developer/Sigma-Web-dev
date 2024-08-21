// let and const
let value = 200 
const month = 10

function hello() {
  for (let index = 0; index < 5; index++) {
    console.log(index)
    
  }
}
hello()
 
// fat arrow function 

let basic = () => {
  console.log("Basic")
}

basic()

let add = (a,b) => {
   console.log(a+b)
}

add(10,20)

let add2 = (a,b) => a+b

console.log("implicit return" ,add2(10,20))


let oneParam = a =>  console.log(a)


oneParam(10)

// template literals

let Name = "John"
let age = 20

let message = `Hello ${Name} you are ${age} years old`
console.log(`Hi my name is ${message}`)

console.log(message)

// spread operator

let array = [1,2,3,4,5,6,7,8,9]

let array4=[...array,11]

array4.push(11)

let array2 = [...array]

array2.push(10)

console.log("array ",array)

console.log("array2",array2)

// functions with default parameters

let add3 = (a=10,b=20) => {
  console.log(a+b)
}

add3(20,50)

add3(50)

add3()

// rest operator

let add4 = (a,...b) => {
  console.log(a)
  console.log(b)
}

add4(10,20,30,40,50,60)


// destructuring

let array3 = [1,2,3,4,5,6,7,8,9]

let [a,b,c,d,e,f,g,h,i] = array3

console.log(a,b,c,d,e,f,g,h,i)

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

var{ name, city } = person;

console.log(name); // John
console.log(city);



// arrow functions

let add5 = (a,b) => {
  return a+b
}

console.log(add5(10,20))

let add6 = (a,b) => a+b // one liner functions

console.log(add6(10,20))


let hello = value => console.log(value) // single parameter



hello("hello")


let Person={
  name: 'John',
  age: 30,
  city: 'New York',
  printDetails:function(){
    console.log(this.name)
    console.log(this.age)
  },
  PrintArrow: () =>{
    console.log(this.name)// this will return window object 
    
  }
}
Person.printDetails()


let Person2 ={
  name: 'John',
  age: 30,
  city: 'New York',
}
let person3 = {...Person2}

console.log(person3)