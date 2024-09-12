// Define Constants such as gravity, air density at sea level,
// and the specific gas constant for air

const GRAVITY = 9.81; // m/s^2
const AIR_DENSITY_SEA = 1.225; // kg/m^3 at sea level
const GAS = 287.05; // Specific gas constant for dry air (J/(kg·K))
const TEMPERATURE_SEA_LEVEL = 288.15; // Standard temperature at sea level (K)
const PRESSURE_SEA_LEVEL = 101325; // Standard atmospheric pressure at sea level (Pa)
const LAPSE_RATE = 0.0065; // Standard temperature lapse rate (K/m)

// Define the function to calculate the balloon's buoyant force
const calculateBuoyantForce = (volume, temperature, pressure) => {
  // Calculate air density using the ideal gas law approximation
  const airDensity =
    AIR_DENSITY_SEA * (pressure / PRESSURE_SEA_LEVEL) * (TEMPERATURE_SEA_LEVEL / temperature);
  return volume * airDensity * GRAVITY;
};

// Define the function to find the weight of the balloon
const calculateBalloonWeight = (mass) => {
  return mass * GRAVITY;
};

// Function to calculate the altitude of the balloon
const calculateAltitude = (pressure, temperature) => {
  // Use the barometric formula to estimate altitude
  const altitude = (TEMPERATURE_SEA_LEVEL / LAPSE_RATE) * 
    (1 - Math.pow(pressure / PRESSURE_SEA_LEVEL, (LAPSE_RATE * GRAVITY) / (GAS * temperature)));
  return altitude;
};

// Example Usage
const balloonVolume = 50; // m^3
const balloonMass = 10; // kg
const temperature = 288.15; // K
const pressure = 101325; // Pa

// Calculate the buoyant force
const buoyantForce = calculateBuoyantForce(balloonVolume, temperature, pressure);
console.log(`Buoyant Force: ${buoyantForce.toFixed(2)} N`);

// Calculate the balloon's weight
const balloonWeight = calculateBalloonWeight(balloonMass);
console.log(`Balloon's Weight: ${balloonWeight.toFixed(2)} N`);

// The balloon won't rise if the buoyant force is less than or equal to the balloon's weight
if (buoyantForce <= balloonWeight) {
  console.log("Balloon won't rise");
  console.log(`The estimated altitude of the balloon is 0.00 meters.`);
} else {
  // Calculate the altitude
  const altitude = calculateAltitude(pressure, temperature);
  console.log(`The estimated altitude of the balloon is ${altitude.toFixed(2)} meters.`);
}
