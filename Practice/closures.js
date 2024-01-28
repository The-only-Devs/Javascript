// function outer(b){
//     var a=10 //Closure will work same for let also
//     function inner(){
//         console.log(a, b)
//     }
//     a=20
//     return inner
// }

// // outer()()
// var close = outer("hello")
// close()

function outest(){
    function outer(b){
        var a=10 //Closure will work same for let also
        function inner(){
            console.log(a, b)
        }
        a=20
        return inner
    }
    return outer
}

// outest()("hello")()
var close = outest()("hello")
close()

// ****************************
function one(){
    var i=1
    //Here this callback function() forms a closure with its lexical scope
    //setTimeout() takes this function to another place and attaches timer to it.
    setTimeout(function(){
        console.log(i)
    }, 1000)
    console.log("Hello")
}
one()

console.log("************")
function two(){
    for(var i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i)
        }, i*1000)
    }
}
two()
// 6
// 6
// 6
// 6
// 6
// Reason
// i->1
// i->2
// i->3

//How to print 1 2 3 4 5 ?
//Using let
console.log("************")
function three(){
    for(let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i)
        }, i*1000)
    }
}
three()
// Reason
// {
//     i
// }
// {
//     i
// }
// {
//     i
// }

//Without using let -> Using closures
console.log("************")
function four(){
    for(var i=1; i<=5; i++){
        function close(val){
            setTimeout(function(){
                console.log(val)
            }, val*1000)
        }
        close(i)
    }
}
four()

