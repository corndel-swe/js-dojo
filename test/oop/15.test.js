import { Shape, Rectangle } from '../../oop/15.js'
import assert from 'assert'

describe('Shape and Rectangle', function () {
  it('should return 0 for base Shape', function () {
    const shape = new Shape()
    assert.strictEqual(shape.getArea(), 0)
  })

  it('should calculate rectangle area correctly', function () {
    const rect = new Rectangle(4, 5)
    assert.strictEqual(rect.getArea(), 20)
  })

  it('should work with different dimensions', function () {
    const rect = new Rectangle(7, 3)
    assert.strictEqual(rect.getArea(), 21)
  })
})
