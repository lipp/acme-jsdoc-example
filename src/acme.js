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
 * This should not show up.
 *
 * @constant {Number}
 * @ignore
 *
 */
var hidden = 123.222

/**
 * Super useful function. See also {@link greet} and [the TOOLS] {@link module:heavy~Tool}.
 * If you don't know where to start, use {@link https://google.com|Google}.
 * @function
 */
var superFunc = function () {}

module.exports = {
  funny: require('./funny'),
  heavy: require('./heavy'),
  greet: greet
}
