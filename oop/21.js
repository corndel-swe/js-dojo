/**
 * A Library class that manages books using a Map.
 */
export class Library {
  constructor() {
    this.books = new Map()
    // TODO: Initialize a Map to store books with ISBN as key.
  }

  /**
   * Adds a book to the library.
   * @param {string} isbn - The book's ISBN.
   * @param {Object} book - The book object with title and author.
   */
  addBook(isbn, book) {
    this.books.set(isbn, book)
    // TODO: Add the book to the Map using isbn as the key.
  }

  /**
   * Gets a book by ISBN.
   * @param {string} isbn - The book's ISBN.
   * @returns {Object|undefined} - The book object or undefined.
   */
  getBook(isbn) {
    return this.books.get(isbn)
    // TODO: Return the book from the Map.
  }

  /**
   * Removes a book by ISBN.
   * @param {string} isbn - The book's ISBN.
   * @returns {boolean} - True if the book was removed.
   */
  removeBook(isbn) {
    return this.books.delete(isbn)
    // TODO: Remove the book from the Map and return the result.
  }

  /**
   * Gets the total number of books.
   * @returns {number} - The number of books.
   */
  getTotalBooks() {
    return this.books.size
    // TODO: Return the size of the Map.
  }
}
