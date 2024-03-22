// to declear an object containing details of student full name, gender,roll number,graduation year(2027),and an array of marks. 
//find out the average  score of this student



let studentDetail = {

    fullName: "raja nayak",

    gender: "male",

    rollNumber: 56,

    graduationYear: 2027,

    marks: [75, 80, 85, 69, 74]

}

let sum = 0
for (let i = 0; i < studentDetail.marks.length; i++) {
    sum = sum + studentDetail.marks[i]
}
console.log(sum)


console.log(sum / 5)













