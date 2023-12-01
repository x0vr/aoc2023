export function convertToNumbersString(input: string): string {
	const numberWords = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];

	let result = input;

	if (input.length === 1) return !isNaN(+input) ? input : '';

	for (const [index, numberWord] of numberWords.entries()) {
		if (input.startsWith(numberWord)) {
			const numberOfWord = index + 1;
			const remainingString = input.slice(1);
			return numberOfWord + convertToNumbersString(remainingString);
		}

		if (!isNaN(+input[0])) {
			const remainingString = input.slice(1);
			return input[0] + convertToNumbersString(remainingString);
		}
	}
	// 	i++;
	// }

	const remainingString = input.slice(1);
	if (remainingString) return convertToNumbersString(remainingString);

	return input;
}

// console.log(convertToNumbersString('two1nine'));
// console.log(convertToNumbersString('eightwothree'));
// console.log(convertToNumbersString('abcone2threexyz'));
// console.log(convertToNumbersString('xtwone3four'));
// console.log(convertToNumbersString('4nineeightseven2'));
// console.log(convertToNumbersString('zoneight234'));
// console.log(convertToNumbersString('7pqrstsixteen'));
