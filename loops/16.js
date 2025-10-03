/**
 * Calculates the average of all elements in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The average of the elements in the array.
 *
 * @example
 * // returns 3
 * calculateAverage([1, 2, 3, 4, 5]);
 */
export function calculateAverage(arr) {
  const total = arr.reduce((acc, curr) => (acc += curr), 0);
  const noOfItems = arr.length;
  const average = total / noOfItems;
  return arr.length > 0 ? average : 0;
}
