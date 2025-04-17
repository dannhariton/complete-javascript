'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const words = text.split('\n');
  const camelCase = [];
  for (const item of words) {
    let [firstWord, secondWord] = item.trim().toLowerCase().split('_');

    camelCase.push(
      firstWord + secondWord.replace(secondWord[0], secondWord[0].toUpperCase())
    );
  }

  for (const [index, word] of camelCase.entries()) {
    console.log(`${word.padEnd(20, ' ')} ${'✅'.repeat(index + 1)}`);
  }
});

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// let events = [...gameEvents.values()];
// events = [...new Set(events)];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// const matchTime = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${matchTime / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
//   // min < 45
//   // ? console.log(`[FIRST HALF] ${min} : ${event}`)
//   // : console.log(`[SECOND HALF] ${min} : ${event}`);

//   const half = min < 45 ? 'First' : 'Second';
//   console.log(`[${half} HALF] ${min} : ${event}`);
// }

// Maps in js, compared to objs we can have any type of key

// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JS'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Incorrect'],
// ]);

// console.log(question);

// const obj = {
//   fri: { close: 2, open: 2 },
// };
// console.log(obj);

// //convert obj to map
// const newObj = new Map(Object.entries(obj));
// console.log(newObj);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
// }

// const answer = 3;
// console.log(question.get(answer === question.get('correct')));

// //convert map to array
// console.log(...question);
// console.log([...question.entries()]);

// const rest = new Map();
// rest.set('name', 'Classic Italian');
// rest.set(1, 'Firenze');
// rest.set(2, 'Lisbon');
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizza', 'Veggie'])
//   .set('open', 11)
//   .set('closed', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;

// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// const arr = [1, 2];
// rest.set(arr, 'test');
// rest.set(document.querySelector('h1'), 'Heading ');
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest.size);

// console.log(rest.get(arr));

///Sets, very new methods
// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('intersection', commonFoods);
// console.log([...commonFoods]);

// const allFoods = italianFoods.union(mexicanFoods);
// console.log('union', [...allFoods]);

// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('unique', uniqueItalianFoods);

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log(uniqueMexicanFoods);

// const uniqueItalianMexicanFoods =
//   mexicanFoods.symmetricDifference(italianFoods);
// console.log(uniqueItalianMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// const weekDays = ['m', 'tue', 'fri'];

//example of using template literals in objects
// const openingHours = {
//   [weekDays[0]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   tue: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// console.log(openingHours);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // before es6
  // openingHours: openingHours,
  // es6 enhanced object literals
  // openingHours,

  //old version of functions in object literals
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //es6 version of functions in objects literals
  orderDelivery({ starterIndex = 0, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPaste(ing1, ing2, ing3) {
    console.log(`ur pasta with ${ing1}, ${ing2}, ${ing3} `);
  },

  orderPizza(mainIng, ...ing3) {
    console.log(mainIng);
    console.log(ing3);
    console.log(`ur pizza with main ing ${mainIng} and other ${ing3}`);
  },
};

// for (const day of Object.keys(openingHours)) console.log(day);

///OPTIONAL CHAINING
// // console.log(restaurant.openingHours.mon?.open);

// for (const day of weekDays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(open);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // const users = [{ name: 'Dan', email: 'dan@gmail.com' }];
// const users = [];

// console.log(users[0]?.name ?? 'User array empty');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// for (const [item, element] of menu.entries())
//   console.log(`${item + 1}: ${element}`);

// console.log([...menu.entries()]);
//Logical Operators

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// or assign operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= 'anonymous';
// rest2.owner &&= 'anonymous';

// console.log(rest1, rest2);

//use any data type, return any data type
// short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');

// destruct
// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , rissoto, ...otherFodd] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, rissoto, otherFodd);

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// //
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   return sum;
// };
// console.log(add(2, 3));
// console.log(add(4, 5, 2, 3));

// const x = [23, 5, 7];
// console.log(add(...x));

// restaurant.orderPizza('mush', 'onion', 'olives');
// restaurant.orderPizza('mush');

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];

// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'jonas';

// const letters = [...str, ' ', 'S'];
// console.log(letters);

// // const ingredients = [prompt('pasta ing1'), prompt('2'), prompt('3')];
// // console.log(ingredients);

// // restaurant.orderPaste(...ingredients);

// const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurentCopy = { ...restaurant };
// restaurentCopy.name = 'saddas';
// console.log(restaurentCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'via del sole, 21',
//   starterIndex: 1,
// });

// //destruct objects to variables
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // default vars
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const [x, y, z] = arr;

// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching vars
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //receive 2 return values from a function
// const [starter, mainMeal] = restaurant.order(2, 0);
// console.log(starter, mainMeal);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1.
// const [players1, players2] = game.players;

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //6.
// var printGoals = function (...players) {
//   console.log(`${players} scored ${players.length} goals`);
// };
// printGoals('Lewa', 'Kimm', 'David', 'Muller');
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log(`${game.team1}`);
// team1 > team2 && console.log(`${game.team2}`);

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1.
// for (const [number, scorer] of Object.entries(game.scored))
//   console.log(`${number} : ${scorer}`);

// //2.
// const odds = Object.values(game.odds);
// let avg = 0;
// for (const item of odds) avg += item;
// avg /= odds.length;
// console.log(avg);

// //3.
// const oddsEntries = Object.entries(game.odds);
// for (const [team, value] of oddsEntries) {
//   team === 'x'
//     ? console.log(`Odds of draw : ${value}`)
//     : console.log(`Odds of victory ${game[team]}: ${value}`);
// }

// //4.
// const scorers = {};

// for (const item of Object.values(game.scored)) {
//   scorers[item] = 1;
// }

// console.log(scorers);

// console.log('-----------------');

// const setNum = new Set(['1', '2', '2', '3']);
// console.log(setNum);

// console.log(setNum.size);
// console.log(setNum.has('1'));
// setNum.add('5');
// setNum.add('6');
// setNum.delete('5');
// console.log(setNum);

// for (const order of setNum) console.log(order);

// const arr = [1, 2, 3, 3, 4, 5, 6, 7, 6, 5, 4, 3];

// let setArr = new Set(arr);

// console.log(arr.length);
// console.log(setArr);

// setArr = [...setArr];
// console.log(setArr);
