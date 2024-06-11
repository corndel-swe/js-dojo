/**
 * Determines how many items each person gets at a party.
 * @param {number} totalItems - The total number of items.
 * @param {number} people - The number of people at the party.
 * @returns {number} The number of items each person gets.
 *
 * Example: itemsPerPerson(100, 8) should return 12.
 */
export function itemsPerPerson(totalItems, people) {
  return totalItems / people
}
