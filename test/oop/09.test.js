import { Temperature } from '../../oop/09.js'
import assert from 'assert'

describe('Temperature', function () {
  it('should convert 0°C to 32°F', function () {
    const temp = new Temperature(0)
    assert.strictEqual(temp.toFahrenheit(), 32)
  })

  it('should convert 100°C to 212°F', function () {
    const temp = new Temperature(100)
    assert.strictEqual(temp.toFahrenheit(), 212)
  })

  it('should convert 25°C to 77°F', function () {
    const temp = new Temperature(25)
    assert.strictEqual(temp.toFahrenheit(), 77)
  })
})
