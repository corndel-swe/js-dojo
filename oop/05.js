/**
 * A simple Circle class with radius and area calculation.
 */
export class Circle {
  /**
   * @param {number} radius - The circle's radius.
   */
  constructor(radius) {
    // TODO: Store the radius as a property.
     this.radius = radius
  }

  /**
   * Calculates the area of the circle.
   * @returns {number} - The area (π * r²).
   */
  getArea(radius) {
    return Math.PI * this.radius ** 2
    // TODO: Return the area using Math.PI.
  }
}
