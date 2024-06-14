import { strict as assert } from 'assert'
import { updateTemperatures } from '../../arrays/24.js'

describe('updateTemperatures', function () {
  it('should add a new temperature reading, remove readings below 60, and convert each remaining reading to Celsius', function () {
    const tempsFahrenheit = [59, 65, 72, 50]
    const newTempFahrenheit = 68
    const expected = [18.3333, 22.2222, 20]
    assert.deepEqual(
      updateTemperatures(tempsFahrenheit, newTempFahrenheit).map(temp =>
        parseFloat(temp.toFixed(4))
      ),
      expected
    )
  })

  it('should handle an array with all temperatures below 60', function () {
    const tempsFahrenheit = [50, 55, 59]
    const newTempFahrenheit = 58
    const expected = []
    assert.deepEqual(
      updateTemperatures(tempsFahrenheit, newTempFahrenheit),
      expected
    )
  })

  it('should handle an array with all temperatures above 60', function () {
    const tempsFahrenheit = [65, 70, 75]
    const newTempFahrenheit = 80
    const expected = [18.3333, 21.1111, 23.8889, 26.6667]
    assert.deepEqual(
      updateTemperatures(tempsFahrenheit, newTempFahrenheit).map(temp =>
        parseFloat(temp.toFixed(4))
      ),
      expected
    )
  })

  it('should handle an empty array', function () {
    const tempsFahrenheit = []
    const newTempFahrenheit = 70
    const expected = [21.1111]
    assert.deepEqual(
      updateTemperatures(tempsFahrenheit, newTempFahrenheit).map(temp =>
        parseFloat(temp.toFixed(4))
      ),
      expected
    )
  })
})
