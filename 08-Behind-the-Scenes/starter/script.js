'use strict';

// // function calcAge(birthYear) {
// //   const age = 2037 - birthYear;
// //   // console.log(firstName);

// //   function printAge() {
// //     let output = `${firstName} You are ${age}, born in ${birthYear}`;
// //     console.log(output);

// //     if (birthYear >= 1991 && birthYear <= 1996) {
// //       var millennial = true;
// //       const firstName = 'Steven';
// //       const str = `Oh and you are a millennial ${firstName}`;
// //       console.log(str);

// //       function add(a, b) {
// //         return a + b;
// //       }

// //       output = 'New output';
// //     }
// //     // console.log(add(3, 4));
// //     console.log(millennial);
// //     console.log(output);
// //   }
// //   printAge();

// //   return age;
// // }

// // const firstName = 'Jonas';
// // calcAge(1991);

// // console.log(me);
// // console.log(job);
// // console.log(year);

// // var me = 'Jonas';
// // let job = 'teacher';
// // const year = 1991;

// // //Functions

// // // console.log(addDec(1, 2));
// // // console.log(addExpr(1, 2));
// // // console.log(addArr(1, 2));

// // function addDec(a, b) {
// //   return a + b;
// // }

// // const addExpr = function (a, b) {
// //   return a + b;
// // };

// // // if using var, if we call it before, the var will be undefined and return error that var addArr is not a function
// // var addArr = (a, b) => a + b;

// // //Example

// // if (!numProducts) deleteShoppingCart();

// // var numProducts = 10;

// // function deleteShoppingCart() {
// //   console.log('All products deleted!');
// // }

// // var x = 1;
// // let y = 2;
// // const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // method borrowing for objects

// matilda.calcAge();

// const f = jonas.calcAge;

// f();

const jonas = {
  year: 1991,
  firstName: 'Jonas',
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // const self = this; // giving isMillennial a way to access this keyword
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1991 && self.year <= 1996);
    // };
    // isMillennial();

    //using an arrow function we can inherit this keyword and no need to the self variable
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 1996);
    };
    isMillennial();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArr = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArr(2, 5, 8);
