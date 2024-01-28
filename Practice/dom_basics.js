console.log(window);
// document.getElementById()
// document.getElementsByClassName()
// .id()
// .className()
// .getAttribute()
// .setAttribute("attribute", "value value")
// .style.property = "value"
// .innerText
// .innerContent
// .innerHTML

// document.querySelector("CSS selector")
// document.querySelectorAll("CSS selector")
// They return HTMLCollection and NodeList(which are similar to arrays):
// HTMLCollection : (Use index, loops, convert to array by Array.from())
// NodeList : (Use index, loops, .forEach(), convert to array by Array.from())

//all_li.style.color = "orange"; //Not allowed to such operations on NodeList
//all_li[0].style.color = "orange";//such operations on NodeList are allowed as NodeList similar to array

console.log("*****************");
console.log(document.getElementById('title'));
console.log(document.getElementById("title"));

console.log("*****************");
console.log(document.getElementById("title").id);
console.log(document.getElementById("title").class); //undefined
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
