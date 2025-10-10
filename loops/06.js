/**
 * Counts how many numbers smaller than the given input are divisible by 3.
 *
 * @param {number} input - The input number.
 * @returns {number} - The count of numbers divisible by 3.
 *
 * @example
 * // returns 1
 * countDivisibleBy3(5);
 */
export function countDivisibleBy3(input) {
  let result = 0;
  for (let i = 3; i < input; i += 3) {
    result++;
  }
  return result;
}
