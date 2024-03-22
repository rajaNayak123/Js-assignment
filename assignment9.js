// Q . 1

function isEligibleForDiscount(hasMembership, totalpurchase) {

    let ans = (hasMembership && totalpurchase > 100) ? (true) : (false)
    return ans

}

let a = isEligibleForDiscount(true, 90)
console.log(a)



// Q . 2

function tosecond(hour, minute, second) {
    return hour * 3600 + minute * 60 + second
}
console.log(tosecond(2, 30, 45))


// Q . 3

function calculateBMI(weight, height) {

    let res = weight / (height * height)

    return res

}

console.log(calculateBMI(70, 1.75))


// Q . 4

function finalScore(kill, objectives, time) {

    let res = (kill * 100) + (objectives * 50) - (time * 10)

    return res

}

console.log(finalScore(10, 3, 120))