import { Book } from '../../oop/08.js'
import assert from 'assert'

describe('Book', function () {
  it('should return correct summary', function () {
    const book = new Book('1984', 'George Orwell', 328)
    assert.strictEqual(book.getSummary(), '1984 by George Orwell, 328 pages')
  })

  it('should work with different books', function () {
    const book = new Book('The Hobbit', 'J.R.R. Tolkien', 310)
    assert.strictEqual(
      book.getSummary(),
      'The Hobbit by J.R.R. Tolkien, 310 pages'
    )
  })
})
