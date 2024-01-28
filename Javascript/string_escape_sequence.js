// Strings are immutable but we can maodify the current string and store it in a new string

// String Properties and method
//.toUpperCase(), .toLowerCase(), .indexOf(), .lastIndexOf(), .includes()
//.replace()
//.slice(), .substring(), .split(), .concat()
/*
*/
let a = "Saikumar";  //Using Double quotes

let b = 'Saikumar';  //Using Single quotes

// Template Literals
let c = `Saikumar`; //Using Backtics(Template Literals)

// With the help of template literals it is possible to use both single quotes and double quotes in a string
let d = `"Sai"kumar's Project`;

// String Interpolation
let num = 100;
let e = `${d} number is ${num}`;  //(String Interpolation)  We can insert variables directly in Template Literals 

console.log(a, b, c, d, e);

// Escape Sequence Charcters
// In JavaScript, escape sequence characters are special sequences of characters 
// that are used to represent certain non-printable or reserved characters. 
// They are typically used within strings.

// let str = ' Mc'Donals';
// Js will misunderstand it.

// \' - Single quote
const singleQuoteString = 'This is a single quote: \' .';
// \" - Double quote
const doubleQuoteString = "This is a double quote: \" .";
// \\ - Backslash
const backslashString = "This is a backslash: \\ .";
// \n - Newline 
const newlineString = "This is a text\nwith a newline.";
// \t - Tab
const tabString = "This is a text\twith a tab space.";


// \v - Vertical tab
const verticalTabString = "This is a text\vwith a vertical tab.";
// \r - Carriage return
const carriageReturnString = "This is a text\rwith a carriage return.";
// \b - Backspace
const backspaceString = "This is a text with a\b backspace.";
// \f - Form feed
const formFeedString = "This is a text\fwith a form feed.";
// \uXXXX - Unicode character
const unicodeString = "This is a smiley face: \u263A";
// \xXX - ASCII character
const asciiString = "This is the letter A: \x41";
console.log(singleQuoteString, doubleQuoteString, backslashString, newlineString, carriageReturnString, 
    tabString, backspaceString, formFeedString, verticalTabString, unicodeString, asciiString);

// String Properties and method
//.toUpperCase(), .toLowerCase(), .indexOf(), .lastIndexOf(), .includes()
//.replace()
//.slice(), .substring(), .split(), .concat()
let name = "Saikumar";
console.log(name.length);

console.log("********");
console.log(name.toUpperCase());

console.log("********");
console.log(name.toLowerCase());


console.log("********");
console.log(name.indexOf("a")); //If not found returns -1
console.log(name.indexOf("kumar")); //If not found returns -1

console.log("********");
console.log(name.lastIndexOf("a")); //If not found returns -1

console.log("********");
console.log(name.charAt(5));    //console.log(name[5]);


console.log("********");
console.log(name.endsWith("mar"));  //Returns boolean value

console.log("********");
console.log(name.includes("ku"));
const sentence = "The quick brown box jumps over the lazy dog";
const word = "fox2";
console.log(`THe word ${word} ${sentence.includes(word) ? "is" : "is not"} in the sentence`);


console.log("********");
console.log(name.replace("Saikumar", "Saikumar Gatla"));
console.log(name);

// Strings are immutable but we can maodify the current string and store it in a new string
let newName = name.replace("Saikumar", "Saikumar Gatla");

console.log("********");
console.log(newName.trim());  //Removes whitespaces

console.log("********");
console.log(name.slice(2,5));  //--> [)
console.log(name.slice(2));  //--> (2,tillend)

console.log("********");
console.log(newName.substring(0, 5));
console.log(newName.substr(0,5));  // (starting index, length)

console.log("********");
console.log(name.slice(0, 4));

console.log("********");
console.log(newName.split(" "));  //splits into array where space(" ") is persent
console.log(newName.split("a"));  //splits into array where space("a") is persent

console.log("********");
const nam = new String("Sai");  
//Now go in console and type nam, maximize the array and click on prototypeto see all string methods and properties

console.log("********");
console.log("Sai\"".length); // o/p --> 4 not 5
//bcz escape sequence character (\") is considered as a single character

console.log("********");
const firstname = "Saikumar";
const lastname = "Gatla";
const finalname = firstname.concat(lastname, "Yes");
console.log(finalname);  

// Strings are immutable but we can maodify the current string and store it in a new string.
// Also they can can be accessed using index like an array
console.log(name[5]);

// Extract the number out of string
const data = "Give me Rs1000";
if(data.includes("1000")){
    const x = data.indexOf("1000");
    console.log(data.slice(x));
}




























































































