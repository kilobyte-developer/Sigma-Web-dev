//Tutorial on Functions Video 58

function namex(value) {
    console.log("Hello " + value)
    console.log("Nice to meet you " + value)    
}

namex("Atharva")
namex("Niraj")

function sum(a, b, c) {
    ans = a + b + c
    console.log("The Sum Of Given Numbers is :" + ans)
}

sum(10,20,30)

//Arrow Function

const func1 = (a) =>{
    console.log("I am A Arrow Functions", a)
}

func1(99)