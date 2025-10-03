/**
 * Checks if a year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 *
 * Example: isLeapYear(2020) should return true.
 */
export function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
