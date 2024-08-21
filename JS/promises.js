console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = prompt("Enter a number")
    if (a == 0) {
        reject("Enter a Non Zero Integer")
    }
    else if (a % 2 == 0) {
        resolve("Even Number")
    }
    else {
        reject("Odd Number")
    }
})

prom1.then((a) => {
    console.log(a)
}).catch((a) => {
    console.log(a)
}).finally(() => {
    console.log("Executed");
})