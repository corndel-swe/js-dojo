import { Library } from '../../oop/21.js'
import assert from 'assert'

describe('Library', function () {
  it('should add and get books', function () {
    const library = new Library()
    library.addBook('123', { title: '1984', author: 'George Orwell' })
    const book = library.getBook('123')
    assert.strictEqual(book.title, '1984')
    assert.strictEqual(book.author, 'George Orwell')
  })

  it('should return undefined for non-existent book', function () {
    const library = new Library()
    assert.strictEqual(library.getBook('999'), undefined)
  })

  it('should remove books', function () {
    const library = new Library()
    library.addBook('123', { title: '1984', author: 'George Orwell' })
    assert.strictEqual(library.removeBook('123'), true)
    assert.strictEqual(library.getBook('123'), undefined)
  })

  it('should count total books', function () {
    const library = new Library()
    library.addBook('123', { title: '1984', author: 'George Orwell' })
    library.addBook('456', { title: 'Brave New World', author: 'Aldous Huxley' })
    assert.strictEqual(library.getTotalBooks(), 2)
  })
})
