let student = [
    { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
    { name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
    { name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
    { name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];

// Question 1: 

/* function with a parameter */
function studentMarks (students) {
    /* creating empty variables */
    let smartestStudent;
    let highestMarks = 0;
    /* getting the total of grades for eahc student then dividing it by the length of marks to get the average. */
    students.forEach(student => {
        let totalMarks = student.marks.reduce((acc, mark) => acc + mark)/student.marks.length;
        
        /* if staement that finds the highest grade. */
        if (totalMarks > highestMarks) {
            /* assigning the highest grade to 'highestMarks' & the name of the student to 'smartestStudent'*/
            highestMarks = totalMarks;
            smartestStudent = student.name;
        }
    });
    return smartestStudent + " with " + highestMarks + "%";


};

/* creating a variable that equals the results of the function. */
let finalAnswer = studentMarks (student);

console.log(`Smartest student: ${finalAnswer}\n`);


// Question 2:
/* function with a parameter */
function findingMinValue(students) {
    /* returning the lowest mark of each student */
    return students.map(student => Math.min(...student.marks));
};
/* creating variable that equls the function's result. */
let minMarks = findingMinValue(student);
console.log(`the minimum marks are: ${minMarks.join(', ')}\n`);


// Question 3:

/* function with parameter */
function countLetters(str) {
    /* returning the lenght of the letters of the string  */
    return str.replace(/[^a-zA-Z]/g, '').length;

};

let count = countLetters('helloworld');
console.log(`amount of letters: ${count}\n`);

debugger;