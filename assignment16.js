// QUSTION 1.

function getPizzaCount(guests) {

    let count = Math.ceil((guests * 3 / 8))

    return count

}
const guestsInvited = 12

const pizzaToBeOrderred = getPizzaCount(guestsInvited)
console.log(pizzaToBeOrderred)


// QUSTION 2.

function textProccesingApplication(str) {
    str.toLowerCase()
    console.log(str.toLowerCase())

    str.replaceAll(' ', '')
    console.log(str.replaceAll(' ', ''))

    str.includes('javascript')
    console.log(str.includes('javascript'))

    str.split('a').length - 1
    console.log(str.split('a').length - 1)

    str.replaceAll('e', 'X')
    console.log(str.replaceAll('e', 'X'))


}
textProccesingApplication("javascript is an excellent programing language")


