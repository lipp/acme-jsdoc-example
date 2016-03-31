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
 *
 * {@link greet} is actually very smart.
 * @function
 * @see {@link greet}
 * @see greet
 * @see {@link config} for further information.
 * @see {@link http://github.com|GitHub}
 */
var superFunc = function () {}

/**
 * From crawlkit.
 *
 * A method to get a function from that is evaluated within the web page and returns a result.
 *
 * The returned function should call back with an result of any serializable kind by calling
 * `window.callPhantom(error, result)`.
 * If your method did not provoke an error, pass null as the first argument.
 *
 * The time out of the returned function is controlled via {@link greet}.
 *
 * The returned function will be called immediately after page load, any defined {@link config}
 * and other {@link greets}s added before.
 *
 * @see [src/acme.js]{@link
 * https://github.com/lipp}
 * for an example of a valid returned runnable function.
 * @return {Function} A function to be evaluated within the crawled webpage
 */
var fromCrawlkit = function () {}

module.exports = {
  funny: require('./funny'),
  heavy: require('./heavy'),
  greet: greet
}
