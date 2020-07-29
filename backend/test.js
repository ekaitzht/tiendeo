const simulateDrones = require("./simulationDrones.js");

test("Drones are moved properly", () => {
  const input = `5 5
3 3 E
L
3 3 E
MMRMMRMRRM
1 2 N
LMLMLMLMMLMLMLMLMM`;

  expect(simulateDrones(input)).toBe("3 3 N\n5 1 E\n1 4 N\n");
});

test("Drone can not start outside of area", () => {
  const input = `5 5
-1 3 E
L
3 3 E
MMRMMRMRRM
1 2 N
LMLMLMLMMLMLMLMLMM`;

  function launchSimulation() {
    simulateDrones(input);
  }

  expect(launchSimulation).toThrowError(
    new Error("Error: Fliying out of abcissas, stopping simulation")
  );
});

test("Drone can not move to outside of the area", () => {
  const input = `5 5
3 3 E
L
3 3 E
MMRMMRMRRM
1 4 N
LMLMLMLMMLMLMLMLMM`;

  function launchSimulation() {
    simulateDrones(input);
  }

  expect(launchSimulation).toThrowError(
    new Error("Error: Fliying out of ordinates, stopping simulation")
  );
});
