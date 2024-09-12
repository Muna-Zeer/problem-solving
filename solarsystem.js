const solarSystem = {
  1: { planetName: "Mercury", moons: 0, diameter: 4879,distanceFromSun: 57.9 },
  2: { planetName: "Venus", moons: 0, diameter: 12104,distanceFromSun: 108.2  },
  3: { planetName: "Earth", moons: 1, diameter: 12742,distanceFromSun: 149.6 },
  4: { planetName: "Mars", moons: 2, diameter: 6779,distanceFromSun: 227.9 },
  5: { planetName: "Jupiter", moons: 79, diameter: 139820, distanceFromSun: 778.3},
  6: { planetName: "Saturn", moons: 83, diameter: 116460,distanceFromSun: 1427 },
  7: { planetName: "Uranus", moons: 27, diameter: 50724 ,distanceFromSun: 2871 },
  8: { planetName: "Neptune", moons: 14, diameter: 49244, distanceFromSun: 4495 },
};

/**
 * Find the largest and smallest planets
 */
const largestPlanet = (system) => {
  let largestPlanet = null;
  //Convert keys into array element
  const keys = Object.keys(system);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (
      largestPlanet === null ||
      system[key].diameter > system[largestPlanet].diameter
    ) {
      //update the value of the largest planet
      largestPlanet = key;
    }
  }
  return system[largestPlanet];
};

const largestKey = largestPlanet(solarSystem);
console.log("largest values", largestKey);

const findSmallestPlanet = (system) => {
  let smallestKey = null;
  const keys = Object.keys(system);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (smallestKey === null || system[key] < system[smallestKey]) {
      smallestKey = key;
    }
    return system[smallestKey];
  }
};
const smallestPlanet = findSmallestPlanet(solarSystem);
console.log("The smallest planet is ", smallestPlanet);

const findPlanetMostMoons = (system) => {
  let mostMoonPlanet = null;
  for (let planet in system) {
    if (
      !mostMoonPlanet ||
      system[planet].moons > system[mostMoonPlanet].moons
    ) {
      mostMoonPlanet = planet;
    }
  }
  return system[mostMoonPlanet];
};
let mostMoonPlanet = findPlanetMostMoons(solarSystem);
console.log("The planet most moon is", mostMoonPlanet);

const calculateTotalMoons = (system) => {
  let totalMoons = 0;
  for (let planet in system) {
    totalMoons += system[planet].moons;
  }
  return totalMoons;
};
let totalMoons = calculateTotalMoons(solarSystem);
console.log("Total number of moons", totalMoons);

const planetSortedDistanceToSun=(system)=>{
    let sortedPlanets=Object.values(system);
    sortedPlanets.sort((a,b)=>a.distanceFromSun-b.distanceFromSun);
    return sortedPlanets;
}
const sortedPlanets=planetSortedDistanceToSun(solarSystem);
console.log("Sorted planets are:",sortedPlanets);
