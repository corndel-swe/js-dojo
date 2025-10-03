/**
 * Calculates the total pay including overtime pay.
 * @param {number} hoursWorked - The total hours worked in a week.
 * @param {number} hourlyRate - The regular hourly rate.
 * @returns {number} The total pay including overtime.
 *
 * Example: totalPay(45, 20) should return 950.
 */
export function totalPay(hoursWorked, hourlyRate) {
  const regularHours = hoursWorked <= 40 ? hoursWorked : 40
  const overTime = hoursWorked <= 40 ? 0 : hoursWorked - 40
  const regularPay = regularHours * hourlyRate
  const overtimePay = overTime * (hourlyRate * 1.5)
  return regularPay + overtimePay
}
