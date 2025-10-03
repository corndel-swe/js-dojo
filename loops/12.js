/**
 * Finds the maximum element in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The maximum element in the array.
 *
 * @example
 * // returns 5
 * findMax([1, 2, 3, 4, 5]);
 */
export function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
