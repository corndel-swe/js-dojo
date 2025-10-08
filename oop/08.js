/**
 * A Book class with title, author, and a summary method.
 */
export class Book {
  /**
   * @param {string} title - The book's title.
   * @param {string} author - The book's author.
   * @param {number} pages - The number of pages.
   */
  constructor(title, author, pages) {
    // TODO: Store title, author, and pages as properties.
  }

  /**
   * Gets a summary of the book.
   * @returns {string} - A formatted summary.
   *
   * @example
   * // returns "1984 by George Orwell, 328 pages"
   * new Book("1984", "George Orwell", 328).getSummary();
   */
  getSummary() {
    // TODO: Return a string in the format "[title] by [author], [pages] pages"
  }
}
