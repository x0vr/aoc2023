import { describe, it, expect, vi } from 'vitest';
import { sumUpNumbers } from './sumUpNumbers';

describe('sumUpNumbers()', () => {
	it('should call extract function', () => {
		const input = 'a1b2';

		const _dependencies = {
			extractNumbersFromString: vi.fn(),
		};

		sumUpNumbers(input, _dependencies);

		expect(_dependencies.extractNumbersFromString).toBeCalledTimes(1);
	});

	it('should call extract function for each line of input', () => {
		const input = `
		a1b2c
		b2b2
		`;
		const expectedResult = 2;

		const _dependencies = {
			extractNumbersFromString: vi.fn(),
		};

		sumUpNumbers(input, _dependencies);

		expect(_dependencies.extractNumbersFromString).toBeCalledTimes(
			expectedResult
		);
	});

	it('should call extract function with line input', () => {
		const input = `
		a1b2c
		b2b2
		`;

		const _dependencies = {
			extractNumbersFromString: vi.fn(),
		};

		sumUpNumbers(input, _dependencies);

		expect(_dependencies.extractNumbersFromString.mock.calls).toStrictEqual(
			[['a1b2c'], ['b2b2']]
		);
	});

	it('should return a number', () => {
		const result = sumUpNumbers('');

		expect(result).toBeTypeOf('number');
	});

	it('should return sum of extracted numbers', () => {
		const input = `
		a1b2c
		b2b2
		`;
		const expectedResult = 12 + 22;

		const _dependencies = {
			extractNumbersFromString: vi.fn(),
		};
		_dependencies.extractNumbersFromString.mockReturnValueOnce('12');
		_dependencies.extractNumbersFromString.mockReturnValueOnce('22');

		const result = sumUpNumbers(input, _dependencies);

		expect(result).toBe(expectedResult);
	});

	it('should pass the example data input', () => {
		const input = `
		1abc2
		pqr3stu8vwx
		a1b2c3d4e5f
		treb7uchet
		`;
		const expectedResult = 142;

		const _dependencies = {
			extractNumbersFromString: vi.fn(),
		};
		_dependencies.extractNumbersFromString.mockReturnValueOnce('12');
		_dependencies.extractNumbersFromString.mockReturnValueOnce('38');
		_dependencies.extractNumbersFromString.mockReturnValueOnce('15');
		_dependencies.extractNumbersFromString.mockReturnValueOnce('77');

		const result = sumUpNumbers(input, _dependencies);

		expect(result).toBe(expectedResult);
	});
});
