/**
 * A ShoppingCart class that can add items and calculate total.
 */
export class ShoppingCart {
  constructor() {
    this.items = []
    // TODO: Initialize an empty array for items.
  }

  /**
   * Adds an item to the cart.
   * @param {Object} item - An item with name and price properties.
   */
  addItem(item) {
    this.items.push(item)
    // TODO: Add the item to the items array.
  }

  /**
   * Calculates the total price of all items.
   * @returns {number} - The total price.
   *
   * @example
   * const cart = new ShoppingCart();
   * cart.addItem({ name: "Apple", price: 1.5 });
   * cart.addItem({ name: "Bread", price: 2.0 });
   * cart.getTotal(); // returns 3.5
   */
  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0)
    // TODO: Sum up the price of all items and return the total.
  }
}
