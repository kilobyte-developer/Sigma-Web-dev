// //APPROCH 1 Simulation of getting Data From Server
// function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2000); })
// }
// console.log('Loading');
// console.log('Load Data');
// let data = getData()
// data.then((v) => { 
//     console.log('Data loaded');
//     console.log('Executed');
// })
//***************************************************************************************************************************** */
//APPROCH 2 Simulation of getting Data From Server
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 2000);
    })
}
async function main() {
    console.log('Loading');
    console.log('Load Data');
    let data = await getData()
    console.log(data);
    console.log('Data Loaded');
    console.log('Executed');
}
main()
//******************************************************************************************************************************* */
//JSON PLACEHOLDER
async function getData() {
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.json()
// console.log(data);
    return data
   
}
async function main() {
    console.log('Loading');
    console.log('Load Data');
    let data = await getData()
    console.log(data);
    console.log('Data Loaded');
    console.log('Executed');
}
main()