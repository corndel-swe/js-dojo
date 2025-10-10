/**
 * An Employee class and Manager subclass with salary management.
 */
export class Employee {
  #salary
  /**
   * @param {string} name - The employee's name.
   * @param {number} salary - The base salary.
   */
  constructor(name, salary) {
    this.name = name
    this.#salary = salary
    // TODO: Store name and salary as properties.
  }

  /**
   * Gets the annual salary.
   * @returns {number} - The annual salary.
   */
  getAnnualSalary() {
    return this.#salary
    // TODO: Return the salary.
  }
}

/**
 * A Manager class that extends Employee with a bonus.
 */
export class Manager extends Employee {
  /**
   * @param {string} name - The manager's name.
   * @param {number} salary - The base salary.
   * @param {number} bonus - The annual bonus.
   */
  constructor(name, salary, bonus) {
    super(name, salary)
    this.bonus = bonus
    // TODO: Call super with name and salary.
    // TODO: Store bonus as a property.
  }

  /**
   * Gets the total annual salary including bonus.
   * @returns {number} - The total annual salary.
   */
  getAnnualSalary() {
    return super.getAnnualSalary() + this.bonus
    // TODO: Return salary + bonus (use super.getAnnualSalary() + this.bonus).
  }
}
