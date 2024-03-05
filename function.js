const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolhins, avgKoalas) {
	if (avgDolhins >= 2 * avgKoalas) {
		console.log(`Dolphins win 🎉 (${avgDolhins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolhins) {
		console.log(`Koalas win 🎉 (${avgKoalas} vs. ${avgDolhins})`)
	} else {
		console.log('No team wins...');
	}
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
