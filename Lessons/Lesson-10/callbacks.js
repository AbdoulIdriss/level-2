//Callback function  => A Function passed around to other functions as a parameter to perform some operations and return 
// results to the caller

//EXAMPLE

//lets impliment a callback function that squares elements in an array and returns the square array 

// var sqaureCallBack = function(elements) {
//     var newArray = [];
//     for (var i = 0; i < element.length; i++) {
//         newArray.push(elements[i] * elements[i]);
//     }
//     return newArray;
// }

// //Imagine we have marks to cvalculate their squares within an Exam function

// function exams(nameOfStudents, marks, callback) {
//     return {
//         name: nameOfStudents,
//         marks: callback(marks) //This marks must be sqaured  
//     }
// }

// var student = 'kambang';
// var marks = [2, 4, 8, 12, 45, 70];
// var studentExamResult = exams(student, marks, sqaureCallback)
// console.log('studentExamResult' , studentExamResult);

//EXAMPLE 2

//let's increment a callback that filters even numbers in an array and returns a new array ofthe even numbers found

//Task 1 
//create the function to reverse an even array  of numbers

function checkForEven(array) {
    var evenArray = [];
    for ( var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenArray.push(array[i]);
        }
    }
    return evenArray;
}

function reversedEvenArray(array, cb) {

    var reversedArray = [];
    var evenArray = cb(array);

    for (var i = evenArray.lenght - 1; i >= 0; i--) 
    {
        reversedArray.push(evenArray[i])
    }
    return reversedArray;
}
var result = reversedEvenArray([3, 6, 7, 2, 9, 8, 43, 56] , checkForEven);
console.log('Result is ', result);