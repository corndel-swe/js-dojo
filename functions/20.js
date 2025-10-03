/**
 * Determines the price of a movie ticket based on age and membership status.
 * @param {number} age - The age of the person.
 * @param {boolean} isMember - True if the person is a member.
 * @returns {number} The price of the movie ticket.
 *
 * Example: ticketPrice(17, false) should return 8.
 */
export function ticketPrice(age, isMember) {
  let price = 0
  if(age >= 65){
    price = 6
  }
  else if(age < 18){
    price = 8
  }
  else{
    price = 10
  }
  return isMember ? price -2 : price
  // Prices: $8 for children (under 18), $10 for adults, $6 for seniors (65+)
  // Members get a $2 discount
}
