

<!-- Start index.js -->

## MatterWrap

A coordinate wrapping plugin for matter.js.
See the readme for usage and examples.

## MatterWrap.Engine.update(engine)

Updates the engine by wrapping bodies inside `engine.world`.
This is called automatically by the plugin.

### Params:

* **Matter.Engine** *engine* The engine to update.

### Return:

* No return value.

## MatterAttractors.Body.wrap(body, bounds)

Wraps the `body` position such that it always stay within the given bounds. 
Upon crossing a boundary the body will appear on the opposite side of the bounds, 
while maintaining its velocity.
This is called automatically by the plugin.

### Params:

* **Matter.Body** *body* The body to wrap.
* **Matter.Bounds** *bounds* The bounds to wrap the body inside.

### Return:

* No return value.

## Matter.Body

See: http://brm.io/matter-js/docs/classes/Body.html

This plugin adds a new property `body.plugin.wrap` to instances of `Matter.Body`.  
This is a `Matter.Bounds` instance that specifies the wrapping region.

### Properties:

* **Matter.Bounds** *body.plugin.wrap* 

<!-- End index.js -->

<!-- Start webpack.config.js -->

<!-- End webpack.config.js -->

