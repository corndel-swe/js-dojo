/**
 * A Counter class with a static property to track total instances.
 */
export class Counter {
  static totalCounters = 0

  constructor() {
    // TODO: Increment the static totalCounters property.
    // TODO: Initialize an instance count property starting at 0.
  }

  /**
   * Increments this counter's value.
   */
  increment() {
    // TODO: Increment the instance count property.
  }

  /**
   * Gets this counter's value.
   * @returns {number} - The current count.
   */
  getValue() {
    // TODO: Return the instance count.
  }

  /**
   * Gets the total number of Counter instances created.
   * @returns {number} - The total number of counters.
   */
  static getTotalCounters() {
    // TODO: Return the static totalCounters property.
  }
}
