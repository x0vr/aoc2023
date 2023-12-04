import { getDataLines } from '../helpers';
import { getCorrectNumbers, getNumbersFromLine } from './helpers';

export function countScratchcardPoints(input: string) {
	const dataLines = getDataLines(input);

	let totalPoint: number = 0;
	for (const dataLine of dataLines) {
		const { winningNumbers, ownNumbers } = getNumbersFromLine(dataLine);
		const correctNumbers = getCorrectNumbers(winningNumbers, ownNumbers);
		const cardPoints = getPointsByNumbers(correctNumbers);

		totalPoint += cardPoints;
	}

	console.log('Total: ' + totalPoint);
}

function getPointsByNumbers(numbers: number[]) {
	let points = 0;
	for (const correctNumber of numbers) {
		if (!points) {
			points = 1;
			continue;
		}
		points = points * 2;
	}
	return points;
}
