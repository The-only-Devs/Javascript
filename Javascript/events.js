// events: are Js code which gets executed when any activity(click, mouse, drag_and_drop, keyboard) is performed.

// how to use events in js?
// approach1 
//onclick="alert('this image was clicked')"; //can be inserted as an attribute in html tags
// This is not good as itmerges the js and html code  
// and if some other event is added to same html element 
// previous event gets overrrided , also doesn't give event propagation ability
// But this approach is good in reactjs. 

//aproach 2
// document.getElementById(".one").onclick = function(){
//     alert("This image was clicked");
// }
//This approach is also not good as it doesn't give us event propagation functionality

//approach 3: Using Event Listeners
// Event Listener in Js is very powerful and can listen to multiple.
// Event Object are a key to understand, control and master Event Listener.
// getElementByCOM.addEventListener("type_of_event", function(event){}, isCapture)
//6PP Technical Suneja
// document.getElementById("one").addEventListener("click", function(e){
//     console.log("Image clicked");
//     console.log(e);
// }, false)
//attachEvent() --> Was used when Internet Explorer was famous
//jQuery --> .on

//type of Events, defaultPrevented
//target, toElement, srcElement, currentTarget
//clientX, clientY(Create circle on screen where is clicking?), screenX, screenY, offsetX, offsetY
//timeStamp(Time when user visited?),
// altkey, ctrlKey, shiftKey, keyCode

//EventPropagation :2 Types Event Bubbling and Event Capturing(Mostly Bubbling is used while making projects)

// //Event Bubbling v/s Event Capturing Demonstration
// document.getElementById("one").addEventListener("click", function(e){
//     console.log("Image clicked");
// }, false)

// document.getElementById("images").addEventListener("click", function(e){
//     console.log("Clicked Inside ul");
// },false)

// // o/p:(Event Bubbling)--> Third parameter is false
// //     Image clicked
// //     Clicked Inside ul

// //    (Event Propagation) --> Third parameter is true 
// //    Clicked inside ul
// //    Image clicked

// //e.stopPropagation()
// document.getElementById("one").addEventListener("click", function(e){
//     console.log("Image clicked");
//     e.stopPropagation();
// }, false)

// document.getElementById("images").addEventListener("click", function(e){
//     console.log("Clicked Inside ul");
// },false)

// // o/p: Image clicked

// //e.preventDefault()
// document.getElementById("google").addEventListener("click", function(e){
//     e.preventDefault();
//     e.stopPropagation(); 
//     console.log("Google clicked");
// }, false)

// .target --> gives target element from which the event is occurring
document.querySelector("#images").addEventListener("click", function(e){
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
        // removeIt.parentNode.removeChild(removeIt);
    }
}, false)

// var div = document.querySelector("#button");
// div.addEventListener("click", function(e){
//     console.log("div clicked");
// })

// .stopImmediatePropagation()
div.addEventListener("click", function(event) {
    console.log("First event listener");
});

div.addEventListener("click", function(event) {
    console.log("Second event listener");
    event.stopImmediatePropagation(); // This prevents the second event listener from being called
});

div.addEventListener("click", function(event) {
    console.log("Third event listener");
});
// In this example, when the button is clicked, the first event listener will always be executed.
//  However, the second event listener uses stopImmediatePropagation() to prevent the third event listener from being executed, 
//  even though they are both attached to the same element and respond to the same event. 
//  As a result, only the first and second event listeners will be called.
