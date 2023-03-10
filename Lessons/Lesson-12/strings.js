let greeting = 'Hell';

//string concentination (+)
greeting = greeting + 'o';
console.log('Character is =>' , greeting);

//Parse the string above to get only valid
//character

const CharSet = ['h', 'e', 'l', 'o', 'w', 'c', 'm'];
let newString = '';
let i = 0;

while (i < greeting.length) {
    if(CharSet.includes(greeting[i])) {
        //newString = newString + greeting[i];
        newString += greeting[i];
    }

    i++;
}
console.log('Valid character are' , newString);

const emailValidator = (email = '')  => {

    let requiredCharacters = ['@gmail', '.', 'com' ];
    let i = 0;
    while( i < email.length) {
        
        if (!requiredCharacters.includes(email(i))) {

        }
    }
}

//split, startwith,endswith, substr, replace,toUpperCase(), toLowerCase()          <=String methods 