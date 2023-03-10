var expectedAge = 18;
var myAge = 99;
var ancestorAgen = 100;

//Display Information based on my Age

if (myAge >= expectedAge && myAge < ancestorAge) {
    alert('You have come of age, go and MARRY!!!')
}
if (myAge > 100) {
    alert('Ancestors dont marry!!')
}
else {
    alert('Babies dont marry, Please go and GROW UP')
}

//NSETED IF...else statements
/**
 * SYNTAX
 * if(condition) 
 * {
 *   action to preform
 * }
 * else {
 *    if(condition) 
 *   {
 *    abtion to preform
 *   }
 * }
 */

//SYNTAX for SWITCH...CASE
/**
 * switch(condition){
 *    case condition:
 *    action to be performed
 *    break;
 *    case condition:
 *    action to be performed
 *    break;
 *    default:
 *      action to be performed 
 *       break;
 * }
 */
var a =18;
var b = 99;
var c = 100;

switch(a > b && b < c) 
{
    case true:
        alert('a greater than b')
        break;
    case false:
            alert('b greater than c')
            break;
    default: 
            alert('we dont know who is greater')
            break;
}