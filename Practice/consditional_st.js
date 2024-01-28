// falsy values: 
// null, undefined, NaN, "", 0n

// truthy values:
// "   ", "false", "0", [], {}, function(){}

// if(condition){
//     //logic
// }

// if(condition){
//     //logic
// }
// else{
//     //logic
// }

// if(condition){
//     //logic
// }
// else if(condition){
//     //logic
// }
// else{
// }
const arr=[]
if(arr.length === 0){
    console.log("Array is empty")
}

const obj={}
if(Object.keys(obj).length === 0){
    console.log("Object is empty")
}

//Nullish Coalescing Operator(??)
//Used for substitute/safety when null or undefined is received from db OR backend
let val;
val = 5 ?? 10 // 5
val = null ?? 10 //10
val = undefined ?? 15 //15
val = null ?? undefined ?? 20 //20

// Ternary Operator:
// (condition) ? true_statement : false_statement;
// (condition) ? (condition) ? true_statement : false_statement : false_statement;
// (condition) ? true_statement : (condition) ? true_statement : false_statement;

// Switch Statement:
// -default case in optional in switch statement
// -with the help of "break" we come ot of switch statement
// -withot "break" the next case statement are executed

// switch (new Date().getDay()) {
//     case 4:
//     case 5:
//       text = "Soon it is Weekend";
//       break;
//     case 0:
//     case 6:
//       text = "It is Weekend";
//       break;
//     default:
//       text = "Looking forward to the Weekend";
//   }

//   let x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }

const a = 18;
switch(true){
  case (a===18):
    console.log("18");
  case (a<18):
    console.log("<18");
  case (a>18):
    console.log(">18");
}
// o/p: 18
//      <18
//      >18

console.log("**********");

    const b = 18;
    switch(true){
    case (b===18):
      console.log("18");
      break;
    case (a<18):
      console.log("<18");
      break;
    case (a>18):
        console.log(">18");
        break;
    default:
        console.log("Don't know")
  }
// o/p: 18

