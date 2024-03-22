/*

QUSTION 1.

Write a factory function in JavaScript that creates a person object with `name` and `age` properties.
 And then print them on console by function calling. */


 function creatPerson(name, age) {
    return {
         name,
         age,
     }
 }


 function DetailsOfPerson(person) {
     console.log(`Name: ${person.name}`)
     console.log(`Age: ${person.age}`)
 }

 const person1 = creatPerson("Alice", 30)
  console.log(person1)



/*

QUSTION 2.

Create a function called `printPersonInfo` that takes a person object as an argument and prints 
its details (name and age) on the console.reate a person object and use the `printPersonInfo` function 
to display its information.    */


function creatPerson(Name, Age) {
    return {
         Name,
         Age,
    }
}

function PrintPersonInfo(person) {
    console.log(`name:${person.name}`)
    console.log(`age:${person.age}`)
}

let person2 =  creatPerson("Raja Nayak",18)
console.log(person2)

/*

QUSTION 3.

Create a constructor function called `Book` that takes `title` and `author` as parameters and assigns 
them as properties to the book object.Then, 
create two book objects using the `Book` constructor and display their details on the console.  */


function Book(title,author){

    this.title = title
    this.author = author

}

  const book1 = new Book('The Catcher Rye', 'J.D Salinger')
  const book2 = new Book('1984','George Orwell')

  console.log("book1:")
  console.log(book1)

console.log("book2:")
  console.log(book2)