/**
 * Finds the minimum element in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The minimum element in the array.
 *
 * @example
 * // returns 1
 * findMin([1, 2, 3, 4, 5]);
 */
export function findMin(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < max) {
      max = arr[i];
    }
  }
  return max;
}
