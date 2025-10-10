/**
 * Creates a counter object with increment and getValue methods.
 *
 * @returns {Object} - A counter object.
 *
 * @example
 * const counter = createCounter();
 * counter.increment();
 * counter.getValue(); // returns 1
 */
export function createCounter() {
  // TODO: Create an object with a value property starting at 0.
  // TODO: Add an increment method that increases the value by 1.
  // TODO: Add a getValue method that returns the current value.
  return {
    value : 0,
    increment(){return this.value ++},
    getValue(){return this.value}
  }
}
