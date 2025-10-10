/**
 * A Person class with private age using encapsulation.
 */
export class Person {
  #age
  /**
   * @param {string} name - The person's name.
   * @param {number} age - The person's age.
   */
  constructor(name, age) {
    this.#age = age
    this.name = name
    // TODO: Store name as a public property.
    // TODO: Store age as a private property using # prefix (e.g., #age).
  }

  /**
   * Gets the person's age.
   * @returns {number} - The age.
   */
  getAge() {
    return this.#age
    // TODO: Return the private age property.
  }

  /**
   * Sets a new age.
   * @param {number} newAge - The new age.
   */
  setAge(newAge) {
    if(newAge > 0){

      this.#age = newAge
    }
    // TODO: Update the private age property if newAge is positive.
  }
}
