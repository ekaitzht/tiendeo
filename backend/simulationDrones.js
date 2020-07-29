const drone = require("./Drone.js");

function loadDrones(rawDrones, area) {
  let drones = [];
  for (let i = 0; i <= rawDrones.length / 2 + 1; i += 2) {
    const droneStart = rawDrones[i];
    const droneMoves = rawDrones[i + 1];
    const [x, y, direction] = droneStart.split(" ");

    drones.push(
      new drone({ x: +x, y: +y, direction }, droneMoves.split(""), area)
    );
  }
  return drones;
}

function simulateDrones(input) {
  let inputSplited = input.split("\n");
  const drones = loadDrones(inputSplited.slice(1), inputSplited[0]);
  let movesHistorical = {};
  let output = "";
  for (let dron of drones) {
    const { x, y, direction } = dron.move(); //moveDrone(drone);
    output += `${x} ${y} ${direction}\n`;
  }

  return output;
}

module.exports = simulateDrones;
