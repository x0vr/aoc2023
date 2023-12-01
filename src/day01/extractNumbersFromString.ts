/**
 * Function to get the first and the last numeric character combined from a provided string
 */
export function extractNumbersFromString(line: string) {
	const numbers = line.replaceAll(/\D/g, '');
	const result = numbers[0] + numbers.split('').pop();
	return result;
}
