/**
 * A University system with Student and Course classes.
 */
export class Student {
  /**
   * @param {string} id - The student ID.
   * @param {string} name - The student name.
   */
  constructor(id, name) {
    // TODO: Store id and name as properties.
    // TODO: Initialize an empty array for enrolled courses.
  }

  /**
   * Enrolls the student in a course.
   * @param {Course} course - The course to enroll in.
   */
  enroll(course) {
    // TODO: Add the course to the enrolled courses array.
    // TODO: Call course.addStudent(this) to add this student to the course.
  }

  /**
   * Gets all enrolled courses.
   * @returns {Course[]} - Array of courses.
   */
  getCourses() {
    // TODO: Return the enrolled courses array.
  }
}

export class Course {
  /**
   * @param {string} code - The course code.
   * @param {string} name - The course name.
   */
  constructor(code, name) {
    // TODO: Store code and name as properties.
    // TODO: Initialize an empty array for enrolled students.
  }

  /**
   * Adds a student to the course.
   * @param {Student} student - The student to add.
   */
  addStudent(student) {
    // TODO: Add the student to the students array if not already enrolled.
  }

  /**
   * Gets all enrolled students.
   * @returns {Student[]} - Array of students.
   */
  getStudents() {
    // TODO: Return the students array.
  }

  /**
   * Gets the total number of students.
   * @returns {number} - The student count.
   */
  getEnrollmentCount() {
    // TODO: Return the length of the students array.
  }
}
