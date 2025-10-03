/**
 * Finds the index of a specific element in an array. Returns -1 if the element is not found.
 *
 * @param {number[]} arr - The input array of numbers.
 * @param {number} element - The element to find.
 * @returns {number} - The index of the element, or -1 if not found.
 *
 * @example
 * // returns 2
 * findIndex([1, 2, 3, 4, 5], 3);
 */
export function findIndex(arr, element) {
  return arr.findIndex((number) => number === element);
}
