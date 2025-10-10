/**
 * Calculates the sum of the digits of the given number.
 *
 * @param {number} num - The number to find the sum of its digits.
 * @returns {number} - The sum of the digits of the given number.
 *
 * @example
 * // returns 6
 * sumOfDigits(123);
 */
export function sumOfDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, curr) => (acc += parseInt(curr)), 0);
}
