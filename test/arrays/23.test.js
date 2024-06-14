import { strict as assert } from 'assert'
import { updateStepCounts } from '../../arrays/23.js'

describe('updateStepCounts', function () {
  it('should add a new daily step count, remove counts below 5000, and increase each remaining count by 1000', function () {
    const stepCounts = [4000, 7000, 3000, 8000]
    const newStepCount = 6000
    const expected = [8000, 9000, 7000]
    assert.deepEqual(updateStepCounts(stepCounts, newStepCount), expected)
  })

  it('should handle an array with all step counts below 5000', function () {
    const stepCounts = [2000, 3000, 4000]
    const newStepCount = 1000
    const expected = []
    assert.deepEqual(updateStepCounts(stepCounts, newStepCount), expected)
  })

  it('should handle an array with all step counts above 5000', function () {
    const stepCounts = [6000, 7000, 8000]
    const newStepCount = 9000
    const expected = [7000, 8000, 9000, 10000]
    assert.deepEqual(updateStepCounts(stepCounts, newStepCount), expected)
  })

  it('should handle an empty array', function () {
    const stepCounts = []
    const newStepCount = 5000
    const expected = [6000]
    assert.deepEqual(updateStepCounts(stepCounts, newStepCount), expected)
  })
})
