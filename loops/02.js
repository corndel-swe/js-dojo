/**
 * Finds the product of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The product of all numbers smaller than the input.
 *
 * @example
 * // returns 24
 * productSmallerNumbers(5);
 */
export function productSmallerNumbers(input) {
  if (input === 1) {
    return 1;
  }
  return (input - 1) * productSmallerNumbers(input - 1);
}
