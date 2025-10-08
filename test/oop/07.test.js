import { Car } from '../../oop/07.js'
import assert from 'assert'

describe('Car', function () {
  it('should return full name correctly', function () {
    const car = new Car('Toyota', 'Camry')
    assert.strictEqual(car.getFullName(), 'Toyota Camry')
  })

  it('should work with different makes and models', function () {
    const car = new Car('Honda', 'Civic')
    assert.strictEqual(car.getFullName(), 'Honda Civic')
  })
})
