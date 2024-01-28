// getter_setter in Class
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(newPassword) {
        if (newPassword.length < 6) {
            console.log("Password too short!")
        } else {
            this._password = newPassword
        }
    }
}

let user1 = new User("user1", "123456")
console.log(user1.password)



// getter_setter in Constructor Function
function UserFunc(username, password) {
    this._username = username;
    this._password = password;

    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function(newPassword) {
            if (newPassword.length < 6) {
                console.log("Password too short!")
            } else {
                this._password = newPassword
            }
        }
    })
}
let user2 = new UserFunc("user2", "abcdefgh")
console.log(user2.password)


// getter_setter in Object.create()
let UserObj = {
    _username: "user3",
    _password: "pqrstuv",

    get password() {
        return this._password.toUpperCase()
    },

    set password(newPassword) {
        if (newPassword.length < 6) {
            console.log("Password too short!")
        } else {
            this._password = newPassword
        }
    }
}

const newUser = Object.create(UserObj)
console.log(newUser.password)
