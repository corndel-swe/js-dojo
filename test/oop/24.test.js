import { Student, Course } from '../../oop/24.js'
import assert from 'assert'

describe('University System', function () {
  it('should enroll student in course', function () {
    const student = new Student('S001', 'Alice')
    const course = new Course('CS101', 'Intro to CS')
    student.enroll(course)
    assert.strictEqual(student.getCourses().length, 1)
    assert.strictEqual(course.getEnrollmentCount(), 1)
  })

  it('should handle multiple students and courses', function () {
    const student1 = new Student('S001', 'Alice')
    const student2 = new Student('S002', 'Bob')
    const course1 = new Course('CS101', 'Intro to CS')
    const course2 = new Course('CS102', 'Data Structures')

    student1.enroll(course1)
    student1.enroll(course2)
    student2.enroll(course1)

    assert.strictEqual(student1.getCourses().length, 2)
    assert.strictEqual(student2.getCourses().length, 1)
    assert.strictEqual(course1.getEnrollmentCount(), 2)
    assert.strictEqual(course2.getEnrollmentCount(), 1)
  })

  it('should not enroll same student twice', function () {
    const student = new Student('S001', 'Alice')
    const course = new Course('CS101', 'Intro to CS')
    student.enroll(course)
    student.enroll(course)
    assert.strictEqual(course.getEnrollmentCount(), 1)
  })
})
