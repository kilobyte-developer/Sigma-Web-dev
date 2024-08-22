// while (true) {
//     function getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     const randomNumber = getRandomInt(1, 7);
//     const x = randomNumber * 1000

//     function msg1() {
//         setTimeout(() => {
//             document.querySelector(".msg").innerHTML = "Brute Forcing"
//         }, x);
//     }
//     function msg2() {
//         setTimeout(() => {
//             document.querySelector(".msg").innerHTML = "Gained Access"
//         }, x);
//     }
//     function msg3() {
//         setTimeout(() => {
//             document.querySelector(".msg").innerHTML = "Deleting System32"
//         }, x);
//     }
    
//     const functionsx = [msg1, msg2, msg3]

//     const randomIndex = Math.floor(Math.random() * functionsx.length);

//     functionsx[randomIndex]()
    
// }

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function msg1() {
    document.querySelector(".msg").innerHTML = "Brute Forcing";
}

function msg2() {
    document.querySelector(".msg").innerHTML = "Gained Access";
}

function msg3() {
    document.querySelector(".msg").innerHTML = "Deleting System32";
}

const functionsx = [msg1, msg2, msg3];
function executeRandomFunction() {
    // Get a random delay between 1 and 7 seconds
    const randomNumber = getRandomInt(1, 7);
    const delay = randomNumber * 1000;

    // Get a random function from the array
    const randomIndex = Math.floor(Math.random() * functionsx.length);
    
    // Execute the function
    functionsx[randomIndex]();
    
    // Schedule the next execution after the random delay
    setTimeout(executeRandomFunction, delay);
}

// Start the loop with an initial delay
executeRandomFunction();
