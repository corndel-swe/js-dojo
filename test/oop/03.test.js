import { createCounter } from '../../oop/03.js'
import assert from 'assert'

describe('createCounter', function () {
  it('should start at 0', function () {
    const counter = createCounter()
    assert.strictEqual(counter.getValue(), 0)
  })

  it('should increment correctly', function () {
    const counter = createCounter()
    counter.increment()
    assert.strictEqual(counter.getValue(), 1)
    counter.increment()
    assert.strictEqual(counter.getValue(), 2)
  })
})
