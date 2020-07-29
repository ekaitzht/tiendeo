function moveOnePosition(currentPosition, move) {
  const { direction } = currentPosition;
  if (move === "L") {
    if (direction === "E") {
      currentPosition.direction = "N";
    }
    if (direction === "N") {
      currentPosition.direction = "O";
    }
    if (direction === "S") {
      currentPosition.direction = "E";
    }
    if (direction === "O") {
      currentPosition.direction = "S";
    }
  }
  if (move === "R") {
    if (direction === "E") {
      currentPosition.direction = "S";
    }
    if (direction === "N") {
      currentPosition.direction = "E";
    }
    if (direction === "S") {
      currentPosition.direction = "O";
    }
    if (direction === "O") {
      currentPosition.direction = "N";
    }
  }
  if (move === "M") {
    if (direction === "E") {
      currentPosition.x++;
    }
    if (direction === "N") {
      currentPosition.y++;
    }
    if (direction === "S") {
      currentPosition.y--;
    }
    if (direction === "O") {
      currentPosition.x--;
    }
  }

  return currentPosition;
}

function isInsideArea([maxX, maxY], { x, y }) {
  if (x < 0 || x > maxX) {
    throw new Error("Error: Fliying out of abcissas, stopping simulation");
  }

  if (y < 0 || y > maxY) {
    throw new Error("Error: Fliying out of ordinates, stopping simulation");
  }
}

module.exports = function(start, moves, area) {
  this.start = start;
  this.moves = moves;
  this.area = area.split(" ");

  this.move = function() {
    let currentPosition = start;
    isInsideArea(this.area, currentPosition);
    for (let move of moves) {
      currentPosition = moveOnePosition(currentPosition, move);
      isInsideArea(this.area, currentPosition);
    }

    return currentPosition;
  };
};
