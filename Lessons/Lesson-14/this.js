// //Implicite bindinig rule
// const Person = {
//     name: 'Wallice',
//     sayMyName: function sayMyName(name) {
//     console.log(`My name is ${this.name}`);
//     }
// }
// Person.sayMyName();

//Explicite binding rule
// const Person = {
//     name: 'Wallice'
// }
// function sayMyName() {
//     console.log(`My name is ${this.name}`);
// }
// sayMyName.call(Person);

//new binding rule
// function Person(name, age) {
//     //this = {};
//     this.username = name;
//     this.age = age;
// }
// const p1 = new Person('Mike', 22);
// const p2 = new Person('Carlos', 21);
// console.log(p1 , p2);

//Default binding rule
// globalThis.name = 'superman'

// const Person = {
//     name: 'wallice'
// }
// function sayMyName() {
//     console.log(`my name is ${this.name}`);
// }
// console.log(sayMyName);

//

 function Person(fName, lName) {
     this.firstName = fName;
     this.lastName = lName
 }
// const person_mike = new Person('Mike', 'Carlos');
// const person_wallice = new Person('Mua', 'carlos');
// console.log(person_wallice, person_mike);

//getting full name 
// function Person(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName
// }
// const person_mike = new Person('Mike', 'Carlos');
// const person_wallice = new Person('Mua', 'carlos');

// person_mike.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }
// console.log(person_mike.getFullName);
// console.log(person_wallice.getFullName);

// //we are going to create a superhero that is supposed to inherit props and methods 
// // from a person function 
// function SuperHero() {
//     // Person this, fName, lName 
//     this.isSperHero = true
// }

// superHero.prototype.fightingCrime = function() {
//     return console.log('fighting crime');
// }
// const laure =new SuperHero()
// console.log(laure.fightingCrime);

class Person1 
{
    constructor (fName, lName) 
    {
    this.firstName = fName;
    this.lastName= lNAme;
    }
}
  sayMyName = function() 
  {
   return `My name is ${this.firstName} ${this.lastName}`
  }

  class SuperHero extends Person {
    constructor (fName,lName) {
        super(fName, lName)
        this.isSuperHero = true;
    }
    fightingCrime = function() {
        console.log("Fighting Crime");
    }
  }
  const p1 = new SuperHero('Mike', 'Carlos')
  console.log(p1);