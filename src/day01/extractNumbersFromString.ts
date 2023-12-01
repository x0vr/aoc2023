import { convertToNumbersString } from './convertNumberWords';

/**
 * Function to get the first and the last numeric character combined from a provided string
 */
export function extractNumbersFromString(line: string) {
	const numbers = convertToNumbersString(line);
	const result = numbers[0] + numbers.split('').pop();
	return result;
}
