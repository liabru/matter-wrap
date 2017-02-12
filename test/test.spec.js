"use strict";

const Matter = require('matter-js');
const MatterWrap = require('../index.js');
const expect = require('chai').expect;

Matter.use(MatterWrap);

describe(MatterWrap.name, function() {
  it('has been installed', function() {
    expect(Matter.used).to.include(MatterWrap.name);
  });

  it('has been registered', function() {
    expect(MatterWrap.name in Matter.Plugin._registry).to.be.true;
  });

  it('wraps the body horizontaly below', function() {
    let engine = Matter.Engine.create(),
      velocity = { x: -1, y: -1 },
      wrap = { min: { x: 0, y: 0 }, max: { x: 1024, y: 1024 } },
      offset = { x: wrap.min.x - 100, y: wrap.max.y * 0.5 };

    let wrapBody = Matter.Bodies.rectangle(offset.x, offset.y, 10, 10, {
      plugin: {
        wrap: wrap
      }
    });

    Matter.Body.setVelocity(wrapBody, velocity);

    Matter.World.add(engine.world, wrapBody);
    Matter.Engine.update(engine, 1);

    expect(wrapBody.position.x).to.be.above(wrap.max.x);
    expect(wrapBody.position.y).to.be.closeTo(offset.y, 1);

    expect(wrapBody.velocity.x).to.be.closeTo(velocity.x, 0.1);
    expect(wrapBody.velocity.y).to.be.closeTo(velocity.y, 0.1);
  });

  it('wraps the body horizontaly above', function() {
    let engine = Matter.Engine.create(),
      velocity = { x: 1, y: 1 },
      wrap = { min: { x: 0, y: 0 }, max: { x: 1024, y: 1024 } },
      offset = { x: wrap.max.x + 100, y: wrap.max.y * 0.5 };

    let wrapBody = Matter.Bodies.rectangle(offset.x, offset.y, 10, 10, {
      plugin: {
        wrap: wrap
      }
    });

    Matter.Body.setVelocity(wrapBody, velocity);

    Matter.World.add(engine.world, wrapBody);
    Matter.Engine.update(engine, 1);

    expect(wrapBody.position.x).to.be.below(wrap.max.x);
    expect(wrapBody.position.y).to.be.closeTo(offset.y, 1);

    expect(wrapBody.velocity.x).to.be.closeTo(velocity.x, 0.1);
    expect(wrapBody.velocity.y).to.be.closeTo(velocity.y, 0.1);
  });

  it('wraps the body vertically below', function() {
    let engine = Matter.Engine.create(),
      velocity = { x: -1, y: -1 },
      wrap = { min: { x: 0, y: 0 }, max: { x: 1024, y: 1024 } },
      offset = { x: wrap.max.x * 0.5, y: wrap.min.y - 100 };

    let wrapBody = Matter.Bodies.rectangle(offset.x, offset.y, 10, 10, {
      plugin: {
        wrap: wrap
      }
    });

    Matter.Body.setVelocity(wrapBody, velocity);

    Matter.World.add(engine.world, wrapBody);
    Matter.Engine.update(engine, 1);

    expect(wrapBody.position.x).to.be.closeTo(offset.x, 1);
    expect(wrapBody.position.y).to.be.above(wrap.max.y);

    expect(wrapBody.velocity.x).to.be.closeTo(velocity.x, 0.1);
    expect(wrapBody.velocity.y).to.be.closeTo(velocity.y, 0.1);
  });

  it('wraps the body vertically above', function() {
    let engine = Matter.Engine.create(),
      velocity = { x: 1, y: 1 },
      wrap = { min: { x: 0, y: 0 }, max: { x: 1024, y: 1024 } },
      offset = { x: wrap.max.x * 0.5, y: wrap.max.y + 100 };

    let wrapBody = Matter.Bodies.rectangle(offset.x, offset.y, 10, 10, {
      plugin: {
        wrap: wrap
      }
    });

    Matter.Body.setVelocity(wrapBody, velocity);

    Matter.World.add(engine.world, wrapBody);
    Matter.Engine.update(engine, 1);

    expect(wrapBody.position.x).to.be.closeTo(offset.x, 1);
    expect(wrapBody.position.y).to.be.below(wrap.min.y);

    expect(wrapBody.velocity.x).to.be.closeTo(velocity.x, 0.1);
    expect(wrapBody.velocity.y).to.be.closeTo(velocity.y, 0.1);
  });
});