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
//function declaration--------------
// function test (){
//     console.log("Hello");
// };

//function expression-------------
// const test1 = function(){
//     console.log("Hello");
// };

//arrow function-------------
// const test = () => {};

//Arrow functionn with one parameter and return value---------------
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

/*Bitwise operator*/
//And(&) and Or(|) 
// const a = 2; //10
// const b = 1; //01
// console.log(a & b);
// console.log(a | b);

//Logical Operator----------------------
// const a = 2; 
// const b = 1;
// if(a && b){
//     console.log("Hello");
// }

// if(a || b){
//     console.log("Hello");
// }

// //short circuit evaluation--------------------
// const name = "john";
// let noOfDrinks = 0;
// const isEighteen = true;

// function serveDrinks(){
//     noOfDrinks = noOfDrinks +1;
//     return true;
// }
//  let isAllowedToDrinks = isEighteen && serveDrinks;
//  console.log(isAllowedToDrinks);

//ternary Operator---------------
// const a = 2;
// const b = 5;

// const result = a > b ? () => {
//     return "a is greater";
// }  : () => {
//     return "b is grearter";
// }

// console.log(result);

/*bind, call and apply*/
// this.name = "Ravi";
// function test () {
//     console.log(this.name);
// };

// const obj = {
//     name : "john",
//     test : test
// };

//bind -------------
// const testBoundToObject = test.bind(obj);
// testBoundToObject();

// call ----------------
// test.call(obj);

// apply ------------------
// const person = {
//     name : "john",
// };

// function add (a, b) {
//     console.log(a+b);
// };

// add.call(person, 2, 3);  // call   // in call we pass the arguments value as a normal aguments;
// add.apply(person, [2, 3]);   // apply  // in apply we pass the value in the form of an array