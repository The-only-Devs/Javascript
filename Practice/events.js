// Event Propagation: Bubbling & Capturing 
// Events that donot bubble
// Output based question on bubling and Capturing
// e.stopPropagation()
// e.preventDefault()
// e.target vs e.currentTarget vs this.target

// event Delegation
// modal design
// .removeEventListener()
// .removeEventListener("name of event which was added in .addEventListener"
//                       , reference of function which was given in .addEventListener)

const div = document.querySelector("div")
const form = document.querySelector("form")
const button = document.querySelector("button")

// Event Propagation
// Event Bubbling: Child To Parent
div.addEventListener("click", function(){
    alert("div")
})
form.addEventListener("click", function(){
    alert("form")
})
button.addEventListener("click", function(){
    alert("button")
})

// Name few events that donot bubble?
// focus, blur, mouseenter, mouseleave, submit

// Event Capturing: Parent To Child
// div.addEventListener("click", function(){
//     alert("div")
// },true)
// form.addEventListener("click", function(){
//     alert("form")
// },true)
// button.addEventListener("click", function(){
//     alert("button")
// },true)

// First perform click event for form => button => div?
// div.addEventListener("click", function(){
//     alert("div")
// })
// form.addEventListener("click", function(){
//     alert("form")
// },true)
// button.addEventListener("click", function(){
//     alert("button")
// })

// How to stop Bubbling or capturing => e.stopPropagation()
// div.addEventListener("click", function(){
//     alert("div")
// })
// form.addEventListener("click", function(e){
//     e.stopPropagation()
//     alert("form")
// })
// button.addEventListener("click", function(){
//     alert("button")
// })

//How to stop default behaviour of HTML elements like <a>, <submit>?
// e.preventDefault() 

// e.target vs e.currentTarget vs this.target
// e.target        => Origin/Start element of event
// e.currentTarget => current element of event
// this.target     => Here this is same as e.currentTarget

// div.addEventListener("click", func)
// form.addEventListener("click", func)
// button.addEventListener("click", func)

// function func(e){
// alert(`currentTarget: ${e.currentTarget.tagName} target: ${e.target.tagName} this: ${this.tagName}`)
// }

//When we click on button output is:
// currentTarget: BUTTON target: BUTTON this: BUTTON
// currentTarget: FORM target: BUTTON this: FORM
// currentTarget: DIV target: BUTTON this: DIV

// Event Delegation:
// Appying events using logics to parentNodes only such that,
// there is no need to put separate eventListeners to all of its childNodes

document.querySelector(".products").addEventListener("click",
(e) => {
    console.log(e.target.parentNode)
    console.log(e.target.tagName)
    console.log(e.target.closest("DIV").parentNode.tagName)
    if(e.target.tagName === "DIV" || e.target.closest("DIV").parentNode.tagName === "DIV"){
        window.location.href = `/${e.target.className}`
    }
})