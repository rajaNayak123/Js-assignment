
// QUSTION 1 .

//Write a JavaScript program that takes a number (1 to 7) as input and uses a `switch` case statement
// to determine the corresponding day of the week. Display the name of the day as output.


function getDay(day) {

    switch (day) {

        case 1:
            return "sunday"

        case 2:
            return "monday"

        case 3:
            return "tuesday"

        case 4:
            return "wednesday"

        case 5:
            return "thursday"

        case 6:
            return "friday"

        case 7:
            return "saturday"

        default:
            return "Not valid"
        
    }

}  
     console.log(getDay(5))




// QUSTION 2 .

// Create a simple calculator program using a `switch` case statement. 
// The program should allow the user to enter two numbers and an operator (+, -, *, /).
// Based on the operator, perform the appropriate calculation and display the result.

function calculato(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "/":
            return num1 / num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "%":
            return num1 % num2;
        default:
            return 0;
    }
}
console.log(calculato(2,4,'+'))


// QUSTION 3


//Develop a color picker program that allow the user to enter a color code (R for Red, G for Green, B for Blue). 
//Use a `switch` case statement to display a message based on the color chosen, 
//such as "You chose Red" for 'R'.



function changeColour(colour) {


    switch (colour) {

        case 'R':
            return "R for Red Colour"

        case 'G':
            return "G for Green Colour"

        case 'B':
            return "B for Blue Colour"

    }

} 
console.log(changeColour('G'))