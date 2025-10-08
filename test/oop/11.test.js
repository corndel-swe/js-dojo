import { ShoppingCart } from '../../oop/11.js'
import assert from 'assert'

describe('ShoppingCart', function () {
  it('should calculate total correctly', function () {
    const cart = new ShoppingCart()
    cart.addItem({ name: 'Apple', price: 1.5 })
    cart.addItem({ name: 'Bread', price: 2.0 })
    assert.strictEqual(cart.getTotal(), 3.5)
  })

  it('should return 0 for empty cart', function () {
    const cart = new ShoppingCart()
    assert.strictEqual(cart.getTotal(), 0)
  })

  it('should handle multiple items', function () {
    const cart = new ShoppingCart()
    cart.addItem({ name: 'Milk', price: 2.5 })
    cart.addItem({ name: 'Eggs', price: 3.0 })
    cart.addItem({ name: 'Cheese', price: 4.5 })
    assert.strictEqual(cart.getTotal(), 10)
  })
})
