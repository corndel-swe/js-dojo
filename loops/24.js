/**
 * Flattens a nested array into a single array.
 *
 * @param {number[][]} arr - The input nested array of numbers.
 * @returns {number[]} - The flattened array.
 *
 * @example
 * // returns [1, 2, 3, 4, 5, 6]
 * flattenNestedArray([[1, 2, 3], [4, 5], [6]]);
 */
export function flattenNestedArray(arr) {
  const flatArr = []
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length;j++){
      flatArr.push(arr[i][j])
    }
  }
  return flatArr
}
