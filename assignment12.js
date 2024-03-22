
// QUSTION 1.

// Write a JavaScript program to calculate the sum of the first n natural numbers


function findSum(n) {

    let sum = 0

    for (let i = 1; i <= 10; i++)

        sum = sum + i

    return sum
}
//console.log(findSum(5))



//QUSTION 2.

//Create a JavaScript program that generates the multiplication table for a given number. 
//The program should take display the multiplication table from 1 to 10 for that number.


let i = 1
let n = 2
while(i<=10){

//console.log(n,"*", i,"=" ,n*i)
        i++
}


//QUSTION 3.

// Develop a JavaScript program to calculate the factorial of a given positive integer. 
// The factorial of a number is the product of all positive integers less than or equal to that number.



let x = 5;
let fact = 1;

for(let i=1; i<=x; i++){
    fact = fact * i;                    
}
 
console.log(fact)
