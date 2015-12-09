/**
 * @module
 *
 */


/**
 * Creates a new Coyote instance.
 * @class
 * @classdesc A coyote is a real funny animal, which likes to place bombs
 *  or to skate on rails with rockets.
 *  @param {string} name The name like 'chuck' or 'berry'
 *  @param {Object} [options = {defaultTool: 'hammer'}] Optional config params.
 *  @param {string} [options.defaultTool] The default tool to use
 *  @param {number} [options.age] The age in years
 */
var Coyote = function(name, options) {

};

/**
 * Get the current tool.
 * @returns {module:heavy~Tool} The current tool in use.
 */
Coyote.prototype.getTool = function() {};

/**
 * Set the current tool.
 * @param {module:heavy~Tool} tool The new tool to use. Is copied.
 * @throws {InvalidArgumentException} When tool is incompatible.
 */
Coyote.prototype.setTool = function(tool) {};

/**
 * Start skting on rails.
 * @param {number} [speed=50] in mps
 */
Coyote.prototype.skate = function(speed) {};

module.exports = {
    Coyote: Coyote
};