let age = 10
let name = "Saikumar"
let surname = `Gatla` //(Template Literals)

// With backticks we can:
// ADD VARIABLES(String Interpolation) 
// DO OPERATIONS ON THEM
// APPLY PROPERTIES AND METHODS
console.log(`${name} ${surname.toUpperCase()} is ${age + 15} young`)
console.log(`${(name + surname).length}`)

//Don't use this syntax
console.log("My name is " + name)

// ***********String*************

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


// \uXXXX - Unicode character
const unicodeString = "This is a smiley face: \u263A";
// \xXX - ASCII character
const asciiString = "This is the letter A: \x41";
console.log(singleQuoteString, doubleQuoteString, backslashString, newlineString,
    unicodeString, asciiString);

// Strings are immutable(AS STORED IN STACK) but we can maodify the current string and store it in a new string

// String Properties and method
// properties => .lenght
//.toUpperCase(), .toLowerCase(), 
//.indexOf(), .lastIndexOf(), .endsWith(), .includes()
//.replace("", ""), .trim()
//.slice(), .substring(), .split(), .concat()

const game = new String(`bubble game`) //console.log(typeof game) => object

console.log(game.length); // 11

console.log("********");
console.log(game.toUpperCase()); //BUBBLE GAME

console.log("********");
console.log(game.toLowerCase()); //bubble game

console.log("********");
console.log(game.indexOf("e")); //If not found returns -1
console.log(game.indexOf("bb")); //If not found returns -1

console.log("********");
console.log(game.lastIndexOf("b")); //If not found returns -1

console.log("********");
console.log(game.endsWith("ame"));  //Returns boolean value

console.log("********");
console.log(game.includes("bb"));
const sentence = "The quick brown box jumps over the lazy dog";
const word = "fox2";
console.log(`THe word ${word} ${sentence.includes(word) ? "is" : "is not"} in the sentence`);

// Strings are immutable but we can maodify the current string and store it in a new string
let newGame = game.replace("bubble", "bubble shooting");
console.log(game) // bubble game
console.log(newGame) // bubble shooting game

console.log("********");
console.log(newGame.trim());  //Removes starting and ending whitespaces

console.log("********");
console.log(game.slice(2,5));  //--> [)
console.log(game.slice(2));  //--> (2,tillend)

console.log("********");
console.log(newGame.substr(0,5));  // (starting index, length)

console.log("********");
console.log(newGame.split(" "));  //splits into array where space(" ") is persent
console.log(newGame.split("a"));  //splits into array where space("a") is persent
