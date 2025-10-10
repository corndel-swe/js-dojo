/**
 * Reverses the order of elements in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} - The reversed array.
 *
 * @example
 * // returns [5, 4, 3, 2, 1]
 * reverseArray([1, 2, 3, 4, 5]);
 */
export function reverseArray(arr) {
  const reversedArr = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]);
  }
  return arr.reverse();
}
