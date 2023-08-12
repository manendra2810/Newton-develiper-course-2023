/*Type Cohesion */

//Concatinatiin of string with number
// const a = "23"; //string
// const b = 23;   //number
// const c = a+b;  //string
// console.log(c); 

// const a = "55"; //string
// console.log(+a); // number

// const a = "this";  //string
// console.log(+a); //NaN (Not a number)
// console.log(NaN+1); // NaN

/* Expression vs Declaration */
// const a;  //Declaration
// const b = 3+4;  // Expression

/* Function Declaration vs Function expression */
//function declaration
// function test (){
//     console.log("Hello");
// };

//function expression
// const test1 = function(){
//     console.log("Hello");
// };

//arrow function
// const test = () => {};

//Arrow functionn with one parameter and return value
// const test2 = num1 => {23};  === const test2 = (num1) => {return 23};  ===
// const test2 = (num1) => {
//     return 23
// };

/* parseInt and parseFloat */
//parseInt convert the string value into the integer format ant parsefloat take the same value as in string.
// const a = "10.5";
// const b = parseInt(a);
// console.log(b);

// const c = parseFloat(a);
// console.log(c);