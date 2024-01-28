//chapter1- Practice Set
//Q1
let a = "Sai";
let b = 7;
console.log(a+b);
// They concatenated

//Q2
console.log(typeof a);
console.log(typeof b);
console.log(typeof a+b);//typeof(a) concatenated with b
console.log(typeof (a+b));//Final result is of string type

//Q3
const obj = {
    name : "Sai",
    tokenno : 7,
    winner : true
}
console.log(obj);
console.log(obj.name);
console.log(obj['tokenno']);//Double quotes
console.log(obj["winner"]);//SIngle quotes
console.log(obj[`winner`]);//Back ticks

//obj = 10;  //Gives Error, Cannot assign number to a const object
//obj = {};  //Gives Error, Cannot assign object to a const object

//Q4
//Adding new key:value, OR Updating a key:value pair to a const object is allowed
obj["profession"] = "S/W Engineer";//Double quotes
obj['speciality'] = 'Web2.0 and Web3.0 ';//SIngle quotes
obj['idno'] = 7;
obj[`name`] = `Saikumar`;//Back ticks

console.log(obj);

//Q5
//The values in the dictionary should be enclosed in quotation marks if they are meant to be treated as strings.
const dictionary = {
    javascript : "fullstack",
    htmlcss : "frontend",
    nodejs : "backend",
    reactjs : "frontend",
    mongodb : "database",
    expressjs : "serversiderendering",
}
console.log(dictionary);


