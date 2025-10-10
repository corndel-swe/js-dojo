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
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    // TODO: Store id, name, price, and category as properties.
  }

  /**
   * Gets a formatted product description.
   * @returns {string} - Product description.
   */
  getDescription() {
    return `${this.name} ($${thisprice}) - ${this.category}`;
    // TODO: Return a string: "[name] ($[price]) - [category]"
  }
}

export class Inventory {
  constructor() {
    this.products = new Map();
    // TODO: Initialize a Map to store products with their quantities.
    // TODO: Key: product ID, Value: { product: Product, quantity: number }
  }

  /**
   * Adds a product to the inventory.
   * @param {Product} product - The product to add.
   * @param {number} quantity - The quantity to add.
   */
  addProduct(product, quantity) {
    const productFound = this.products.get(product.id);
    this.products.set(product.id, {
      product,
      quantity: !productFound ? quantity : productFound.quantity + quantity,
    });
    // TODO: If product exists, increase quantity. Otherwise, add new entry.
  }

  /**
   * Removes a quantity of a product.
   * @param {string} productId - The product ID.
   * @param {number} quantity - The quantity to remove.
   * @returns {boolean} - True if successful, false if insufficient stock.
   */
  removeProduct(productId, quantity) {
    const productFound = this.products.get(productId);
    if (productFound && productFound.quantity >= quantity) {
      this.products.set(productId, {
        productFound,
        quantity: productFound.quantity - quantity,
      });
      return true;
    } else {
      return false;
    }
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
    const productFound = this.products.get(productId);
    return productFound ? productFound.quantity : 0;
    // TODO: Return the quantity for the product, or 0 if not found.
  }

  /**
   * Gets all products in a specific category.
   * @param {string} category - The category to filter by.
   * @returns {Product[]} - Array of products in that category.
   */
  getProductsByCategory(category) {
    const matchingProducts = [];
    this.products.forEach(({ product }) => {
      if (product.category === category) {
        matchingProducts.push(product);
      }
    });
    return matchingProducts;
    // TODO: Filter the inventory and return products matching the category.
  }

  /**
   * Calculates the total value of inventory.
   * @returns {number} - The total value (sum of price * quantity for all products).
   */
  getTotalValue() {
    // TODO: Calculate and return the sum of (price * quantity) for all products.
    let total = 0;
    this.products.forEach(
      (item) => (total += item.product.price * item.quantity)
    );
    return total;
  }

  /**
   * Gets products that are low in stock.
   * @param {number} threshold - The quantity threshold.
   * @returns {Object[]} - Array of { product, quantity } objects where quantity <= threshold.
   */
  getLowStockProducts(threshold) {
    // TODO: Filter and return products with quantity <= threshold.
    const productsUnderThreshold = [];
    this.products.forEach((product) => {
      if (product.quantity <= threshold) {
        productsUnderThreshold.push(product);
      }
    });
    return productsUnderThreshold;
  }
}
