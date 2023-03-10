//SYNTAX
//square brackets are used 

// var users = ["Kambang", "Nella", "Prince", "Emmanuel"];
// var kambang =users[0]; //Accesing an array item by its index
// var Nella = users[1];
// var lastPerson = users[users.length - 1];

// console.log('kambang, Nella, lastPerson', lastPerson);

//Using the Array constructor
// var scores = Array(5);
// scores[0] = 10; //set a value/item/element to an array index
// scores[1] = 23;
// scores[2] = 50;
// scores[3] = 30;
// scores[4] = 45; // score[scores.length - 1]=45
// console.log('Array constructor example', scores);
 
//Array of courses
//var courses = ['paddle bike', 'oil chain', 'master breaks', 'Swag'];
//var userSelcetodCourse = prompt('please tell us what do you wanna learn');

//To easily access/manipulatte elements of an array, we use loops
// => Arrays and Loops are 5&6

//Lets use the For...loop to access the elelments of our courses array
// for (var index = 0; index < courses.length; index++) 
// {
//     var course = courses[index]; //courses[0]
//     console.log('The Current course is', course);
// }

//Exercise 
//Using the course array and the examole abouve,
//Implement a scenario where the user inputs the course and you are able to tell them if the course is currently 
//available or not

var courses =['Maths', 'Physics', 'ICT', 'Chemistry', 'A-maths'];

var userInput = prompt('What course do you want to learn?');

//define function => PURE FUNCTION
function checkIfCourseExist(input, array) 
{
    for (var i = 0; i < array.lenght; i++) 
    {
        if (input == array[i]) 
        {
            alert('course available');
            return;
        }
    }
    alert('course not available');
    return;
}