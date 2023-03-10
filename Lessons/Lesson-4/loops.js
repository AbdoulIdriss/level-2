//For loop 
//for(initilaisation;condition;increment/decremenent) //for loop syntax
{
    //This code will wxwecute repeatedly until the condition resolves to 'false'
}


// for (var counter = 0; counter <= 10; counter += 2) {
//     console.log('counter is now', counter);
//     //if (counter !== 0 && counter % 2 == 0); {}
// }

//Write a counter that counts from 0-20
//if it meets an even number, it shoulf alertt 'even number found'
//If it meets an odd number, it should alert 'odd number found'

// for (var counter = 0; counter <= 20; counter ++) 
// {
//     if (counter % 2 == 0) 
//     {
//         alert('even number found')
//     }
//     else 
//     {
//         alert('Odd number found')
//     }
// }

//while Loop
//while(condition) {
    //This block of code executes repeatedly if condition=true
    //Things to note about the while loop
    //1)It takes only just parameter and its reauired
    //2)Initialisation is done outside(before) the while loop
    //3)Incremeent/Decrement is done within the while loop
    //4)For all loops, always ensure the loop condition that breaks the loop
    //(BASE CONDITION) except you intentionally wanna create an INFINITE LOOP
//}

//count from 0-10 using a while loop

//1)Initialise before the loop
var counter = 0;

//2)Give a condition to the loop
while (counter <= 10) {
    console.log('counter is', counter);
    //increment/decrement within the loop
    counter++;
}

