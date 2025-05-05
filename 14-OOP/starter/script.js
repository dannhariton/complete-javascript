'use strict';

// // constructor function
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // usage of **new** keyword
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. func auto returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('jack', 2017);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// // prototypes // better methods declaration for the constructor function
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();

// console.log(jonas.__proto__);

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// challenge #1
// const Car = function (brand, speed) {
//   this.brand = brand;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 10));
// };

// const bmw = new Car('BMW', 120);

// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();

// mercedes.accelerate();
// mercedes.brake();

/////////////////////////// es6 classes, syntax sugar for constructor functions
// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // added to the prototype of the object
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
jessica.calcAge();

// same thing
console.log(jessica.__proto__ === PersonCl.prototype);

// 1. not hoisted
// 2. first-class citizen
// 3. always exec in strict mode

const account = {
  owner: 'jonas',
  movements: [200, 300, 500, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 50;
console.log(account.latest);
