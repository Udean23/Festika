export const periodicTable = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", relativeAtomicMass: 1.01 },
  { atomicNumber: 2, symbol: "He", name: "Helium", relativeAtomicMass: 4.00 },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", relativeAtomicMass: 6.94 },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", relativeAtomicMass: 9.01 },
  { atomicNumber: 5, symbol: "B", name: "Boron", relativeAtomicMass: 10.81 },
  { atomicNumber: 6, symbol: "C", name: "Carbon", relativeAtomicMass: 12.01 },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", relativeAtomicMass: 14.01 },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", relativeAtomicMass: 16.00 },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", relativeAtomicMass: 19.00 }
];

export const materials = [
  { formula: "H2", name: "Hydrogen Gas", composedOf: [1 , 1] },
  { formula: "H2O", name: "Water", composedOf: [1, 8] },
  { formula: "H2O2", name: "Hydrogen Peroxide", composedOf: [1, 8] },
  { formula: "CH4", name: "Methane", composedOf: [1, 6] },
  { formula: "He", name: "Helium Gas", composedOf: [2] },
  { formula: "Li2O", name: "Lithium Oxide", composedOf: [3, 8] },
  { formula: "LiF", name: "Lithium Fluoride", composedOf: [3, 9] },
  { formula: "BeO", name: "Beryllium Oxide", composedOf: [4, 8] },
  { formula: "BeF2", name: "Beryllium Fluoride", composedOf: [4, 9] },
  { formula: "B2O3", name: "Boron Trioxide", composedOf: [5, 8] },
  { formula: "CO2", name: "Carbon Dioxide", composedOf: [6, 8] },
  { formula: "CO", name: "Carbon Monoxide", composedOf: [6, 8] },
  { formula: "CH4", name: "Methane", composedOf: [6, 1] },
  { formula: "C2H6", name: "Ethane", composedOf: [6, 1] },
  { formula: "N2", name: "Nitrogen Gas", composedOf: [7] },
  { formula: "NH3", name: "Ammonia", composedOf: [7, 1] },
  { formula: "NO2", name: "Nitrogen Dioxide", composedOf: [7, 8] },
  { formula: "O2", name: "Oxygen Gas", composedOf: [8] },
  { formula: "O3", name: "Ozone", composedOf: [8] },
  { formula: "F2", name: "Fluorine Gas", composedOf: [9] },
  { formula: "HF", name: "Hydrogen Fluoride", composedOf: [1, 9] }
];
