import { exampleData01, exampleData02, finalTaskData } from './data';
import { sumUpNumbers } from './sumUpNumbers';

export default function day01() {
	console.log('Day 1');
	console.log('\u251c\u2500 Part One');
	console.log(
		`\u2502\t\u251c\u2500 example data result:\t${sumUpNumbers(
			exampleData01
		)}`
	);
	console.log(
		`\u2502\t\u2514\u2500 puzzle data result:\t${sumUpNumbers(
			finalTaskData
		)}`
	);
	console.log('\u2502');
	console.log('\u2514\u2500 Part Two');
	console.log(
		`\t\u251c\u2500 example data result:\t${sumUpNumbers(exampleData02)}`
	);
	console.log(
		`\t\u2514\u2500 puzzle data result:\t${sumUpNumbers(finalTaskData)}`
	);
	console.log('');
}
