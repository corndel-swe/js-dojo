import { Product, Inventory } from '../../oop/25.js'
import assert from 'assert'

describe('Inventory Management System', function () {
  it('should add products to inventory', function () {
    const inventory = new Inventory()
    const product = new Product('P001', 'Laptop', 999, 'Electronics')
    inventory.addProduct(product, 10)
    assert.strictEqual(inventory.getQuantity('P001'), 10)
  })

  it('should increase quantity for existing products', function () {
    const inventory = new Inventory()
    const product = new Product('P001', 'Laptop', 999, 'Electronics')
    inventory.addProduct(product, 10)
    inventory.addProduct(product, 5)
    assert.strictEqual(inventory.getQuantity('P001'), 15)
  })

  it('should remove products correctly', function () {
    const inventory = new Inventory()
    const product = new Product('P001', 'Laptop', 999, 'Electronics')
    inventory.addProduct(product, 10)
    const result = inventory.removeProduct('P001', 3)
    assert.strictEqual(result, true)
    assert.strictEqual(inventory.getQuantity('P001'), 7)
  })

  it('should prevent removing more than available', function () {
    const inventory = new Inventory()
    const product = new Product('P001', 'Laptop', 999, 'Electronics')
    inventory.addProduct(product, 10)
    const result = inventory.removeProduct('P001', 15)
    assert.strictEqual(result, false)
    assert.strictEqual(inventory.getQuantity('P001'), 10)
  })

  it('should filter products by category', function () {
    const inventory = new Inventory()
    const p1 = new Product('P001', 'Laptop', 999, 'Electronics')
    const p2 = new Product('P002', 'Chair', 199, 'Furniture')
    const p3 = new Product('P003', 'Phone', 699, 'Electronics')
    inventory.addProduct(p1, 10)
    inventory.addProduct(p2, 20)
    inventory.addProduct(p3, 15)

    const electronics = inventory.getProductsByCategory('Electronics')
    assert.strictEqual(electronics.length, 2)
  })

  it('should calculate total inventory value', function () {
    const inventory = new Inventory()
    const p1 = new Product('P001', 'Laptop', 1000, 'Electronics')
    const p2 = new Product('P002', 'Chair', 200, 'Furniture')
    inventory.addProduct(p1, 5)
    inventory.addProduct(p2, 10)
    assert.strictEqual(inventory.getTotalValue(), 7000)
  })

  it('should identify low stock products', function () {
    const inventory = new Inventory()
    const p1 = new Product('P001', 'Laptop', 999, 'Electronics')
    const p2 = new Product('P002', 'Chair', 199, 'Furniture')
    const p3 = new Product('P003', 'Phone', 699, 'Electronics')
    inventory.addProduct(p1, 2)
    inventory.addProduct(p2, 20)
    inventory.addProduct(p3, 5)

    const lowStock = inventory.getLowStockProducts(5)
    assert.strictEqual(lowStock.length, 2)
  })
})
