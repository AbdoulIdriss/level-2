//Arrays and Object exercises

//1) Transform the following array to an object containing the sqaure of the array elements 
var scores = [3, 5, 9, 17, 5, 4, 34, 9, 11, 13];

//sample output 
/**
 * squareObj = {
 * 3:9
 * 5:25
 * 9:81
 * }
 */
var squaredObj = {};

for( var i = 0; i < scores.length; i++) {
    squaredObj[scores[i]] = scores[i]*(scores[i]);
}
console.log(squaredObj);



/**
 * [[3:9], [5:25], [9,81]]
*/
var newArrayObjects = [];
var newObject = [];

// var arrayObject = Object.entries(squaredObj);
// console.log(arrayObject);
for( var i = 0; i < scores.lenght; i++) {
    var newObj = {};
    var innerArray = [];
    newObj[score[index]] = score[index] * score[index];
    newArrayObjects.push(newObj);
}

/**
 * [{3:9}, {5:25}, {9,81}]
 * objects in an array
//  */


for (var index = 0; index < arrayObject.length; index++) {

    var element = arrayObject[index];
    var object = {};
    object[element[0]] = element[1];
    newObject.push(object);

}
console.log(newObject);