'use strict';

// Output the numbers from 20 to 30, separated by a space, using a step of 0.5 (20 20.5 21 21.5....).
const arrayOfNum = [];

for (let i = 20; i <= 30; i = i + 0.5) {
	arrayOfNum.push(i);
}

const arrayToString = arrayOfNum.join(`, `);
console.log(arrayToString);


//Output the data with the cost of 10, 20, 30 ... 100 dollars, if one dollar is worth 27 hryvnias

const oneDollar = 27;
const arrayOfNumbers = [];

for (let i = 10; i <= 100; i = i + 10) {
	arrayOfNumbers.push(i * oneDollar);
}

const arrToString = arrayOfNumbers.join(`, `);
console.log(arrToString);


//Output all integers from 1 to 100, whose square does not exceed N

const arrayOfNumbersInt = [];
const intNum = +prompt('Enter a whole number');

for (let i = 1; i <= 100; i++) {
	const squareOfNum = i ** 2;

	if (squareOfNum < intNum) arrayOfNumbersInt.push(i);
}

const arrToStrNumbersInt = arrayOfNumbersInt.join(`, `);
console.log(arrToStrNumbersInt);


//Calculate if the integer is prime

const arrayOfNumPrime = [];
const userNum = +prompt(`Enter a number:`);

for (let i = 1; i <= userNum; i++) {
	if (userNum % i === 0) arrayOfNumPrime.push(i);
}

const isWholeNum = arrayOfNum.length === 2 ? `Your number is a whole number` : `Your number is not a whole number`;

alert(isWholeNum);


//Calculate whether it is possible to get a number by raising the number 3 to a certain degree

const userNumber = +prompt(`Enter a number:`);

for (let i = 1; i < 100; i++) {
	if (3 ** i > Number.MAX_SAFE_INTEGER) {
		break;
	} else if (3 ** i === userNumber) {
		alert(`Your number is 3 in ${i} degree`);
		break;
	}
}