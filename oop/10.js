/**
 * A Student class with name, grades array, and average calculation.
 */
export class Student {
  /**
   * @param {string} name - The student's name.
   */
  constructor(name) {
    this.name = name
    this.grades = []
    // TODO: Store name as a property.
    // TODO: Initialize an empty array for grades.
  }

  /**
   * Adds a grade to the student's record.
   * @param {number} grade - The grade to add.
   */
  addGrade(grade) {
    this.grades.push(grade)
    // TODO: Add the grade to the grades array.
  }

  /**
   * Calculates the average grade.
   * @returns {number} - The average of all grades.
   */
  getAverage() {
    
    return this.grades.length > 0 ? this.grades.reduce((acc, grade) => grade + acc, 0) / this.grades.length : 0
    // TODO: Calculate and return the average of the grades array.
    // TODO: Return 0 if there are no grades.
  }
}
