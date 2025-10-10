/**
 * Calculates the sum of elements in each row of a nested array.
 *
 * @param {number[][]} arr - The input nested array of numbers.
 * @returns {number[]} - An array of sums for each row.
 *
 * @example
 * // returns [6, 9, 6]
 * rowSums([[1, 2, 3], [4, 5], [6]]);
 */
export function rowSums(arr) {
  const sums = []
  for(let i = 0; i < arr.length; i++){
    sums.push(arr[i].reduce((acc, curr) => acc += curr, 0))
  }
  return sums
}
