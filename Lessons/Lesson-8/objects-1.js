// var user = 
// {
//     name: "Kambang",
//     age: 20,
//     gender: "Male",
//     score: [],
// 	    marks: [16, 19, 20],
// 	    isMarried: false,
// 	    languages: 
//     { 
//         en:"ENG" , 
//         fr: "FRE"
//     }

// }
// // user.score.push(30);
// // user.score.push(20);
// // user.score.push(10);
// // user.languages.ger = "GER";
// // user.languages.chi = "CHI";
// // user.giftByGod = "yohann";
// // console.log(user.score);
// // console.log(user.gender);

// // console.log('languages', user['languages']);

// // user.sayHi = function() {
// //     return 'Good Morning';
// // }
// // console.log( {user} );

// //dictionary Exercises

// var defs = [
//     'One is the second number in the numbering system',
//     'Two is a good number for couples',
//     'Three is a great number to represent Cameroon flag',
//     'Four is ...',
//     'Five is ...'
// ]
// var numberDictionary = {};
// for( var i = 0; i < defs.length; i++) {
//     numberDictionary[i + 1] = defs[i]
// }
// console.log('Dictionary ', numberDictionary);

// //Object methods 

// //1) Object.freez => it freezes an object such that props can't be added to it 
// //after thr object is defined  
// var freezeNumberDict = object.freeze(numberDictionary);

// //2) object.key => It returns all the keys of an object in an array
// var dictionaryKeys = object.keys(numberDictionary);
// console.log('dictionary +> ', dictionaryKeys);

// //3) object.value => It returns all the values of the various keys in the object
// //it return them as an array
// var dictionaryvalues = object.value(numberDictionary);

// //4) Object.enteries => It returns the properties of an object in an array
// var dicEnteries = object.entries(numberDictionary);

// //5)object.create  => creates a brand new empty object if arguments are passed
// //Else create a new object from the object passed to it
// var newObj = Object.create();

//Exercise 
var obj = {
    value: [{ name: 'Kambang', marks: [{ js: 20, python: { django: [30, 10, 23] } }] }]
}
//Write the code to output what's in Django 
console.log(obj.value[0].marks[0].python.django);