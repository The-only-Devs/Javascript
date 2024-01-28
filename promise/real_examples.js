const Github_API = "https://api.github.com/users/SaikumarGatla"

async function getData() {
    console.log("We are in Async function")
    // Since this fetch returns a promise we can write await infront of it
    const dataStream = await fetch(Github_API)
    const jsonValue = await dataStream.json()

    console.log(jsonValue)
    // To see the time taken by fetch() go in network tab and filter fetch

    //Working of fetch
    // fetch() is a Promise.When this promise is resolved it gives a Response Object(which is a readable datastream) 
    // To convert this readable datastream to json we do Response.json().
    // This Response.json() is also a promise.When this promise is resolved it gives result of Github_API
    
    // fetch() -> Response.json() -> result / jsonValue
   
    
    // Many developers also write like this
    // fetch("url").then((response) => response.json()).then(val => console.log(val))
}
getData()

console.log("Some Imp events for user or Remaining sync code")

const errorUrl = "https://invalid_random_error_which_is_not_real_url.com"
async function handleError() {
    // if we use try{} block it is necessay to use catch() block
    try {
        const dataStream = await fetch(errorUrl)
        const jsonValue = await dataStream.json()
        console.log(jsonValue)
    }
    catch (err) {
        console.log(err)
    }
}
handleError()
//.catch((err) => console.log(err))
// We can also catch and handle error here