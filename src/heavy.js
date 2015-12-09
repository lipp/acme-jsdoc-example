/**
 * @module
 *
 */

/**
 * Interface for all tools.
 * @interface 
 */
var Tool = function() {};

/**
 * Enum for performing action.
 * @readonly
 * @enum {number}
 */
Tool.actionMode = {
    SLOW: 0,
    MEDIUM: 1,
    FAST: 2
};

/**
 * Perform the tool associated action
 * like explode, SMASH!, zooom respectively.
 *
 * @function
 * @param {module:heavy~Tool.actionMode} [mode=Tool.actionMode.MEDIUM] The mode to use to perform the action
 */
Tool.prototype.action = function(mode) {};

/**
 * Create a hammer tool, to smash stuff.
 *
 * @class
 * @implements {Tool}
 */
var Hammer = function() {};

/**
 * Smash all near stuff.
 *
 * @param {actionMode} [mode=heavy~actionMode.MEDIUM] The mode to use to perform the action
 */
Hammer.prototype.action = function(mode) {};

/**
 * Create a bomb tool, to explode stuff.
 *
 * @class
 * @implements {Tool}
 */
var Bomb = function() {};

/**
 * Explode on the spot.
 *
 * @param {actionMode} [mode=actionMode.MEDIUM] The mode to use to perform the action
 */
Bomb.prototype.action = function(mode) {};