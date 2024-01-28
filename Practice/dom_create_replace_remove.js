// document.createElement("HTML Element")
// document.createTextNode("Text you want to give")//append it on any element(created by Js or in already existing in html)
// document.body.append(ELEMENT YOU HAVE CREATED)
// document.body.prepend(ELEMENT YOU HAVE CREATED)

const divEle = document.createElement('div')
divEle.id = "outer"
divEle.style.backgroundColor = "green"
divEle.style.color = "white"
// divEle.innerText = "Hello World"

const addText = document.createTextNode("Hello World")
divEle.append(addText)

console.log(divEle)
document.body.appendChild(divEle)

/* 
<ul class="languages">
    <li>Javascript</li>
</ul> 
*/

function addLang(langName){
    const li = document.createElement('li')
    li.innerHTML = `${langName}`

    document.querySelector(".languages").prepend(li)
    console.log(li)
}
addLang("python")
addLang("Rust")


function addLangOptimized(langName){
    const li = document.createElement("li")
    li.append(document.createTextNode(langName))

    document.querySelector(".languages").append(li)
    console.log(li)
}
addLangOptimized("Typescript")

//replace
const secondLang = document.querySelector("li:nth-child(2)")
console.log(secondLang)

const newLi = document.createElement("li")
newLi.append(document.createTextNode("c++"))

secondLang.replaceWith(newLi)

// remove
const firstLang = document.querySelector("li:first-child")
firstLang.remove()





