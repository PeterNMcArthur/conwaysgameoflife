var step = require('../world');

describe("game of life", function() {

  it('all stay dead, if all dead', function () {
    var world = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ];

    expect(step(world)).toEqual([
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ])
  })

  it('all stay dead, if all dead', function () {
    var world = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
    ];

    expect(step(world)).toEqual([
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ])
  })

  it('no neighbours, dies', function () {
    var world = [
      [0,0,0],
      [0,1,0],
      [0,0,0],
    ];

    expect(step(world)).toEqual([
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ])
  })

  it('does not mutate the existing world', function () {
    var world = [
      [0,0,0],
      [0,1,0],
      [0,0,0],
    ];

    var newWorld = step(world);

    expect(newWorld).toEqual([
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ])

    expect(world).toEqual([
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ])
  })

  it('has 2 horizontal neighbours, survives', function () {
    var world = [
      [0,0,0],
      [1,1,1],
      [0,0,0],
    ];

    expect(step(world)).toEqual([
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ])
  })

  it('has 2 neighbours one horizontal one vertical, survives', function () {
    var world = [
      [0,1,0],
      [0,1,1],
      [0,0,0],
    ];

    expect(step(world)).toEqual([
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ])
  })

  it('Any cell with two or three neighbours survives', function () {
    var world = [
      [0,1,1],
      [0,1,1],
      [0,0,0],
    ];

    expect(step(world)).toEqual([
      [0,1,1],
      [0,1,1],
      [0,0,0]
    ])
  })

  it('Any cell with more than four neighbours dies', function () {
    var world = [
      [0,1,0],
      [1,1,1],
      [1,1,0],
    ];

    expect(step(world)).toEqual([
      [0,0,0],
      [1,0,0],
      [1,1,0]
    ])
  })

  it('Any cell with more than four neighbours dies', function () {
    var world = [
      [0,1,0],
      [1,1,1],
      [1,1,0],
    ];

    expect(step(world)).toEqual([
      [0,0,0],
      [1,0,0],
      [1,1,0]
    ])
  })

})