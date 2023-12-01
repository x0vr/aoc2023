import { exampleData01, finalTaskData01 } from './data';
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
			finalTaskData01
		)}`
	);
	console.log('\u2502');
	console.log('\u2514\u2500 Part Two - tbd');
	console.log('');
}
