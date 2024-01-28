//Conditional Statements
/*
//Q1
let num = prompt("enter your age");
num = Number.parseInt(num);
if ((num>10) && (num<20)){
    console.log("Yes");
}
else{
    console.log("No");
}

//Q2 Switcch case statements
const readline = require('readline');
//The prompt function is a feature available in browsers, but it is not available in Node.js or some other JavaScript environments. If you're running the code in a Node.js environment or a non-browser environment, you can use readline module to take input from the user.

// Function to check if a person can vote based on their age
function checkVotingEligibility(age) {
    const minimumVotingAge = 18;
    
    switch (true) {
    case age < minimumVotingAge:
      return "You are not eligible to vote yet.";
      case age === minimumVotingAge:
      return "You are eligible to vote this year.";
    default:
      return "You are eligible to vote.";
  }
}

// Main function to run the program
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter your age: ", (age) => {
        // Convert the user input to a number
    age = parseInt(age);
    
    // Check voting eligibility and display the result
    const result = checkVotingEligibility(age);
    console.log(result);
    
    rl.close();
});
}

// Call the main function to start the program
main();

// Multiple fixed values: When you need to check a single variable against multiple fixed values,
// a switch-case statement can offer a more concise and readable solution 
// compared to a long series of if-else statements.

// In general, the choice between switch-case and if-else depends on the specific problem 
// and the readability of the code. 
// If there are multiple discrete fixed values to compare, 
// switch-case can provide a cleaner and more structured approach. 
// If the logic involves complex conditions, if-else might be more suitable.


//Q3
let a = 6;
let b = 3;
let c = 2;
let d = 5;

if((a%2==0) && (a%3==0)){
    console.log("Yes");
}
else{
    console.log("No");
}

if((b%2==0) && (b%3==0)){
    console.log("Yes");
}
else{
    console.log("No");
}

if((c%2==0) && (c%3==0)){
    console.log("Yes");
}
else{
    console.log("No");
}

if((d%2==0) && (d%3==0)){
    console.log("Yes");
}
else{
    console.log("No");
}

//Q4
// Use logical OR(||) operator inplace of logical AND(&&) operator

*/
//Q5 Ternary operator

const age = 18;

(age>=18) ? console.log("You can drive") : console.log("You cannot drive");

//Nested Ternary Operator
let isUserLoggedIn = true;
let isPurchasedCourse = true;

(isUserLoggedIn) ? 
(isPurchasedCourse) ? console.log("Thankyou for Enrolling into the course") : console.log("Welcome User!")
:
console.log("Please Signup");




