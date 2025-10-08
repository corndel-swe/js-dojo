import { Playlist } from '../../oop/20.js'
import assert from 'assert'

describe('Playlist', function () {
  it('should add and retrieve songs', function () {
    const playlist = new Playlist('My Playlist')
    playlist.addSong('Song 1')
    playlist.addSong('Song 2')
    assert.deepStrictEqual(playlist.getSongs(), ['Song 1', 'Song 2'])
  })

  it('should check if song exists', function () {
    const playlist = new Playlist('My Playlist')
    playlist.addSong('Song 1')
    assert.strictEqual(playlist.hasSong('Song 1'), true)
    assert.strictEqual(playlist.hasSong('Song 2'), false)
  })

  it('should remove songs', function () {
    const playlist = new Playlist('My Playlist')
    playlist.addSong('Song 1')
    playlist.addSong('Song 2')
    playlist.addSong('Song 3')
    playlist.removeSong('Song 2')
    assert.deepStrictEqual(playlist.getSongs(), ['Song 1', 'Song 3'])
  })
})
