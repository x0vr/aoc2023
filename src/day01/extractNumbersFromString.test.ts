import { describe, it, expect } from 'vitest';
import { extractNumbersFromString } from './extractNumbersFromString';

describe('extractNumbersFromString()', () => {
	it('should return string without characters', () => {
		const testLine = '12';
		const expectedResult = '12';

		const result = extractNumbersFromString(testLine);

		expect(result).toBe(expectedResult);
	});

	it('should remove characters from input string', () => {
		const testLine = 'a1b2c';
		const expectedResult = '12';

		const result = extractNumbersFromString(testLine);

		expect(result).toBe(expectedResult);
	});

	it('should return string of first and last number', () => {
		const testLine = 'a1b2c3x4x';
		const expectedResult = '14';

		const result = extractNumbersFromString(testLine);

		expect(result).toBe(expectedResult);
	});
});
