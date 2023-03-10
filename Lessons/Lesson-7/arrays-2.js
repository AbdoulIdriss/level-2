//Array build-in methods

// 1) push-> it adds(appends) an element to the end of an array
var score = [2, 3, 5]
score.push(10) //this adds 10 to the  => [2, 3, 5, 10]
score.push(20); //[2, 3, 5, 10, 20]

// 2)pop -> removes the last item in an array
score.pop() //removes 10 from the array =>[2, 3, 5, 10]

//3) shift -> removes the first item and returns the removed item
console.log('berfore shift is called, score is', score);
var firstItem = score.shift();
console.log('Removed item is', firstItem);
console.log('After shift is called, score is', score);

//4) unShift -> It inserts an element at the top/start of the array
console.log('before unShift is called, score is', score);

var insertedItem = score.unshift(100);

console.log('Removed item is', insertedItem );

console.log('After unShift is called, score is', score);

//5) splice -> It clips a portion of an array which contains elements that exist within the 
//start/end index specified and returns the elements in a new array

console.log('score before splice is ', score);

var firstTwoElements = score.splice(0, 2); //starts at index 0 to index 1 [2 here will act as (2-1 which is 1)]

console.log('Spliced eleme nts are ', firstTwoElements);

console.log('score after splice is ', score);

//6) reverse -> This reverse the element in an array

console.log('score before Reversse is', score);
var reversedArray = score.reverse();
console.log('Score After Reverse is ', reversedArray);

//7) includes -> Checks if an an item exist in an array 
//It returns true if item exists or false for otherwise

var isItemArray = score.includes(100);
console.log('The result includes is => ', isItemArray);

//8) IndexOf -> It returns the index of an element in an array if found
//else it returns -1

var indexOf100 = score.indexOf(100);

console.log('100 is located at index ', indexOf100);