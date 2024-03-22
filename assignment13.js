//QUSTION 1.

//Write a javascript program to print prime numbers from 2 to 30. 


for (let i = 2; i <= 30; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        //console.log(i);
    }

}


//QUSTION 2.

//Write a javascript program to check whether a number is available in an array or not


let arr = [1, 2, 3, 5, 4, 8]

function check(Num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == Num) {
            return "available"
        }
    }
    return "not available"
}
//console.log(check(6))



//QUSTION 3.

//  Write a javascript program to print the rank of students based on the percentage. 


function rank(std1, std2, std3) {
    let arr = [std1, std2, std3];
    arr.sort(function (a, b) { 
        return b - a 
    });

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], "has rank", i + 1);
    }
}

rank(90, 79, 89);



