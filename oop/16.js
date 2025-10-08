/**
 * An Employee class and Manager subclass with salary management.
 */
export class Employee {
  /**
   * @param {string} name - The employee's name.
   * @param {number} salary - The base salary.
   */
  constructor(name, salary) {
    // TODO: Store name and salary as properties.
  }

  /**
   * Gets the annual salary.
   * @returns {number} - The annual salary.
   */
  getAnnualSalary() {
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
    // TODO: Call super with name and salary.
    // TODO: Store bonus as a property.
  }

  /**
   * Gets the total annual salary including bonus.
   * @returns {number} - The total annual salary.
   */
  getAnnualSalary() {
    // TODO: Return salary + bonus (use super.getAnnualSalary() + this.bonus).
  }
}
