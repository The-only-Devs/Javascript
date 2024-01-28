/*
if(condition){
    //logic
}

if(condition){
    //logic
}
else{
    //logic
}

if(condition){
    //logic
}
else if(condition){
    //logic
}
else{

}

Ternary Operator:
(condition) ? true_statement : false_statement;
(condition) ? (condition) ? true_statement : false_statement : false_statement;
(condition) ? true_statement : (condition) ? true_statement : false_statement;

Switch Statement:
-default case in optional in switch statement
-with the help of "break" we come ot of switch statement
-withot "break" the next case statement are executed

switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }

  let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
*/

const a = 18;
switch(true){
  case (a===18):
    console.log("18");
  case (a<18):
    console.log("<18");
  case (a>18):
    console.log(">18");
}

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