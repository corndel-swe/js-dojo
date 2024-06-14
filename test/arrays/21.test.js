import { strict as assert } from 'assert'
import { updatePrices } from '../../arrays/21.js'

describe('updatePrices', function () {
  it('should add a new price, remove prices above 100, and double the remaining prices', function () {
    const prices = [30, 120, 50, 200]
    const newPrice = 45
    const expected = [60, 100, 90]
    assert.deepEqual(updatePrices(prices, newPrice), expected)
  })

  it('should handle an array with all prices below 100', function () {
    const prices = [20, 50, 70]
    const newPrice = 80
    const expected = [40, 100, 140, 160]
    assert.deepEqual(updatePrices(prices, newPrice), expected)
  })

  it('should handle an array with all prices above 100', function () {
    const prices = [150, 200, 300]
    const newPrice = 120
    const expected = []
    assert.deepEqual(updatePrices(prices, newPrice), expected)
  })

  it('should handle an array with mixed prices', function () {
    const prices = [90, 110, 100, 80]
    const newPrice = 70
    const expected = [180, 200, 160, 140]
    assert.deepEqual(updatePrices(prices, newPrice), expected)
  })

  it('should handle an empty array', function () {
    const prices = []
    const newPrice = 50
    const expected = [100]
    assert.deepEqual(updatePrices(prices, newPrice), expected)
  })
})
