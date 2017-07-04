

<!-- Start index.js -->

## MatterWrap

A coordinate wrapping plugin for matter.js.
See the readme for usage and examples.

## MatterWrap.Engine.update(engine)

Updates the engine by wrapping bodies and composites inside `engine.world`.
This is called automatically by the plugin.

### Params:

* **Matter.Engine** *engine* The engine to update.

### Return:

* No return value.

## MatterWrap.Bounds.wrap(objectBounds, bounds)

Returns a translation vector that wraps the `objectBounds` inside the `bounds`.

### Params:

* **Matter.Bounds** *objectBounds* The bounds of the object to wrap inside the bounds.
* **Matter.Bounds** *bounds* The bounds to wrap the body inside.

### Return:

* **Matter.Vector** A translation vector (only if wrapping is required).

## MatterWrap.Body.wrap(body, bounds)

Wraps the `body` position such that it always stays within the given bounds. 
Upon crossing a boundary the body will appear on the opposite side of the bounds, 
while maintaining its velocity.
This is called automatically by the plugin.

### Params:

* **Matter.Body** *body* The body to wrap.
* **Matter.Bounds** *bounds* The bounds to wrap the body inside.

### Return:

* **Matter.Vector** The translation vector that was applied (only if wrapping was required).

## MatterWrap.Composite.bounds(composite)

Returns the union of the bounds of all of the composite's bodies
(not accounting for constraints).

### Params:

* **Matter.Composite** *composite* The composite.

### Return:

* **Matter.Bounds** The composite bounds.

## MatterWrap.Composite.wrap(composite, bounds)

Wraps the `composite` position such that it always stays within the given bounds. 
Upon crossing a boundary the composite will appear on the opposite side of the bounds, 
while maintaining its velocity.
This is called automatically by the plugin.

### Params:

* **Matter.Composite** *composite* The composite to wrap.
* **Matter.Bounds** *bounds* The bounds to wrap the composite inside.

### Return:

* **Matter.Vector** The translation vector that was applied (only if wrapping was required).

## Matter.Body

See: http://brm.io/matter-js/docs/classes/Body.html

This plugin adds a new property `body.plugin.wrap` to instances of `Matter.Body`.  
This is a `Matter.Bounds` instance that specifies the wrapping region.

### Properties:

* **Matter.Bounds** *body.plugin.wrap* 

This plugin adds a new property `composite.plugin.wrap` to instances of `Matter.Composite`.  
This is a `Matter.Bounds` instance that specifies the wrapping region.

### Properties:

* **Matter.Bounds** *composite.plugin.wrap* 

<!-- End index.js -->

<!-- Start webpack.config.js -->

<!-- End webpack.config.js -->

