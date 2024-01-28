// Singleton Object 
// Object.create()
const appUser = new Object();

console.log("*****************");
// Object Literals

const mySymbol = Symbol("key1_secret");

const jsUser = {
    name : "Saikumar",  
    //key in JS object are Bydefault considered as string Eg name : "Saikumar"
    // is considered as "name" : "Saikumar"
    "full name" : "Saikumar Gatla", //Syntax if there is a space in key
    email : "name@gmail.com",
    Symbol :"key",
    [mySymbol] : "key",   //Syntax to use symbol in objects
    id : 101,
    isLogedin : false,
    lastLoginDays : ["Monday", "Friday"],
}
//How to Access Objects?
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);   //Syntax to access if there is a space in key
console.log(jsUser[mySymbol]);  //Syntax to access symbols in objects

//How to Freeze Objects?
jsUser.email = "jsUser.email.com";
// Object.freeze(jsUser);  //Doesn't allow to modify object
jsUser.name = "Saikumar Gatla";
console.log(jsUser); 


//How to Add key:value in Objects?
jsUser.greetings = function(){
    console.log(`Hello ${this.name}`);
}
console.log(jsUser); 

console.log("*****************");
// Nesting in objects
const regularUser = {
    email : "some@gmail.com",
    fullName :{
        userFullName : {
        firstName : "Saikumar",
        lastName : "Gatla"
    }
}
}

console.log(regularUser.fullName.userFullName.lastName);
console.log("*****************");

const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"a", 4: "b"};
const obj3 = {5:"a", 6: "b"};

const obj4 = {obj1, obj2};//object of two objects
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3); //Merging ob1, obj2, obj3 into an empty object{}
console.log(obj5);

const obj6 = {...obj1, ...obj2, ...obj3};
console.log(obj6);

//Array of object 
const users = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    }, 
]

console.log(users[1].email);

//Array of keys, values and object entries from an object
console.log(Object.keys(jsUser));
console.log(Object.values(jsUser));
console.log(Object.values(jsUser).length);
console.log(Object.entries(jsUser));

//Check if key exists in object
console.log(jsUser.hasOwnProperty("isLoggedIn"));



