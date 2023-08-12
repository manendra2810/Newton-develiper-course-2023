'use strict'
// let arr=[1,2,3,4];

// arr.push(5);
// arr.pop();

// arr.unshift(5);
// arr.shift();

// let arr1=['A', 'b', 'c'];
// let newString = arr1.join('');

// console.log("new updated array :", newString);

// let arr2='1234';
// let newString1 = arr2.split('');

// console.log("new updated array :", newString1);

// var numbers=[1,2,3,4];
// const multiplyNums=numbers.mapping((number)=>{
// return (number*5);
// });
// console.log(multiplyNums);



// let obj = {
//     Name : "Rahul",
//     Class : 12,
//     Sub : "English"
// }

// let arr = Object.values(obj);

//   for(let x of arr){
//     console.log(x);
//   }

//   for(let x in obj){
//     console.log(x+`: `+ obj[x]);
//   }


let arr1= ["apple","orange","mango"];
let arr2 = ["pineapple","orange"];

  let arr3 = [...arr2,...arr1];
    arr3.push(arr2);
    console.log(arr3);

    arr3.pop();
    console.log(arr3.reverse());

    console.log(arr3.lastIndexOf('orange'));

    let arr5 = arr3.slice(0, 3);
    console.log(arr5.length);

    let str = arr5.join(',');
    console.log(str);