import { describe, it, expect } from 'vitest';
import { convertToNumbersString } from './convertNumberWords';

describe('convertToNumbersString()', () => {
	it('should return a string', () => {
		const result = convertToNumbersString('');

		expect(result).toBeTypeOf('string');
	});

	it('should replace first char of number word with according number', () => {
		const testLine = 'one';
		const expectedResult = '1';

		const result = convertToNumbersString(testLine);

		expect(result).toBe(expectedResult);
	});

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
	for (const [index, numberWord] of numberWords.entries()) {
		it(`should recognize all relevant number words : ${numberWord}`, () => {
			const testLine = numberWord;
			const expectedResult = `${index + 1}`;

			const result = convertToNumbersString(testLine);

			expect(result).toBe(expectedResult);
		});
	}

	it(`should handle multiple number words`, () => {
		const testLine = 'onetwothree';
		const expectedResult = `123`;

		const result = convertToNumbersString(testLine);

		expect(result).toBe(expectedResult);
	});

	it(`should support multiple same number words`, () => {
		const testLine = 'oneoneone';
		const expectedResult = `111`;

		const result = convertToNumbersString(testLine);

		expect(result).toBe(expectedResult);
	});

	it('should support multiple same number words with additional characters', () => {
		const testLine = 'one2onedffadsfone';
		const expectedResult = `1211`;

		const result = convertToNumbersString(testLine);

		expect(result).toBe(expectedResult);
	});
	it('should support mixed multiple numbers words with additional characters', () => {
		const testLine = 'one2oneightdffadsfone';
		const expectedResult = '12181';

		const result = convertToNumbersString(testLine);

		expect(result).toBe(expectedResult);
	});
});
