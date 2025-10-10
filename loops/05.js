/**
 * Finds the sum of the squares of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of the squares of all numbers smaller than the input.
 *
 * @example
 * // returns 30
 * sumSquares(5);
 */
export function sumSquares(input) {
  let result = 0;
  for (let i = 1; i < input; i++) {
    result += i * i;
  }
  return result;
}
