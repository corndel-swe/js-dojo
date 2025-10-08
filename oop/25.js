/**
 * A comprehensive inventory management system with Products and Inventory classes.
 */
export class Product {
  /**
   * @param {string} id - Unique product ID.
   * @param {string} name - Product name.
   * @param {number} price - Product price.
   * @param {string} category - Product category.
   */
  constructor(id, name, price, category) {
    // TODO: Store id, name, price, and category as properties.
  }

  /**
   * Gets a formatted product description.
   * @returns {string} - Product description.
   */
  getDescription() {
    // TODO: Return a string: "[name] ($[price]) - [category]"
  }
}

export class Inventory {
  constructor() {
    // TODO: Initialize a Map to store products with their quantities.
    // TODO: Key: product ID, Value: { product: Product, quantity: number }
  }

  /**
   * Adds a product to the inventory.
   * @param {Product} product - The product to add.
   * @param {number} quantity - The quantity to add.
   */
  addProduct(product, quantity) {
    // TODO: If product exists, increase quantity. Otherwise, add new entry.
  }

  /**
   * Removes a quantity of a product.
   * @param {string} productId - The product ID.
   * @param {number} quantity - The quantity to remove.
   * @returns {boolean} - True if successful, false if insufficient stock.
   */
  removeProduct(productId, quantity) {
    // TODO: Check if product exists and has enough quantity.
    // TODO: Decrease quantity if possible, return true.
    // TODO: Return false if insufficient stock or product doesn't exist.
  }

  /**
   * Gets the quantity of a product.
   * @param {string} productId - The product ID.
   * @returns {number} - The quantity (0 if not found).
   */
  getQuantity(productId) {
    // TODO: Return the quantity for the product, or 0 if not found.
  }

  /**
   * Gets all products in a specific category.
   * @param {string} category - The category to filter by.
   * @returns {Product[]} - Array of products in that category.
   */
  getProductsByCategory(category) {
    // TODO: Filter the inventory and return products matching the category.
  }

  /**
   * Calculates the total value of inventory.
   * @returns {number} - The total value (sum of price * quantity for all products).
   */
  getTotalValue() {
    // TODO: Calculate and return the sum of (price * quantity) for all products.
  }

  /**
   * Gets products that are low in stock.
   * @param {number} threshold - The quantity threshold.
   * @returns {Object[]} - Array of { product, quantity } objects where quantity <= threshold.
   */
  getLowStockProducts(threshold) {
    // TODO: Filter and return products with quantity <= threshold.
  }
}
