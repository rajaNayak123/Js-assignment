// QUSTION 1.

/*Given an array of numbers: [2, 4, 6, 8, 10], use the filter? function to create a new array 
called ?evenNumbers? that contains only even numbers from the original array. */



let numbers = [2, 4, 6, 8, 10]

let evenNumbers = numbers.filter(even)

function even(i) {

    return i % 2 == 0

}
//console.log(evenNumbers)



// QUSTION 2.

/*You are given an array of student objects with the following structure: Create a JavaScript function 
that uses the ?map? function to transform this array into an array of objects with a "grade" property. 
The "grade" should be a string based on the following criteria:  */


function assignGrades(students) {

    if (students.Score >= 88) {
        students.grades = 'B'

    }
    else if (students.Score >= 90) {
        students.grades = 'A'

    }
    else if (students.Score >= 75) {
        students.grades = 'C'

    }
    else {
        students.grades = 'D'

    }
    delete students.Score;
    return students;
}

const studentData = [
    { name: "Alice", Score: 88 },
    { name: "Bob", Score: 92 },
    { name: "Charlie", Score: 75 },
    { name: "David", Score: 64 },
]

const gradeStudent = studentData.map(assignGrades)

/console.log(gradeStudent)




// QUSTION 3

/*You have an array of product objects, where each object has properties ?name? (string) and ?price? (number). 
Design a JavaScript function that uses the ?reduce? function 
to calculate and return the total value of the entire inventory (the sum of the prices of all products). */


const inventory = [
    { name: "LAptop", Price: 800 },
    { name: "Phone", Price: 600 },
    { name: "tablet", Price: 300 },
]

function claculateTotalInvetoryValue(product) {
    return product.reduce(add, 0)
    function add(accu, currVal) {
        return accu + currVal.Price;
    }
}

const totalValue = claculateTotalInvetoryValue(inventory)
console.log(totalValue)








