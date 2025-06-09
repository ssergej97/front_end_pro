'use strict';

//Output the numbers from 10 to 20 in one line separated by commas.

const arrayOfNum = [];

for (let i = 10; i <= 20; i++) {
		arrayOfNum.push(i);
}

const arrayToString = arrayOfNum.join(`, `);
console.log(arrayToString);


//Output the squares of numbers from 10 to 20.

const arrayOfNumbers = [];

for (let i = 10; i <= 20; i++) {
	arrayOfNumbers.push(i ** 2);
}

const arrayToStringNumbers = arrayOfNum.join(`, `);
console.log(arrayToStringNumbers);


//Output the table of multiplication by 7

const arrOfNumMultiBySeven = [];

for (let i = 2; i <= 9; i++) {
	arrOfNumMultiBySeven.push(7 * i);
}

const arrToStrMultiBySeven = arrayOfNum.join(`, `);
console.log(arrToStrMultiBySeven);


//Output the sum of all integers from 1 to 15.

let sumOfNum = 0;

for (let i = 1; i <= 15; i++) {
	sumOfNum += i;
}

console.log(sumOfNum);


//Output the multiple of all integers from 15 to 35.

let multiOfNum = 1n;

for (let i = 15n; i <= 35n; i++) {
	multiOfNum *= i;
}

console.log(multiOfNum);


//Output the arithmetic average of all integers from 1 to 500

let averageOfNum = 0;

for (let i = 1; i <= 500; i++) {
	averageOfNum += i;
}

averageOfNum = averageOfNum / 500;

console.log(averageOfNum);


//Output the sum of only even numbers in the range from 30 to 80

let sumOfEvenNum = 0;

for (let i = 30; i <= 80; i++) {
	if(i % 2 === 0) sumOfEvenNum += i;
}

console.log(sumOfEvenNum);


//Output all numbers in the range from 100 to 200 multiples of 3

const arrayOfNumMultiOfTree = [];

for (let i = 100; i <= 200; i++) {
	if(i % 3 === 0) arrayOfNumMultiOfTree.push(i);
}

const arrToStrOfMultiOfTree = arrayOfNumMultiOfTree.join(`, `);
console.log(arrToStrOfMultiOfTree);


//Calculate and output all divisors of a positive integer.

const arrOfNumDivOfInt = [];

let naturalNumber = +prompt(`Enter a natural number`);

for (let i = 1; i <= naturalNumber; i++) {
	if (naturalNumber % i === 0) arrOfNumDivOfInt.push(i);
}

const arrToStrOfNumDivOfInt = arrOfNumDivOfInt.join(`, `);
console.log(arrToStrOfNumDivOfInt);


//Calculate the number of even divisors of a positive integer

const arrayOfNumEvenOfInt = [];
const arrayOfEvenNumbers = [];

let naturalNum = +prompt(`Enter a natural number`);

for (let i = 1; i <= naturalNum; i++) {
	if (naturalNum % i === 0) arrayOfNumEvenOfInt.push(i);
}

for (let i = 0; i <= arrayOfNumEvenOfInt.length; i++) {
	if (arrayOfNumEvenOfInt[i] % 2 === 0) arrayOfEvenNumbers.push(arrayOfNumEvenOfInt[i]);
}

const arrToStrOfNumEvenOfInt = arrayOfEvenNumbers.join(`, `);
console.log(arrToStrOfNumEvenOfInt);


//Calculate the sum of even divisors of a positive integer

const arrOfNumSumOfEvenDiv = [];
let sumOfEvenNumbers = 0;

let natNum = +prompt(`Enter a natural number`);

for (let i = 1; i <= natNum; i++) {
	if (natNum % i === 0) arrOfNumSumOfEvenDiv.push(i);
}

for (let i = 0; i <= arrOfNumSumOfEvenDiv.length; i++) {
	if (arrOfNumSumOfEvenDiv[i] % 2 === 0) sumOfEvenNumbers += arrOfNumSumOfEvenDiv[i];
}

console.log(sumOfEvenNumbers);


//Output the complete multiplication table from 1 to 10

const arrOfNumMultiTable = [];

for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		arrOfNumMultiTable.push(i * j)
	}
}

const arrToStrOfNumMultiTable = arrOfNumMultiTable.join(`, `);
console.log(arrToStrOfNumMultiTable);