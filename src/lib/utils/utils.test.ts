import { it, expect, describe } from 'vitest';
import { validateValue, stringToHash } from '.';

describe('Test of app Utils', () => {
	describe('Test of Util: validateValue', () => {
		it('should return false if value incorrect', () => {
			const test = validateValue('test', 'email');
			expect(test).toBe(false);
		});

		it('should return true if value correct', () => {
			const test = validateValue('test@mail.com', 'email');
			expect(test).toBe(true);
		});

		it('should return true if value not in patterns', () => {
			const test = validateValue('', 'email');
			expect(test).toBe(true);
		});
	});

	describe('Test of Util: stringToHash', () => {
		it('should return number if string given', () => {
			const test = stringToHash('test');
			expect(test).toBeTypeOf('number');
		});

		it('should return 0 if given string is empty', () => {
			const test = stringToHash('');
			expect(test).toBeTypeOf('number');
			expect(test).toBe(0);
		});
	});
});
