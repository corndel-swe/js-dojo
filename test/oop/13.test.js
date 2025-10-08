import { Point } from '../../oop/13.js'
import assert from 'assert'

describe('Point', function () {
  it('should calculate distance correctly for 3-4-5 triangle', function () {
    const p1 = new Point(0, 0)
    const p2 = new Point(3, 4)
    assert.strictEqual(p1.distanceTo(p2), 5)
  })

  it('should calculate distance between same point', function () {
    const p1 = new Point(5, 5)
    const p2 = new Point(5, 5)
    assert.strictEqual(p1.distanceTo(p2), 0)
  })

  it('should calculate distance for other points', function () {
    const p1 = new Point(1, 1)
    const p2 = new Point(4, 5)
    assert.strictEqual(p1.distanceTo(p2), 5)
  })
})
