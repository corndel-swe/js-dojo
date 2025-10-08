import { MathUtils } from '../../oop/17.js'
import assert from 'assert'

describe('MathUtils', function () {
  it('should return max of two numbers', function () {
    assert.strictEqual(MathUtils.max(5, 10), 10)
    assert.strictEqual(MathUtils.max(10, 5), 10)
  })

  it('should return min of two numbers', function () {
    assert.strictEqual(MathUtils.min(5, 10), 5)
    assert.strictEqual(MathUtils.min(10, 5), 5)
  })

  it('should handle equal numbers', function () {
    assert.strictEqual(MathUtils.max(7, 7), 7)
    assert.strictEqual(MathUtils.min(7, 7), 7)
  })
})
