// // Function Definition

// // 1)Function literal notation
// // use the function keyword(reserved) word
// // parameters of a function (are optional)
// function addTwoNumbers(a, b) {
//     //Function block
//     var answer = a + b;
//     console.log(answer)
// }
// function sayHi() {
//     //Write the function logic
//     alert('Hi...there');
// }

// //Function Invocation => to invoce a function, we put ()
// //infront of the function name/variable without {}
// addTwoNumbers(4, 10)
// sayHi();

// // 2) Function Expression
// var addNumbers = function(a, b, c, d)
// {
//     var answer = a + b + c + d
//     console.log('answer is', answer)
//     return answer;

// }
// addNumbers(2, 5, 7, 2);

// // //FUNCTION RETURN TYPE
//  function multiplyByTwo(value){
//      var result = value * 2
//      return result;
//      //The return keyword is used to Exit a function and return the specified value.
//      //In JS if no value is given ti the return keyword,it trturns UNDEFINED
//      //If no return keyword is specified in a function, it returns UNDEFINED/VOID
// }
// // multiplyByTwo(13578);
// var multipliedResult = multiplyByTwo(13578);
// console.log('Multiplied result is', multipliedResult);

//function that print out all even numbers of an array that is a multiple of 3

var AllEvenNumbersMultiple = function(someArray)
{
    var currentNumber = 0;
    for (var index = 0; index < someArray.length; index++) 
    {
        currentNumber = someArray[index]
        if ( currentNumber % 2 == 0 && currentNumber % 3 == 0)
        {
           console.log('OUTPUT is', currentNumber);
           
        }
    }
}
AllEvenNumbersMultiple([2, 6, 9, 18, 24, 27, 30, 33, 36])
