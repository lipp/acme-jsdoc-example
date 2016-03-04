/**
 *
 */

/**
 * @constant {string}
 * @default
 *
 * @playground
 * // Testing tonicdev
 * var numbers = require('numbers')
 * numbers.calculus.Riemann(Math.sin, -2, 4, 200)
 */
var greet = 'Hello folks!'

/**
 * @constant {Object}
 * @default
 */
var config = {
  company: 'ACME TM'
}

/**
 * Super useful function.
 * @function
 */
var superFunc = function () {}

module.exports = {
  funny: require('./funny'),
  heavy: require('./heavy'),
  greet: greet
}
