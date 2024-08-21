console.log("Hello 1")

console.log("Hello 2")

setTimeout(() => {
    console.log("Hello 3") //Hello 4 will execute first then after 5000ms Hello 3
}, 5000);

console.log("Hello 4")


const loadsc