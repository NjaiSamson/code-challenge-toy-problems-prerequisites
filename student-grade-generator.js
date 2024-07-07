
// Function takes marks input from the user and validates the marks within the range of 0 to 100
// By use switch statement, the function logically assigning grading against the marks input

const inputMarks = prompt("Enter student marks: ");

function validateMarks(marksToValidate) {
    if(!isNaN(marksToValidate) && marksToValidate >= 0 && marksToValidate <= 100) {
        return marksToValidate;
    } else {
        return "You entered invalid marks. Please click 'OK' and enter valid marks between 0 and 100"
    }
};

function studentGradeGenerator(func) {
    let grade;
    let A, B, C, D, E;
    const marks = func(inputMarks)

    switch(true) {   
        case (marks > 79 && marks <= 100):
            A = true;
            grade = `Grade A of ${marks}%.`;
            break;
        case (marks >= 60 && marks <= 79):
            B = true;
            grade = `Grade B of ${marks}%.`;
            break;
        case (marks >=49 && marks <= 59):
            C = true;
            grade = `Grade C of ${marks}%.`;
            break;
        case (marks >= 40 && marks <= 49):
            D = true;
            grade = `Grade D of ${marks}%.`;
            break;
        case (marks >= 0 && marks < 40):
            E = true;
            grade = `Grade E of ${marks}%.`;
            break;
        default:
            grade = `You entered invalid marks. Please click 'OK' and enter valid marks between 0 and 100.`;
        };
    return grade;
};

alert(studentGradeGenerator(validateMarks));

