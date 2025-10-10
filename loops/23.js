/**
 * Counts how many elements in a nested array are greater than a given value.
 *
 * @param {number[][]} arr - The input nested array of numbers.
 * @param {number} value - The value to compare against.
 * @returns {number} - The count of elements greater than the given value.
 *
 * @example
 * // returns 3
 * countGreaterThan([[1, 9, 3], [4, 5], [6, 8]], 5);
 */
export function countGreaterThan(arr, value) {
   let count = 0
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] > value){
        count++
      }
    }
  }
  return count
}
