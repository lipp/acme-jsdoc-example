/**
 * @module
 *
 */

/**
 * The jQuery plugin namespace.
 * @external "jQuery.fn"
 * @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
 */

/**
 * Interface for all tools.
 *
 * There are different __Tool__ implementations available for use.
 *
 * # What you can expect
 *
 * - have fun
 * - destroy things
 * - going crazy
 *
 * # What you can NOT expect
 *
 * - do something useful
 * - catching the Road Runner
 *
 * ## Example
 *
 *     coyote.setTool(...)
 *     coyote.getTool().action()
 *
 * @interface
 */
var Tool = function () {}

/**
 * Enum for performing action.
 * @readonly
 * @enum {number}
 */
Tool.actionMode = {
  SLOW: 0,
  MEDIUM: 1,
  FAST: 2
}

/**
 * Turns this tool into a nice jQuery plugin
 * @returns {external:jQuery.fn} The new plugin instance
 */
Tool.prototype.tojQueryPlugin = function () {}

/**
 * Perform the tool associated action
 * like explode, SMASH!, zooom respectively.
 *
 * @function
 * @param {module:heavy~Tool.actionMode} [mode=Tool.actionMode.MEDIUM] The mode to use to perform the action
 */
Tool.prototype.action = function (mode) {}

/**
 * Create a hammer tool, to smash stuff.
 *
 * @class
 * @since 1.0.1
 * @implements {Tool}
 */
var Hammer = function () {}

/**
 * Smash all near stuff.
 *
 * @param {actionMode} [mode=heavy~actionMode.MEDIUM] The mode to use to perform the action
 */
Hammer.prototype.action = function (mode) {}

/**
 * Create a bomb tool, to explode stuff.
 *
 * @class
 * @implements {Tool}
 */
var Bomb = function () {}

/**
 * Explode on the spot.
 *
 * @param {actionMode} [mode=actionMode.MEDIUM] The mode to use to perform the action
 */
Bomb.prototype.action = function (mode) {}

/**
 * A lame ball class. Not so much fun.
 * @class
 * @param {string} options.dots The dot colors
 * @param {string[]} options.dirt The dirt features
 * @param {number} options.physics[].weight The weigth
 * @deprecated
 */
var Ball = function () {}

/**
 * A lame horn class. Not so funny.
 * @class
 * @param {object} options
 * @param {string} options.dots The dot colors
 * @param {string[]} options.dirt The dirt features
 * @param {Array} options.physics Array of physic related options
 * @param {number} options.physics[].weight The weight
 * @deprecated 1.3
 */
var Horn = function () {}
