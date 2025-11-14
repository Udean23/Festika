const periodicTable = [
    { atomicNumber: 1, symbol: "H", name: "Hydrogen", relativeAtomicMass: 1.00784, category: "non-logam-reaktif", description: "Hidrogen adalah unsur paling umum di alam semesta, dengan persentase sekitar 75% dari massanya.", kepadatan: "0.145 g/cm3", melebur: "-272.2 °C", mendidih: "−252.9 °C", ditemukan: "Henry Cavendish", tahun: "1766" },
    { atomicNumber: 2, symbol: "He", name: "Helium", relativeAtomicMass: 4.002602, category: "gas-mulia", description: "Helium ditemukan pertama kali di matahari sebelum ditemukan di bumi. Gas tidak reaktif dan sangat ringan.", kepadatan: "0.1786 g/L (0 °C, 1atm)", melebur: "−272.2 °C (≈1.1 K)", mendidih: "−268.9 °C (≈4.2 K)", ditemukan: "Pierre Janssen & Norman Lockyer", tahun: "1868" },
    { atomicNumber: 3, symbol: "Li", name: "Lithium", relativeAtomicMass: 6.94, category: "logam-alkali", description: "Lithium adalah logam alkali paling ringan, bereaksi keras dengan air dan banyak digunakan dalam baterai.", kepadatan: "0.534 g/cm3", melebur: "180.5 °C", mendidih: "1342 °C", ditemukan: "Johan Arfvedson", tahun: "1817" },
    { atomicNumber: 4, symbol: "Be", name: "Beryllium", relativeAtomicMass: 9.0122, category: "logam-alkali-tanah", description: "Beryllium adalah logam ringan yang relatif keras untuk ukuran ringan, banyak dipakai dalam instrumen khusus.", kepadatan: "1.85 g/cm3", melebur: "1278 °C", mendidih: "2970 °C", ditemukan: "Louis Nicolas Vauquelin", tahun: "1798" },
    { atomicNumber: 5, symbol: "B", name: "Boron", relativeAtomicMass: 10.81, category: "metaloid", description: "Boron adalah unsur semi-logam/metaloid yang berada di antara logam dan non-logam; penting dalam bahan tahan panas dan semikonduktor.", kepadatan: "2.34 g/cm3", melebur: "2076 °C", mendidih: "3927 °C", ditemukan: "Joseph Louis Gay-Lussac & Louis Jamaine", tahun: "1808" },
    { atomicNumber: 6, symbol: "C", name: "Carbon", relativeAtomicMass: 12.011, category: "non-logam-reaktif", description: "Karbon adalah unsur kehidupan, membentuk senyawa organik dan grafit, serta berlian—bentuk alotropiknya.", kepadatan: "2.267 g/cm3 (grafit)", melebur: "sublimasi ~3642 °C", mendidih: "sublimasi ~4027 °C", ditemukan: "Zoisite (penemuan kuno – salah satu yang pertama dikenal)", tahun: "3750 SM" },
    { atomicNumber: 7, symbol: "N", name: "Nitrogen", relativeAtomicMass: 14.007, category: "non-logam-reaktif", description: "Nitrogen membentuk ~78% volumenya udara; banyak digunakan dalam pupuk, industri dan atmosfer bumi.", kepadatan: "1.2506 g/L (0 °C, 1atm)", melebur: "−210.0 °C", mendidih: "−195.8 °C", ditemukan: "Daniel Rutherford", tahun: "1772" },
    { atomicNumber: 8, symbol: "O", name: "Oxygen", relativeAtomicMass: 15.999, category: "non-logam-reaktif", description: "Oksigen esensial buat respirasi makhluk hidup dan pembakaran; sekitar 21% atmosfer bumi.", kepadatan: "1.429 g/L (0 °C, 1atm)", melebur: "−218.8 °C", mendidih: "−183.0 °C", ditemukan: "Carl Wilhelm Scheele (juga Joseph Priestley)", tahun: "1774" },
    { atomicNumber: 9, symbol: "F", name: "Fluorine", relativeAtomicMass: 18.998, category: "non-logam-reaktif", description: "Fluorin adalah unsur non-logam paling reaktif, digunakan dalam pasta gigi, refrigeran dan industri kimia.", kepadatan: "1.696 g/L (0 °C, 1atm)", melebur: "−219.6 °C", mendidih: "−188.1 °C", ditemukan: "Henri Moissan", tahun: "1886" },
    { atomicNumber: 10, symbol: "Ne", name: "Neon", relativeAtomicMass: 20.180, category: "gas-mulia", description: "Neon adalah gas mulia yang tidak reaktif, terkenal dalam lampu neon berwarna merah-oranye.", kepadatan: "0.000825 g/cm3 (≈0.825 mg/cm3)", melebur: "−248.59 °C", mendidih: "−246.05 °C", ditemukan: "Sir William Ramsay & Morris Travers", tahun: "1898" },

    { atomicNumber: 11, symbol: "Na", name: "Sodium", relativeAtomicMass: 22.990, category: "logam-alkali", description: "" },
    { atomicNumber: 12, symbol: "Mg", name: "Magnesium", relativeAtomicMass: 24.305, category: "logam-alkali-tanah", description: "" },
    { atomicNumber: 13, symbol: "Al", name: "Aluminium", relativeAtomicMass: 26.982, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 14, symbol: "Si", name: "Silicon", relativeAtomicMass: 28.085, category: "metaloid", description: "" },
    { atomicNumber: 15, symbol: "P", name: "Phosphorus", relativeAtomicMass: 30.974, category: "non-logam-reaktif", description: "" },
    { atomicNumber: 16, symbol: "S", name: "Sulfur", relativeAtomicMass: 32.06, category: "non-logam-reaktif", description: "" },
    { atomicNumber: 17, symbol: "Cl", name: "Chlorine", relativeAtomicMass: 35.45, category: "non-logam-reaktif", description: "" },
    { atomicNumber: 18, symbol: "Ar", name: "Argon", relativeAtomicMass: 39.948, category: "gas-mulia", description: "" },
    { atomicNumber: 19, symbol: "K", name: "Potassium", relativeAtomicMass: 39.0983, category: "logam-alkali", description: "" },
    { atomicNumber: 20, symbol: "Ca", name: "Calcium", relativeAtomicMass: 40.078, category: "logam-alkali-tanah", description: "" },

    { atomicNumber: 21, symbol: "Sc", name: "Scandium", relativeAtomicMass: 44.956, category: "logam-transisi", description: "" },
    { atomicNumber: 22, symbol: "Ti", name: "Titanium", relativeAtomicMass: 47.867, category: "logam-transisi", description: "" },
    { atomicNumber: 23, symbol: "V", name: "Vanadium", relativeAtomicMass: 50.942, category: "logam-transisi", description: "" },
    { atomicNumber: 24, symbol: "Cr", name: "Chromium", relativeAtomicMass: 51.996, category: "logam-transisi", description: "" },
    { atomicNumber: 25, symbol: "Mn", name: "Manganese", relativeAtomicMass: 54.938, category: "logam-transisi", description: "" },
    { atomicNumber: 26, symbol: "Fe", name: "Iron", relativeAtomicMass: 55.845, category: "logam-transisi", description: "" },
    { atomicNumber: 27, symbol: "Co", name: "Cobalt", relativeAtomicMass: 58.933, category: "logam-transisi", description: "" },
    { atomicNumber: 28, symbol: "Ni", name: "Nickel", relativeAtomicMass: 58.693, category: "logam-transisi", description: "" },
    { atomicNumber: 29, symbol: "Cu", name: "Copper", relativeAtomicMass: 63.546, category: "logam-transisi", description: "" },
    { atomicNumber: 30, symbol: "Zn", name: "Zinc", relativeAtomicMass: 65.38, category: "logam-transisi", description: "" },

    { atomicNumber: 31, symbol: "Ga", name: "Gallium", relativeAtomicMass: 69.723, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 32, symbol: "Ge", name: "Germanium", relativeAtomicMass: 72.630, category: "metaloid", description: "" },
    { atomicNumber: 33, symbol: "As", name: "Arsenic", relativeAtomicMass: 74.922, category: "metaloid", description: "" },
    { atomicNumber: 34, symbol: "Se", name: "Selenium", relativeAtomicMass: 78.971, category: "non-logam-reaktif", description: "" },
    { atomicNumber: 35, symbol: "Br", name: "Bromine", relativeAtomicMass: 79.904, category: "non-logam-reaktif", description: "" },
    { atomicNumber: 36, symbol: "Kr", name: "Krypton", relativeAtomicMass: 83.798, category: "gas-mulia", description: "" },

    { atomicNumber: 37, symbol: "Rb", name: "Rubidium", relativeAtomicMass: 85.468, category: "logam-alkali", description: "" },
    { atomicNumber: 38, symbol: "Sr", name: "Strontium", relativeAtomicMass: 87.62, category: "logam-alkali-tanah", description: "" },
    { atomicNumber: 39, symbol: "Y", name: "Yttrium", relativeAtomicMass: 88.906, category: "logam-transisi", description: "" },
    { atomicNumber: 40, symbol: "Zr", name: "Zirconium", relativeAtomicMass: 91.224, category: "logam-transisi", description: "" },
    { atomicNumber: 41, symbol: "Nb", name: "Niobium", relativeAtomicMass: 92.906, category: "logam-transisi", description: "" },
    { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", relativeAtomicMass: 95.95, category: "logam-transisi", description: "" },
    { atomicNumber: 43, symbol: "Tc", name: "Technetium", relativeAtomicMass: 98, category: "logam-transisi", description: "" },
    { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", relativeAtomicMass: 101.07, category: "logam-transisi", description: "" },
    { atomicNumber: 45, symbol: "Rh", name: "Rhodium", relativeAtomicMass: 102.91, category: "logam-transisi", description: "" },
    { atomicNumber: 46, symbol: "Pd", name: "Palladium", relativeAtomicMass: 106.42, category: "logam-transisi", description: "" },
    { atomicNumber: 47, symbol: "Ag", name: "Silver", relativeAtomicMass: 107.87, category: "logam-transisi", description: "" },
    { atomicNumber: 48, symbol: "Cd", name: "Cadmium", relativeAtomicMass: 112.41, category: "logam-transisi", description: "" },
    { atomicNumber: 49, symbol: "In", name: "Indium", relativeAtomicMass: 114.82, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 50, symbol: "Sn", name: "Tin", relativeAtomicMass: 118.71, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 51, symbol: "Sb", name: "Antimony", relativeAtomicMass: 121.76, category: "metaloid", description: "" },
    { atomicNumber: 52, symbol: "Te", name: "Tellurium", relativeAtomicMass: 127.60, category: "metaloid", description: "" },
    { atomicNumber: 53, symbol: "I", name: "Iodine", relativeAtomicMass: 126.90, category: "non-logam-reaktif", description: "" },
    { atomicNumber: 54, symbol: "Xe", name: "Xenon", relativeAtomicMass: 131.29, category: "gas-mulia", description: "" },

    { atomicNumber: 55, symbol: "Cs", name: "Cesium", relativeAtomicMass: 132.91, category: "logam-alkali", description: "" },
    { atomicNumber: 56, symbol: "Ba", name: "Barium", relativeAtomicMass: 137.33, category: "logam-alkali-tanah", description: "" },

    { atomicNumber: 57, symbol: "La", name: "Lanthanum", relativeAtomicMass: 138.91, category: "lantanida", description: "" },
    { atomicNumber: 58, symbol: "Ce", name: "Cerium", relativeAtomicMass: 140.12, category: "lantanida", description: "" },
    { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", relativeAtomicMass: 140.91, category: "lantanida", description: "" },
    { atomicNumber: 60, symbol: "Nd", name: "Neodymium", relativeAtomicMass: 144.24, category: "lantanida", description: "" },
    { atomicNumber: 61, symbol: "Pm", name: "Promethium", relativeAtomicMass: 145, category: "lantanida", description: "" },
    { atomicNumber: 62, symbol: "Sm", name: "Samarium", relativeAtomicMass: 150.36, category: "lantanida", description: "" },
    { atomicNumber: 63, symbol: "Eu", name: "Europium", relativeAtomicMass: 151.96, category: "lantanida", description: "" },
    { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", relativeAtomicMass: 157.25, category: "lantanida", description: "" },
    { atomicNumber: 65, symbol: "Tb", name: "Terbium", relativeAtomicMass: 158.93, category: "lantanida", description: "" },
    { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", relativeAtomicMass: 162.50, category: "lantanida", description: "" },
    { atomicNumber: 67, symbol: "Ho", name: "Holmium", relativeAtomicMass: 164.93, category: "lantanida", description: "" },
    { atomicNumber: 68, symbol: "Er", name: "Erbium", relativeAtomicMass: 167.26, category: "lantanida", description: "" },
    { atomicNumber: 69, symbol: "Tm", name: "Thulium", relativeAtomicMass: 168.93, category: "lantanida", description: "" },
    { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", relativeAtomicMass: 173.05, category: "lantanida", description: "" },
    { atomicNumber: 71, symbol: "Lu", name: "Lutetium", relativeAtomicMass: 174.97, category: "lantanida", description: "" },

    { atomicNumber: 72, symbol: "Hf", name: "Hafnium", relativeAtomicMass: 178.49, category: "logam-transisi", description: "" },
    { atomicNumber: 73, symbol: "Ta", name: "Tantalum", relativeAtomicMass: 180.95, category: "logam-transisi", description: "" },
    { atomicNumber: 74, symbol: "W", name: "Tungsten", relativeAtomicMass: 183.84, category: "logam-transisi", description: "" },
    { atomicNumber: 75, symbol: "Re", name: "Rhenium", relativeAtomicMass: 186.21, category: "logam-transisi", description: "" },
    { atomicNumber: 76, symbol: "Os", name: "Osmium", relativeAtomicMass: 190.23, category: "logam-transisi", description: "" },
    { atomicNumber: 77, symbol: "Ir", name: "Iridium", relativeAtomicMass: 192.22, category: "logam-transisi", description: "" },
    { atomicNumber: 78, symbol: "Pt", name: "Platinum", relativeAtomicMass: 195.08, category: "logam-transisi", description: "" },
    { atomicNumber: 79, symbol: "Au", name: "Gold", relativeAtomicMass: 196.97, category: "logam-transisi", description: "" },
    { atomicNumber: 80, symbol: "Hg", name: "Mercury", relativeAtomicMass: 200.59, category: "logam-transisi", description: "" },

    { atomicNumber: 81, symbol: "Tl", name: "Thallium", relativeAtomicMass: 204.38, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 82, symbol: "Pb", name: "Lead", relativeAtomicMass: 207.2, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 83, symbol: "Bi", name: "Bismuth", relativeAtomicMass: 208.98, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 84, symbol: "Po", name: "Polonium", relativeAtomicMass: 209, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 85, symbol: "At", name: "Astatine", relativeAtomicMass: 210, category: "non-logam-reaktif", description: "" },
    { atomicNumber: 86, symbol: "Rn", name: "Radon", relativeAtomicMass: 222, category: "gas-mulia", description: "" },

    { atomicNumber: 87, symbol: "Fr", name: "Francium", relativeAtomicMass: 223, category: "logam-alkali", description: "" },
    { atomicNumber: 88, symbol: "Ra", name: "Radium", relativeAtomicMass: 226, category: "logam-alkali-tanah", description: "" },
    { atomicNumber: 89, symbol: "Ac", name: "Actinium", relativeAtomicMass: 227, category: "aktinida", description: "" },
    { atomicNumber: 90, symbol: "Th", name: "Thorium", relativeAtomicMass: 232.04, category: "aktinida", description: "" },
    { atomicNumber: 91, symbol: "Pa", name: "Protactinium", relativeAtomicMass: 231.04, category: "aktinida", description: "" },
    { atomicNumber: 92, symbol: "U", name: "Uranium", relativeAtomicMass: 238.03, category: "aktinida", description: "" },
    { atomicNumber: 93, symbol: "Np", name: "Neptunium", relativeAtomicMass: 237, category: "aktinida", description: "" },
    { atomicNumber: 94, symbol: "Pu", name: "Plutonium", relativeAtomicMass: 244, category: "aktinida", description: "" },
    { atomicNumber: 95, symbol: "Am", name: "Americium", relativeAtomicMass: 243, category: "aktinida", description: "" },
    { atomicNumber: 96, symbol: "Cm", name: "Curium", relativeAtomicMass: 247, category: "aktinida", description: "" },
    { atomicNumber: 97, symbol: "Bk", name: "Berkelium", relativeAtomicMass: 247, category: "aktinida", description: "" },
    { atomicNumber: 98, symbol: "Cf", name: "Californium", relativeAtomicMass: 251, category: "aktinida", description: "" },
    { atomicNumber: 99, symbol: "Es", name: "Einsteinium", relativeAtomicMass: 252, category: "aktinida", description: "" },
    { atomicNumber: 100, symbol: "Fm", name: "Fermium", relativeAtomicMass: 257, category: "aktinida", description: "" },
    { atomicNumber: 101, symbol: "Md", name: "Mendelevium", relativeAtomicMass: 258, category: "aktinida", description: "" },
    { atomicNumber: 102, symbol: "No", name: "Nobelium", relativeAtomicMass: 259, category: "aktinida", description: "" },
    { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", relativeAtomicMass: 262, category: "aktinida", description: "" },

    { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", relativeAtomicMass: 261, category: "logam-transisi", description: "" },
    { atomicNumber: 105, symbol: "Db", name: "Dubnium", relativeAtomicMass: 262, category: "logam-transisi", description: "" },
    { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", relativeAtomicMass: 269, category: "logam-transisi", description: "" },
    { atomicNumber: 107, symbol: "Bh", name: "Bohrium", relativeAtomicMass: 264, category: "logam-transisi", description: "" },
    { atomicNumber: 108, symbol: "Hs", name: "Hassium", relativeAtomicMass: 269, category: "logam-transisi", description: "" },

    { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", relativeAtomicMass: 278, category: "logam-transisi", description: "" },
    { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", relativeAtomicMass: 281, category: "logam-transisi", description: "" },
    { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", relativeAtomicMass: 282, category: "logam-transisi", description: "" },
    { atomicNumber: 112, symbol: "Cn", name: "Copernicium", relativeAtomicMass: 285, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 113, symbol: "Nh", name: "Nihonium", relativeAtomicMass: 286, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 114, symbol: "Fl", name: "Flerovium", relativeAtomicMass: 289, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 115, symbol: "Mc", name: "Moscovium", relativeAtomicMass: 290, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 116, symbol: "Lv", name: "Livermorium", relativeAtomicMass: 293, category: "logam-pascatransisi", description: "" },
    { atomicNumber: 117, symbol: "Ts", name: "Tennessine", relativeAtomicMass: 294, category: "non-logam-reaktif", description: "" },
    { atomicNumber: 118, symbol: "Og", name: "Oganesson", relativeAtomicMass: 294, category: "gas-mulia", description: "" }
];

const interstellarMolecules = [
    { formula: "H2", name: "Molecular Hydrogen", composedOf: [1, 1] },
    { formula: "OH", name: "Hydroxyl Radical", composedOf: [8, 1] },
    { formula: "H2O", name: "Water", composedOf: [1, 1, 8] },
    { formula: "CO", name: "Carbon Monoxide", composedOf: [6, 8] },
    { formula: "CO2", name: "Carbon Dioxide", composedOf: [6, 8, 8] },
    { formula: "CH", name: "Methylidyne Radical", composedOf: [6, 1] },
    { formula: "CH2", name: "Methylene", composedOf: [6, 1, 1] },
    { formula: "CH3", name: "Methyl Radical", composedOf: [6, 1, 1, 1] },
    { formula: "CH4", name: "Methane", composedOf: [6, 1, 1, 1, 1] },
    { formula: "NH3", name: "Ammonia", composedOf: [7, 1, 1, 1] },
    { formula: "HCN", name: "Hydrogen Cyanide", composedOf: [1, 6, 7] },
    { formula: "HNC", name: "Hydrogen Isocyanide", composedOf: [1, 7, 6] },
    { formula: "CN", name: "Cyanogen Radical", composedOf: [6, 7] },
    { formula: "NO", name: "Nitric Oxide", composedOf: [7, 8] },
    { formula: "N2", name: "Molecular Nitrogen", composedOf: [7, 7] },
    { formula: "O2", name: "Molecular Oxygen", composedOf: [8, 8] },
    { formula: "H2CO", name: "Formaldehyde", composedOf: [1, 1, 6, 8] },
    { formula: "HCOOH", name: "Formic Acid", composedOf: [1, 1, 6, 8, 8, 1] },
    { formula: "CH3OH", name: "Methanol", composedOf: [6, 1, 1, 1, 1, 8] },
    { formula: "C2H2", name: "Acetylene", composedOf: [6, 6, 1, 1] },
    { formula: "C2H4", name: "Ethylene", composedOf: [6, 6, 1, 1, 1, 1] },
    { formula: "C2H6", name: "Ethane", composedOf: [6, 6, 1, 1, 1, 1, 1, 1] },
    { formula: "HC3N", name: "Cyanoacetylene", composedOf: [1, 6, 6, 6, 7] },
    { formula: "HCO+", name: "Formyl Ion", composedOf: [1, 6, 8] },
    { formula: "NH2CHO", name: "Formamide", composedOf: [7, 1, 1, 6, 8] },
    { formula: "CH3CN", name: "Acetonitrile", composedOf: [6, 1, 1, 1, 6, 7] },
    { formula: "C6H6", name: "Benzene", composedOf: [6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1] },
    { formula: "SiO", name: "Silicon Monoxide", composedOf: [14, 8] },
    { formula: "SiS", name: "Silicon Sulfide", composedOf: [14, 16] },
    { formula: "HC5N", name: "Cyanobutadiyne", composedOf: [1, 6, 6, 6, 6, 6, 7] },
    { formula: "HC7N", name: "Cyanohexatriyne", composedOf: [1, 6, 6, 6, 6, 6, 6, 6, 7] },
    { formula: "C3H2", name: "Cyclopropenylidene", composedOf: [6, 6, 6, 1, 1] },
    { formula: "C3H", name: "Propargyl Radical", composedOf: [6, 6, 6, 1] },
    { formula: "C3O", name: "Tricarbon Monoxide", composedOf: [6, 6, 6, 8] },
    { formula: "H2S", name: "Hydrogen Sulfide", composedOf: [1, 1, 16] },
    { formula: "SO", name: "Sulfur Monoxide", composedOf: [16, 8] },
    { formula: "SO2", name: "Sulfur Dioxide", composedOf: [16, 8, 8] },
    { formula: "OCS", name: "Carbonyl Sulfide", composedOf: [8, 6, 16] },
    { formula: "H2CS", name: "Thioformaldehyde", composedOf: [1, 1, 6, 16] },
    { formula: "NH2", name: "Amino Radical", composedOf: [7, 1, 1] },
    { formula: "HNO", name: "Nitrosyl Hydride", composedOf: [1, 7, 8] },
    { formula: "NO+", name: "Nitrogen Oxide Ion", composedOf: [7, 8] },
    { formula: "HCO", name: "Formyl Radical", composedOf: [1, 6, 8] },
    { formula: "C2O", name: "Dicarbon Monoxide", composedOf: [6, 6, 8] },
    { formula: "C2S", name: "Dicarbon Monosulfide", composedOf: [6, 6, 16] },
    { formula: "H2O+", name: "Hydroxyl Hydron Ion", composedOf: [1, 1, 8] },
    { formula: "H3O+", name: "Hydronium Ion", composedOf: [1, 1, 1, 8] },
    { formula: "NH4+", name: "Ammonium Ion", composedOf: [7, 1, 1, 1, 1] },
    { formula: "CH3CHO", name: "Acetaldehyde", composedOf: [6, 6, 1, 1, 1, 1, 8] },
    { formula: "CH3NH2", name: "Methylamine", composedOf: [6, 1, 1, 1, 7, 1, 1] },
    { formula: "CH3SH", name: "Methanethiol", composedOf: [6, 1, 1, 1, 16, 1] },
    { formula: "C2H3CN", name: "Acrylonitrile", composedOf: [6, 6, 1, 1, 1, 6, 7] },
    { formula: "HCOCN", name: "Isocyanic Acid", composedOf: [1, 6, 8, 6, 7] },
    { formula: "HNCO", name: "Isocyanic Acid", composedOf: [1, 7, 6, 8] },
    { formula: "HOCN", name: "Cyanic Acid", composedOf: [1, 8, 6, 7] },
    { formula: "NH2CN", name: "Cyanamide", composedOf: [7, 1, 1, 6, 7] },
    { formula: "CH2NH", name: "Methylenimine", composedOf: [6, 1, 1, 7, 1] }
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