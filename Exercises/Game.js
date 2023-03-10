
// //Define pointIncrease
// var pointIncrease = 2;
// //Define failureCount
// var failureCount = 0;
// //Define the userPoint
// var userPoints = 0;

//     var winningNumber = Math.ceil(Math.random() * 500);

//     //Peep the answer
//     console.log('winning Number', winningNumber);

//     var userInput = prompt('Guess the winning number');

//  while (true) 
//  {

//     //get the user input using the built-in prompt function
//     var userInput = prompt('Guess the winning number');

//     //prompt returns a string, so lets cast the returned value to number
//     //use the ParseInt() function to convert a stringed number to a number
//     userInput = parseInt(userInput);

//     //check the user's guess against the winning number
//     if (userInput == winningNumber) {
//         //user guessed the number
//         userPoints += pointIncrease;
//     }else {
//         failureCount++;
//     }

//     if (userPoints === 50 ) {
//         alert('congrats! You are a KING')
//         break;
//     }

//     if (failureCount ===5 ) {
//         alert('eweeeeh eeeh are you a KONG?')
//         break;
//     }

// }

//do while syntax
do {
    console.log('Do while loop')
}
while(3>5)

//assignment is to put all of this in a continueos loop

//Assignment
/**
 * TASK -Q&A-Game
 * 
 * the game function as follows
 * A user is asked questions and each question has a maximum of 4 answers choices.
 * if the users's failure cannot exceed 4,
 * the user gets disqualified and the game ends,
 * else the user consumes the banks of questions and wins!
 * 
 * constraintrs
 * -Number of questions should be more than 8
 * -Each question has only one valid answer
 * -The next question only comes when the current one is answered and evaluated
 */
var question = [{prompt:('What colors are grapes?\n (a)yellow\n (b)Red\n (c)Blue\n (d)Orange'), answer:'c'},
                {prompt:('Where is Cameroon found?\n (a)Europe\n (b)Africa\n (c)America\n (d)Asia'), answer:'b'},
                {prompt:('Where is 7 Academy found?\n (a)Bonaberi\n (b)Bonanjo\n (c)Akwa\n (d)Bali'), answer:'d'},
                {prompt:('SYNTAX means coreectness?\n (a)true\n (b)false\n (c)not sure\n (d)None of the above'), answer:'a'},
                {prompt:('What color is banana?\n (a)yellow\n (b)Red\n (c)Blue\n (d)Orange'), answer:'a'},
                {prompt:('What colors are grapes?\n (a)yellow\n (b)Red\n (c)Blue\n (d)Orange'), answer:'a'},
                {prompt:('What colors are grapes?\n (a)yellow\n (b)Red\n (c)Blue\n (d)Orange'), answer:'a'},
                {prompt:('What colors are grapes?\n (a)yellow\n (b)Red\n (c)Blue\n (d)Orange'), answer:'a'},

            ]

var score = 0;
 
for (var i=0; i < question.length; i++) 
{

    var response = prompt(question[i].prompt);

    if(response == question[i].answer ) {
        score++;
        alert('correct!');
    }
    else{
        alert('wrong!')
    }
}

