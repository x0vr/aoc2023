import { getDataLines } from '../helpers';
import { getCorrectNumbers, getNumbersFromLine } from './helpers';

export function countScratchcards(input: string) {
	const dataLines = getDataLines(input);

	const pointsByCard = getPointsByCard(dataLines);
	// console.log(pointsByCard);

	const allCards = [];
	for (const [index, points] of pointsByCard.entries()) {
		const currentCardNo = index + 1;

		allCards.push(currentCardNo);
		if (!points) continue;

		const cardForCurrentNo = allCards.filter(
			(cardNo) => cardNo === currentCardNo
		);

		for (const relevantCard of cardForCurrentNo) {
			for (let i = 1; i <= points; i++) {
				const cardNoToPush = currentCardNo + i;
				allCards.push(cardNoToPush);
			}
		}
	}

	return allCards.length;
}

function getPointsByCard(dataLines: string[]): number[] {
	const pointsByCard: number[] = [];

	for (const dataLine of dataLines) {
		const { winningNumbers, ownNumbers } = getNumbersFromLine(dataLine);
		const correctNumbers = getCorrectNumbers(winningNumbers, ownNumbers);
		pointsByCard.push(correctNumbers.length);
	}

	return pointsByCard;
}
