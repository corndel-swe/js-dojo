/**
 * Finds the sum of all even numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all even numbers smaller than the input.
 *
 * @example
 * // returns 6
 * sumEvenNumbers(5);
 */
export function sumEvenNumbers(input) {
  let result = 0;
  for (let i = 2; i < input; i += 2) {
    result += i;
  }
  return result;
}
