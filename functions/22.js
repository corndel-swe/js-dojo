/**
 * Determines the letter grade based on a numeric score.
 * @param {number} score - The numeric score.
 * @returns {string} The letter grade.
 *
 * Example: determineGrade(85) should return 'B'.
*/
// 90-100: 'A'
// 80-89: 'B'
// 70-79: 'C'
// 60-69: 'D'
// Below 60: 'F'
export function determineGrade(score) {
  const grades = {
    'F' : [0, 59],
    'D' : [60, 69],
    'C' : [70, 79],
    'B' : [80, 89],
    'A' : [90, 100]
  }
  let gradeAchieved = ''
  for(const grade in grades){
    if(score >= grades[grade][0] && score <= grades[grade][1]){
      return grade
    }
  }
}
