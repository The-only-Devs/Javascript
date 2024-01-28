async function authenticate() {
        await Validate()
        await startLogin()
        await getUserData()
        await displayUserData()
}
authenticate()
.then(() => {
    console.log("Everthing is fine")
})
.catch((err) => {
    console.log(err)
})


// **********************
async function authenticate() {
    try {
    await Validate()
    await startLogin()
    await getUserData()
    await displayUserData()
    }
    catch (err) {
        console.log(err)
    }
}
authenticate()
.then(() => {
console.log("Everthing is fine")
})

// **********************
async function authenticate() {
    try {
    await Validate()
    await startLogin()
    await getUserData()
    await displayUserData()
    }
    catch (err) {
        console.log(err)
        throw new Error()
    }
}
authenticate()
.then(() => {
console.log("Everthing is fine")
})
.catch((err) => {
console.log(err)
})