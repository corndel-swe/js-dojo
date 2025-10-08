import { Animal, Dog } from '../../oop/14.js'
import assert from 'assert'

describe('Animal and Dog', function () {
  it('should make animal speak', function () {
    const animal = new Animal('Generic')
    assert.strictEqual(animal.speak(), 'Generic makes a sound')
  })

  it('should make dog bark', function () {
    const dog = new Dog('Buddy')
    assert.strictEqual(dog.speak(), 'Buddy barks')
  })

  it('should work with different names', function () {
    const dog = new Dog('Max')
    assert.strictEqual(dog.speak(), 'Max barks')
  })
})
