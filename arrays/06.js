/**
 * Remove the first element and add it to the end of the array.
 * @param {number[]} ages - The array of ages.
 * @returns {number[]} The updated array of ages.
 * @example
 * shiftAllAges([30, 25, 20, 35, 40]); // returns [25, 20, 35, 40, 30]
 */
export function shiftAllAges(ages) {
  // TODO: Use the shift() method to remove the first element
  // TODO: Use the push() method to add the removed element to the end of the array
  // TODO: Return the updated array
  const first = ages.shift()
  ages.push(first)
  return ages
}
