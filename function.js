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

const mark = {
	fullName: 'Mark Muller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
}; 

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) Iis higher than ${john.fullName}'s BMI (${john.bmi})`);
}	else if (john.bmi > mark.bmi) {
	console.log(`${john.fullName}'s BMI (${john.bmi}) Iis higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}