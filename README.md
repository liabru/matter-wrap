# matter-wrap

> A coordinate wrapping plugin for [matter.js](https://github.com/liabru/matter-js/)

[![Build Status](https://travis-ci.org/liabru/matter-wrap.svg?branch=master)](https://travis-ci.org/liabru/matter-wrap)

This plugin allows you to automatically wrap the position of bodies and composites such that they always stay within the given bounds. Upon crossing a boundary the body will appear on the opposite side of the bounds, while maintaining its velocity.
An example of this effect can be seen in the classic 
[Asteroids](https://www.youtube.com/watch?v=WYSupJ5r2zo) and [Pacman](https://youtu.be/3-C7lHLFLU8?t=63) games.

## Demo

See the [demo](http://liabru.github.io/matter-wrap).

[![matter-wrap](docs/demo.gif)](http://liabru.github.io/matter-wrap)

## Install

Get the [matter-wrap.js](build/matter-wrap.js) file directly or get it via npm:

    npm install matter-wrap

### Dependencies

- [matter.js](https://github.com/liabru/matter-js/)

## Usage

```js
Matter.use('matter-wrap');
// or
Matter.use(MatterWrap);
```

See [Using Plugins](https://github.com/liabru/matter-js/wiki/Using-plugins#using-plugins) for more information.

An example of a body that wraps between the bounds (0, 0) and (1024, 1024).
For wrapping composites set `composite.plugin.wrap` as below.

```js
var body = Matter.Bodies.circle(0, 0, 10, {
  plugin: {
    wrap: {
      min: {
        x: 0,
        y: 0
      },
      max: {
        x: 1024,
        y: 1024
      }
    }
  }
);
```

## Examples

Check out the [examples](docs/examples).

## Documentation

See the [API docs](API.md).