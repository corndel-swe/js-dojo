/**
 * Finds the sum of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all numbers smaller than the input.
 *
 * @example
 * // returns 10
 * sumSmallerNumbers(5);
 */
export function sumSmallerNumbers(input) {
  if (input === 0) {
    return 0;
  } else {
    return input - 1 + sumSmallerNumbers(input - 1);
  }
}
