// QUSTION 1 .

/* Create a function that uses the rest operator to accept an arbitrary number of arguments and calculates their sum.
 Provide an example of how this function can be called with different numbers of arguments. */


function sum(...numbers) {

    let sum = 0
    for (let key of numbers) {
        sum = sum + key
    }
    return sum

}
console.log(sum(1, 2, 3))
console.log(sum(10, 20, 30, 40))




// QUSTION 2 

/* Write a function that uses default parameters to greet a user with a customisable message. 
Provide an example of how to call this function with and without specifying custom greetings. */


function name(name, message = "hello") {

    //console.log(`${message} ${name}`)

}
name('alice')
name('bob', 'hi')




