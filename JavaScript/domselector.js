console.log("Hello")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[3].style.backgroundColor = "red"

document.getElementById("blue").style.backgroundColor = "blue"

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "white"
});