console.log("Hello There")

// let atharvafunde = document.getElementsByClassName("box")
// console.log(atharvafunde)

// atharvafunde[2].style.backgroundColor = "white"

// document.getElementById("green").style.backgroundColor = "green"

// document.querySelector(".box").style.backgroundColor = "yellow" //Selects only first element wich satisfies condition

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "white"
}); 

console.log(document.querySelector("body").contains(document.querySelector(".container")))
