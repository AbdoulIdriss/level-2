var mikeAge = 10;
var soulAge = 12;
var totalAge = mikeAge + soulAge;
console.log('Total Age is = ' , totalAge);

var subtractedAge = mikeAge - soulAge;
console.log('Total Age is = ' , subtractedAge);

var dividedAge = mikeAge / soulAge;
console.log('Total Age is = ' , dividedAge);

var multipleAge = mikeAge * soulAge;
console.log('Total Age is = ' , multipleAge);

var moduloAge = mikeAge % soulAge;
console.log('Total Age is = ' , moduloAge);

//logical AND (&&)
var male = true;
var isTall = false;

var outcome = male && isTall;
console.log('checking outcome of logical AND' , outcome);

var outcome = male && isTall;
console.log('checking outcome of logical AND' , outcome);

//logical OR (||)
var newOutcome = male || isTall
console.log('checking the outcome of logical OR' , newOutcome);

//Comparison operator

var soul = 17.6;
var ruth = 17;
var roy = 17.2;
var prince = 10;
var chris = 17;
var sucess = 5;
var totalScore = 20;
//striclt greater than
var isStrictlyGreater = soul > totalScore
console.log('isStrictlyGretaer' , isStrictlyGreater);
//strictly lesss than
var lessThan = ruth < prince
console.log('Less Than' , lessThan);

//greater than or equal to
var greatherThanOrEqual = chris >= ruth
console.log('Greather Than Or Equal' , greatherThanOrEqual);

//Equal to
var equalTo = ruth == chris
console.log('equal To' , equalTo);

// Equal To
var averageScore = '20';
var actualScore = 20;

var testAverage = averageScore == actualScore;//'20'=='20'
console.log('Average and Actual =>' , testAverage);

//Negative Operator (!)
var isSmaller = !(100 < 1000);
console.log('isSmaller =>' , isSmaller);

//Increment//Decrement

//Increment (++) (Add one to thr original value)
var amount = 500;
//++amount => Add one and usse the new value
//amount++ => Use the original va;lue then add one to it

var newAmount = ++amount;
console.log('New Amount', newAmount);

//Decrement operator (--) behaves same as the increment)

/**
 * OTHER OPERATORS
 */
//Multiplication and assignment operator
var test = 20;
var coefficient = 3;

//test = test * coefficient;
//test *= coefficient;
test += coefficient;
test -= coefficient;
//test /= coefficient;
//test %= coefficient;
test /= coefficient;
console.log('Real test mark', test);

//Tenary operator ( condition ? action : fallback)
var bloodGroup = 'O-'
var hisBloodGroup = 'B+'
var canDonateBlood = hisBloodGroup == bloodGroup ? 'He can donate' : 'He cannot';
console.log('Output is => ', canDonateBlood);

//Operator precedence 
var total = 5 + 5 * 10
console.log(total);