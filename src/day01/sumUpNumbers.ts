import { getDataLines } from '../helpers';
import { extractNumbersFromString } from './extractNumbersFromString';

export function sumUpNumbers(
	input: string,
	_dependencies = { extractNumbersFromString }
) {
	const { extractNumbersFromString } = _dependencies;

	const lines = getDataLines(input);

	let sum = 0;
	for (const line of lines) {
		const numberString = extractNumbersFromString(line);
		sum += +numberString;
	}

	return sum;
}
