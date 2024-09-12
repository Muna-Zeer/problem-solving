const max_electron_num = [2, 8, 18, 32, 50, 72, 98];;
const elements = {
  1: { symbol: "H", name: "Hydrogen", atomicNumber: 2 },
  2: { symbol: "He", name: "Helium", atomicNumber: 2 },
  3: { symbol: "Li", name: "Lithium", atomicNumber: 3 },
  4: { symbol: "Be", name: "Beryllium", atomicNumber: 4 },
  5: { symbol: "B", name: "Boron", atomicNumber: 5 },
  6: { symbol: "C", name: "Carbon", atomicNumber: 6 },
  7: { symbol: "N", name: "Nitrogen", atomicNumber: 7 },
  8: { symbol: "O", name: "Oxygen", atomicNumber: 8 },
  9: { symbol: "F", name: "Fluorine", atomicNumber: 9 },
  10: { symbol: "Ne", name: "Neon", atomicNumber: 10 },
  11: { symbol: "Na", name: "Sodium", atomicNumber: 11 },
  12: { symbol: "Mg", name: "Magnesium", atomicNumber: 12 },
  20: { symbol: "Ca", name: "Calcium", atomicNumber: 20 },
  26: { symbol: "Fe", name: "Iron", atomicNumber: 26 },
};

const nobleGases = {
    2: { symbol: "He", name: "Helium", atomicNumber: 2 },
    10: { symbol: "Ne", name: "Neon", atomicNumber: 10 },
    18: { symbol: "Ar", name: "Argon", atomicNumber: 18 },
    36: { symbol: "Kr", name: "Krypton", atomicNumber: 36 },
    54: { symbol: "Xe", name: "Xenon", atomicNumber: 54 },
    86: { symbol: "Rn", name: "Radon", atomicNumber: 86 }
  };

// Represent electron configuration
const representAtomConfiguration = (atomicNumber) => {
    if(typeof atomicNumber !=="number"|| atomicNumber <1){
        console.log("Invalid atomic number value");
        return [];
    }
  let leftElectrons = atomicNumber; //Atomic Number= Protons
  const electronsConfig = [];

  // Iterate through the number atom
  for (let i = 0; leftElectrons > 0; i++) {
    //Define the electrons in this current shell
    let electronsInCurrShell = Math.min(leftElectrons, max_electron_num[i]);
    //Add the electrons in the current shell to the configuration array
    electronsConfig.push(electronsInCurrShell);
    //Remove the electrons in the current shell from the total number of electrons
    leftElectrons -= electronsInCurrShell;
  }
  return electronsConfig;
};

const VisualizeElectronConfig = (element) => {
  const configuration = representAtomConfiguration(element.atomicNumber);

  const isNobleGas = Object.values(nobleGases).some(nobleGas => nobleGas.atomicNumber === element.atomicNumber);
  if (!isNobleGas) {
    console.log(`This ${element.name} doesn't belong to the noble gases group`);
  }
  if(!Array.isArray(configuration)){
    console.log("configuration is not an array",configuration);
    return "";
  }
  console.log(`Element: ${element.name} =>Symbol ${element.symbol}`);
  console.log(`AtomicNumber is: ${element.atomicNumber}`);
  console.log(`Electron Configuration in each shell`);
  configuration.forEach((electrons, shell) => {
    console.log(`Shell ${shell + 1}: ${electrons} electrons`);
});
};

// Example usage:
const Sodium = elements[11];
VisualizeElectronConfig(Sodium);

const lithium = elements[3];
VisualizeElectronConfig(lithium);
const carbon = elements[6];
VisualizeElectronConfig(carbon);

const Iron = elements[26];
VisualizeElectronConfig(Iron);

const Xenon= nobleGases[54];
VisualizeElectronConfig(Xenon);