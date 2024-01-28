// .call()
function handleDuplicateUsername(username) {
    console.log("If there exists a duplicate username in db. I will say username already exists")
    this.username = username
}

function createUser(username, email, password) {
// It will not work as, when the function will be called handleDuplicateUsername(username) will add username to its context of handleDuplicateUsername, not to createUser context.
// And After the function execution is over its execution context will pop out of call stack and also username is gone.
    // handleDuplicateUsername(username)
    
// But If we use .call() the context of createUser is send.
// When the function will be called handleDuplicateUsername(username) will not use the context of handleDuplicateUsername.
// Instead it will use the context of createUser, and add username to the context of createUser.
    // Matlab ki handleDuplicateUsername function, this.username = username karta hai.
    // Jab hamne handleDuplicateUsername.call(this, username) kiya to handleDuplicateUsername function ko createUser ka object diya
    // Ab handleDuplicateUsername this.username = username karega(ie. createUser.username = username karega).
    handleDuplicateUsername.call(this, username)

    this.email = email
    this.password = password
}



//Suppose we want to create a class named React and its such that, when we
// click on a button we can access the React class
// (In short the question is asking to point this of event handler to the class instead of html element)
// .bind()
// <button> React </button>  Add this button in html file
class React{
    constructor() {
        this.library = "React"
        this.server = "https://localhost:3000"
        
        // Here this refers to button object
        // Hence when click event occurs, the output is
        // button clicked
        // <button> React </button>
        // undefined
        // document
        // .querySelector("button")
        //     .addEventListener("click", this.handleClick)
        

        //Here this refers to React class, as handleClick is calling the .bind() and handleCLick function'this is in React class
        // Hence when click event occurs, the output is
        // React class
        // <button> React </button>
        // https://localhost:3000
        document
        .querySelector("button")
        .addEventListener("click", this.handleClick.bind(this))
    }

    handleClick() {
        console.log("button CLicked")
        console.log(this)
        console.log(this.server)
        console.log("Now we can access anything in React class")
    }
}

let app = new React()
app.handleClick()

