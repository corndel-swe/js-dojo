/**
 * An Animal base class and a Dog subclass demonstrating inheritance.
 */
export class Animal {
  /**
   * @param {string} name - The animal's name.
   */
  constructor(name) {
    // TODO: Store name as a property.
  }

  /**
   * Makes the animal speak.
   * @returns {string} - A generic animal sound.
   */
  speak() {
    // TODO: Return "[name] makes a sound"
  }
}

/**
 * A Dog class that extends Animal.
 */
export class Dog extends Animal {
  /**
   * Makes the dog bark.
   * @returns {string} - A dog-specific sound.
   *
   * @example
   * // returns "Buddy barks"
   * new Dog("Buddy").speak();
   */
  speak() {
    // TODO: Return "[name] barks" (use this.name from the parent class)
  }
}
