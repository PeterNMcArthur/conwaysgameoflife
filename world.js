function step(world) {
  var newWorld = [];
  for (var i = 0; i < world.length; i++) {
    newWorld.push([]);
    for (var j = 0; j < world[i].length; j++) {
      newWorld[i].push(world[i][j]);
      var neighbours = 0;
      if (world[i][j - 1] === 1) {
        neighbours += 1;
      }
      if (world[i][j + 1] === 1) {
        neighbours += 1;
      }
      if (world[i - 1] !== undefined) {
        if (world[i-1][j] === 1) {
          neighbours += 1;
        }
      }
      if (world[i + 1] !== undefined) {
        if (world[i + 1][j] === 1) {
          neighbours += 1;
        }
      }
      if (world[i][j] === 1) {
        if (neighbours === 2 || neighbours === 3) {
          newWorld[i][j] = 1;
        }
      }
      if (world[i][j] === 1) {
        if (neighbours > 3) {
          newWorld[i][j] = 0;
        }
      }
      if (world[i][j] === 0) {
        if (neighbours === 3) {
          newWorld[i][j] = 1;
        }
      }
      if (neighbours < 2) {
        newWorld[i][j] = 0;
      }
    }
  }
  return newWorld;
}
module.exports = step;