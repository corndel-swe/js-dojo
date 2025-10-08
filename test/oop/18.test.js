import { Counter } from '../../oop/18.js'
import assert from 'assert'

describe('Counter with static tracking', function () {
  it('should track total counters created', function () {
    const initialCount = Counter.getTotalCounters()
    const c1 = new Counter()
    const c2 = new Counter()
    assert.strictEqual(Counter.getTotalCounters(), initialCount + 2)
  })

  it('should increment individual counters', function () {
    const counter = new Counter()
    assert.strictEqual(counter.getValue(), 0)
    counter.increment()
    assert.strictEqual(counter.getValue(), 1)
    counter.increment()
    assert.strictEqual(counter.getValue(), 2)
  })

  it('should maintain separate counts for each instance', function () {
    const c1 = new Counter()
    const c2 = new Counter()
    c1.increment()
    c1.increment()
    c2.increment()
    assert.strictEqual(c1.getValue(), 2)
    assert.strictEqual(c2.getValue(), 1)
  })
})
