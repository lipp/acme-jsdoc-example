/**
 *
 */

/**
 * This is just a constant.
 * You can attach interactive playgrounds with the @playground tag.
 * You can require any npm module and write real programs.
 *
 * @constant {string}
 * @default
 *
 * @playground
 * // Testing tonicdev
 * var numbers = require('numbers')
 * var x = numbers.calculus.Riemann(Math.sin, -2, 4, 200)
 * x++
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
