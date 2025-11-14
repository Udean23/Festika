const periodicTable = [
    { atomicNumber: 1, symbol: "H", name: "Hydrogen", relativeAtomicMass: 1.00784, category: "non-logam-reaktif" },
    { atomicNumber: 2, symbol: "He", name: "Helium", relativeAtomicMass: 4.002602, category: "gas-mulia" },
    { atomicNumber: 3, symbol: "Li", name: "Lithium", relativeAtomicMass: 6.94, category: "logam-alkali" },
    { atomicNumber: 4, symbol: "Be", name: "Beryllium", relativeAtomicMass: 9.0122, category: "logam-alkali-tanah" },
    { atomicNumber: 5, symbol: "B", name: "Boron", relativeAtomicMass: 10.81, category: "metaloid" },
    { atomicNumber: 6, symbol: "C", name: "Carbon", relativeAtomicMass: 12.011, category: "non-logam-reaktif" },
    { atomicNumber: 7, symbol: "N", name: "Nitrogen", relativeAtomicMass: 14.007, category: "non-logam-reaktif" },
    { atomicNumber: 8, symbol: "O", name: "Oxygen", relativeAtomicMass: 15.999, category: "non-logam-reaktif" },
    { atomicNumber: 9, symbol: "F", name: "Fluorine", relativeAtomicMass: 18.998, category: "non-logam-reaktif" },
    { atomicNumber: 10, symbol: "Ne", name: "Neon", relativeAtomicMass: 20.180, category: "gas-mulia" },

    { atomicNumber: 11, symbol: "Na", name: "Sodium", relativeAtomicMass: 22.990, category: "logam-alkali" },
    { atomicNumber: 12, symbol: "Mg", name: "Magnesium", relativeAtomicMass: 24.305, category: "logam-alkali-tanah" },
    { atomicNumber: 13, symbol: "Al", name: "Aluminium", relativeAtomicMass: 26.982, category: "logam-pascatransisi" },
    { atomicNumber: 14, symbol: "Si", name: "Silicon", relativeAtomicMass: 28.085, category: "metaloid" },
    { atomicNumber: 15, symbol: "P", name: "Phosphorus", relativeAtomicMass: 30.974, category: "non-logam-reaktif" },
    { atomicNumber: 16, symbol: "S", name: "Sulfur", relativeAtomicMass: 32.06, category: "non-logam-reaktif" },
    { atomicNumber: 17, symbol: "Cl", name: "Chlorine", relativeAtomicMass: 35.45, category: "non-logam-reaktif" },
    { atomicNumber: 18, symbol: "Ar", name: "Argon", relativeAtomicMass: 39.948, category: "gas-mulia" },
    { atomicNumber: 19, symbol: "K", name: "Potassium", relativeAtomicMass: 39.0983, category: "logam-alkali" },
    { atomicNumber: 20, symbol: "Ca", name: "Calcium", relativeAtomicMass: 40.078, category: "logam-alkali-tanah" },

    { atomicNumber: 21, symbol: "Sc", name: "Scandium", relativeAtomicMass: 44.956, category: "logam-transisi" },
    { atomicNumber: 22, symbol: "Ti", name: "Titanium", relativeAtomicMass: 47.867, category: "logam-transisi" },
    { atomicNumber: 23, symbol: "V", name: "Vanadium", relativeAtomicMass: 50.942, category: "logam-transisi" },
    { atomicNumber: 24, symbol: "Cr", name: "Chromium", relativeAtomicMass: 51.996, category: "logam-transisi" },
    { atomicNumber: 25, symbol: "Mn", name: "Manganese", relativeAtomicMass: 54.938, category: "logam-transisi" },
    { atomicNumber: 26, symbol: "Fe", name: "Iron", relativeAtomicMass: 55.845, category: "logam-transisi" },
    { atomicNumber: 27, symbol: "Co", name: "Cobalt", relativeAtomicMass: 58.933, category: "logam-transisi" },
    { atomicNumber: 28, symbol: "Ni", name: "Nickel", relativeAtomicMass: 58.693, category: "logam-transisi" },
    { atomicNumber: 29, symbol: "Cu", name: "Copper", relativeAtomicMass: 63.546, category: "logam-transisi" },
    { atomicNumber: 30, symbol: "Zn", name: "Zinc", relativeAtomicMass: 65.38, category: "logam-transisi" },

    { atomicNumber: 31, symbol: "Ga", name: "Gallium", relativeAtomicMass: 69.723, category: "logam-pascatransisi" },
    { atomicNumber: 32, symbol: "Ge", name: "Germanium", relativeAtomicMass: 72.630, category: "metaloid" },
    { atomicNumber: 33, symbol: "As", name: "Arsenic", relativeAtomicMass: 74.922, category: "metaloid" },
    { atomicNumber: 34, symbol: "Se", name: "Selenium", relativeAtomicMass: 78.971, category: "non-logam-reaktif" },
    { atomicNumber: 35, symbol: "Br", name: "Bromine", relativeAtomicMass: 79.904, category: "non-logam-reaktif" },
    { atomicNumber: 36, symbol: "Kr", name: "Krypton", relativeAtomicMass: 83.798, category: "gas-mulia" },

    { atomicNumber: 37, symbol: "Rb", name: "Rubidium", relativeAtomicMass: 85.468, category: "logam-alkali" },
    { atomicNumber: 38, symbol: "Sr", name: "Strontium", relativeAtomicMass: 87.62, category: "logam-alkali-tanah" },
    { atomicNumber: 39, symbol: "Y", name: "Yttrium", relativeAtomicMass: 88.906, category: "logam-transisi" },
    { atomicNumber: 40, symbol: "Zr", name: "Zirconium", relativeAtomicMass: 91.224, category: "logam-transisi" },
    { atomicNumber: 41, symbol: "Nb", name: "Niobium", relativeAtomicMass: 92.906, category: "logam-transisi" },
    { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", relativeAtomicMass: 95.95, category: "logam-transisi" },
    { atomicNumber: 43, symbol: "Tc", name: "Technetium", relativeAtomicMass: 98, category: "logam-transisi" },
    { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", relativeAtomicMass: 101.07, category: "logam-transisi" },
    { atomicNumber: 45, symbol: "Rh", name: "Rhodium", relativeAtomicMass: 102.91, category: "logam-transisi" },
    { atomicNumber: 46, symbol: "Pd", name: "Palladium", relativeAtomicMass: 106.42, category: "logam-transisi" },
    { atomicNumber: 47, symbol: "Ag", name: "Silver", relativeAtomicMass: 107.87, category: "logam-transisi" },
    { atomicNumber: 48, symbol: "Cd", name: "Cadmium", relativeAtomicMass: 112.41, category: "logam-transisi" },
    { atomicNumber: 49, symbol: "In", name: "Indium", relativeAtomicMass: 114.82, category: "logam-pascatransisi" },
    { atomicNumber: 50, symbol: "Sn", name: "Tin", relativeAtomicMass: 118.71, category: "logam-pascatransisi" },
    { atomicNumber: 51, symbol: "Sb", name: "Antimony", relativeAtomicMass: 121.76, category: "metaloid" },
    { atomicNumber: 52, symbol: "Te", name: "Tellurium", relativeAtomicMass: 127.60, category: "metaloid" },
    { atomicNumber: 53, symbol: "I", name: "Iodine", relativeAtomicMass: 126.90, category: "non-logam-reaktif" },
    { atomicNumber: 54, symbol: "Xe", name: "Xenon", relativeAtomicMass: 131.29, category: "gas-mulia" },

    { atomicNumber: 55, symbol: "Cs", name: "Cesium", relativeAtomicMass: 132.91, category: "logam-alkali" },
    { atomicNumber: 56, symbol: "Ba", name: "Barium", relativeAtomicMass: 137.33, category: "logam-alkali-tanah" },

    { atomicNumber: 57, symbol: "La", name: "Lanthanum", relativeAtomicMass: 138.91, category: "lantanida" },
    { atomicNumber: 58, symbol: "Ce", name: "Cerium", relativeAtomicMass: 140.12, category: "lantanida" },
    { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", relativeAtomicMass: 140.91, category: "lantanida" },
    { atomicNumber: 60, symbol: "Nd", name: "Neodymium", relativeAtomicMass: 144.24, category: "lantanida" },
    { atomicNumber: 61, symbol: "Pm", name: "Promethium", relativeAtomicMass: 145, category: "lantanida" },
    { atomicNumber: 62, symbol: "Sm", name: "Samarium", relativeAtomicMass: 150.36, category: "lantanida" },
    { atomicNumber: 63, symbol: "Eu", name: "Europium", relativeAtomicMass: 151.96, category: "lantanida" },
    { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", relativeAtomicMass: 157.25, category: "lantanida" },
    { atomicNumber: 65, symbol: "Tb", name: "Terbium", relativeAtomicMass: 158.93, category: "lantanida" },
    { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", relativeAtomicMass: 162.50, category: "lantanida" },
    { atomicNumber: 67, symbol: "Ho", name: "Holmium", relativeAtomicMass: 164.93, category: "lantanida" },
    { atomicNumber: 68, symbol: "Er", name: "Erbium", relativeAtomicMass: 167.26, category: "lantanida" },
    { atomicNumber: 69, symbol: "Tm", name: "Thulium", relativeAtomicMass: 168.93, category: "lantanida" },
    { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", relativeAtomicMass: 173.05, category: "lantanida" },
    { atomicNumber: 71, symbol: "Lu", name: "Lutetium", relativeAtomicMass: 174.97, category: "lantanida" },

    { atomicNumber: 72, symbol: "Hf", name: "Hafnium", relativeAtomicMass: 178.49, category: "logam-transisi" },
    { atomicNumber: 73, symbol: "Ta", name: "Tantalum", relativeAtomicMass: 180.95, category: "logam-transisi" },
    { atomicNumber: 74, symbol: "W", name: "Tungsten", relativeAtomicMass: 183.84, category: "logam-transisi" },
    { atomicNumber: 75, symbol: "Re", name: "Rhenium", relativeAtomicMass: 186.21, category: "logam-transisi" },
    { atomicNumber: 76, symbol: "Os", name: "Osmium", relativeAtomicMass: 190.23, category: "logam-transisi" },
    { atomicNumber: 77, symbol: "Ir", name: "Iridium", relativeAtomicMass: 192.22, category: "logam-transisi" },
    { atomicNumber: 78, symbol: "Pt", name: "Platinum", relativeAtomicMass: 195.08, category: "logam-transisi" },
    { atomicNumber: 79, symbol: "Au", name: "Gold", relativeAtomicMass: 196.97, category: "logam-transisi" },
    { atomicNumber: 80, symbol: "Hg", name: "Mercury", relativeAtomicMass: 200.59, category: "logam-transisi" },

    { atomicNumber: 81, symbol: "Tl", name: "Thallium", relativeAtomicMass: 204.38, category: "logam-pascatransisi" },
    { atomicNumber: 82, symbol: "Pb", name: "Lead", relativeAtomicMass: 207.2, category: "logam-pascatransisi" },
    { atomicNumber: 83, symbol: "Bi", name: "Bismuth", relativeAtomicMass: 208.98, category: "logam-pascatransisi" },
    { atomicNumber: 84, symbol: "Po", name: "Polonium", relativeAtomicMass: 209, category: "logam-pascatransisi" },
    { atomicNumber: 85, symbol: "At", name: "Astatine", relativeAtomicMass: 210, category: "non-logam-reaktif" },
    { atomicNumber: 86, symbol: "Rn", name: "Radon", relativeAtomicMass: 222, category: "gas-mulia" },

    { atomicNumber: 87, symbol: "Fr", name: "Francium", relativeAtomicMass: 223, category: "logam-alkali" },
    { atomicNumber: 88, symbol: "Ra", name: "Radium", relativeAtomicMass: 226, category: "logam-alkali-tanah" },
    { atomicNumber: 89, symbol: "Ac", name: "Actinium", relativeAtomicMass: 227, category: "aktinida" },
    { atomicNumber: 90, symbol: "Th", name: "Thorium", relativeAtomicMass: 232.04, category: "aktinida" },
    { atomicNumber: 91, symbol: "Pa", name: "Protactinium", relativeAtomicMass: 231.04, category: "aktinida" },
    { atomicNumber: 92, symbol: "U", name: "Uranium", relativeAtomicMass: 238.03, category: "aktinida" },
    { atomicNumber: 93, symbol: "Np", name: "Neptunium", relativeAtomicMass: 237, category: "aktinida" },
    { atomicNumber: 94, symbol: "Pu", name: "Plutonium", relativeAtomicMass: 244, category: "aktinida" },
    { atomicNumber: 95, symbol: "Am", name: "Americium", relativeAtomicMass: 243, category: "aktinida" },
    { atomicNumber: 96, symbol: "Cm", name: "Curium", relativeAtomicMass: 247, category: "aktinida" },
    { atomicNumber: 97, symbol: "Bk", name: "Berkelium", relativeAtomicMass: 247, category: "aktinida" },
    { atomicNumber: 98, symbol: "Cf", name: "Californium", relativeAtomicMass: 251, category: "aktinida" },
    { atomicNumber: 99, symbol: "Es", name: "Einsteinium", relativeAtomicMass: 252, category: "aktinida" },
    { atomicNumber: 100, symbol: "Fm", name: "Fermium", relativeAtomicMass: 257, category: "aktinida" },
    { atomicNumber: 101, symbol: "Md", name: "Mendelevium", relativeAtomicMass: 258, category: "aktinida" },
    { atomicNumber: 102, symbol: "No", name: "Nobelium", relativeAtomicMass: 259, category: "aktinida" },
    { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", relativeAtomicMass: 262, category: "aktinida" },

    { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", relativeAtomicMass: 261, category: "logam-transisi" },
    { atomicNumber: 105, symbol: "Db", name: "Dubnium", relativeAtomicMass: 262, category: "logam-transisi" },
    { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", relativeAtomicMass: 269, category: "logam-transisi" },
    { atomicNumber: 107, symbol: "Bh", name: "Bohrium", relativeAtomicMass: 264, category: "logam-transisi" },
    { atomicNumber: 108, symbol: "Hs", name: "Hassium", relativeAtomicMass: 269, category: "logam-transisi" },

    { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", relativeAtomicMass: 278, category: "logam-transisi" },
    { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", relativeAtomicMass: 281, category: "logam-transisi" },
    { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", relativeAtomicMass: 282, category: "logam-transisi" },
    { atomicNumber: 112, symbol: "Cn", name: "Copernicium", relativeAtomicMass: 285, category: "logam-pascatransisi" },
    { atomicNumber: 113, symbol: "Nh", name: "Nihonium", relativeAtomicMass: 286, category: "logam-pascatransisi" },
    { atomicNumber: 114, symbol: "Fl", name: "Flerovium", relativeAtomicMass: 289, category: "logam-pascatransisi" },
    { atomicNumber: 115, symbol: "Mc", name: "Moscovium", relativeAtomicMass: 290, category: "logam-pascatransisi" },
    { atomicNumber: 116, symbol: "Lv", name: "Livermorium", relativeAtomicMass: 293, category: "logam-pascatransisi" },
    { atomicNumber: 117, symbol: "Ts", name: "Tennessine", relativeAtomicMass: 294, category: "non-logam-reaktif" },
    { atomicNumber: 118, symbol: "Og", name: "Oganesson", relativeAtomicMass: 294, category: "gas-mulia" }
];

 const materials = [
    { formula: "H2", name: "Hydrogen Gas", composedOf: [1, 1] },
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

const elementPositions = {
    1: { row: 1, col: 1, category: "cat-nonlogam" },
    2: { row: 1, col: 18, category: "cat-gas-mulia" },
    3: { row: 2, col: 1, category: "cat-alkali" },
    4: { row: 2, col: 2, category: "cat-alkali-tanah" },
    5: { row: 2, col: 13, category: "cat-metaloid" },
    6: { row: 2, col: 14, category: "cat-nonlogam" },
    7: { row: 2, col: 15, category: "cat-nonlogam" },
    8: { row: 2, col: 16, category: "cat-nonlogam" },
    9: { row: 2, col: 17, category: "cat-nonlogam" },
    10: { row: 2, col: 18, category: "cat-gas-mulia" },
    11: { row: 3, col: 1, category: "cat-alkali" },
    12: { row: 3, col: 2, category: "cat-alkali-tanah" },
    13: { row: 3, col: 13, category: "cat-pascatransisi" },
    14: { row: 3, col: 14, category: "cat-metaloid" },
    15: { row: 3, col: 15, category: "cat-nonlogam" },
    16: { row: 3, col: 16, category: "cat-nonlogam" },
    17: { row: 3, col: 17, category: "cat-nonlogam" },
    18: { row: 3, col: 18, category: "cat-gas-mulia" },
    19: { row: 4, col: 1, category: "cat-alkali" },
    20: { row: 4, col: 2, category: "cat-alkali-tanah" },
    21: { row: 4, col: 3, category: "cat-transition" },
    22: { row: 4, col: 4, category: "cat-transition" },
    23: { row: 4, col: 5, category: "cat-transition" },
    24: { row: 4, col: 6, category: "cat-transition" },
    25: { row: 4, col: 7, category: "cat-transition" },
    26: { row: 4, col: 8, category: "cat-transition" },
    27: { row: 4, col: 9, category: "cat-transition" },
    28: { row: 4, col: 10, category: "cat-transition" },
    29: { row: 4, col: 11, category: "cat-transition" },
    30: { row: 4, col: 12, category: "cat-transition" },
    31: { row: 4, col: 13, category: "cat-pascatransisi" },
    32: { row: 4, col: 14, category: "cat-metaloid" },
    33: { row: 4, col: 15, category: "cat-metaloid" },
    34: { row: 4, col: 16, category: "cat-nonlogam" },
    35: { row: 4, col: 17, category: "cat-nonlogam" },
    36: { row: 4, col: 18, category: "cat-gas-mulia" },
    37: { row: 5, col: 1, category: "cat-alkali" },
    38: { row: 5, col: 2, category: "cat-alkali-tanah" },
    39: { row: 5, col: 3, category: "cat-transition" },
    40: { row: 5, col: 4, category: "cat-transition" },
    41: { row: 5, col: 5, category: "cat-transition" },
    42: { row: 5, col: 6, category: "cat-transition" },
    43: { row: 5, col: 7, category: "cat-transition" },
    44: { row: 5, col: 8, category: "cat-transition" },
    45: { row: 5, col: 9, category: "cat-transition" },
    46: { row: 5, col: 10, category: "cat-transition" },
    47: { row: 5, col: 11, category: "cat-transition" },
    48: { row: 5, col: 12, category: "cat-transition" },
    49: { row: 5, col: 13, category: "cat-pascatransisi" },
    50: { row: 5, col: 14, category: "cat-pascatransisi" },
    51: { row: 5, col: 15, category: "cat-metaloid" },
    52: { row: 5, col: 16, category: "cat-metaloid" },
    53: { row: 5, col: 17, category: "cat-nonlogam" },
    54: { row: 5, col: 18, category: "cat-gas-mulia" },
    55: { row: 6, col: 1, category: "cat-alkali" },
    56: { row: 6, col: 2, category: "cat-alkali-tanah" },
    57: { row: 6, col: 3, category: "cat-lantanida" },
    72: { row: 6, col: 4, category: "cat-transition" },
    73: { row: 6, col: 5, category: "cat-transition" },
    74: { row: 6, col: 6, category: "cat-transition" },
    75: { row: 6, col: 7, category: "cat-transition" },
    76: { row: 6, col: 8, category: "cat-transition" },
    77: { row: 6, col: 9, category: "cat-transition" },
    78: { row: 6, col: 10, category: "cat-transition" },
    79: { row: 6, col: 11, category: "cat-transition" },
    80: { row: 6, col: 12, category: "cat-transition" },
    81: { row: 6, col: 13, category: "cat-pascatransisi" },
    82: { row: 6, col: 14, category: "cat-pascatransisi" },
    83: { row: 6, col: 15, category: "cat-pascatransisi" },
    84: { row: 6, col: 16, category: "cat-metaloid" },
    85: { row: 6, col: 17, category: "cat-nonlogam" },
    86: { row: 6, col: 18, category: "cat-gas-mulia" },
    87: { row: 7, col: 1, category: "cat-alkali" },
    88: { row: 7, col: 2, category: "cat-alkali-tanah" },
    89: { row: 7, col: 3, category: "cat-aktanida" },
    104: { row: 7, col: 4, category: "cat-transition" },
    105: { row: 7, col: 5, category: "cat-transition" },
    106: { row: 7, col: 6, category: "cat-transition" },
    107: { row: 7, col: 7, category: "cat-transition" },
    108: { row: 7, col: 8, category: "cat-transition" },
    109: { row: 7, col: 9, category: "cat-lainnya" },
    110: { row: 7, col: 10, category: "cat-lainnya" },
    111: { row: 7, col: 11, category: "cat-lainnya" },
    112: { row: 7, col: 12, category: "cat-lainnya" },
    113: { row: 7, col: 13, category: "cat-lainnya" },
    114: { row: 7, col: 14, category: "cat-lainnya" },
    115: { row: 7, col: 15, category: "cat-lainnya" },
    116: { row: 7, col: 16, category: "cat-lainnya" },
    117: { row: 7, col: 17, category: "cat-lainnya" },
    118: { row: 7, col: 18, category: "cat-lainnya" },
    58: { row: 10, col: 3, category: "cat-lantanida" },
    59: { row: 10, col: 4, category: "cat-lantanida" },
    60: { row: 10, col: 5, category: "cat-lantanida" },
    61: { row: 10, col: 6, category: "cat-lantanida" },
    62: { row: 10, col: 7, category: "cat-lantanida" },
    63: { row: 10, col: 8, category: "cat-lantanida" },
    64: { row: 10, col: 9, category: "cat-lantanida" },
    65: { row: 10, col: 10, category: "cat-lantanida" },
    66: { row: 10, col: 11, category: "cat-lantanida" },
    67: { row: 10, col: 12, category: "cat-lantanida" },
    68: { row: 10, col: 13, category: "cat-lantanida" },
    69: { row: 10, col: 14, category: "cat-lantanida" },
    70: { row: 10, col: 15, category: "cat-lantanida" },
    71: { row: 10, col: 16, category: "cat-lantanida" },
    90: { row: 11, col: 3, category: "cat-aktanida" },
    91: { row: 11, col: 4, category: "cat-aktanida" },
    92: { row: 11, col: 5, category: "cat-aktanida" },
    93: { row: 11, col: 6, category: "cat-aktanida" },
    94: { row: 11, col: 7, category: "cat-aktanida" },
    95: { row: 11, col: 8, category: "cat-aktanida" },
    96: { row: 11, col: 9, category: "cat-aktanida" },
    97: { row: 11, col: 10, category: "cat-aktanida" },
    98: { row: 11, col: 11, category: "cat-aktanida" },
    99: { row: 11, col: 12, category: "cat-aktanida" },
    100: { row: 11, col: 13, category: "cat-aktanida" },
    101: { row: 11, col: 14, category: "cat-aktanida" },
    102: { row: 11, col: 15, category: "cat-aktanida" },
    103: { row: 11, col: 16, category: "cat-aktanida" }
};

document.addEventListener('DOMContentLoaded', function () {
    const filterOptions = document.querySelectorAll('.filter-option');
    const elements = document.querySelectorAll('.element');
    let currentFilter = null;
    let clickTimer = null;

    function resetFilter() {
        elements.forEach(element => {
            element.classList.remove('filtered-out');
        });
        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            filterElement.classList.remove('active');
            filterElement.classList.add('default');
        });
        currentFilter = null;
    }

    function applyFilter(category) {
        elements.forEach(element => {
            if (element.classList.contains(category)) {
                element.classList.remove('filtered-out');
            } else {
                element.classList.add('filtered-out');
            }
        });

        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            if (option.getAttribute('data-category') === category) {
                filterElement.classList.add('active');
                filterElement.classList.remove('default');
            } else {
                filterElement.classList.remove('active');
                filterElement.classList.add('default');
            }
        });

        currentFilter = category;
    }

    filterOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            const category = this.getAttribute('data-category');

            if (clickTimer === null) {
                clickTimer = setTimeout(() => {
                    if (currentFilter === category) {
                        resetFilter();
                    } else {
                        applyFilter(category);
                    }
                    clickTimer = null;
                });
            }
        });

        option.addEventListener('dblclick', function (e) {
            clearTimeout(clickTimer);
            clickTimer = null;
            resetFilter();
            e.preventDefault();
        });
    });

    document.addEventListener('click', function (e) {
        const isFilterClick = e.target.closest('.filter-option') ||
            e.target.closest('.category-filter');

        if (!isFilterClick && currentFilter !== null) {
            resetFilter();
        }
    });

    resetFilter();
});

function createPeriodicTable() {
    const tableContainer = document.getElementById('periodic-table');

    tableContainer.innerHTML = '';

    periodicTable.forEach(element => {
        const position = elementPositions[element.atomicNumber];

        if (position) {
            const elementDiv = document.createElement('div');
            elementDiv.className = `element ${position.category}`;
            elementDiv.style.gridRow = position.row;
            elementDiv.style.gridColumn = position.col;
            elementDiv.setAttribute('data-atomic', element.atomicNumber);
            elementDiv.setAttribute('data-symbol', element.symbol);
            elementDiv.setAttribute('data-name', element.name);
            elementDiv.setAttribute('data-category', position.category);

            elementDiv.innerHTML = `
              <div class="number">${element.atomicNumber}</div>
              <div class="symbol">${element.symbol}</div>
              <div class="name">${element.name}</div>
              <div class="mass">${element.relativeAtomicMass}</div>
            `;

            tableContainer.appendChild(elementDiv);
        }
    });
}

function setupFilter() {
    const filterOptions = document.querySelectorAll('.filter-option');
    const elements = document.querySelectorAll('.element');
    let currentFilter = null;
    let clickTimer = null;

    function resetFilter() {
        elements.forEach(element => {
            element.classList.remove('filtered-out');
        });
        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            filterElement.classList.remove('active');
            filterElement.classList.add('default');
        });
        currentFilter = null;
    }

    function applyFilter(category) {
        elements.forEach(element => {
            if (element.classList.contains(category)) {
                element.classList.remove('filtered-out');
            } else {
                element.classList.add('filtered-out');
            }
        });

        filterOptions.forEach(option => {
            const filterElement = option.querySelector('.filter-element');
            if (option.getAttribute('data-category') === category) {
                filterElement.classList.add('active');
                filterElement.classList.remove('default');
            } else {
                filterElement.classList.remove('active');
                filterElement.classList.add('default');
            }
        });

        currentFilter = category;
    }

    filterOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            const category = this.getAttribute('data-category');

            if (clickTimer === null) {
                clickTimer = setTimeout(() => {
                    if (currentFilter === category) {
                        resetFilter();
                    } else {
                        applyFilter(category);
                    }
                    clickTimer = null;
                }, 200);
            }
        });

        option.addEventListener('dblclick', function (e) {
            clearTimeout(clickTimer);
            clickTimer = null;
            resetFilter();
            e.preventDefault();
        });
    });

    document.addEventListener('click', function (e) {
        const isFilterClick = e.target.closest('.filter-option') ||
            e.target.closest('.category-filter');

        if (!isFilterClick && currentFilter !== null) {
            resetFilter();
        }
    });

    resetFilter();
}

document.addEventListener('DOMContentLoaded', function () {
    createPeriodicTable();
    setupFilter();
});