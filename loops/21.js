/**
 * Calculates the total engagement (likes, comments, shares) for each post.
 *
 * @param {number[][]} posts - The array of posts, each represented by an array [likes, comments, shares].
 * @returns {number[]} - The array of total engagements for each post.
 *
 * @example
 * // returns [15, 30]
 * calculateEngagement([[5, 5, 5], [10, 10, 10]]);
 */
export function calculateEngagement(posts) {
  const totalEngagements = []
  for(let i = 0; i < posts.length; i++){
    totalEngagements.push(posts[i].reduce((acc, curr) => acc += curr, 0))
  }
  return totalEngagements
}
