export function getDataLines(allLinesString: string) {
	const lines = allLinesString
		.split('\n')
		.map((e) => e.trim())
		.filter((e) => e);

	return lines;
}

export function getNumbersFromLine(dataLine: string): {
	winningNumbers: number[];
	ownNumbers: number[];
} {
	// Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53

	const numbersPart = dataLine.split(': ')[1];
	const [winningNumbersPart, ownNumbersPart] = numbersPart.split(' | ');

	return {
		ownNumbers: getNumbersFromString(ownNumbersPart),
		winningNumbers: getNumbersFromString(winningNumbersPart),
	};
}

function getNumbersFromString(input: string): number[] {
	return input
		.split(' ')
		.filter((e) => e)
		.map((e) => +e);
}

export function getCorrectNumbers(
	winningNumbers: number[],
	ownNumbers: number[]
) {
	return winningNumbers.filter((value) => ownNumbers.includes(value));
}
