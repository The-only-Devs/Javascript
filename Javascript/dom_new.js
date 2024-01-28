function addLang(langName){
    const li = document.createElement("li");
    li.innerHTML = `${langName}`;   
    //this method takes time,as it first  gets textNode from DOM and then overides it
    document.querySelector('.language').appendChild(li);
}
addLang("C++");
addLang("Typescript");

function addLangOptimumWay(langName){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName));
    //this method takes less time,as it donot gets textNode from DOM but directly overides it
    document.querySelector('.language').appendChild(li);
}
addLangOptimumWay("Solidity");

// Edit Element in DOM
const secondLang = document.querySelector("li:nth-child(2)")
const newli = document.createElement("li");
newli.textContent = "Java";
secondLang.replaceWith(newli);

const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = `<li>Typescript</li>`;

//Remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();