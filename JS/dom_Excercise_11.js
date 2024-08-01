console.log("Hello")

document.body.style.backgroundColor = "#04a4e8"

console.log(document.body.childNodes[1].childNodes)

document.body.childNodes[1].childNodes[1].style.backgroundColor = "red"
document.body.childNodes[1].childNodes[1].style.color = "white"

document.body.childNodes[1].lastElementChild.style.backgroundColor = "green"
document.body.childNodes[1].lastElementChild.style.color = "purple"


document.getElementById("3").style.backgroundColor = "yellow"

document.querySelectorAll(".box").forEach(x => {
    x.style.backgroundColor = "cyan"
    x.style.color = "blue"
    
});