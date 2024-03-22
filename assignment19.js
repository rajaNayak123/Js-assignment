
// QUSTION 1.

 const orginalNames = ['Alice', 'Bob', 'Charlie']

 let NewName = [...orginalNames, 'Raja', 'Chikun', 'Srikanta']


 function printNameWithGreetings(name) {

     for (let key of name) {
         console.log('hello', key)
     }
 }

 printNameWithGreetings(NewName)


// // QUSTION 2.

const fristName = ['John', 'Alice']
const lastName = ['Doe', 'Smith']

function combineNmae(fristName, lastName) {
    let ans = [];
    for (let i in fristName) {
        ans.push(fristName[i] + ' ' + lastName[i]);
    }
    return ans;
}

let FullName = combineNmae(fristName, lastName);
//console.log(FullName)


// QUSTION 3.

const number = [7, 2, 9, 1, 4, 6]

let arr = number.sort(function(a,b){
     return a-b })

//  console.log(arr);



