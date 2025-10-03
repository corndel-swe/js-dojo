/**
 * Counts how many times a specific element appears in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @param {number} element - The element to count.
 * @returns {number} - The number of occurrences of the element in the array.
 *
 * @example
 * // returns 2
 * countOccurrences([1, 2, 3, 1, 4, 1], 1);
 */
export function countOccurrences(arr, element) {
  let occurences = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      occurences++;
    }
  }
  return occurences;
}
