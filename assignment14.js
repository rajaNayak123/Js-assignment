//QUSTION 1.

//Write a javascript program to calculate the sum of even numbers for a given range, 
//including both the start and end numbers of the given range.

 let sum = 0

     for (let i = 1; i <= 20; i++) {

         if (i % 2 == 0) {
             sum = sum + i
         }

    } //console.log(`sum of even number from 1 to 20 is : ${sum}`)
      


//QUSTION 2.

//Write a program that uses a `while` loop to count the number of odd integers between a given range. 
//The program should take two integers  `start` and `end`, and then output the count of odd numbers in that range, including both `start` and `end` if they are odd.


let count = 0;
let i = 5;

while(i<=12){

    if(i%2==!0){
        count = count + 1
    }  i++

}  //console.log(`there are ${count} odd number in the range from 5 to 12`)



//QUSTION 3.

//Write a program that uses a `for-in` loop to iterate through an array of names and print each name along with its index.
//Create an array with at least five names, and then use the loop to display each name and its corresponding index.


let Name = ["alic","bob","charlie","David","Eve"];

for(let names in Name){

    //console.log("index of",names,(Name[names]))
}


 




