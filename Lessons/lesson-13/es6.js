// for ( var i = 0; i < 5; i++) {
//    // console.log(i);
// }

// console.log(i);

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// const PI = 3.14;
// console.log(PI);

// //for...of ( works only for strings and arrays)

// let letters = ['a', 'b', 'c', 'd', 'e'];

// for (let letter of letters ) {
//     console.log(letter);
// }

// //iterating over string
// let  greet = "Hello World";

// for (let character of greet) {
// //     console.log(character);
// }

//for...in (only works for objects)

// const person = {name: "peter", age: 28};
// for (let p in person) {
//     console.log(p);
// }

//Template literals(``)

//string with embeded variables ans expresions
// let a = 10;
// let b = 20;
// let result = `the sum of ${a} and ${b} is ${ a + b }`; //the ${} is used to access the value of the variable
// console.log('the result is' , result);  

//Default values or function parameters 

// function sayHello(name = 'World') {
//     return `Hello ${name}`;
// }
// console.log(sayHello()); //Hello World
// console.log(sayHello('John')); //Hello John

// //Arrow functions 

// var sum = (a , b ) => a + b; //Only for single line codes
// console.log(sum(2 , 3)) //5 

// //single parameter , single statement 
// let greet1 = name => alert(" Hi " + name + " ! ");
// greet1("Soul");

// single paramter , multiple statements

// var test = age => {
//     if(age  >18 ) {
//         alert('Adult')
//     }
//     else {
//         alert('teenager')
//     }
// }
// test(21);

//Multiple paramters , multiple statements 

// var divide = ( x , y) => {
//     if( y != 0) {
//         return x / y;
//     }
// }
// alert(divide(18 , 2));



// function Person(nickname, country) 
// {
//     this.nickname = nickname;
//     this.country = country;

//     this.getInfo = function() 
//     {
//         //Outer function context (person object)
        
//         return () => 
//         {

//             //inner fonction context (person object)

//             alert(this.constructor.name); //person
//             alert(` Hi , I'm"  ${this.nickname}  "from" , ${this.country}`);
//         };
//     }
// }
// let p = new Person( 'Rick', 'Argentina');
// let printInfo = p.getInfo();
// printInfo();

//we can write function that provides new types of control flow

function unless(test , then) 
{
    if (!test) then();
}
repeat(3, n => 
    {
    unless(n % 2 == 1, () => 
    {
        console.log(n, "is even");
    });
})

//we can have functions that change other functions 

function noisy(f) {
    return (...args) => {
        console.log("calling with" , args);
        let result = f(...args);
        console.log("called with , args, " , "returned", result);
        return result;
    };
}