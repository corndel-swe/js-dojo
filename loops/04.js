/**
 * Finds the sum of all odd numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all odd numbers smaller than the input.
 *
 * @example
 * // returns 9
 * sumOddNumbers(6);
 */
export function sumOddNumbers(input) {
  let result = 0;
  for (let i = 1; i < input; i += 2) {
    result += i;
  }
  return result;
}
