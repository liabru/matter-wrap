"use strict";

const Matter = require('matter-js');

/**
 * A coordinate wrapping plugin for matter.js.
 * See the readme for usage and examples.
 * @module MatterWrap
 */
const MatterWrap = {
  // plugin meta
  name: 'matter-wrap', // PLUGIN_NAME
  version: '0.1.3', // PLUGIN_VERSION
  for: 'matter-js@^0.12.0',

  // installs the plugin where `base` is `Matter`
  // you should not need to call this directly.
  install: function(base) {
    base.after('Engine.update', function() {
      MatterWrap.Engine.update(this);
    });
  },

  Engine: {
    /**
     * Updates the engine by wrapping bodies inside `engine.world`.
     * This is called automatically by the plugin.
     * @function MatterWrap.Engine.update
     * @param {Matter.Engine} engine The engine to update.
     * @returns {void} No return value.
     */
    update: function(engine) {
      var world = engine.world,
        bodies = Matter.Composite.allBodies(world);

      for (var i = 0; i < bodies.length; i += 1) {
        var body = bodies[i];

        if (body.plugin.wrap) {
          MatterWrap.Body.wrap(body, body.plugin.wrap);
        }
      }
    }
  },

  Body: {
    /**
     * Wraps the `body` position such that it always stay within the given bounds. 
     * Upon crossing a boundary the body will appear on the opposite side of the bounds, 
     * while maintaining its velocity.
     * This is called automatically by the plugin.
     * @function MatterAttractors.Body.wrap
     * @param {Matter.Body} body The body to wrap.
     * @param {Matter.Bounds} bounds The bounds to wrap the body inside.
     * @returns {void} No return value.
     */
    wrap: function(body, bounds) {
      var x = null,
        y = null;

      if (typeof bounds.min.x !== 'undefined' && typeof bounds.max.x !== 'undefined') {
        if (body.bounds.min.x > bounds.max.x) {
          x = bounds.min.x - (body.bounds.max.x - body.position.x);
        } else if (body.bounds.max.x < bounds.min.x) {
          x = bounds.max.x - (body.bounds.min.x - body.position.x);
        }
      }

      if (typeof bounds.min.y !== 'undefined' && typeof bounds.max.y !== 'undefined') {
        if (body.bounds.min.y > bounds.max.y) {
          y = bounds.min.y - (body.bounds.max.y - body.position.y);
        } else if (body.bounds.max.y < bounds.min.y) {
          y = bounds.max.y - (body.bounds.min.y - body.position.y);
        }
      }

      if (x !== null || y !== null) {
        Matter.Body.setPosition(body, {
          x: x || body.position.x,
          y: y || body.position.y
        });
      }
    }
  }
};

Matter.Plugin.register(MatterWrap);

module.exports = MatterWrap;

/**
 * @namespace Matter.Body
 * @see http://brm.io/matter-js/docs/classes/Body.html
 */

/**
 * This plugin adds a new property `body.plugin.wrap` to instances of `Matter.Body`.  
 * This is a `Matter.Bounds` instance that specifies the wrapping region.
 * @property {Matter.Bounds} body.plugin.wrap
 * @memberof Matter.Body
 */