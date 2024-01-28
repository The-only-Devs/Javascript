a()
b()
// Function Statement || Function Declaration
function a(){
    console.log("function a")
}

// Function Expression
var a = function(){
    console.log("function b")
}

// Difference btw Function Statement and Function Expression is "Hoisting".
// They are different ways to create a function

// Anonymous function
// They are used when functions are to be used as values

// Named Function Expression
var c = function xyz(){
    console.log("function c")
    console.log(xyz) // This will not give error, As xyz is a local variable not a global variable
}
xyz() //This will give error, As xyz is a local variable not a global variable

// Parameters vs Arguments
// Parameters are a local variables inside a function 
// Arguments can be local or global

// First Class Function || First Class Citizens
// when functions  are treated like variables.
// Used as a parameter, arguments, or return from another function