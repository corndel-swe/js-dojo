/**
 * Convert each temperature from Celsius to Fahrenheit in a weather app.
 * @param {number[]} tempsCelsius - The array of temperatures in Celsius.
 * @returns {number[]} The new array of temperatures in Fahrenheit.
 * @example
 * convertToFahrenheit([0, 20, 30]); // returns [32, 68, 86]
 */
export function convertToFahrenheit(tempsCelsius) {
  // TODO: Use the map() method to convert each temperature to Fahrenheit
  // Formula: (Celsius * 9/5) + 32
  // TODO: Return the new array with temperatures in Fahrenheit
  return tempsCelsius.map(Celsius => (Celsius * 9)/5 + 32)
}
