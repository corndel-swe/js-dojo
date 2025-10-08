import { Circle } from '../../oop/05.js'
import assert from 'assert'

describe('Circle', function () {
  it('should calculate area correctly', function () {
    const circle = new Circle(5)
    assert.strictEqual(circle.getArea(), Math.PI * 25)
  })

  it('should work with different radius', function () {
    const circle = new Circle(10)
    assert.strictEqual(circle.getArea(), Math.PI * 100)
  })
})
