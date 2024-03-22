
// Q.1 Create a function that calculates the final price of an 
//item after applying a 15% discount using the `- =` operator.


function discount(p) {
    //let ans = p - p * 15 / 100

    p -= p * 15 / 100   //  p = p - p*15/100
    return p;
}
// console.log("final price of an item = ", discount(200));



// Q.2 Implement a function to find the average of three numbers 
// using the addition and division operators.


function number(p1, p2, p3) {
    let res = 0;
    res += (p1 + p2 + p3); // res = res + (p1+p2+p3)
    res /= 3;    // res = res/3
    return res

}
// console.log("average of three number = ", number(45, 84, 105))


// Q.3 Develop a function that takes a user's age as input and returns 'Adult' 
//if the age is 18 or above, otherwise 'Minor', using the ternary operator.	


function isAdult(age) {
    return (age >= 18) ? ("Adult") : ("Minor");
}

//console.log(isAdult(17));


//Q.4 Implement a function that converts a numerical grade into a letter grade 
//using the ternary operator (90-100: 'A', 80-89: 'B', etc.



function grade(marks) {
    return (marks <= 100 && marks <= 90) ? ("A") : ((marks < 90 && marks >= 80) ? ("B") : ("C"))

}
//console.log(grade(67))


