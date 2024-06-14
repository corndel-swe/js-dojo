import { strict as assert } from 'assert'
import { updateScores } from '../../arrays/25.js'

describe('updateScores', function () {
  it('should add a new score, remove scores below 50, and increase each remaining score by 20%', function () {
    const scores = [45, 55, 65, 75]
    const newScore = 85
    const expected = [66, 78, 90, 102]
    assert.deepEqual(updateScores(scores, newScore), expected)
  })

  it('should handle an array with all scores below 50', function () {
    const scores = [30, 40, 45]
    const newScore = 20
    const expected = []
    assert.deepEqual(updateScores(scores, newScore), expected)
  })

  it('should handle an array with all scores above 50', function () {
    const scores = [60, 70, 80]
    const newScore = 90
    const expected = [72, 84, 96, 108]
    assert.deepEqual(updateScores(scores, newScore), expected)
  })

  it('should handle an empty array', function () {
    const scores = []
    const newScore = 50
    const expected = [60]
    assert.deepEqual(updateScores(scores, newScore), expected)
  })
})
