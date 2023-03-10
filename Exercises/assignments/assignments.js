//1) Assignment number one 
//To write a function that takes an array and returns a new array which consist of
//odd numbers which are multiple of 3

var allNumbers = [2, 6, 9, 18, 24, 27, 30, 33, 36, 39, 42]
// {
//     var actualNumber = 0;
//     for (var i = 0; index < someArray.length; i++) 
//     {
//         actualNumber = someArray[i]
//         if ( !(actualNumber % 2 == 0) && actualNumber % 3 == 0 )
//         {
//            console.log('OUTPUT is', actualNumber.splice(0, 11));
           
//         }
//     }
// }

// 2) write a function to reverse the elements of an array without using the reverse method
// var newReversedArray = [];

// var reverseArray = function() {
//     for(var i = allNumbers.length - 1; i > -1; i--) {

//         newReversedArray.push(allNumbers[i]);
//         // console.log('The reverse of the array is ', newReversedArray);
//     }
//     console.log('The reverse of the array is ', newReversedArray);
// }
// reverseArray();

/**  3)
 * 
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, 
but instead returns a new array.

The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 
The default sort order is ascending, built upon converting the elements into strings, then comparing their 
sequences of UTF-16 code units values

The join() method creates and returns a new string by concatenating all of the elements in an 
array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, 
then that item will be returned without using the separator.

The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, 
until the callbackFn returns a falsy value. If such an element is found, every() immediately returns false and 
stops iterating through the array

The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns 
false. It doesn't modify the array.
 
 */

// 4)write a function that combines 2 arrays and returns a new array (don't use the concat function)
var mergedArray = [];

var mergedArray = function() {

var anotherArray = [1, 3, 4, 5, 7, 8]
var mergedArray = [anotherArray, allNumbers ]
console.log(mergedArray.join());
}
mergedArray();

//5)write a function thtat returns the maximum and minimum item in an array
var maxScore = 0;
var minScore = 0;

var maxItem = function() 
{
    for (i = 0; i < allNumbers.length; i++ ) 
    {
        if (allNumbers[i] > maxItem) 
        {
            maxItem = allNumbers[i];
            maxItem= index;
        }
    }
}

var minItem = function() 
{
    for (i = 0; i < allNumbers.length; i++ ) 
    {
        if (allNumbers[i] < minItem) 
        {
            minItem = allNumbers[i];
            minItem = index;
        }
    }
}
minItem();
maxItem();
console.log('The maxItem is ', maxItem ,'and the min item is', minItem);

//6)Write a function that comapres 2 arrays with the same length and returns the largest item in the arrays

//7) A function that squares all elemtents in an array and returns a new array that contains squares elements which are odd numbers 