/**
 * Determines the season based on the month number.
 * @param {number} month - The month number (1 for January, 12 for December).
 * @returns {string} The season ('Winter', 'Spring', 'Summer', 'Autumn').
 *
 * Example: determineSeason(4) should return 'Spring'.
 */
export function determineSeason(month) {
  const seasons = {
    'Winter' : [12, 1, 2],
    'Spring' : [3, 4, 5],
    'Summer' : [6, 7, 8],
    'Autumn' : [9, 10, 11]
  }
    for(const season in seasons){
      if(seasons[season].includes(month)){
        return season
      }
    }
  // Winter: December (12), January (1), February (2)
  // Spring: March (3), April (4), May (5)
  // Summer: June (6), July (7), August (8)
  // Autumn: September (9), October (10), November (11)
}
