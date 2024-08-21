function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 7000)
    })
}

console.log('Loading Modules');

console.log('Processing');

console.log('Load Data');

let data = getdata()

data.then((v) => {
    console.log('Data Fetched');
    console.log('Done Execution');
    console.log(data);
    
    console.log('Task 2');

})
console.log(data);



