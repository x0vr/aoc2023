import { countScratchcardPoints } from './countScratchcardPoints';
import { countScratchcards } from './countScratchcards';
import { exampleData, finalTaskData } from './data';

export default function day04() {
	console.log('Day 4');
	console.log('\u251c\u2500 Part One');
	console.log(
		`\u2502\t\u251c\u2500 example data result:\t${countScratchcardPoints(
			exampleData
		)}`
	);
	console.log(
		`\u2502\t\u2514\u2500 puzzle data result:\t${countScratchcardPoints(
			finalTaskData
		)}`
	);
	console.log('\u2502');
	console.log('\u2514\u2500 Part Two');
	console.log(
		`\t\u251c\u2500 example data result:\t${countScratchcards(exampleData)}`
	);
	console.log(
		`\t\u2514\u2500 puzzle data result:\t${countScratchcards(
			finalTaskData
		)}`
	);
	console.log('');
}

day04();
