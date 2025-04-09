// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const printForecast = function (arr) {
  let finalString = "";
  for (let i = 0; i < arr.length; i++) {
    finalString = finalString.concat(` ... ${arr[i]} in ${i + 1} days`);
  }

  return console.log(finalString);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

const workerStats = function (arr) {
  let initVal = 0;
  let max = arr[0];
  let daysWorked = 0;

  const totalHours = arr.reduce((acc, curr) => acc + curr, initVal);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    daysWorked++;
  }

  return {
    totalHours: totalHours,
    avgHours: Math.round(totalHours / arr.length),
    mostHoursInDay: arr.indexOf(max),
    daysWorked: daysWorked,
    fullTimeWeek: totalHours > 35 ? true : false,
  };
};

let data = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(workerStats(data));
