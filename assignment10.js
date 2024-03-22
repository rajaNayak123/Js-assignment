

// Qustion .1


function wetherAdvisor(temp) {

    if (temp > 25) {
        return "Sunny"
    }
    else if (temp < 25 && temp > 15) {
        return "Cloudy"
    }
    else if (temp < 10) {
        return "rainy"
    } else {
        return "weather condition is normal"
    }

}
let res = wetherAdvisor(26)
console.log(res)


// Qustion .2


let a = 4
let b = 5
let c = 3

function checkGreater(a, b, c) {
    if (a > b) {
        if (a > c) {
            return "a is greater"
        } else {
            return "c is greater"
        }
    } else {
        if (b > c) {
            return "b is greater";
        } else {
            return "c is greater";
        }
    }
}

//console.log(checkGreater(4,5,3))


// Qustion .3

function coffeeOrder(Size, Sugar) {
    if (Size == "small") {
        if (Sugar == true) {
            return 3+1;
        } else {
            return 3;
        }
    } else if (Size == "medium") {
        if (Sugar == false) {
            return 4;
        } else {
            return 4+1;
        }
    } else if (Size == "large") {
        if (Sugar == true) {
            return 5+1
        } else {
            return 5 
        }
    }
}

console.log(coffeeOrder("small", true));
console.log(coffeeOrder("large", true));

// Qustion .4


function leapYear(year) {

    if (year % 4 == 0) {
        if(year%100==0){
            if(year%400==0){
                return " it is a leap year"
            }else{
                return "it is not a leap year"
            }
        }else{
            return "it is a leap year";
        }
    } else {
        return "it is not leap year"
    }

}

// console.log(leapYear(2003));



function checkGreater(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        return "num1 is greater"
    } else if (num2 >= num1 && num2 >= num3) {
        return "num2 is greater"
    } else {
        return "num3 is greater"
    }

}
console.log(checkGreater(3,5,6))









