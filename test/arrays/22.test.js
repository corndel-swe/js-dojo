import { strict as assert } from 'assert'
import { updateFollowers } from '../../arrays/22.js'

describe('updateFollowers', function () {
  it('should add a new follower, remove followers with even IDs, and prefix each remaining follower ID with "ID-"', function () {
    const followerIDs = [1, 2, 3, 4]
    const newFollowerID = 5
    const expected = ['ID-1', 'ID-3', 'ID-5']
    assert.deepEqual(updateFollowers(followerIDs, newFollowerID), expected)
  })

  it('should handle an array with all even follower IDs', function () {
    const followerIDs = [2, 4, 6]
    const newFollowerID = 8
    const expected = []
    assert.deepEqual(updateFollowers(followerIDs, newFollowerID), expected)
  })

  it('should handle an array with all odd follower IDs', function () {
    const followerIDs = [1, 3, 5]
    const newFollowerID = 7
    const expected = ['ID-1', 'ID-3', 'ID-5', 'ID-7']
    assert.deepEqual(updateFollowers(followerIDs, newFollowerID), expected)
  })

  it('should handle an empty array', function () {
    const followerIDs = []
    const newFollowerID = 1
    const expected = ['ID-1']
    assert.deepEqual(updateFollowers(followerIDs, newFollowerID), expected)
  })
})
