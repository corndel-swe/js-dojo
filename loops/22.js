/**
 * Finds the maximum element in a nested array.
 *
 * @param {number[][]} arr - The input nested array of numbers.
 * @returns {number} - The maximum element in the nested array.
 *
 * @example
 * // returns 9
 * findMaxNestedArray([[1, 9, 3], [4, 5], [6, 8]]);
 */
export function findMaxNestedArray(arr) {
  let max = 0
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] > max){
        max = arr[i][j]
      }
    }
  }
  return max
}
