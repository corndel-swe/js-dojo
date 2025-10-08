import { Vector2D } from '../../oop/19.js'
import assert from 'assert'

describe('Vector2D', function () {
  it('should add vectors correctly', function () {
    const v1 = new Vector2D(1, 2)
    const v2 = new Vector2D(3, 4)
    const v3 = v1.add(v2)
    assert.strictEqual(v3.x, 4)
    assert.strictEqual(v3.y, 6)
  })

  it('should calculate magnitude correctly', function () {
    const v = new Vector2D(3, 4)
    assert.strictEqual(v.magnitude(), 5)
  })

  it('should not mutate original vectors when adding', function () {
    const v1 = new Vector2D(1, 2)
    const v2 = new Vector2D(3, 4)
    v1.add(v2)
    assert.strictEqual(v1.x, 1)
    assert.strictEqual(v1.y, 2)
  })
})
