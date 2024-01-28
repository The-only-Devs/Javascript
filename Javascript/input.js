const age = Number(prompt("Enter your age: "));
// prompt takes input as a string datatype, so it is necessary to convert into a number to perform numerical calculations

if(age < 18){
    console.log("You age is below 18");
}
else if(age === 18){
    console.log("You are 18");
}
else{
    console.log("Your age is above 18");
}