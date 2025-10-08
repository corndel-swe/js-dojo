import { createGreeter } from '../../oop/02.js'
import assert from 'assert'

describe('createGreeter', function () {
  it('should create an object with a greet method', function () {
    const greeter = createGreeter('Alice')
    assert.strictEqual(greeter.greet(), 'Hello, my name is Alice')
  })

  it('should work with different names', function () {
    const greeter = createGreeter('Bob')
    assert.strictEqual(greeter.greet(), 'Hello, my name is Bob')
  })
})
