const student1 = {
    name: "Murilo",
    grade1: 7,
    grade2: 8,
};

const student2 = {
    name: "Alfredo",
    grade1: 5,
    grade2: 6,
};

const student3 = {
    name: "Oreo",
    grade1: 6,
    grade2: 8,
};

const student4 = {
    name: "Mateus",
    grade1: 7,
    grade2: 6.5,
};

function calculateAverage(student) {
    return (student.grade1 + student.grade2) / 2;
}

function checkPassStatus(student) {
    const averageGrade = calculateAverage(student);
    const passStatus = averageGrade >= 7 ? "Parabéns, você conseguiu passar no concurso!!!" : "Infelizmente você não conseguiu dessa vez.";
    console.log(alert(` A nota de: ${student.name} foi: ${averageGrade}.\n ${passStatus}`));
}

checkPassStatus(student1);
checkPassStatus(student2);
checkPassStatus(student3);
checkPassStatus(student4);




