import { Student } from '../../oop/10.js'
import assert from 'assert'

describe('Student', function () {
  it('should calculate average correctly', function () {
    const student = new Student('Alice')
    student.addGrade(90)
    student.addGrade(80)
    student.addGrade(70)
    assert.strictEqual(student.getAverage(), 80)
  })

  it('should return 0 for no grades', function () {
    const student = new Student('Bob')
    assert.strictEqual(student.getAverage(), 0)
  })

  it('should handle single grade', function () {
    const student = new Student('Charlie')
    student.addGrade(95)
    assert.strictEqual(student.getAverage(), 95)
  })
})
