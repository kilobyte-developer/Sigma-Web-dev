// promises
// promises is an object 


const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('p1')
        resolve("hello it is over and resolved")
    }, 2000)
})
p1.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log('done')
})


// three stages of promise resolution 1 is pending 2 is resolved 3 is rejected



