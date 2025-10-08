import { createRectangle } from '../../oop/04.js'
import assert from 'assert'

describe('createRectangle', function () {
  it('should calculate area correctly', function () {
    const rect = createRectangle(4, 5)
    assert.strictEqual(rect.getArea(), 20)
  })

  it('should work with different dimensions', function () {
    const rect = createRectangle(10, 3)
    assert.strictEqual(rect.getArea(), 30)
  })
})
