// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
// 	if (avgDolphins >= 2 * avgKoalas) {
// 		console.log(`Dolphins win 🎉 (${avgDolphins} vs. ${avgKoalas})`);
// 	} else if (avgKoalas >= 2 * avgDolphins) {
// 		console.log(`Koalas win 🎉 (${avgKoalas} vs. ${avgDolphins})`)
// 	} else {
// 		console.log('No team wins...');
// 	}
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

//Array Exercise

// const calTip = function(bill) {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals);

//OBJECT CHALLENGE

// const mark = {
// 	fullName: 'Mark Muller',
// 	mass: 78,
// 	height: 1.69,
// 	calcBMI: function () {
// 		this.bmi = this.mass / this.height ** 2;
// 		return this.bmi;
// 	}
// };

// const john = {
// 	fullName: 'John Smith',
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function () {
// 		this.bmi = this.mass / this.height ** 2;
// 		return this.bmi;
// 	}
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
// 	console.log(`${mark.fullName}'s BMI (${mark.bmi}) Iis higher than ${john.fullName}'s BMI (${john.bmi})`);
// }	else if (john.bmi > mark.bmi) {
// 	console.log(`${john.fullName}'s BMI (${john.bmi}) Iis higher than ${mark.fullName}'s BMI (${mark.bmi})`);
// }

//LOOPS

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [2, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 4, 4]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:

testData1 = [17, 21, 23];
testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("... " + str);
};

printForecast(testData1);

const color = 24;

if (color === 24) {
  console.log("Yellow");
} else if (color > 24) {
  console.log("Red");
} else {
  console.log("Green");
}

const number = 19;

if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

const foodStuff = ["pepper", "salt", "maggi", "bay leaf", "tomatoes"];

console.log(foodStuff.push("ginger"));
console.log(foodStuff);

console.log(foodStuff.unshift("water"));
console.log(foodStuff);

console.log(foodStuff.pop());
console.log(foodStuff);

console.log(foodStuff.shift());
console.log(foodStuff);

console.log(foodStuff.indexOf("bay leaf"));
console.log(foodStuff);

console.log(foodStuff.includes("garlic"));

// console.log(foodStuff.reverse());

// SLICE
console.log(foodStuff.slice(1, 5));
// SPLICE
console.log(foodStuff.splice(1, 5));

const numbers = [23, 5, 13, 80, 10, 25, 6];
console.log(numbers);
const ans = numbers.map((scores) => scores * 2);
console.log(ans);
