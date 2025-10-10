/**
 * A Temperature class that stores Celsius and can convert to Fahrenheit.
 */
export class Temperature {
  /**
   * @param {number} celsius - The temperature in Celsius.
   */
  constructor(celsius) {
    this.celsius = celsius
    // TODO: Store celsius as a property.
  }

  /**
   * Converts the temperature to Fahrenheit.
   * @returns {number} - The temperature in Fahrenheit.
   *
   * @example
   * // returns 32
   * new Temperature(0).toFahrenheit();
   */
  toFahrenheit() {
    return (this.celsius * 9/5) + 32
    // TODO: Return celsius converted to Fahrenheit using the formula: (celsius * 9/5) + 32
  }
}
