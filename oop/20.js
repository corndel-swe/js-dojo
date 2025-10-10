/**
 * A Playlist class that manages a collection of songs.
 */
export class Playlist {
  /**
   * @param {string} name - The playlist name.
   */
  constructor(name) {
    this.name = name
    this.songs = []
    // TODO: Store name as a property.
    // TODO: Initialize an empty array for songs.
  }

  /**
   * Adds a song to the playlist.
   * @param {string} song - The song name.
   */
  addSong(song) {
    this.songs.push(song)
    // TODO: Add the song to the songs array.
  }

  /**
   * Removes a song from the playlist.
   * @param {string} song - The song name to remove.
   */
  removeSong(song) {
    this.songs = this.songs.filter(songInSongs => songInSongs !== song)
    // TODO: Remove the song from the array using filter or splice.
  }

  /**
   * Gets all songs in the playlist.
   * @returns {string[]} - Array of song names.
   */
  getSongs() {
    return this.songs
    // TODO: Return the songs array.
  }

  /**
   * Checks if a song exists in the playlist.
   * @param {string} song - The song name.
   * @returns {boolean} - True if the song exists.
   */
  hasSong(song) {
    return this.songs.some((songInArr) => songInArr === song)
    // TODO: Check if the song is in the array.
  }
}
