// QUSTION 1.

function manipulatesStudentInfo(student) {
    let total = 0
    for (let key of student.grades) {
        total = total + key
    }
    student.averageGrades = total / student.grades.length;

    let studentCopy = { ...student }
    delete studentCopy.grades;
    delete studentCopy.averageGrades;

    return [student, studentCopy]

}

const student = {

    name: "john Doe",
    age: 20,
    grades: [85, 90, 78, 92, 88],
    city: "New York",


}

const [modifiedStudent, studentCopy] = manipulatesStudentInfo(student)
console.log(modifiedStudent)
console.log(studentCopy)