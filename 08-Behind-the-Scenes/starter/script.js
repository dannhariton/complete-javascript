'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millennial = true;
      const firstName = 'Steven';
      const str = `Oh and you are a millennial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New output';
    }
    // console.log(add(3, 4));
    console.log(millennial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
