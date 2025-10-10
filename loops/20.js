/**
 * Calculates the total inventory value from arrays of quantities and prices.
 *
 * @param {number[]} quantities - The array of product quantities.
 * @param {number[]} prices - The array of product prices.
 * @returns {number} - The total inventory value.
 *
 * @example
 * // returns 650
 * calculateInventoryValue([10, 5, 2], [20, 50, 100]);
 */
export function calculateInventoryValue(quantities, prices) {
  let result = 0
  for(let i = 0; i < quantities.length; i++){
    result += (quantities[i] * prices[i])
  }
  return result
}
