// //variable definition
// //Use let or Const

// let username = 'Kambang';
// let scores = [3, 5, 1, 78, 9];
// const age = 8;
// let person = {name: 'Prince' , age: 4 , gender:'Male' , usserAdress:'Douala'};

// //Use template literal notation if need be
// let adress = `Bonaberi, Douala-Cameroon`;
// let paragraph = `<p> Hello World </P> , <span> How is Javascript going? </span>`;

// let insertedDataInAdress = `People live at ${adress}`;
// let partircularPerson = `
// <div><span> An example of such person is ${person.name} and he lives in ${person.usserAdress} and precisely at ${adress} 
// /span></div>`;

// console.log(insertedDataInAdress);
// console.log(partircularPerson);

// //Destructing objects
// //lets say we want to get all thr props of the person object as separate variables 
// //let person = {name: 'Prince' , age: 4 , gender:'Male' , usserAdress:'Douala'};

// let {name, age, gender, usserAdress} = person;
// console.log('Name is ',name);
// console.log('age,userAdress and gender are' , age, usserAdress, gender );+


// //Destructing arrays
// const users = ['kambang', 'Sinclaire', function(){ return true },true , false, 'hello']

// //const firstName = user[0];
// // const secondName = user[1];
// //const userCallback = user[2];

// //apply destructing syntax 
// const [firstName, secondName, userCallback, isMarried] = users;


//ARROW FUNCTION 

//simple array function 

const multiplyByTwo = (value) => {
    return value * 2;
}

//lets start the function  If we are passing just one param to our function, we can omit the () brackets 
//around the param name 
const shortenedMultiplyByTwo = value => {
    return value * 2;
}

//more concise version - If the function contains just a single line of code 
//we can omit the return statement and the curly brackets 
const betterMultiplyByTwo = value => value * 2;

//Default Parameters 
const multiplyByFactor = (value, factor = 3 ) => value * factor;

let outcome = multiplyByFactor( 4);
console.log(outcome);
