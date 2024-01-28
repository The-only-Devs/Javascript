console.log(window);

console.log("*****************");
console.log(document.getElementById('title'));
console.log(document.getElementById("title"));

console.log("*****************");
console.log(document.getElementById("title").id);
console.log(document.getElementById("title").class);
console.log(document.getElementById("title").className); //Document understands class as className and className is also used in React

console.log("*****************");
// get and set Attribute of any Element
const title = document.getElementById("title");
console.log(title.getAttribute("id"));
console.log(title.getAttribute("class"));

console.log(title.setAttribute("class", "test"));//class="heading" is overwritted with class="test".
//Be Carefull while .setAttribute("") as it changes the existing code base
console.log(title.setAttribute("class", "test heading"));

console.log("*****************");
// giving css property to element
title.style.color = "black";
title.style.backgroundColor = "green";//CSS properties are in Camel Case in Js DOM, instead of snakeCase in CSS
title.style.padding = "20px";

console.log("*****************");
// innerText, innerContent, innerHTML
console.log(title.innerText);//Displays and set Text
console.log(title.textContent);//Displays and set hidden Text due to CSS(display: none)
console.log(title.innerHTML);//Displays and set Text with HTML tags

console.log("*****************");
// querySelector property of DOM
// document.querySelector("css selector");//Acess first element
// document.querySelectorAll("css selector");//Acess all element
// They return HTMLCollection and NodeList(which are similar to arrays):
// HTMLCollection : (Use index, loops, convert to array by Array.from())
// NodeList : (Use index, loops, .forEach(), convert to array by Array.from())

console.log(document.querySelector("h1"));
console.log(document.querySelector("#title"));
console.log(document.querySelector(".heading"));

const myul = document.querySelector("ul");
const myli = myul.querySelector("li");
myli.style.backgroundColor = "crimson";
myli.innerText = "ten";

const all_li = document.querySelectorAll("li");
console.log(all_li);
//all_li.style.color = "orange"; //Not allowed to such operations on NodeList
all_li[0].style.color = "orange";//such operations on NodeList are allowed as NodeList similar to array

all_li.forEach((li) => {li.style.border = "2px solid yellow"});//See prototype in console for inspect to see what build-in functions are there for NodeList

console.log("*****************");
console.log(document.getElementsByClassName("list"));
//Gives HTMLCollection

console.log(document.getElementsByClassName("list")[0]);//HTMLCollection can be accessed using index

const list = document.getElementsByClassName("list");
//consverting HTMLCollection to array
const myConvertedArray = Array.from(list);
myConvertedArray.forEach((li) => {
    li.style.padding = "5px";
})

console.log("****************");
// Relationship in DOM
const parent = document.querySelector(".parent");
console.log(parent);

console.log("****************");
//Moving from parent to children
console.log(parent.children);
for(let i=0; i<parent.children.length; i++){
    console.log(parent.children[i]);
}

parent.children[0].style.color = "red";

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

console.log("****************");
//Moving from child to parent
const day = document.querySelector(".day");
console.log(day);

console.log(day.parentElement);
console.log(day.nextElementSibling); 

console.log("NODES: ", parent.childNodes);
//A nodeList is a collection of document nodeswhich includes text nodes, attribute nodes and element nodes, comment node.
//A line break is also counted in nodeList.Only one line break is counted all subsequent line breaks are ignored.

console.log("****************");
//Creating element in DOM 
const div = document.createElement("div");
console.log(div);

//adding some attribute and text
div.className = "main"; //giving class attribute to div element 
div.style.backgroundColor = "magenta";
div.setAttribute("id", ".addelemet");//This way of add attribute is mostly used while DOM manipulation
div.innerHTML = "Saikumar";
const addText = document.createTextNode("Saikumar Gatla");

//appending it on DOM
div.appendChild(addText);
document.body.appendChild(div);

console.log("****************");
// editing and removing of elements in DOM is discussed in dom_new.js
// Writing function to create an new list "li" in "ul"
