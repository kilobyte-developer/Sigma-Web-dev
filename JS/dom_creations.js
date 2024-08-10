console.log(document.querySelector(".container").innerHTML)

console.log(document.querySelector(".box").innerHTML)

console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".box").tagName) 

document.querySelector(".box1").innerHTML = "Hi!, I have been modified "

console.log(document.querySelector(".box1").hasAttribute("style"))
console.log(document.querySelector(".box1").getAttribute("style"))
console.log(document.querySelector(".box1").setAttribute("style","display: inline"))
console.log(document.querySelector(".box1").hasAttribute("style"))
console.log(document.querySelector(".box1").getAttribute("style"))

console.log(document.querySelector(".box2").removeAttribute("style"))
console.log(document.querySelector(".box2").hasAttribute("style"))

let div = document.createElement("div")
div.innerHTML = "Js Element" 
div.setAttribute("class","js-element")
document.querySelector(".container").prepend(div)// append, before

let new_element = document.querySelector(".container")
new_element.insertAdjacentHTML("afterbegin"," <b>New Element</b>")

console.log(document.querySelector(".container").className) 
document.querySelector(".container").classList.add("new-class")
console.log(document.querySelector(".container").classList) 
