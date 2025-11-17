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

    { atomicNumber: 11, symbol: "Na", name: "Natrium", relativeAtomicMass: 22.990, category: "logam-alkali", description: "Natrium adalah logam alkali yang lunak, keperakan, dan sangat reaktif. Bereaksi keras dengan air dan banyak ditemukan dalam senyawa seperti garam dapur (NaCl).", kepadatan: "0.968 g/cm3", melebur: "97.79 °C", mendidih: "882.9 °C", ditemukan: "Sir Humphry Davy", tahun: "1807" },
    { atomicNumber: 12, symbol: "Mg", name: "Magnesium", relativeAtomicMass: 24.305, category: "logam-alkali-tanah", description: "Magnesium adalah logam alkali tanah yang ringan dan kuat. Mudah terbakar dengan api putih yang terang dan penting bagi kehidupan sebagai kofaktor enzim.", kepadatan: "1.738 g/cm3", melebur: "650 °C", mendidih: "1090 °C", ditemukan: "Joseph Black", tahun: "1755" },
    { atomicNumber: 13, symbol: "Al", name: "Aluminium", relativeAtomicMass: 26.982, category: "logam-pascatransisi", description: "Aluminium adalah logam yang ringan, kuat, tahan korosi, dan mudah ditempa. Merupakan logam yang paling melimpah di kerak bumi.", kepadatan: "2.698 g/cm3", melebur: "660.32 °C", mendidih: "2519 °C", ditemukan: "Hans Christian Ørsted", tahun: "1825" },
    { atomicNumber: 14, symbol: "Si", name: "Silicon", relativeAtomicMass: 28.085, category: "metaloid", description: "Silikon adalah metaloid yang keras dan berkilau. Merupakan unsur kedua paling melimpah di kerak bumi dan material dasar untuk semikonduktor dan chip komputer.", kepadatan: "2.3296 g/cm3", melebur: "1414 °C", mendidih: "3265 °C", ditemukan: "Jöns Jacob Berzelius", tahun: "1824" },
    { atomicNumber: 15, symbol: "P", name: "Phosphorus", relativeAtomicMass: 30.974, category: "non-logam-reaktif", description: "Fosfor adalah non-logam yang sangat reaktif dan tidak pernah ditemukan bebas di alam. Memiliki beberapa alotrop, termasuk fosfor putih yang berpendar dan sangat beracun.", kepadatan: "1.823 g/cm3 (putih)", melebur: "44.15 °C (putih)", mendidih: "280.5 °C (putih)", ditemukan: "Hennig Brand", tahun: "1669" },
    { atomicNumber: 16, symbol: "S", name: "Sulfur", relativeAtomicMass: 32.06, category: "non-logam-reaktif", description: "Belerang adalah non-logam berwarna kuning yang dikenal dengan baunya yang khas (seperti telur busuk). Banyak digunakan dalam industri, terutama untuk membuat asam sulfat.", kepadatan: "2.067 g/cm3 (alfa)", melebur: "115.21 °C", mendidih: "444.6 °C", ditemukan: "Sejak zaman kuno", tahun: "Zaman Kuno" },
    { atomicNumber: 17, symbol: "Cl", name: "Chlorine", relativeAtomicMass: 35.45, category: "non-logam-reaktif", description: "Klorin adalah halogen berwarna hijau kekuningan yang sangat reaktif dan beracun. Pada suhu kamar berupa gas. Banyak digunakan sebagai disinfektan dan dalam produksi plastik.", kepadatan: "0.003214 g/cm3", melebur: "−101.5 °C", mendidih: "−34.04 °C", ditemukan: "Carl Wilhelm Scheele", tahun: "1774" },
    { atomicNumber: 18, symbol: "Ar", name: "Argon", relativeAtomicMass: 39.948, category: "gas-mulia", description: "Argon adalah gas mulia yang tidak berwarna, tidak berbau, dan lembam. Merupakan gas mulia paling melimpah di atmosfer bumi, sering digunakan untuk mengisi bola lampu pijar.", kepadatan: "0.0017837 g/cm3", melebur: "−189.34 °C", mendidih: "−185.85 °C", ditemukan: "Lord Rayleigh & Sir William Ramsay", tahun: "1894" },
    { atomicNumber: 19, symbol: "K", name: "Potassium", relativeAtomicMass: 39.0983, category: "logam-alkali", description: "Kalium adalah logam alkali yang sangat reaktif dan lunak. Bereaksi sangat eksplosif dengan air. Penting bagi semua sel hidup untuk fungsi saraf dan otot.", kepadatan: "0.862 g/cm3", melebur: "63.5 °C", mendidih: "759 °C", ditemukan: "Sir Humphry Davy", tahun: "1807" },
    { atomicNumber: 20, symbol: "Ca", name: "Calcium", relativeAtomicMass: 40.078, category: "logam-alkali-tanah", description: "Kalsium adalah logam alkali tanah yang reaktif. Merupakan mineral penting bagi makhluk hidup, terutama untuk pembentukan tulang, gigi, dan fungsi sel.", kepadatan: "1.54 g/cm3", melebur: "842 °C", mendidih: "1484 °C", ditemukan: "Sir Humphry Davy", tahun: "1808" },

    { atomicNumber: 21, symbol: "Sc", name: "Scandium", relativeAtomicMass: 44.956, category: "logam-transisi", description: "Skandium adalah logam transisi yang ringan dan lunak. Sering diklasifikasikan sebagai unsur tanah jarang dan digunakan dalam paduan aluminium ringan untuk peralatan olahraga.", kepadatan: "2.985 g/cm3", melebur: "1541 °C", mendidih: "2836 °C", ditemukan: "Lars Fredrik Nilson", tahun: "1879" },
    { atomicNumber: 22, symbol: "Ti", name: "Titanium", relativeAtomicMass: 47.867, category: "logam-transisi", description: "Titanium adalah logam transisi yang kuat, ringan, dan sangat tahan korosi. Banyak digunakan dalam industri aerospace, implan medis, dan perhiasan.", kepadatan: "4.506 g/cm3", melebur: "1668 °C", mendidih: "3287 °C", ditemukan: "William Gregor", tahun: "1791" },
    { atomicNumber: 23, symbol: "V", name: "Vanadium", relativeAtomicMass: 50.942, category: "logam-transisi", description: "Vanadium adalah logam transisi yang keras, ulet, dan tahan korosi. Ditambahkan ke baja untuk meningkatkan kekuatan dan ketahanannya.", kepadatan: "6.11 g/cm3", melebur: "1910 °C", mendidih: "3407 °C", ditemukan: "Andrés Manuel del Río", tahun: "1801" },
    { atomicNumber: 24, symbol: "Cr", name: "Chromium", relativeAtomicMass: 51.996, category: "logam-transisi", description: "Kromium adalah logam transisi yang keras, berkilau, dan tahan noda. Digunakan untuk pelapis krom pada kendaraan dan sebagai pigmen dalam cat.", kepadatan: "7.15 g/cm3", melebur: "1907 °C", mendidih: "2671 °C", ditemukan: "Louis Nicolas Vauquelin", tahun: "1797" },
    { atomicNumber: 25, symbol: "Mn", name: "Manganese", relativeAtomicMass: 54.938, category: "logam-transisi", description: "Mangan adalah logam transisi yang rapuh dan sangat penting untuk produksi baja. Juga berfungsi sebagai kofaktor untuk banyak enzim dalam tubuh makhluk hidup.", kepadatan: "7.21 g/cm3", melebur: "1246 °C", mendidih: "2061 °C", ditemukan: "Johan Gottlieb Gahn", tahun: "1774" },
    { atomicNumber: 26, symbol: "Fe", name: "Iron", relativeAtomicMass: 55.845, category: "logam-transisi", description: "Besi adalah logam transisi yang paling umum dan murah, membentuk sebagian besar inti bumi. Merupakan komponen utama baja dan penting bagi hemoglobin dalam darah.", kepadatan: "7.874 g/cm3", melebur: "1538 °C", mendidih: "2862 °C", ditemukan: "Zaman Kuno", tahun: "Zaman Kuno" },
    { atomicNumber: 27, symbol: "Co", name: "Cobalt", relativeAtomicMass: 58.933, category: "logam-transisi", description: "Kobalt adalah logam transisi yang keras dan feromagnetik. Digunakan dalam paduan super, pigmen biru kobalt, dan radioisotopnya digunakan dalam terapi kanker.", kepadatan: "8.86 g/cm3", melebur: "1495 °C", mendidih: "2927 °C", ditemukan: "Georg Brandt", tahun: "1735" },
    { atomicNumber: 28, symbol: "Ni", name: "Nickel", relativeAtomicMass: 58.693, category: "logam-transisi", description: "Nikel adalah logam transisi yang ulet, keras, dan tahan korosi. Banyak digunakan untuk melapisi logam lain (nikel plating) dan dalam paduan seperti stainless steel.", kepadatan: "8.912 g/cm3", melebur: "1455 °C", mendidih: "2913 °C", ditemukan: "Axel Fredrik Cronstedt", tahun: "1751" },
    { atomicNumber: 29, symbol: "Cu", name: "Copper", relativeAtomicMass: 63.546, category: "logam-transisi", description: "Tembaga adalah logam transisi yang ulet, dengan konduktivitas termal dan listrik yang sangat tinggi. Salah satu logam pertama yang digunakan oleh manusia.", kepadatan: "8.96 g/cm3", melebur: "1084.62 °C", mendidih: "2562 °C", ditemukan: "Zaman Timur Tengah Kuno", tahun: "9000 SM" },
    { atomicNumber: 30, symbol: "Zn", name: "Zinc", relativeAtomicMass: 65.38, category: "logam-transisi", description: "Seng adalah logam transisi yang rapuh pada suhu biasa tetapi menjadi ulet di atas 100°C. Utama digunakan untuk melapisi baja (galvanisasi) untuk mencegah karat.", kepadatan: "7.134 g/cm3", melebur: "419.53 °C", mendidih: "907 °C", ditemukan: "Andreas Sigismund Marggraf", tahun: "1746" },

    { atomicNumber: 31, symbol: "Ga", name: "Gallium", relativeAtomicMass: 69.723, category: "logam-pascatransisi", description: "Galium adalah logam pascatransisi yang lunak dan memiliki titik lebur yang sangat rendah (akan meleleh di tangan Anda). Digunakan dalam semikonduktor dan termometer suhu tinggi.", kepadatan: "5.907 g/cm3", melebur: "29.7646 °C", mendidih: "2204 °C", ditemukan: "Paul-Émile Lecoq de Boisbaudran", tahun: "1875" },
    { atomicNumber: 32, symbol: "Ge", name: "Germanium", relativeAtomicMass: 72.630, category: "metaloid", description: "Germanium adalah metaloid yang bersifat semikonduktor. Memainkan peran penting dalam pengembangan transistor dan masih digunakan dalam serat optik dan optik inframerah.", kepadatan: "5.323 g/cm3", melebur: "938.25 °C", mendidih: "2833 °C", ditemukan: "Clemens Winkler", tahun: "1886" },
    { atomicNumber: 33, symbol: "As", name: "Arsenic", relativeAtomicMass: 74.922, category: "metaloid", description: "Arsenik adalah metaloid yang terkenal karena racunnya yang mematikan. Namun, dalam dosis kecil, senyawanya pernah digunakan sebagai obat. Memiliki alotrop abu-abu yang stabil.", kepadatan: "5.776 g/cm3 (abu-abu)", melebur: "817 °C (pada 28 atm)", mendidih: "614 °C (sublimasi)", ditemukan: "Albertus Magnus", tahun: "1250" },
    { atomicNumber: 34, symbol: "Se", name: "Selenium", relativeAtomicMass: 78.971, category: "non-logam-reaktif", description: "Selenium adalah non-logam yang memiliki sifat fotokonduktif. Penting sebagai nutrisi mikro bagi banyak organisme dan digunakan dalam sel surya dan fotosel.", kepadatan: "4.809 g/cm3 (abu-abu)", melebur: "221 °C", mendidih: "685 °C", ditemukan: "Jöns Jacob Berzelius", tahun: "1817" },
    { atomicNumber: 35, symbol: "Br", name: "Bromine", relativeAtomicMass: 79.904, category: "non-logam-reaktif", description: "Bromin adalah satu-satunya non-logam yang berwujud cair pada suhu kamar. Cairannya berwarna merah tua, menguap mudah, dan uapnya berbau menyengat serta korosif.", kepadatan: "3.1028 g/cm3", melebur: "−7.2 °C", mendidih: "58.8 °C", ditemukan: "Antoine Jérôme Balard", tahun: "1826" },
    { atomicNumber: 36, symbol: "Kr", name: "Krypton", relativeAtomicMass: 83.798, category: "gas-mulia", description: "Kripton adalah gas mulia yang tidak berwarna, tidak berbau, dan lembam. Digunakan dalam beberapa jenis lampu dan lampu kilat fotografi. Garis spektrumnya pernah mendefinisikan meter.", kepadatan: "0.003749 g/cm3", melebur: "−157.36 °C", mendidih: "−153.22 °C", ditemukan: "Sir William Ramsay & Morris Travers", tahun: "1898" },

    { atomicNumber: 37, symbol: "Rb", name: "Rubidium", relativeAtomicMass: 85.468, category: "logam-alkali", description: "Rubidium adalah logam alkali yang sangat lunak dan reaktif, mirip dengan kalium. Dapat menyala spontan di udara. Digunakan dalam jam atom dan penelitian vakum.", kepadatan: "1.532 g/cm3", melebur: "39.31 °C", mendidih: "688 °C", ditemukan: "Robert Bunsen & Gustav Kirchhoff", tahun: "1861" },
    { atomicNumber: 38, symbol: "Sr", name: "Strontium", relativeAtomicMass: 87.62, category: "logam-alkali-tanah", description: "Stronsium adalah logam alkali tanah yang reaktif dan lunak. Senyawanya memberikan warna merah menyala pada kembang api dan flare. Isotop radioaktifnya merupakan produk fisi nuklir.", kepadatan: "2.64 g/cm3", melebur: "777 °C", mendidih: "1377 °C", ditemukan: "William Cruickshank", tahun: "1787" },
    { atomicNumber: 39, symbol: "Y", name: "Yttrium", relativeAtomicMass: 88.906, category: "logam-transisi", description: "Itrium adalah logam transisi berwarna keperakan yang sering dikaitkan dengan unsur tanah jarang. Digunakan dalam paduan, fosfor untuk LED merah, dan garnet yttrium-aluminium (YAG).", kepadatan: "4.469 g/cm3", melebur: "1522 °C", mendidih: "3345 °C", ditemukan: "Johan Gadolin", tahun: "1794" },
    { atomicNumber: 40, symbol: "Zr", name: "Zirconium", relativeAtomicMass: 91.224, category: "logam-transisi", description: "Zirkonium adalah logam transisi yang kuat, ulet, dan sangat tahan terhadap korosi. Banyak digunakan dalam industri nuklir (karena penampang tangkapan neutronnya rendah) dan sebagai batu permata (zirkonia kubik).", kepadatan: "6.506 g/cm3", melebur: "1855 °C", mendidih: "4409 °C", ditemukan: "Martin Heinrich Klaproth", tahun: "1789" },
    { atomicNumber: 41, symbol: "Nb", name: "Niobium", relativeAtomicMass: 92.906, category: "logam-transisi", description: "Niobium adalah logam transisi yang lunak, ulet, dan tahan korosi. Ditambahkan ke baja untuk membuat paduan super yang kuat, digunakan dalam pesawat terbang dan pipa saluran.", kepadatan: "8.57 g/cm3", melebur: "2477 °C", mendidih: "4744 °C", ditemukan: "Charles Hatchett", tahun: "1801" },
    { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", relativeAtomicMass: 95.95, category: "logam-transisi", description: "Molibdenum adalah logam transisi yang memiliki titik leleh sangat tinggi. Digunakan untuk memperkuat baja dan dalam paduan suhu tinggi. Juga penting sebagai kofaktor enzim pada tanaman dan hewan.", kepadatan: "10.22 g/cm3", melebur: "2623 °C", mendidih: "4639 °C", ditemukan: "Carl Wilhelm Scheele", tahun: "1778" },
    { atomicNumber: 43, symbol: "Tc", name: "Technetium", relativeAtomicMass: 98, category: "logam-transisi", description: "Teknesium adalah unsur dengan nomor atom terendah yang tidak memiliki isotop stabil; semua bentuknya radioaktif. Unsur pertama yang dibuat secara sintetis. Digunakan dalam pencitraan medis nuklir.", kepadatan: "11 g/cm3", melebur: "2157 °C", mendidih: "4265 °C", ditemukan: "Carlo Perrier & Emilio Segrè", tahun: "1937" },
    { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", relativeAtomicMass: 101.07, category: "logam-transisi", description: "Rutenium adalah logam transisi yang langka, keras, dan putih keperakan dari golongan platinum. Digunakan sebagai katalis dan untuk menambahkan kekerasan pada paduan platinum dan palladium.", kepadatan: "12.37 g/cm3", melebur: "2334 °C", mendidih: "4150 °C", ditemukan: "Karl Ernst Claus", tahun: "1844" },
    { atomicNumber: 45, symbol: "Rh", name: "Rhodium", relativeAtomicMass: 102.91, category: "logam-transisi", description: "Rodium adalah logam mulia dari golongan platinum yang sangat reflektif dan tahan korosi. Paling sering digunakan sebagai lapisan akhir pada perhiasan dan dalam konverter katalitik.", kepadatan: "12.41 g/cm3", melebur: "1964 °C", mendidih: "3695 °C", ditemukan: "William Hyde Wollaston", tahun: "1803" },
    { atomicNumber: 46, symbol: "Pd", name: "Palladium", relativeAtomicMass: 106.42, category: "logam-transisi", description: "Paladium adalah logam mulia dari golongan platinum yang langka, berkilau, dan keperakan. Dapat menyerap sejumlah besar hidrogen. Banyak digunakan dalam konverter katalitik dan perhiasan.", kepadatan: "12.02 g/cm3", melebur: "1554.9 °C", mendidih: "2963 °C", ditemukan: "William Hyde Wollaston", tahun: "1803" },
    { atomicNumber: 47, symbol: "Ag", name: "Silver", relativeAtomicMass: 107.87, category: "logam-transisi", description: "Perak adalah logam transisi yang memiliki konduktivitas listrik dan termal tertinggi di antara semua logam. Digunakan sejak zaman kuno untuk perhiasan, mata uang, dan sebagai antibakteri.", kepadatan: "10.501 g/cm3", melebur: "961.78 °C", mendidih: "2162 °C", ditemukan: "Zaman Kuno", tahun: "Sebelum 5000 SM" },
    { atomicNumber: 48, symbol: "Cd", name: "Cadmium", relativeAtomicMass: 112.41, category: "logam-transisi", description: "Kadmium adalah logam transisi lunak, berwarna putih kebiruan, dan sangat beracun. Dulunya banyak digunakan dalam pigmen dan baterai nikel-kadmium, tetapi penggunaannya dibatasi karena toksisitasnya.", kepadatan: "8.69 g/cm3", melebur: "321.07 °C", mendidih: "767 °C", ditemukan: "Friedrich Stromeyer", tahun: "1817" },
    { atomicNumber: 49, symbol: "In", name: "Indium", relativeAtomicMass: 114.82, category: "logam-pascatransisi", description: "Indium adalah logam pascatransisi yang sangat lunak, mudah ditempa, dan memiliki titik leleh rendah. Digunakan secara luas dalam lapisan transparan konduktif (ITO) untuk layar sentuh dan LCD.", kepadatan: "7.31 g/cm3", melebur: "156.60 °C", mendidih: "2072 °C", ditemukan: "Ferdinand Reich & Hieronymus Theodor Richter", tahun: "1863" },
    { atomicNumber: 50, symbol: "Sn", name: "Tin", relativeAtomicMass: 118.71, category: "logam-pascatransisi", description: "Timah adalah logam pascatransisi yang lunak, ulet, dan sangat tahan karat. Digunakan untuk melapisi logam lain (seperti kaleng baja) untuk mencegah korosi dan dalam paduan seperti solder dan perunggu.", kepadatan: "7.287 g/cm3 (putih)", melebur: "231.93 °C", mendidih: "2602 °C", ditemukan: "Zaman Kuno", tahun: "3000 SM" },
    { atomicNumber: 51, symbol: "Sb", name: "Antimony", relativeAtomicMass: 121.76, category: "metaloid", description: "Antimon adalah metaloid yang rapuh dan bersifat semikonduktor. Meningkatkan kekerasan dan kekuatan timbal ketika dicampur, digunakan dalam baterai, solder, dan senyawa tahan api.", kepadatan: "6.685 g/cm3", melebur: "630.63 °C", mendidih: "1587 °C", ditemukan: "Sejak zaman kuno", tahun: "Zaman Kuno" },
    { atomicNumber: 52, symbol: "Te", name: "Tellurium", relativeAtomicMass: 127.60, category: "metaloid", description: "Telurium adalah metaloid rapuh, berkilau, dan berwarna putih keperakan. Menghasilkan senyawa dengan bau yang tidak sedap. Digunakan dalam paduan dan panel surya.", kepadatan: "6.232 g/cm3", melebur: "449.51 °C", mendidih: "988 °C", ditemukan: "Franz-Joseph Müller von Reichenstein", tahun: "1782" },
    { atomicNumber: 53, symbol: "I", name: "Iodine", relativeAtomicMass: 126.90, category: "non-logam-reaktif", description: "Yodium adalah halogen yang berwujud padat pada suhu kamar, menyublim menjadi uap ungu. Penting sebagai nutrisi untuk fungsi tiroid dan digunakan sebagai disinfektan.", kepadatan: "4.93 g/cm3", melebur: "113.7 °C", mendidih: "184.3 °C", ditemukan: "Bernard Courtois", tahun: "1811" },
    { atomicNumber: 54, symbol: "Xe", name: "Xenon", relativeAtomicMass: 131.29, category: "gas-mulia", description: "Xenon adalah gas mulia yang berat dan tidak berwarna. Digunakan dalam lampu sorot yang sangat terang, lampu strobo, dan sebagai anestesi umum. Unsur gas mulia pertama yang membentuk senyawa stabil.", kepadatan: "0.005887 g/cm3", melebur: "−111.75 °C", mendidih: "−108.04 °C", ditemukan: "Sir William Ramsay & Morris Travers", tahun: "1898" },

    { atomicNumber: 55, symbol: "Cs", name: "Cesium", relativeAtomicMass: 132.91, category: "logam-alkali", description: "Sesium adalah logam alkali yang sangat reaktif dan lunak. Memiliki titik leleh rendah dan merupakan unsur dengan elektronegativitas terendah. Digunakan dalam jam atom yang sangat presisi.", kepadatan: "1.873 g/cm3", melebur: "28.44 °C", mendidih: "671 °C", ditemukan: "Robert Bunsen & Gustav Kirchhoff", tahun: "1860" },
    { atomicNumber: 56, symbol: "Ba", name: "Barium", relativeAtomicMass: 137.33, category: "logam-alkali-tanah", description: "Barium adalah logam alkali tanah yang lunak dan sangat reaktif. Senyawanya digunakan dalam pemeriksaan sinar-X saluran pencernaan (barium enema) dan memberikan warna hijau pada kembang api.", kepadatan: "3.594 g/cm3", melebur: "727 °C", mendidih: "1870 °C", ditemukan: "Carl Wilhelm Scheele", tahun: "1772" },

    { atomicNumber: 57, symbol: "La", name: "Lanthanum", relativeAtomicMass: 138.91, category: "lantanida", description: "Lantanum adalah logam lantanida yang lunak, ulet, dan berwarna putih keperakan. Digunakan dalam baterai isi ulang nikel-logam hidrida dan sebagai bahan dalam kaca optik khusus.", kepadatan: "6.162 g/cm3", melebur: "920 °C", mendidih: "3464 °C", ditemukan: "Carl Gustaf Mosander", tahun: "1839" },
    { atomicNumber: 58, symbol: "Ce", name: "Cerium", relativeAtomicMass: 140.12, category: "lantanida", description: "Serium adalah logam lantanida yang paling melimpah, lunak, dan berwarna abu-abu keperakan. Digunakan dalam batu api pemantik api dan sebagai katalis dalam konverter katalitik.", kepadatan: "6.770 g/cm3", melebur: "795 °C", mendidih: "3443 °C", ditemukan: "Martin Heinrich Klaproth", tahun: "1803" },
    { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", relativeAtomicMass: 140.91, category: "lantanida", description: "Praseodimium adalah logam lantanida yang lunak, keperakan, dan agak reaktif. Digunakan dalam paduan magnet kuat dan untuk memberikan warna kuning pada keramik dan kaca.", kepadatan: "6.77 g/cm3", melebur: "935 °C", mendidih: "3520 °C", ditemukan: "Carl Auer von Welsbach", tahun: "1885" },
    { atomicNumber: 60, symbol: "Nd", name: "Neodymium", relativeAtomicMass: 144.24, category: "lantanida", description: "Neodimium adalah logam lantanida yang membentuk magnet permanen terkuat yang dikenal (magnet NdFeB). Juga digunakan untuk memberikan warna ungu pada kaca dan keramik.", kepadatan: "7.01 g/cm3", melebur: "1024 °C", mendidih: "3074 °C", ditemukan: "Carl Auer von Welsbach", tahun: "1885" },
    { atomicNumber: 61, symbol: "Pm", name: "Promethium", relativeAtomicMass: 145, category: "lantanida", description: "Prometium adalah satu-satunya lantanida yang radioaktif dan tidak memiliki isotop stabil. Digunakan dalam baterai nuklir untuk aplikasi khusus seperti pesawat ruang angkasa dan peralatan militer.", kepadatan: "7.26 g/cm3", melebur: "1042 °C", mendidih: "3000 °C", ditemukan: "Jacob A. Marinsky", tahun: "1945" },
    { atomicNumber: 62, symbol: "Sm", name: "Samarium", relativeAtomicMass: 150.36, category: "lantanida", description: "Samarium adalah logam lantanida yang digunakan dalam magnet samarium-kobalt yang kuat dan tahan suhu tinggi. Juga digunakan sebagai penyerap neutron dalam reaktor nuklir.", kepadatan: "7.52 g/cm3", melebur: "1072 °C", mendidih: "1900 °C", ditemukan: "Paul-Émile Lecoq de Boisbaudran", tahun: "1879" },
    { atomicNumber: 63, symbol: "Eu", name: "Europium", relativeAtomicMass: 151.96, category: "lantanida", description: "Europium adalah logam lantanida yang paling reaktif. Senyawanya digunakan sebagai fosfor merah dan biru dalam layar televisi dan lampu fluoresen.", kepadatan: "5.244 g/cm3", melebur: "822 °C", mendidih: "1529 °C", ditemukan: "Eugène-Anatole Demarçay", tahun: "1901" },
    { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", relativeAtomicMass: 157.25, category: "lantanida", description: "Gadolinium adalah logam lantanida yang memiliki sifat feromagnetik pada suhu kamar. Digunakan sebagai agen kontras dalam pencitraan resonansi magnetik (MRI) dan dalam media penyimpanan memori.", kepadatan: "7.90 g/cm3", melebur: "1312 °C", mendidih: "3273 °C", ditemukan: "Jean Charles Galissard de Marignac", tahun: "1880" },
    { atomicNumber: 65, symbol: "Tb", name: "Terbium", relativeAtomicMass: 158.93, category: "lantanida", description: "Terbium adalah logam lantanida yang digunakan dalam fosfor hijau untuk lampu fluoresen dan layar TV. Juga digunakan dalam paduan magnetostriktif yang mengubah bentuk dalam medan magnet.", kepadatan: "8.23 g/cm3", melebur: "1356 °C", mendidih: "3230 °C", ditemukan: "Carl Gustaf Mosander", tahun: "1843" },
    { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", relativeAtomicMass: 162.50, category: "lantanida", description: "Disprosium adalah logam lantanida dengan sifat magnetik yang kuat. Digunakan dalam magnet neodimium untuk mempertahankan sifat magnetnya pada suhu tinggi dan dalam reaktor nuklir.", kepadatan: "8.540 g/cm3", melebur: "1407 °C", mendidih: "2567 °C", ditemukan: "Paul-Émile Lecoq de Boisbaudran", tahun: "1886" },
    { atomicNumber: 67, symbol: "Ho", name: "Holmium", relativeAtomicMass: 164.93, category: "lantanida", description: "Holmium memiliki momen magnetik terbesar dari unsur apa pun. Digunakan dalam medan magnet kuat dan sebagai bahan dopan untuk laser.", kepadatan: "8.79 g/cm3", melebur: "1461 °C", mendidih: "2720 °C", ditemukan: "Per Teodor Cleve", tahun: "1878" },
    { atomicNumber: 68, symbol: "Er", name: "Erbium", relativeAtomicMass: 167.26, category: "lantanida", description: "Erbium digunakan sebagai bahan dopan dalam serat optik untuk amplifier dan dalam laser medis dan dental. Memberikan warna merah muda pada kaca.", kepadatan: "9.066 g/cm3", melebur: "1529 °C", mendidih: "2868 °C", ditemukan: "Carl Gustaf Mosander", tahun: "1843" },
    { atomicNumber: 69, symbol: "Tm", name: "Thulium", relativeAtomicMass: 168.93, category: "lantanida", description: "Tulium adalah lantanida yang paling langka dan termahal. Digunakan dalam sumber sinar-X portabel dan dalam laser untuk aplikasi medis.", kepadatan: "9.32 g/cm3", melebur: "1545 °C", mendidih: "1950 °C", ditemukan: "Per Teodor Cleve", tahun: "1879" },
    { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", relativeAtomicMass: 173.05, category: "lantanida", description: "Iterbium adalah logam lantanida yang lunak dan mudah ditempa. Digunakan dalam laser, stainless steel, dan sebagai pengganti untuk bahan peledak dalam alat pengukur stres.", kepadatan: "6.90 g/cm3", melebur: "819 °C", mendidih: "1196 °C", ditemukan: "Jean Charles Galissard de Marignac", tahun: "1878" },
    { atomicNumber: 71, symbol: "Lu", name: "Lutetium", relativeAtomicMass: 174.97, category: "lantanida", description: "Lutesium adalah logam lantanida yang keras, padat, dan stabil di udara. Digunakan sebagai katalis dalam pemrosesan minyak bumi dan dalam detektor medis untuk tomografi emisi positron.", kepadatan: "9.841 g/cm3", melebur: "1663 °C", mendidih: "3402 °C", ditemukan: "Georges Urbain", tahun: "1907" },

    { atomicNumber: 72, symbol: "Hf", name: "Hafnium", relativeAtomicMass: 178.49, category: "logam-transisi", description: "Hafnium adalah logam transisi yang tahan korosi dan memiliki penampang tangkapan neutron yang tinggi. Digunakan dalam batang kendali reaktor nuklir dan dalam prosesor semikonduktor.", kepadatan: "13.31 g/cm3", melebur: "2233 °C", mendidih: "4603 °C", ditemukan: "Dirk Coster & George de Hevesy", tahun: "1923" },
    { atomicNumber: 73, symbol: "Ta", name: "Tantalum", relativeAtomicMass: 180.95, category: "logam-transisi", description: "Tantalum adalah logam transisi yang sangat tahan korosi dan memiliki titik leleh tinggi. Digunakan dalam kapasitor elektronik, implan bedah, dan peralatan proses kimia.", kepadatan: "16.69 g/cm3", melebur: "3017 °C", mendidih: "5458 °C", ditemukan: "Anders Gustaf Ekeberg", tahun: "1802" },
    { atomicNumber: 74, symbol: "W", name: "Tungsten", relativeAtomicMass: 183.84, category: "logam-transisi", description: "Wolfram adalah logam transisi dengan titik leleh tertinggi dari semua unsur. Digunakan dalam filamen bola lampu, mata bor, dan peralatan militer untuk penetrasi armor.", kepadatan: "19.25 g/cm3", melebur: "3422 °C", mendidih: "5555 °C", ditemukan: "Juan José Elhuyar", tahun: "1783" },
    { atomicNumber: 75, symbol: "Re", name: "Rhenium", relativeAtomicMass: 186.21, category: "logam-transisi", description: "Renium adalah logam transisi dengan titik leleh sangat tinggi dan salah satu unsur paling langka di kerak bumi. Digunakan dalam superpaduan untuk mesin jet dan katalis reforming minyak.", kepadatan: "21.02 g/cm3", melebur: "3186 °C", mendidih: "5596 °C", ditemukan: "Walter Noddack", tahun: "1925" },
    { atomicNumber: 76, symbol: "Os", name: "Osmium", relativeAtomicMass: 190.23, category: "logam-transisi", description: "Osmium adalah unsur terpadat dan termasuk dalam golongan platinum. Digunakan dalam paduan keras untuk ujung pena dan komponen listrik, serta sebagai pewarna dalam mikroskopi.", kepadatan: "22.59 g/cm3", melebur: "3033 °C", mendidih: "5012 °C", ditemukan: "Smithson Tennant", tahun: "1803" },
    { atomicNumber: 77, symbol: "Ir", name: "Iridium", relativeAtomicMass: 192.22, category: "logam-transisi", description: "Iridium adalah logam transisi yang sangat padat, keras, dan tahan korosi. Digunakan dalam kontak listrik berdaya tahan tinggi, cawan laboratorium suhu tinggi, dan standar meter internasional.", kepadatan: "22.56 g/cm3", melebur: "2466 °C", mendidih: "4428 °C", ditemukan: "Smithson Tennant", tahun: "1803" },
    { atomicNumber: 78, symbol: "Pt", name: "Platinum", relativeAtomicMass: 195.08, category: "logam-transisi", description: "Platina adalah logam mulia yang sangat tahan korosi dan memiliki katalitik yang sangat baik. Digunakan dalam perhiasan, konverter katalitik, peralatan laboratorium, dan elektroda.", kepadatan: "21.45 g/cm3", melebur: "1768.3 °C", mendidih: "3825 °C", ditemukan: "Antonio de Ulloa", tahun: "1735" },
    { atomicNumber: 79, symbol: "Au", name: "Gold", relativeAtomicMass: 196.97, category: "logam-transisi", description: "Emas adalah logam mulia yang paling mudah ditempa dan ulet, tidak bereaksi dengan sebagian besar bahan kimia. Digunakan dalam perhiasan, elektronik, dan sebagai standar moneter internasional.", kepadatan: "19.3 g/cm3", melebur: "1064.18 °C", mendidih: "2856 °C", ditemukan: "Zaman Kuno", tahun: "Sebelum 6000 SM" },
    { atomicNumber: 80, symbol: "Hg", name: "Mercury", relativeAtomicMass: 200.59, category: "logam-transisi", description: "Raksa adalah satu-satunya logam yang berwujud cair pada suhu kamar. Sangat beracun dan mudah menguap. Digunakan dalam termometer, barometer, dan lampu fluoresen.", kepadatan: "13.534 g/cm3", melebur: "−38.83 °C", mendidih: "356.73 °C", ditemukan: "Zaman Kuno", tahun: "1500 SM" },

    { atomicNumber: 81, symbol: "Tl", name: "Thallium", relativeAtomicMass: 204.38, category: "logam-pascatransisi", description: "Talium adalah logam pascatransisi yang sangat lunak dan sangat beracun. Dulunya digunakan sebagai racun tikus dan sekarang digunakan dalam detektor radiasi inframerah dan elektronik.", kepadatan: "11.85 g/cm3", melebur: "304 °C", mendidih: "1473 °C", ditemukan: "William Crookes", tahun: "1861" },
    { atomicNumber: 82, symbol: "Pb", name: "Lead", relativeAtomicMass: 207.2, category: "logam-pascatransisi", description: "Timbal adalah logam pascatransisi yang berat, lunak, mudah ditempa, dan sangat beracun. Dulu banyak digunakan dalam cat, bensin, dan pipa air, tetapi sekarang penggunaannya dibatasi.", kepadatan: "11.34 g/cm3", melebur: "327.46 °C", mendidih: "1749 °C", ditemukan: "Zaman Kuno", tahun: "7000 SM" },
    { atomicNumber: 83, symbol: "Bi", name: "Bismuth", relativeAtomicMass: 208.98, category: "logam-pascatransisi", description: "Bismut adalah logam pascatransisi yang berat dan rapuh dengan warna merah muda. Memiliki toksisitas rendah dan digunakan dalam obat-obatan, kosmetik, dan sebagai pengganti timbal.", kepadatan: "9.78 g/cm3", melebur: "271.5 °C", mendidih: "1564 °C", ditemukan: "Claude François Geoffroy", tahun: "1753" },
    { atomicNumber: 84, symbol: "Po", name: "Polonium", relativeAtomicMass: 209, category: "logam-pascatransisi", description: "Polonium adalah logam radioaktif yang sangat beracun dan langka. Memancarkan partikel alfa dalam jumlah besar dan digunakan sebagai sumber panas dalam satelit dan sebagai pemicu senjata nuklir.", kepadatan: "9.196 g/cm3", melebur: "254 °C", mendidih: "962 °C", ditemukan: "Marie Curie", tahun: "1898" },
    { atomicNumber: 85, symbol: "At", name: "Astatine", relativeAtomicMass: 210, category: "non-logam-reaktif", description: "Astatin adalah unsur halogen yang sangat radioaktif dan langka. Merupakan unsur alami paling langka di kerak bumi. Digunakan dalam terapi radiasi kanker terarget.", kepadatan: "≈7 g/cm3", melebur: "302 °C", mendidih: "337 °C", ditemukan: "Dale R. Corson", tahun: "1940" },
    { atomicNumber: 86, symbol: "Rn", name: "Radon", relativeAtomicMass: 222, category: "gas-mulia", description: "Radon adalah gas mulia radioaktif yang tidak berwarna dan tidak berbau. Terbentuk dari peluruhan radium dan dapat terakumulasi di bangunan, menjadi penyebab utama kanker paru-paru setelah merokok.", kepadatan: "0.00973 g/cm3", melebur: "−71 °C", mendidih: "−61.7 °C", ditemukan: "Friedrich Ernst Dorn", tahun: "1900" },

    { atomicNumber: 87, symbol: "Fr", name: "Francium", relativeAtomicMass: 223, category: "logam-alkali", description: "Fransium adalah logam alkali yang sangat radioaktif dan tidak stabil. Merupakan unsur alami kedua paling langka dan paling tidak stabil di antara unsur-unsur alami pertama 101.", kepadatan: "≈2.48 g/cm3", melebur: "27 °C", mendidih: "677 °C", ditemukan: "Marguerite Perey", tahun: "1939" },
    { atomicNumber: 88, symbol: "Ra", name: "Radium", relativeAtomicMass: 226, category: "logam-alkali-tanah", description: "Radium adalah logam alkali tanah yang sangat radioaktif. Dulu digunakan dalam cat berpendar untuk jarum jam dan instrumen, tetapi dihentikan karena bahaya kesehatannya.", kepadatan: "5.5 g/cm3", melebur: "700 °C", mendidih: "1737 °C", ditemukan: "Marie Curie", tahun: "1898" },
    { atomicNumber: 89, symbol: "Ac", name: "Actinium", relativeAtomicMass: 227, category: "aktinida", description: "Aktinium adalah logam radioaktif yang bersifat seperti lantanum. Digunakan sebagai sumber neutron dan dalam terapi radiasi kanker.", kepadatan: "10.07 g/cm3", melebur: "1050 °C", mendidih: "3200 °C", ditemukan: "André-Louis Debierne", tahun: "1899" },
    { atomicNumber: 90, symbol: "Th", name: "Thorium", relativeAtomicMass: 232.04, category: "aktinida", description: "Torium adalah aktinida yang sedikit radioaktif dan lebih melimpah daripada uranium. Dapat digunakan sebagai bahan bakar nuklir dalam reaktor torium dan dalam mantel lampu gas.", kepadatan: "11.7 g/cm3", melebur: "1750 °C", mendidih: "4788 °C", ditemukan: "Jöns Jacob Berzelius", tahun: "1829" },
    { atomicNumber: 91, symbol: "Pa", name: "Protactinium", relativeAtomicMass: 231.04, category: "aktinida", description: "Protaktinium adalah aktinida yang langka, sangat radioaktif, dan sangat beracun. Terutama menarik bagi para ilmuwan untuk penelitian dan tidak memiliki aplikasi komersial yang signifikan.", kepadatan: "15.37 g/cm3", melebur: "1572 °C", mendidih: "4000 °C", ditemukan: "William Crookes", tahun: "1900" },
    { atomicNumber: 92, symbol: "U", name: "Uranium", relativeAtomicMass: 238.03, category: "aktinida", description: "Uranium adalah aktinida radioaktif yang terkenal sebagai bahan bakar utama reaktor nuklir dan senjata nuklir. Juga digunakan untuk memberikan warna kuning-hijau pada kaca uranium.", kepadatan: "19.1 g/cm3", melebur: "1132.2 °C", mendidih: "4131 °C", ditemukan: "Martin Heinrich Klaproth", tahun: "1789" },
    { atomicNumber: 93, symbol: "Np", name: "Neptunium", relativeAtomicMass: 237, category: "aktinida", description: "Neptunium adalah unsur transuranium pertama yang disintesis. Terbentuk sebagai produk sampingan dalam reaktor nuklir dan digunakan terutama untuk penelitian ilmiah.", kepadatan: "20.45 g/cm3", melebur: "637 °C", mendidih: "4000 °C", ditemukan: "Edwin McMillan", tahun: "1940" },
    { atomicNumber: 94, symbol: "Pu", name: "Plutonium", relativeAtomicMass: 244, category: "aktinida", description: "Plutonium adalah aktinida radioaktif yang digunakan dalam senjata nuklir dan sebagai bahan bakar reaktor nuklir. Sangat beracun dan memerlukan penanganan khusus.", kepadatan: "19.86 g/cm3", melebur: "639.4 °C", mendidih: "3228 °C", ditemukan: "Glenn T. Seaborg", tahun: "1940" },
    { atomicNumber: 95, symbol: "Am", name: "Americium", relativeAtomicMass: 243, category: "aktinida", description: "Amerisium adalah aktinida radioaktif yang diproduksi di reaktor nuklir. Sumber paling umum untuk detektor asap rumah tangga dan digunakan dalam pengukur kelembaban tanah.", kepadatan: "12 g/cm3", melebur: "1176 °C", mendidih: "2011 °C", ditemukan: "Glenn T. Seaborg", tahun: "1944" },
    { atomicNumber: 96, symbol: "Cm", name: "Curium", relativeAtomicMass: 247, category: "aktinida", description: "Curium adalah aktinida radioaktif yang diproduksi dengan membombardir plutonium dengan partikel alfa. Digunakan sebagai sumber tenaga dalam misi ruang angkasa dan untuk penelitian.", kepadatan: "13.51 g/cm3", melebur: "1345 °C", mendidih: "3110 °C", ditemukan: "Glenn T. Seaborg", tahun: "1944" },
    { atomicNumber: 97, symbol: "Bk", name: "Berkelium", relativeAtomicMass: 247, category: "aktinida", description: "Berkelium adalah aktinida radioaktif yang diproduksi dalam jumlah sangat kecil. Terutama digunakan untuk sintesis unsur-unsur yang lebih berat dalam penelitian ilmiah.", kepadatan: "14.78 g/cm3", melebur: "986 °C", mendidih: "2627 °C", ditemukan: "Glenn T. Seaborg", tahun: "1949" },
    { atomicNumber: 98, symbol: "Cf", name: "Californium", relativeAtomicMass: 251, category: "aktinida", description: "Kalifornium adalah aktinida radioaktif yang memancarkan neutron dalam jumlah besar. Digunakan dalam pencitraan neutron, pengukur kelembaban, dan sebagai sumber neutron untuk memulai reaksi nuklir.", kepadatan: "15.1 g/cm3", melebur: "900 °C", mendidih: "1470 °C", ditemukan: "Glenn T. Seaborg", tahun: "1950" },
    { atomicNumber: 99, symbol: "Es", name: "Einsteinium", relativeAtomicMass: 252, category: "aktinida", description: "Einsteinium adalah aktinida radioaktif yang ditemukan dalam puing-puing ledakan termonuklir pertama. Digunakan hampir secara eksklusif untuk penelitian ilmiah dasar.", kepadatan: "8.84 g/cm3", melebur: "860 °C", mendidih: "996 °C", ditemukan: "Albert Ghiorso", tahun: "1952" },
    { atomicNumber: 100, symbol: "Fm", name: "Fermium", relativeAtomicMass: 257, category: "aktinida", description: "Fermium adalah aktinida radioaktif yang ditemukan dalam puing-puing ledakan termonuklir pertama. Tidak memiliki aplikasi di luar penelitian ilmiah dasar karena kelangkaannya.", kepadatan: "≈9.7 g/cm3", melebur: "1527 °C", mendidih: "Tidak diketahui", ditemukan: "Albert Ghiorso", tahun: "1952" },
    { atomicNumber: 101, symbol: "Md", name: "Mendelevium", relativeAtomicMass: 258, category: "aktinida", description: "Mendelevium adalah aktinida radioaktif yang pertama kali disintesis dengan membombardir einsteinium dengan partikel alfa. Hanya digunakan untuk penelitian ilmiah.", kepadatan: "≈10.3 g/cm3", melebur: "827 °C", mendidih: "Tidak diketahui", ditemukan: "Albert Ghiorso", tahun: "1955" },
    { atomicNumber: 102, symbol: "No", name: "Nobelium", relativeAtomicMass: 259, category: "aktinida", description: "Nobelium adalah aktinida radioaktif yang hanya dapat diproduksi dalam akselerator partikel. Tidak memiliki aplikasi praktis dan hanya digunakan untuk penelitian.", kepadatan: "≈9.9 g/cm3", melebur: "827 °C", mendidih: "Tidak diketahui", ditemukan: "Albert Ghiorso", tahun: "1958" },
    { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", relativeAtomicMass: 262, category: "aktinida", description: "Lawrensium adalah aktinida radioaktif terakhir dan hanya dapat diproduksi dalam akselerator partikel. Digunakan secara eksklusif untuk penelitian ilmiah.", kepadatan: "≈15.6 g/cm3", melebur: "1627 °C", mendidih: "Tidak diketahui", ditemukan: "Albert Ghiorso", tahun: "1961" },

    { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", relativeAtomicMass: 261, category: "logam-transisi", description: "Rutherfordium adalah unsur transaktinida sintetis yang sangat radioaktif dengan waktu paruh pendek. Hanya diproduksi dalam jumlah atom dan digunakan untuk penelitian ilmiah.", kepadatan: "≈17 g/cm3", melebur: "≈2100 °C", mendidih: "≈5500 °C", ditemukan: "Joint Institute for Nuclear Research", tahun: "1964" },
    { atomicNumber: 105, symbol: "Db", name: "Dubnium", relativeAtomicMass: 262, category: "logam-transisi", description: "Dubnium adalah unsur transaktinida sintetis yang sangat radioaktif dengan waktu paruh sangat pendek. Hanya diproduksi dalam jumlah atom untuk penelitian.", kepadatan: "≈21.6 g/cm3", melebur: "Tidak diketahui", mendidih: "Tidak diketahui", ditemukan: "Joint Institute for Nuclear Research", tahun: "1968" },
    { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", relativeAtomicMass: 269, category: "logam-transisi", description: "Seaborgium adalah unsur transaktinida sintetis yang menghormati Glenn T. Seaborg. Sangat radioaktif dengan waktu paruh pendek, hanya digunakan untuk penelitian.", kepadatan: "≈23-24 g/cm3", melebur: "Tidak diketahui", mendidih: "Tidak diketahui", ditemukan: "Lawrence Berkeley Laboratory", tahun: "1974" },
    { atomicNumber: 107, symbol: "Bh", name: "Bohrium", relativeAtomicMass: 264, category: "logam-transisi", description: "Bohrium adalah unsur transaktinida sintetis yang menghormati Niels Bohr. Sangat radioaktif dan tidak stabil, hanya dipelajari dalam penelitian dasar.", kepadatan: "≈26-27 g/cm3", melebur: "Tidak diketahui", mendidih: "Tidak diketahui", ditemukan: "Gesellschaft für Schwerionenforschung", tahun: "1981" },
    { atomicNumber: 108, symbol: "Hs", name: "Hassium", relativeAtomicMass: 269, category: "logam-transisi", description: "Hassium adalah unsur transaktinida sintetis yang sangat radioaktif. Dinamai dari negara bagian Jerman Hesse. Hanya digunakan untuk penelitian ilmiah dasar.", kepadatan: "≈27-29 g/cm3", melebur: "Tidak diketahui", mendidih: "Tidak diketahui", ditemukan: "Gesellschaft für Schwerionenforschung", tahun: "1984" },
    { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", relativeAtomicMass: 278, category: "logam-transisi", description: "Meitnerium adalah unsur transaktinida sintetis yang menghormati Lise Meitner. Sangat radioaktif dengan waktu paruh sangat pendek, hanya untuk penelitian.", kepadatan: "≈27-28 g/cm3", melebur: "Tidak diketahui", mendidih: "Tidak diketahui", ditemukan: "Gesellschaft für Schwerionenforschung", tahun: "1982" },
    { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", relativeAtomicMass: 281, category: "logam-transisi", description: "Darmstadtium adalah unsur transaktinida sintetis yang dinamai dari kota Darmstadt, Jerman, tempat penemuannya. Sangat tidak stabil dan hanya untuk penelitian.", kepadatan: "≈34.8 g/cm3", melebur: "Tidak diketahui", mendidih: "Tidak diketahui", ditemukan: "Gesellschaft für Schwerionenforschung", tahun: "1994" },
    { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", relativeAtomicMass: 282, category: "logam-transisi", description: "Roentgenium adalah unsur transaktinida sintetis yang menghormati Wilhelm Conrad Röntgen. Sangat radioaktif dan tidak stabil, hanya untuk penelitian ilmiah.", kepadatan: "≈28.7 g/cm3", melebur: "Tidak diketahui", mendidih: "Tidak diketahui", ditemukan: "Gesellschaft für Schwerionenforschung", tahun: "1994" },
    { atomicNumber: 112, symbol: "Cn", name: "Copernicium", relativeAtomicMass: 285, category: "logam-pascatransisi", description: "Kopernisium adalah unsur transaktinida sintetis yang menghormati Nicolaus Copernicus. Diperkirakan berwujud cair atau gas pada suhu kamar dan sangat radioaktif.", kepadatan: "≈14.0 g/cm3", melebur: "Tidak diketahui", mendidih: "≈84 °C", ditemukan: "Gesellschaft für Schwerionenforschung", tahun: "1996" },
    { atomicNumber: 113, symbol: "Nh", name: "Nihonium", relativeAtomicMass: 286, category: "logam-pascatransisi", description: "Nihonium adalah unsur transaktinida sintetis pertama yang ditemukan di Asia. Dinamai dari kata Jepang untuk Jepang (Nihon). Sangat radioaktif dan tidak stabil.", kepadatan: "≈16 g/cm3", melebur: "Tidak diketahui", mendidih: "≈1100 °C", ditemukan: "RIKEN", tahun: "2004" },
    { atomicNumber: 114, symbol: "Fl", name: "Flerovium", relativeAtomicMass: 289, category: "logam-pascatransisi", description: "Flerovium adalah unsur transaktinida sintetis yang menghormati Georgy Flyorov. Diperkirakan memiliki sifat seperti gas mulia dan sangat radioaktif.", kepadatan: "≈14 g/cm3", melebur: "Tidak diketahui", mendidih: "≈-60 °C", ditemukan: "Joint Institute for Nuclear Research", tahun: "1998" },
    { atomicNumber: 115, symbol: "Mc", name: "Moscovium", relativeAtomicMass: 290, category: "logam-pascatransisi", description: "Moscovium adalah unsur transaktinida sintetis yang dinamai dari wilayah Moscow. Sangat radioaktif dengan waktu paruh pendek, hanya digunakan untuk penelitian.", kepadatan: "≈13.5 g/cm3", melebur: "Tidak diketahui", mendidih: "≈1400 °C", ditemukan: "Joint Institute for Nuclear Research", tahun: "2003" },
    { atomicNumber: 116, symbol: "Lv", name: "Livermorium", relativeAtomicMass: 293, category: "logam-pascatransisi", description: "Livermorium adalah unsur transaktinida sintetis yang dinamai dari Lawrence Livermore National Laboratory. Sangat radioaktif dan tidak stabil, hanya untuk penelitian.", kepadatan: "≈12.9 g/cm3", melebur: "Tidak diketahui", mendidih: "≈1085 °C", ditemukan: "Joint Institute for Nuclear Research", tahun: "2000" },
    { atomicNumber: 117, symbol: "Ts", name: "Tennessine", relativeAtomicMass: 294, category: "non-logam-reaktif", description: "Tennessin adalah unsur transaktinida sintetis yang dinamai dari negara bagian Tennessee. Diperkirakan memiliki sifat seperti halogen dan sangat radioaktif.", kepadatan: "≈7.2 g/cm3", melebur: "Tidak diketahui", mendidih: "≈610 °C", ditemukan: "Joint Institute for Nuclear Research", tahun: "2010" },
    { atomicNumber: 118, symbol: "Og", name: "Oganesson", relativeAtomicMass: 294, category: "gas-mulia", description: "Oganeson adalah unsur transaktinida sintetis yang menghormati Yuri Oganessian. Diperkirakan berwujud padat pada suhu kamar, tidak seperti gas mulia lainnya, dan sangat radioaktif.", kepadatan: "≈4.9 g/cm3", melebur: "Tidak diketahui", mendidih: "≈80 °C", ditemukan: "Joint Institute for Nuclear Research", tahun: "2002" }];

const interstellarMolecules = [
    {
        formula: "NaCl",
        name: "Natrium Klorida (Garam Dapur)",
        composedOf: [11, 17],
        descriptions: "Natrium klorida adalah senyawa ionik yang terbentuk ketika logam natrium (Na) yang sangat reaktif bereaksi dengan gas klorin (Cl₂) yang beracun. Hasilnya adalah kristal padat berwarna putih yang kita kenal sebagai garam dapur. Senyawa ini penting untuk kehidupan, berfungsi dalam transmisi impuls saraf dan regulasi cairan tubuh. Dalam industri, NaCl digunakan sebagai pengawet makanan, bahan baku pembuatan soda api (NaOH) dan gas klorin melalui elektrolisis, serta untuk mencairkan es di jalan raya."
    },
    {
        formula: "CO₂",
        name: "Karbon Dioksida",
        composedOf: [6, 8, 8],
        descriptions: "Karbon dioksida adalah gas tak berwarna dan tidak berbau yang terbentuk dari pembakaran senyawa karbon (seperti bahan bakar fosil) dengan oksigen, serta dari proses respirasi makhluk hidup. Meskipun unsur pembentuknya adalah karbon (padatan) dan oksigen (gas yang menunjang kehidupan), CO₂ bersifat sebagai gas rumah kaca yang penting untuk menjaga suhu Bumi, namun peningkatan konsentrasinya berkontribusi pada pemanasan global. CO₂ juga digunakan dalam minuman berkarbonasi, alat pemadam kebakaran, dan sebagai pendingin dalam bentuk es kering (padatan CO₂)."
    },
    {
        formula: "N₂",
        name: "Gas Nitrogen",
        composedOf: [7, 7],
        descriptions: "Gas nitrogen membentuk 78% atmosfer Bumi. Meskipun terdiri dari dua atom nitrogen yang dihubungkan oleh ikatan rangkap tiga yang sangat kuat, gas ini bersifat inert dan tidak mudah bereaksi. Nitrogen sangat penting untuk semua organisme hidup sebagai komponen protein, asam nukleat, dan klorofil. Dalam industri, nitrogen cair digunakan sebagai pendingin hingga -196°C, dan gas nitrogen digunakan dalam pengemasan makanan untuk mencegah oksidasi, serta dalam produksi elektronik untuk menciptakan atmosfer inert."
    },
    {
        formula: "O₂",
        name: "Gas Oksigen",
        composedOf: [8, 8],
        descriptions: "Gas oksigen merupakan 21% atmosfer Bumi dan sangat penting untuk respirasi hampir semua makhluk hidup. Oksigen mendukung pembakaran dan oksidasi. Dalam industri, oksigen murni digunakan dalam proses metalurgi, pengelasan, produksi baja, dan sebagai oksidator dalam bahan bakar roket. Di bidang medis, oksigen diberikan kepada pasien dengan gangguan pernapasan. Oksigen juga digunakan dalam pengolahan air limbah dan sebagai terapi hiperbarik."
    },
    {
        formula: "Cl₂",
        name: "Gas Klorin",
        composedOf: [17, 17],
        descriptions: "Gas klorin berwarna hijau kekuningan, beracun, dan memiliki bau yang menyengat. Meskipun berbahaya, senyawa ini sangat penting untuk pemurnian air minum dan kolam renang sebagai disinfektan yang efektif membunuh bakteri dan virus. Klorin juga digunakan dalam produksi PVC plastik, pelarut, pestisida, dan produk pemutih. Pada Perang Dunia I, gas klorin pernah digunakan sebagai senjata kimia karena sifatnya yang mengiritasi saluran pernapasan."
    },
    {
        formula: "H₂O₂",
        name: "Hidrogen Peroksida",
        composedOf: [1, 1, 8, 8],
        descriptions: "Hidrogen peroksida adalah cairan bening dengan sifat oksidator kuat. Pada konsentrasi 3%, digunakan sebagai antiseptik untuk membersihkan luka karena mampu membunuh mikroorganisme anaerob. Dalam konsentrasi lebih tinggi (6-35%), digunakan sebagai pemutih rambut, pemutih pakaian, dan disinfektan permukaan. Di industri, hidrogen peroksida digunakan dalam produksi kertas sebagai pemutih dan dalam teknologi lingkungan untuk mengolah limbah beracun."
    },
    {
        formula: "CH₃OH",
        name: "Metanol",
        composedOf: [6, 1, 1, 1, 8, 1],
        descriptions: "Metanol adalah alkohol paling sederhana, juga dikenal sebagai alkohol kayu. Cairan ini mudah terbakar, tidak berwarna, dan beracun jika tertelan—dapat menyebabkan kebutaan bahkan kematian. Metanol digunakan sebagai pelarut industri, antibeku, dan bahan baku untuk memproduksi formaldehida, biodiesel, dan berbagai bahan kimia lainnya. Dalam beberapa sel bahan bakar, metanol berfungsi sebagai sumber hidrogen alternatif."
    },
    {
        formula: "C₂H₄",
        name: "Etilena",
        composedOf: [6, 6, 1, 1, 1, 1],
        descriptions: "Etilena adalah hormon tanaman alami yang berperan dalam pematangan buah. Secara komersial, etilena merupakan salah satu bahan kimia organik paling penting yang diproduksi secara global. Senyawa ini digunakan untuk membuat polietilen (plastik paling umum), etilen glikol (antibeku), stirena, PVC, dan berbagai polimer lainnya. Etilena juga digunakan untuk mempercepat pematangan buah seperti pisang dan tomat dalam industri pertanian."
    },
    {
        formula: "SO₂",
        name: "Sulfur Dioksida",
        composedOf: [16, 8, 8],
        descriptions: "Sulfur dioksida adalah gas tidak berwarna dengan bau menyengat yang dihasilkan dari pembakaran bahan bakar fosil yang mengandung sulfur. Gas ini merupakan polutan udara utama yang menyebabkan hujan asam dan masalah pernapasan. Namun, sulfur dioksida juga memiliki kegunaan penting sebagai pengawet makanan (E220) dalam buah kering dan wine, sebagai pemutih dalam produksi kertas, dan sebagai disinfektan dalam industri pengolahan air."
    },
    {
        formula: "NO₂",
        name: "Nitrogen Dioksida",
        composedOf: [7, 8, 8],
        descriptions: "Nitrogen dioksida adalah gas beracun berwarna coklat kemerahan dengan bau tajam yang khas. Senyawa ini merupakan polutan udara utama yang berkontribusi terhadap pembentukan smog fotokimia dan hujan asam. NO₂ dihasilkan dari pembakaran suhu tinggi, terutama pada mesin kendaraan dan pembangkit listrik. Paparan jangka panjang dapat menyebabkan masalah pernapasan serius. Dalam industri, NO₂ digunakan sebagai perantara dalam produksi asam nitrat."
    },
    {
        formula: "P₂O₅",
        name: "Fosfor Pentoksida",
        composedOf: [15, 15, 8, 8, 8, 8, 8],
        descriptions: "Fosfor pentoksida adalah padatan putih yang sangat higroskopis (menyerap air dengan kuat) dan digunakan sebagai agen pengering yang sangat efektif dalam laboratorium dan industri. Senyawa ini bereaksi hebat dengan air menghasilkan asam fosfat. Fosfor pentoksida digunakan dalam produksi kaca optik, sebagai katalis dalam reaksi organik, dan sebagai bahan awal untuk berbagai senyawa fosfor. Harus ditangani dengan hati-hati karena dapat menyebabkan luka bakar kimia yang parah."
    },
    {
        formula: "KMnO₄",
        name: "Kalium Permanganat",
        composedOf: [19, 25, 8, 8, 8, 8],
        descriptions: "Kalium permanganat adalah senyawa kristalin ungu tua yang larut dalam air menghasilkan larutan ungu yang kuat. Senyawa ini adalah oksidator kuat dengan berbagai kegunaan: sebagai disinfektan untuk mengobati infeksi jamur pada kulit, untuk memurnikan air, dalam analisis kimia sebagai titran, dan sebagai pengoksidasi dalam sintesis organik. Warna ungunya yang khas juga dimanfaatkan dalam demonstrasi kimia dan sebagai indikator visual dalam berbagai reaksi."
    },
    {
        formula: "K₂Cr₂O₇",
        name: "Kalium Dikromat",
        composedOf: [19, 19, 24, 24, 8, 8, 8, 8, 8, 8, 8],
        descriptions: "Kalium dikromat adalah senyawa kristalin berwarna oranye-merah yang merupakan oksidator kuat. Senyawa ini digunakan dalam industri penyamakan kulit, sebagai mordan dalam pencelupan tekstil, dalam produksi pigmen, dan sebagai reagen pembersih laboratorium. Namun, senyawa kromium heksavalen bersifat karsinogenik dan toksik, sehingga penggunaannya semakin dibatasi. Dalam analisis kimia, kalium dikromat digunakan untuk menentukan konsentrasi zat pereduksi."
    },
    {
        formula: "AgNO₃",
        name: "Perak Nitrat",
        composedOf: [47, 7, 8, 8, 8],
        descriptions: "Perak nitrat adalah senyawa kristalin tidak berwarna yang larut dalam air dan sensitif terhadap cahaya. Senyawa ini memiliki banyak aplikasi penting: dalam fotografi tradisional, sebagai antiseptik untuk mencegah infeksi pada bayi baru lahir (credle), dalam produksi cermin, sebagai reagen dalam analisis klorida, dan dalam industri elektronik. Perak nitrat juga digunakan dalam tato untuk menandai kulit dan dalam pengobatan untuk menghilangkan kutil."
    },
    {
        formula: "CuO",
        name: "Tembaga(II) Oksida",
        composedOf: [29, 8],
        descriptions: "Tembaga(II) oksida adalah padatan hitam yang terjadi secara alami sebagai mineral tenorit. Senyawa ini digunakan sebagai pigmen dalam keramik untuk menghasilkan warna biru, hijau, dan merah, sebagai katalis dalam reaksi kimia industri, dan dalam sel surya sebagai semikonduktor tipe-p. Dalam suplemen nutrisi untuk hewan, tembaga oksida digunakan sebagai sumber tembaga. Senyawa ini juga berperan dalam proses termit untuk menghasilkan logam tembaga."
    },
    {
        formula: "ZnO",
        name: "Seng Oksida",
        composedOf: [30, 8],
        descriptions: "Seng oksida adalah bubuk putih yang tidak larut dalam air dan memiliki sifat semikonduktor. Senyawa ini banyak digunakan dalam produk perawatan kulit sebagai tabir surya fisik karena mampu memblokir sinar UV, dalam salep untuk mengobati iritasi kulit dan ruam popok, sebagai pigmen putih dalam cat, dan sebagai aditif dalam karet dan plastik. Dalam industri elektronik, ZnO digunakan dalam varistor, sensor gas, dan dioda pemancar cahaya."
    },
    {
        formula: "PbO₂",
        name: "Timbal(IV) Oksida",
        composedOf: [82, 8, 8],
        descriptions: "Timbal dioksida adalah padatan kristalin berwarna coklat tua atau hitam yang merupakan oksidator kuat. Senyawa ini merupakan komponen penting dalam elektrode positif baterai timbal-asam (aki mobil). Juga digunakan dalam korek api, bahan peledak, dan sebagai katalis dalam industri kimia. Namun, senyawa timbal bersifat toksik dan akumulasinya dalam tubuh dapat menyebabkan keracunan timbal dengan efek neurologis yang serius, sehingga penanganannya memerlukan tindakan pencegahan khusus."
    },
    {
        formula: "HgO",
        name: "Raksa(II) Oksida",
        composedOf: [80, 8],
        descriptions: "Raksa oksida ada dalam dua bentuk: merah dan kuning, tergantung pada ukuran partikelnya. Ketika dipanaskan, senyawa ini terurai menjadi raksa dan oksigen—sebuah reaksi yang dahulu digunakan oleh Joseph Priestley untuk mengisolasi oksigen. Raksa oksida digunakan dalam cat antikerak untuk kapal, baterai raksa, dan sebagai reagen dalam sintesis kimia. Karena toksisitas raksa yang tinggi, penggunaan senyawa ini sekarang sangat dibatasi untuk melindungi lingkungan dan kesehatan manusia."
    },
    {
        formula: "NiO",
        name: "Nikel(II) Oksida",
        composedOf: [28, 8],
        descriptions: "Nikel oksida adalah padatan kristalin berwarna hijau yang terjadi secara alami sebagai mineral bunsenit. Senyawa ini digunakan dalam pembuatan paduan nikel, sebagai katalis dalam hidrogenasi minyak nabati, dalam produksi keramik dan gelas (sebagai pigmen), dan dalam baterai nikel-kadmium. Nikel oksida juga digunakan dalam sel bahan bakar oksida padat dan sebagai material elektroda dalam superkapasitor. Paparan debu nikel oksida dapat menyebabkan iritasi pernapasan dan bersifat karsinogenik."
    },
    {
        formula: "MnO₂",
        name: "Mangan Dioksida",
        composedOf: [25, 8, 8],
        descriptions: "Mangan dioksida adalah padatan hitam atau coklat yang terjadi secara alami sebagai mineral pirolusit. Senyawa ini memiliki banyak aplikasi penting: sebagai katoda dalam baterai alkaline, sebagai katalis dalam produksi oksigen dari hidrogen peroksida, dalam produksi kaca untuk menghilangkan warna hijau yang disebabkan oleh pengotor besi, dan sebagai pigmen dalam bata dan keramik. Mangan dioksida juga digunakan dalam proses Fenton untuk pengolahan air limbah dan dalam produksi feromangan untuk industri baja."
    },
    {
        formula: "TiO₂",
        name: "Titanium Dioksida",
        composedOf: [22, 8, 8],
        descriptions: "Titanium dioksida adalah pigmen putih paling penting di dunia, memberikan kecerahan dan daya tutup yang sangat baik. Senyawa ini digunakan dalam cat, plastik, kertas, kosmetik (terutama tabir surya), pasta gigi, dan makanan (sebagai E171). Titanium dioksida juga memiliki sifat fotokatalitik—dapat menguraikan polutan organik ketika terkena sinar UV, sehingga digunakan dalam material bangunan 'self-cleaning'. Dalam bentuk nanopartikel, aplikasinya semakin luas di berbagai bidang teknologi."
    },
    {
        formula: "V₂O₅",
        name: "Vanadium Pentoksida",
        composedOf: [23, 23, 8, 8, 8, 8, 8],
        descriptions: "Vanadium pentoksida adalah padatan kristalin berwarna oranye yang merupakan katalis industri paling penting untuk produksi asam sulfat melalui proses kontak. Senyawa ini juga digunakan sebagai katalis dalam produksi anhidrida maleat dan dalam mengurangi polusi dari pembangkit listrik. Dalam industri keramik, vanadium pentoksida digunakan sebagai pigmen, dan dalam baterai flow vanadium redoks, senyawa ini berperan sebagai elektrolit. Paparan debu vanadium pentoksida dapat menyebabkan iritasi saluran pernapasan."
    },
    {
        formula: "Cr₂O₃",
        name: "Kromium(III) Oksida",
        composedOf: [24, 24, 8, 8, 8],
        descriptions: "Kromium oksida adalah senyawa berwarna hijau tua yang digunakan sebagai pigmen (hijau kromium) dalam cat, tinta, keramik, dan kaca. Senyawa ini juga berfungsi sebagai abrasif untuk memoles logam (rokuri) dan sebagai katalis dalam produksi propilena dan metanol. Berbeda dengan senyawa kromium heksavalen yang beracun, kromium(III) oksida relatif tidak berbahaya dan bahkan merupakan mikronutrien esensial yang membantu metabolisme gula dalam tubuh manusia."
    },
    {
        formula: "Fe₃O₄",
        name: "Magnetit (Besi Oksida Hitam)",
        composedOf: [26, 26, 26, 8, 8, 8, 8],
        descriptions: "Magnetit adalah mineral besi oksida yang bersifat feromagnetik—satu-satunya mineral yang secara alami bersifat magnet permanen. Senyawa ini merupakan bijih besi yang paling penting secara komersial. Magnetit digunakan dalam media perekaman magnetik, toner fotokopi, sebagai katalis dalam proses Haber-Bosch untuk produksi amonia, dan dalam biomedis untuk hyperthermia kanker dan sebagai agen kontras MRI. Nanopartikel magnetit memiliki aplikasi yang semakin penting dalam teknologi nano dan pengobatan."
    },
    {
        formula: "AlCl₃",
        name: "Aluminium Klorida",
        composedOf: [13, 17, 17, 17],
        descriptions: "Aluminium klorida adalah senyawa yang sangat penting dalam kimia organik sebagai katalis asam Lewis yang kuat, terutama dalam reaksi Friedel-Crafts untuk alkilasi dan asilasi senyawa aromatik. Senyawa ini juga digunakan dalam produksi etilbenzena (prekursor stirena), dalam pemurnian minyak bumi, dan sebagai koagulan dalam pengolahan air. Aluminium klorida higroskopis dan bereaksi hebat dengan air, menghasilkan asam klorida, sehingga harus disimpan dalam wadah kedap udara."
    },
    {
        formula: "SiC",
        name: "Silikon Karbida (Karborundum)",
        composedOf: [14, 6],
        descriptions: "Silikon karbida adalah senyawa keramik yang sangat keras (skala Mohs 9,5), hanya dilampaui oleh berlian dan boron nitrida kubik. Senyawa ini digunakan sebagai abrasif dalam amplas, roda gerinda, dan pemotong; sebagai semikonduktor dalam elektronik daya suhu tinggi; dalam armor kendaraan militer; dan dalam komponen tahan panas seperti rem cakram dan bantalan. Silikon karbida juga digunakan dalam perhiasan sebagai pengganti berlian dan dalam teleskop sebagai cermin karena koefisien ekspansi termalnya yang rendah."
    },
    {
        formula: "BN",
        name: "Boron Nitrida",
        composedOf: [5, 7],
        descriptions: "Boron nitrida ada dalam beberapa bentuk polimorf, yang paling terkenal adalah struktur heksagonal (mirip grafit) dan kubik (mirip berlian). Boron nitrida kubik adalah material terkeras kedua setelah berlian dan digunakan sebagai abrasif untuk mengeraskan logam. Boron nitrida heksagonal memiliki sifat pelumas yang sangat baik bahkan pada suhu tinggi, tahan panas hingga 1000°C, dan digunakan dalam kosmetik, komponen elektronik, dan aplikasi suhu tinggi. Material ini secara informal disebut 'berlian putih'."
    },
    {
        formula: "CaCl₂",
        name: "Kalsium Klorida",
        composedOf: [20, 17, 17],
        descriptions: "Kalsium klorida adalah senyawa higroskopis yang sangat menarik uap air dari udara. Sifat ini dimanfaatkan sebagai agen pengering dan untuk mengontrol debu di jalan tanah. Pada musim dingin, kalsium klorida ditaburkan di jalan untuk mencairkan es karena menurunkan titik beku air. Dalam industri makanan, senyawa ini digunakan sebagai pengawet dan penstabil. Kalsium klorida juga digunakan dalam kolam renang untuk menambah kekerasan kalsium air dan dalam pengolahan air limbah."
    },
    {
        formula: "MgSO₄",
        name: "Magnesium Sulfat (Garam Epsom)",
        composedOf: [12, 16, 8, 8, 8, 8],
        descriptions: "Magnesium sulfat yang dikenal sebagai garam Epsom, telah digunakan selama berabad-abad sebagai obat tradisional. Larutannya digunakan untuk merendam kaki yang lelah, mengurangi pembengkakan, dan mengobati sembelit ketika dikonsumsi secara oral. Dalam pertanian, magnesium sulfat digunakan sebagai pupuk untuk menyediakan magnesium dan sulfur yang esensial bagi tanaman. Senyawa ini juga digunakan dalam pembuatan tofu, bir, dan sebagai koagulan dalam industri tekstil."
    },
    {
        formula: "NaF",
        name: "Natrium Fluorida",
        composedOf: [11, 9],
        descriptions: "Natrium fluorida adalah sumber ion fluorida yang digunakan dalam pasta gigi dan air minum terfluoridasi untuk mencegah kerusakan gigi dengan memperkuat enamel gigi dan mengurangi kemampuan bakteri untuk menghasilkan asam. Senyawa ini juga digunakan sebagai insektisida, dalam produksi kaca dan enamel, dan dalam metalurgi sebagai fluks. Namun, fluorida dalam dosis tinggi bersifat toksik, sehingga penggunaan dalam produk konsumen diatur ketat untuk memastikan keamanannya."
    },
    {
        formula: "KI",
        name: "Kalium Iodida",
        composedOf: [19, 53],
        descriptions: "Kalium iodida adalah senyawa yang menyediakan iodida, nutrisi esensial untuk fungsi tiroid yang normal. Kekurangan iodida dapat menyebabkan gondok dan gangguan perkembangan. Dalam situasi darurat nuklir, kalium iodida diberikan untuk melindungi tiroid dari penyerapan iodida radioaktif dengan menjenuhkan kelenjar dengan iodida stabil. Senyawa ini juga digunakan dalam fotografi, sebagai reagen dalam kimia analitik, dan dalam pengobatan untuk mengobati penyakit tiroid tertentu."
    },
    {
        formula: "NH₄NO₃",
        name: "Amonium Nitrat",
        composedOf: [7, 1, 1, 1, 1, 7, 8, 8, 8],
        descriptions: "Amonium nitrat adalah padatan kristalin putih yang terutama digunakan sebagai pupuk nitrogen tinggi karena mengandung kedua bentuk nitrogen yang tersedia bagi tanaman: amonium dan nitrat. Namun, senyawa ini juga merupakan bahan peledak industri yang kuat ketika dicampur dengan bahan bakar. Beberapa kecelakaan industri terbesar dalam sejarah disebabkan oleh ledakan amonium nitrat. Senyawa ini juga digunakan dalam campuran pendingin instan dan sebagai komponen propelan roket amatir."
    },
    {
        formula: "C₆H₁₂O₆",
        name: "Glukosa",
        composedOf: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 8, 8, 8],
        descriptions: "Glukosa adalah gula sederhana (monosakarida) yang merupakan sumber energi utama bagi sebagian besar sel-sel makhluk hidup. Senyawa ini dibentuk oleh tanaman melalui proses fotosintesis yang menggabungkan karbon dioksida (CO₂) dan air (H₂O) dengan bantuan energi cahaya matahari. Glukosa merupakan bahan bakar bagi respirasi seluler, menghasilkan ATP. Dalam industri pangan, glukosa digunakan sebagai pemanis dan pengawet. Tingkat glukosa dalam darah (gula darah) merupakan indikator kesehatan yang kritikal, dimana ketidakseimbangannya dapat menyebabkan penyakit seperti diabetes."
    },
    {
        formula: "CaCO₃",
        name: "Kalsium Karbonat (Batu Kapur)",
        composedOf: [20, 6, 8, 8, 8],
        descriptions: "Kalsium karbonat adalah senyawa padat yang umum ditemukan dalam batuan seperti batu kapur, marmer, dan kapur. Ia terbentuk dari ion kalsium (Ca²⁺) dan ion karbonat (CO₃²⁻). Senyawa ini adalah komponen utama cangkang organisme laut seperti kerang dan siput. Dalam kehidupan sehari-hari, CaCO₃ digunakan sebagai bahan antasida untuk menetralkan asam lambung, bahan pengisi dalam pasta gigi, plastik, dan kertas, serta sebagai bahan baku utama dalam produksi semen. Ketika dipanaskan, ia terurai menjadi kalsium oksida (CaO) dan karbon dioksida (CO₂)."
    },
    {
        formula: "NH₃",
        name: "Amonia",
        composedOf: [7, 1, 1, 1],
        descriptions: "Amonia adalah gas yang memiliki bau tajam dan khas, terdiri dari satu atom nitrogen dan tiga atom hidrogen. Ia terbentuk melalui proses Haber-Bosch dengan mereaksikan gas nitrogen dari udara dan gas hidrogen. Amonia sangat penting bagi kehidupan sebagai sumber nitrogen untuk tanaman, dan sebagian besar diproduksi menjadi pupuk. Selain itu, amonia digunakan sebagai pendingin (refrigeran), bahan pembersih rumah tangga, dan bahan baku untuk pembuatan plastik, bahan peledak, dan tekstil."
    },
    {
        formula: "H₂SO₄",
        name: "Asam Sulfat",
        composedOf: [1, 1, 16, 8, 8, 8, 8],
        descriptions: "Asam sulfat adalah cairan berminyak, tidak berwarna, dan sangat korosif yang sering dijuluki 'rajanya kimia' karena kegunaannya yang sangat luas. Senyawa ini terbentuk dari reaksi belerang (sulfur), oksigen, dan air. Asam sulfat adalah komponen utama dalam baterai mobil (aki), serta digunakan dalam pembuatan pupuk (seperti superfosfat dan amonium sulfat), pemurnian minyak bumi, pengolahan air limbah, dan sebagai zat pengering dalam berbagai proses industri. Ia memiliki afinitas yang sangat tinggi terhadap air dan dapat menyebabkan luka bakar yang parah."
    },
    {
        formula: "CH₄",
        name: "Metana",
        composedOf: [6, 1, 1, 1, 1],
        descriptions: "Metana adalah komponen utama gas alam dan merupakan hidrokarbon paling sederhana. Ia terdiri dari satu atom karbon yang terikat pada empat atom hidrogen. Metana terbentuk dari dekomposisi material organik di lingkungan tanpa oksigen, seperti di rawa-rawa (oleh karena itu ia juga disebut gas rawa), tempat pembuangan sampah, dan sistem pencernaan hewan ternak (seperti sapi). Metana adalah bahan bakar fosil yang penting untuk pembangkit listrik dan pemanas rumah. Ia juga merupakan gas rumah kaya yang sangat poten, dengan efek pemanasan global per molekulnya jauh lebih besar daripada CO₂."
    },
    {
        formula: "Fe₂O₃",
        name: "Besi(III) Oksida (Karat)",
        composedOf: [26, 26, 8, 8, 8],
        descriptions: "Besi(III) oksida adalah senyawa yang dikenal sebagai karat, yang terbentuk ketika logam besi (Fe) terpapar oksigen (O₂) dan uap air dalam proses yang disebut korosi. Senyawa ini berwarna coklat-merah dan bersifat rapuh, berbeda dengan logam besi aslinya yang kuat dan berkilau. Proses perkaratan ini merugikan karena melemahkan struktur bangunan dan kendaraan yang terbuat dari besi. Namun, di sisi lain, Fe₂O₃ juga dimanfaatkan sebagai pigmen warna merah dan coklat pada cat, , serta sebagai bahan utama untuk pembuatan besi dan baja dalam tanur tiup."
    },
    {
        formula: "Al₂O₃",
        name: "Aluminium Oksida (Alumina)",
        composedOf: [13, 13, 8, 8, 8],
        descriptions: "Aluminium oksida adalah senyawa yang terbentuk ketika logam aluminium bereaksi dengan oksigen di udara, menciptakan lapisan pelindung tipis yang mencegah korosi lebih lanjut (proses pasivasi). Dalam bentuk mineralnya yang disebut korundum, Al₂O₃ sangat keras (skala Mohs 9) dan digunakan sebagai bahan abrasif pada amplas dan sebagai komponen utama dalam ruby dan safir (yang berwarna karena pengotor). Alumina juga merupakan bahan baku utama dalam produksi logam aluminium melalui proses elektrolisis, dan digunakan dalam keramik serta sebagai katalis dalam industri."
    },
    {
        formula: "C₁₂H₂₂O₁₁",
        name: "Sukrosa (Gula Pasir)",
        composedOf: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        descriptions: "Sukrosa adalah disakarida yang kita kenal sehari-hari sebagai gula pasir. Ia terdiri dari satu molekul glukosa dan satu molekul fruktosa yang terikat bersama. Sukrosa diproduksi secara alami oleh tanaman, terutama tebu dan bit gula. Senyawa ini adalah pemanis yang sangat umum dalam makanan dan minuman. Dalam tubuh, enzim sukrase memecah sukrosa menjadi glukosa dan fruktosa agar dapat diserap dan digunakan untuk energi. Konsumsi sukrosa berlebihan dikaitkan dengan berbagai masalah kesehatan, termasuk obesitas dan diabetes tipe 2."
    },
    {
        formula: "H₂O",
        name: "Air",
        composedOf: [1, 1, 8],
        descriptions:
            "Air (rumus kimia: H₂O) adalah cairan bening yang membentuk aliran sungai, danau, lautan, dan hujan di dunia, serta merupakan komponen utama cairan organisme. Sebagai senyawa kimia, molekul air mengandung satu atom oksigen dan dua atom hidrogen yang terikat oleh ikatan kovalen. Air berwujud cair pada suhu dan tekanan lingkungan standar, tetapi sering kali berada di Bumi bersama wujud padatnya, es; dan wujud gasnya, uap air. Air memiliki sifat unik seperti tegangan permukaan yang tinggi, kapasitas panas spesifik yang besar, dan kemampuan melarutkan banyak zat, menjadikannya pelarut universal. Contoh manfaat air sangat luas, mulai dari kebutuhan dasar makhluk hidup untuk bertahan hidup, penggunaan dalam pertanian, industri, hingga sebagai sumber energi melalui pembangkit listrik tenaga air. Selain itu, air juga berperan penting dalam proses kimia dan fisika di alam serta dalam berbagai aplikasi teknologi."
    },
    {
        formula: "HCl",
        name: "Asam Klorida",
        composedOf: [1, 17],
        descriptions: "Asam klorida adalah larutan berair dari gas hidrogen klorida (HCl). Di dalam lambung manusia, asam ini diproduksi secara alami untuk membantu pencernaan dan membunuh bakteri. Dalam industri, HCl adalah bahan kimia yang sangat penting digunakan untuk memproduksi senyawa organik dan anorganik, membersihkan permukaan logam (pengawetan baja), mengatur pH dalam berbagai proses, dan bahkan sebagai bahan pembersih rumah tangga untuk kerak keramik dan lantai."
    },
    {
        formula: "NaOH",
        name: "Natrium Hidroksida (Soda Api)",
        composedOf: [11, 8, 1],
        descriptions: "Natrium hidroksida, dikenal sebagai soda api, adalah basa kuat yang bersifat kaustik. Senyawa ini terbentuk dari reaksi logam natrium dengan air, yang menghasilkan panas dan gas hidrogen. NaOH digunakan secara luas dalam industri sabun dan deterjen (saponifikasi), pembuatan kertas, pengolahan air minum, dan sebagai pembersih saluran pipa. Sifatnya yang dapat melarutkan minyak dan lemak membuatnya sangat efektif namun juga berbahaya jika terkena kulit karena dapat menyebabkan luka bakar kimia."
    },
    {
        formula: "CaO",
        name: "Kalsium Oksida (Kapur Tohor)",
        composedOf: [20, 8],
        descriptions: "Kalsium oksida, atau kapur tohor, dihasilkan dari pemanasan kalsium karbonat (batu kapur) pada suhu tinggi. Senyawa padat putih ini bersifat basa dan sangat reaktif terhadap air, menghasilkan reaksi eksotermik yang menghasilkan kalsium hidroksida (Ca(OH)₂). Kapur tohor digunakan dalam industri konstruksi untuk membuat mortar, dalam industri baja untuk menghilangkan pengotor, dalam pengolahan air limbah, dan sebagai bahan pemurni dalam pembuatan gula."
    },
    {
        formula: "C₂H₅OH",
        name: "Etanol (Alkohol)",
        composedOf: [6, 6, 1, 1, 1, 1, 1, 8, 1],
        descriptions: "Etanol adalah alkohol yang paling dikenal, terbentuk dari fermentasi gula oleh ragi atau melalui hidrasi etilena. Senyawa cair tak berwarna ini mudah menguap dan mudah terbakar. Penggunaannya sangat beragam: sebagai bahan dalam minuman beralkohol, disinfektan dan antiseptik (terutama selama pandemi COVID-19), pelarut dalam parfum dan obat-obatan, dan sebagai bahan bakar nabati (bioetanol) yang dicampur dengan bensin."
    },
    {
        formula: "C₃H₈",
        name: "Propana",
        composedOf: [6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1],
        descriptions: "Propana adalah gas hidrokarbon yang termasuk dalam kelompok LPG (Liquefied Petroleum Gas). Ia mudah dicairkan di bawah tekanan untuk disimpan dan ditransportasikan. Propana banyak digunakan sebagai bahan bakar untuk memasak, pemanas ruangan, dan kendaraan. Ia juga berperan sebagai bahan baku dalam industri petrokimia untuk memproduksi propilena, yang merupakan prekursor untuk berbagai plastik dan senyawa kimia lainnya. Propana terbakar lebih bersih dibandingkan bensin."
    },
    {
        formula: "NaHCO₃",
        name: "Natrium Bikarbonat (Soda Kue)",
        composedOf: [11, 1, 6, 8, 8, 8],
        descriptions: "Natrium bikarbonat adalah padatan kristalin putih yang bersifat amfoter (dapat bersifat asam atau basa). Ketika dipanaskan atau bereaksi dengan asam, ia melepaskan gas karbon dioksida. Sifat inilah yang dimanfaatkan dalam pembuatan kue sebagai bahan pengembang. Selain itu, NaHCO₃ digunakan dalam pemadam api ringan, pasta gigi untuk pemutih gigi, penetral asam lambung (antasida), dan sebagai pembersih alami untuk permukaan dapur dan kamar mandi."
    },
    {
        formula: "CH₃COOH",
        name: "Asam Asetat (Cuka)",
        composedOf: [6, 1, 1, 1, 8, 8, 1],
        descriptions: "Asam asetat adalah asam organik yang memberikan rasa asam dan aroma khas pada cuka (dengan konsentrasi sekitar 4-8%). Dalam bentuk murni (asam asetat glasial), ia adalah cairan higroskopis yang dapat menyebabkan luka bakar. Asam asetat digunakan dalam produksi polimer selulosa asetat (untuk film fotografi dan rayon), polivinil asetat (lem kayu), serta berbagai pelarut, pewarna, dan obat-obatan. Ia juga merupakan pereaksi kimia yang penting di laboratorium."
    },
    {
        formula: "SiO₂",
        name: "Silikon Dioksida (Silika)",
        composedOf: [14, 8, 8],
        descriptions: "Silikon dioksida adalah komponen utama pasir, kuarsa, dan banyak batuan lainnya. Ini adalah salah satu mineral paling melimpah di kerak Bumi. Silika memiliki titik leleh yang sangat tinggi dan digunakan dalam pembuatan kaca, keramik, dan semen. Bentuk mikrokristalinnya (seperti opal) digunakan sebagai pengisi dalam pasta gigi, dan bentuk gelnya (silika gel) digunakan sebagai pengering (desikan) dalam kemasan produk elektronik dan makanan untuk menyerap kelembaban."
    },
    {
        formula: "Mg(OH)₂",
        name: "Magnesium Hidroksida (Susu Magnesia)",
        composedOf: [12, 8, 1, 8, 1],
        descriptions: "Magnesium hidroksida adalah basa lemah yang kurang larut dalam air. Suspensinya dalam air dikenal sebagai 'susu magnesia', yang digunakan sebagai antasida untuk menetralkan keasaman lambung dan sebagai pencahar ringan. Senyawa ini juga digunakan sebagai bahan penghambat api (flame retardant) dalam plastik karena ketika dipanaskan, ia terurai menjadi magnesium oksida dan uap air, yang membantu mendinginkan dan mengencerkan gas yang mudah terbakar."
    },
    {
        formula: "KNO₃",
        name: "Kalium Nitrat (Saltpeter)",
        composedOf: [19, 7, 8, 8, 8],
        descriptions: "Kalium nitrat adalah senyawa kristalin yang telah digunakan selama berabad-abad. Ia adalah komponen utama dalam bubuk mesiu (bersama dengan belerang dan arang) karena melepaskan oksigen saat dipanaskan, sehingga mendukung pembakaran cepat bahkan tanpa udara. Dalam pertanian, KNO₃ adalah pupuk yang sangat baik karena menyediakan dua nutrisi esensial: kalium dan nitrogen. Ia juga digunakan dalam pengawetan daging (seperti pada sosis dan daging asin) dan sebagai bahan dalam pasta gigi untuk gigi sensitif."
    },
    {
        formula: "CuSO₄",
        name: "Tembaga(II) Sulfat (Nila Vitriol)",
        composedOf: [29, 16, 8, 8, 8, 8],
        descriptions: "Tembaga(II) sulfat adalah senyawa kristalin berwarna biru cerah yang larut dalam air. Dalam bentuk anhidrat (tanpa air), ia berwarna putih. Senyawa ini digunakan sebagai fungisida dan algasida dalam campuran Bordeaux untuk melindungi tanaman. Di laboratorium, ia adalah reagen umum untuk reaksi kimia. Dalam industri, ia digunakan dalam elektroplating, sebagai mordan dalam pencelupan kain, dan dalam proses pemurnian tembaga. Hidratnya (CuSO₄·5H₂O) menunjukkan bagaimana air dapat terikat dalam struktur kristal."
    },
    {
        formula: "O₃",
        name: "Ozon",
        composedOf: [8, 8, 8],
        descriptions: "Ozon adalah molekul yang terdiri dari tiga atom oksigen. Di stratosfer, lapisan ozon melindungi kehidupan di Bumi dengan menyerap sebagian besar radiasi ultraviolet (UV) dari matahari. Namun, di permukaan tanah, ozon adalah polutan udara yang dapat mengiritasi sistem pernapasan dan merusak tanaman. Ozon adalah oksidator yang kuat dan digunakan untuk mensterilkan air minum, memutihkan kertas dan tekstil, serta menghilangkan bau dan kontaminan di udara."
    },
    {
        formula: "Ca(OH)₂",
        name: "Kalsium Hidroksida (Kapur Sirih)",
        composedOf: [20, 8, 1, 8, 1],
        descriptions: "Kalsium hidroksida, dikenal sebagai kapur sirih atau hidrat kapur, dihasilkan dari reaksi kalsium oksida (kapur tohor) dengan air. Suspensinya dalam air disebut 'air kapur'. Senyawa ini digunakan dalam industri konstruksi untuk membuat plester dan mortar. Dalam industri makanan, ia digunakan dalam proses 'pengapuran' untuk membuat nira menjadi gula dan dalam pembuatan tortilla jagung. Ia juga digunakan dalam pengolahan air untuk menetralkan keasaman dan dalam kedokteran gigi untuk terapi saluran akar."
    },
    {
        formula: "Na₂CO₃",
        name: "Natrium Karbonat (Soda Abu)",
        composedOf: [11, 11, 6, 8, 8, 8],
        descriptions: "Natrium karbonat adalah garam natrium dari asam karbonat. Secara historis, ia diperoleh dari abu tanaman yang tumbuh di tanah kaya natrium, sehingga dinamai 'soda abu'. Senyawa ini adalah komponen kunci dalam pembuatan kaca, di mana ia menurunkan titik leleh silika. Ia juga digunakan dalam produksi sabun dan deterjen sebagai pelunak air, dalam industri pulp dan kertas, dan untuk menetralkan keasaman dalam berbagai proses kimia."
    },
    {
        formula: "C₆H₆",
        name: "Benzena",
        composedOf: [6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1],
        descriptions: "Benzena adalah senyawa hidrokarbon aromatik yang paling sederhana, dengan struktur cincin segi enam yang unik dan stabil (dikenal sebagai resonansi). Ia adalah cairan tak berwarna dan mudah terbakar dengan aroma manis. Benzena adalah bahan baku fundamental dalam industri kimia untuk memproduksi plastik (seperti polistirena), nilon, resin, karet sintetis, pewarna, deterjen, obat-obatan, dan pestisida. Paparan benzena dalam konsentrasi tinggi diketahui bersifat karsinogenik (dapat menyebabkan kanker)."
    },
    {
        formula: "LiF",
        name: "Litium Fluorida",
        composedOf: [3, 9],
        descriptions: "Litium fluorida adalah senyawa kristalin putih dengan titik leleh tinggi yang digunakan dalam produksi lensa optik untuk spektrometer UV karena transparannya di wilayah ultraviolet. Senyawa ini juga merupakan komponen dalam baterai litium dan sebagai flux dalam metalurgi aluminium. Dalam bidang nuklir, litium fluorida digunakan sebagai bahan penyerap neutron."
    },
    {
        formula: "BeO",
        name: "Berilium Oksida",
        composedOf: [4, 8],
        descriptions: "Berilium oksida adalah keramik teknis dengan konduktivitas termal yang sangat tinggi dan isolator listrik yang baik. Digunakan dalam elektronik daya tinggi sebagai substrat untuk sirkuit terpadu, dalam aplikasi nuklir sebagai moderator neutron, dan dalam laser sebagai bahan host. Sangat beracun jika terhirup dan memerlukan penanganan khusus."
    },
    {
        formula: "B₂O₃",
        name: "Boron Trioksida",
        composedOf: [5, 5, 8, 8, 8],
        descriptions: "Boron trioksida adalah gelas anorganik yang digunakan dalam produksi fiberglass, peralatan laboratorium tahan panas, dan enamel. Sebagai aditif dalam produksi borosilikat glass (seperti Pyrex) yang tahan terhadap perubahan suhu mendadak. Juga digunakan sebagai herbisida dan dalam sintesis senyawa boron lainnya."
    },
    {
        formula: "NaBr",
        name: "Natrium Bromida",
        composedOf: [11, 35],
        descriptions: "Natrium bromida adalah kristal putih yang larut dalam air, digunakan dalam fotografi sebagai sumber ion bromida untuk pembuatan emulsi film. Dalam pengobatan, pernah digunakan sebagai sedatif dan antikonvulsan. Juga digunakan dalam pengeboran minyak sebagai komponen fluida pengeboran dan dalam pengolahan air."
    },
    {
        formula: "MgCl₂",
        name: "Magnesium Klorida",
        composedOf: [12, 17, 17],
        descriptions: "Magnesium klorida adalah senyawa higroskopis yang digunakan untuk mengontrol debu di jalan tanah, sebagai koagulan dalam produksi tahu, dan dalam proses elektrolisis untuk produksi magnesium logam. Juga digunakan dalam suplemen gizi dan sebagai alternatif garam dapur rendah sodium."
    },
    {
        formula: "AlF₃",
        name: "Aluminium Fluorida",
        composedOf: [13, 9, 9, 9],
        descriptions: "Aluminium fluorida adalah padatan putih yang digunakan dalam produksi aluminium melalui proses Hall-Héroult sebagai penurun titik leleh. Juga digunakan sebagai katalis dalam produksi freon dan senyawa fluorinasi lainnya, serta dalam industri kaca dan keramik."
    },
    {
        formula: "Si₃N₄",
        name: "Silikon Nitrida",
        composedOf: [14, 14, 14, 7, 7, 7, 7],
        descriptions: "Silikon nitrida adalah keramik teknik dengan kekuatan mekanik tinggi dan tahan terhadap kejut termal. Digunakan dalam bantalan bola, komponen turbin, perkakas pemotong, dan substrat elektronik. Juga digunakan dalam industri otomotif untuk bagian mesin yang bekerja pada suhu tinggi."
    },
    {
        formula: "PCl₃",
        name: "Fosfor Triklorida",
        composedOf: [15, 17, 17, 17],
        descriptions: "Fosfor triklorida adalah cairan tak berwarna yang bereaksi hebat dengan air. Digunakan sebagai pereaksi dalam sintesis organik untuk mengubah alkohol menjadi alkil klorida, dan dalam produksi insektisida, plasticizer, dan senyawa fosfor lainnya. Uapnya bersifat korosif dan beracun."
    },
    {
        formula: "SCl₂",
        name: "Sulfur Diklorida",
        composedOf: [16, 17, 17],
        descriptions: "Sulfur diklorida adalah cairan merah yang digunakan dalam vulkanisasi karet, sebagai agen klorinasi dalam sintesis organik, dan dalam produksi insektisida. Juga digunakan dalam industri kertas sebagai bahan pemutih dan dalam produksi zat warna."
    },
    {
        formula: "KOH",
        name: "Kalium Hidroksida",
        composedOf: [19, 8, 1],
        descriptions: "Kalium hidroksida adalah basa kuat yang dikenal sebagai potas kaustik. Digunakan dalam produksi sabun cair, biodiesel, baterai alkaline, dan sebagai absorben untuk gas asam. Juga digunakan dalam industri makanan untuk pengolahan coklat dan pengupas buah."
    },
    {
        formula: "CaF₂",
        name: "Kalsium Fluorida (Fluorit)",
        composedOf: [20, 9, 9],
        descriptions: "Kalsium fluorida adalah mineral alami yang digunakan sebagai sumber fluor dalam produksi asam fluorida. Sebagai flux dalam metalurgi besi dan aluminium, dan dalam produksi kaca optik untuk lensa mikroskop dan teleskop. Juga digunakan dalam spektroskopi IR sebagai windows sel."
    },
    {
        formula: "Sc₂O₃",
        name: "Skandium Oksida",
        composedOf: [21, 21, 8, 8, 8],
        descriptions: "Skandium oksida adalah padatan putih yang digunakan dalam produksi lampu uap merkuri untuk pencahayaan stadion dan studio TV. Sebagai penstabil dalam keramik zirconia, dan dalam alloy aluminium-skandium untuk industri aerospace. Juga digunakan dalam laser dan sebagai katalis."
    },
    {
        formula: "TiCl₄",
        name: "Titanium Tetraklorida",
        composedOf: [22, 17, 17, 17, 17],
        descriptions: "Titanium tetraklorida adalah cairan tak berwarna yang bereaksi hebat dengan udara lembab menghasilkan awan putih, sehingga digunakan untuk membuat smoke screen. Merupakan bahan antara dalam produksi titanium dioksida pigmen dan logam titanium. Juga digunakan sebagai katalis dalam polimerisasi."
    },
    {
        formula: "VCl₃",
        name: "Vanadium Triklorida",
        composedOf: [23, 17, 17, 17],
        descriptions: "Vanadium triklorida adalah padatan ungu yang digunakan sebagai katalis dalam polimerisasi olefin dan sebagai prekursor untuk senyawa vanadium lainnya. Juga digunakan dalam baterai vanadium redoks dan dalam produksi keramik khusus."
    },
    {
        formula: "CrCl₃",
        name: "Kromium(III) Klorida",
        composedOf: [24, 17, 17, 17],
        descriptions: "Kromium(III) klorida adalah padatan ungu-hijau yang digunakan dalam penyamakan kulit sebagai mordan, dalam pelapisan logam, dan sebagai katalis untuk reaksi organik. Juga digunakan dalam produksi keramik dan sebagai suplemen nutrisi untuk hewan."
    },
    {
        formula: "MnCl₂",
        name: "Mangan(II) Klorida",
        composedOf: [25, 17, 17],
        descriptions: "Mangan klorida adalah padatan merah muda yang digunakan sebagai katalis dalam produksi plastik dan resin, dalam pengolahan air untuk menghilangkan besi, dan sebagai prekursor untuk senyawa mangan lainnya. Juga digunakan dalam suplemen nutrisi dan dalam produksi baterai."
    },
    {
        formula: "FeCl₃",
        name: "Besi(III) Klorida",
        composedOf: [26, 17, 17, 17],
        descriptions: "Besi(III) klorida adalah padatan kristalin hijau-gelap yang digunakan sebagai koagulan dalam pengolahan air dan air limbah, dalam etsa PCB elektronik, dan sebagai katalis dalam sintesis organik. Juga digunakan dalam produksi pigmen dan dalam pengolahan logam."
    },
    {
        formula: "CoO",
        name: "Kobalt(II) Oksida",
        composedOf: [27, 8],
        descriptions: "Kobalt oksida adalah padatan hijau yang digunakan sebagai pigmen dalam keramik dan kaca (memberikan warna biru), dalam produksi katalis, dan dalam baterai lithium-ion. Juga digunakan dalam produksi enamel dan sebagai aditif dalam pakan ternak."
    },
    {
        formula: "NiCl₂",
        name: "Nikel(II) Klorida",
        composedOf: [28, 17, 17],
        descriptions: "Nikel klorida adalah padatan kuning-hijau yang digunakan dalam pelapisan nikel elektrolit, sebagai katalis dalam hidrogenasi minyak, dan dalam produksi kompleks nikel untuk berbagai aplikasi industri. Juga digunakan dalam baterai nikel-kadmium."
    },
    {
        formula: "CuCl₂",
        name: "Tembaga(II) Klorida",
        composedOf: [29, 17, 17],
        descriptions: "Tembaga klorida adalah padatan coklat-kuning yang digunakan sebagai katalis dalam produksi klorin, dalam etsa PCB, dan dalam sintesis senyawa organik. Juga digunakan dalam pengolahan kayu sebagai pengawet dan dalam produksi pigmen."
    },
    {
        formula: "ZnS",
        name: "Seng Sulfida",
        composedOf: [30, 16],
        descriptions: "Seng sulfida adalah bubuk putih yang berpendar dalam gelap, digunakan dalam cat luminescent, layar CRT, dan LED. Sebagai pigmen putih dalam plastik dan karet, dan dalam aplikasi optoelektronik. Juga digunakan dalam kosmetik sebagai pewarna."
    },
    {
        formula: "GaAs",
        name: "Galium Arsenida",
        composedOf: [31, 33],
        descriptions: "Galium arsenida adalah semikonduktor penting yang digunakan dalam sirkuit frekuensi tinggi, sel surja efisiensi tinggi, dioda pemancar cahaya (LED), dan laser. Memiliki mobilitas elektron yang lebih tinggi daripada silikon, membuatnya cocok untuk aplikasi microwave dan optoelektronik."
    },
    {
        formula: "GeO₂",
        name: "Germanium Dioksida",
        composedOf: [32, 8, 8],
        descriptions: "Germanium dioksida adalah padatan putih yang digunakan dalam produksi serat optik sebagai dopan inti, dalam kaca inframerah, dan sebagai katalis dalam produksi PET. Juga digunakan dalam suplemen kesehatan dan dalam industri semikonduktor."
    },
    {
        formula: "As₂O₃",
        name: "Arsen Trioksida",
        composedOf: [33, 33, 8, 8, 8],
        descriptions: "Arsen trioksida adalah bubuk putih yang sangat beracun, digunakan dalam pengobatan untuk kemoterapi leukemia promyelocytic akut, dalam produksi semikonduktor, dan sebagai pengawet kayu. Juga digunakan dalam produksi kaca dan enamel."
    },
    {
        formula: "SeO₂",
        name: "Selenium Dioksida",
        composedOf: [34, 8, 8],
        descriptions: "Selenium dioksida adalah padatan kristalin putih yang digunakan sebagai agen oksidasi dalam sintesis organik, dalam produksi kaca merah, dan sebagai aditif dalam baja stainless. Juga digunakan dalam fotosel dan rectifier."
    },
    {
        formula: "RbF",
        name: "Rubidium Fluorida",
        composedOf: [37, 9],
        descriptions: "Rubidium fluorida adalah kristal higroskopis yang digunakan dalam penelitian kimia sebagai sumber ion fluorida, dalam produksi kaca khusus, dan dalam aplikasi optik. Juga digunakan dalam studi kristalografi dan sebagai katalis dalam reaksi organik."
    },
    {
        formula: "SrCO₃",
        name: "Stronsium Karbonat",
        composedOf: [38, 6, 8, 8, 8],
        descriptions: "Stronsium karbonat adalah padatan putih yang digunakan dalam produksi kaca CRT untuk TV dan monitor, dalam kembang api untuk menghasilkan warna merah, dan dalam keramik sebagai flux. Juga digunakan dalam produksi ferit magnet dan dalam pasta gigi untuk gigi sensitif."
    },
    {
        formula: "Y₂O₃",
        name: "Itrium Oksida",
        composedOf: [39, 39, 8, 8, 8],
        descriptions: "Itrium oksida adalah padatan putih yang digunakan dalam produksi keramik yttria-stabilized zirconia, dalam fosfor untuk lampu fluorescent dan LED, dan dalam superkonduktor suhu tinggi. Juga digunakan dalam laser dan sebagai katalis."
    },
    {
        formula: "ZrO₂",
        name: "Zirkonium Dioksida",
        composedOf: [40, 8, 8],
        descriptions: "Zirkonia adalah keramik yang sangat tahan panas dan aus, digunakan dalam gigi palsu, bantalan bola, sensor oksigen kendaraan, dan sebagai bahan tahan api. Juga digunakan dalam elektrolit sel bahan bakar oksida padat dan dalam pisau keramik."
    },
    {
        formula: "Nb₂O₅",
        name: "Niobium Pentoksida",
        composedOf: [41, 41, 8, 8, 8, 8, 8],
        descriptions: "Niobium pentoksida adalah padatan putih yang digunakan dalam produksi alloy niobium, dalam keramik khusus, dan sebagai katalis. Juga digunakan dalam lensa kamera untuk mengurangi pantulan dan dalam kapasitor niobium oksida."
    },
    {
        formula: "MoS₂",
        name: "Molibdenum Disulfida",
        composedOf: [42, 16, 16],
        descriptions: "Molibdenum disulfida adalah padatan hitam dengan struktur berlapis yang digunakan sebagai pelumas kering pada suhu tinggi, sebagai katalis dalam hidrodesulfurisasi minyak, dan dalam baterai lithium. Juga digunakan dalam komposit polimer dan sebagai semikonduktor."
    },
    {
        formula: "RuO₂",
        name: "Rutenium Dioksida",
        composedOf: [44, 8, 8],
        descriptions: "Rutenium dioksida adalah padatan hitam yang digunakan dalam elektroda untuk produksi klorin, dalam resistor thick-film, dan sebagai katalis. Juga digunakan dalam superkapasitor dan dalam sel bahan bakar."
    },
    {
        formula: "RhCl₃",
        name: "Rodium(III) Klorida",
        composedOf: [45, 17, 17, 17],
        descriptions: "Rodium klorida adalah padatan merah-coklat yang digunakan sebagai katalis dalam industri otomotif (konverter katalitik), dalam produksi asam asetat, dan dalam pelapisan rodium. Juga digunakan dalam perhiasan sebagai bahan electroplating."
    },
    {
        formula: "PdO",
        name: "Paladium(II) Oksida",
        composedOf: [46, 8],
        descriptions: "Paladium oksida adalah bubuk hitam yang digunakan sebagai katalis dalam hidrogenasi senyawa organik, dalam sensor gas hidrogen, dan dalam elektronik. Juga digunakan dalam produksi perhiasan putih dan dalam konverter katalitik."
    },
    {
        formula: "Ag₂O",
        name: "Perak Oksida",
        composedOf: [47, 47, 8],
        descriptions: "Perak oksida adalah bubuk coklat-hitam yang digunakan dalam baterai silver-oxide untuk arloji dan kalkulator, sebagai pereaksi dalam sintesis organik, dan dalam pemurnian air. Juga digunakan dalam kimia analitik dan dalam produksi cermin."
    },
    {
        formula: "CdS",
        name: "Kadmium Sulfida",
        composedOf: [48, 16],
        descriptions: "Kadmium sulfida adalah pigmen kuning yang digunakan dalam plastik, keramik, dan cat. Juga digunakan dalam sel surya thin-film dan sebagai detektor radiasi. Karena toksisitas kadmium, penggunaannya semakin dibatasi dan diganti dengan alternatif yang lebih aman."
    },
    {
        formula: "InP",
        name: "Indium Fosfida",
        composedOf: [49, 15],
        descriptions: "Indium fosfida adalah semikonduktor yang digunakan dalam perangkat optoelektronik seperti laser semikonduktor, photodetector, dan sel surja efisiensi tinggi. Memiliki karakteristik yang ideal untuk aplikasi frekuensi tinggi dan perangkat fotonik."
    },
    {
        formula: "SnO₂",
        name: "Timah Dioksida",
        composedOf: [50, 8, 8],
        descriptions: "Timah dioksida adalah bubuk putih yang digunakan sebagai opacifier dalam glasir keramik, dalam produksi kaca float, dan sebagai sensor gas. Juga digunakan dalam elektroda transparan untuk perangkat optoelektronik dan sebagai katalis."
    },
    {
        formula: "Sb₂O₃",
        name: "Antimon Trioksida",
        composedOf: [51, 51, 8, 8, 8],
        descriptions: "Antimon trioksida adalah bubuk putih yang digunakan sebagai flame retardant dalam plastik, karet, dan tekstil. Juga digunakan sebagai opacifier dalam enamel dan keramik, serta dalam produksi kaca dan pigmen."
    },
    {
        formula: "TeO₂",
        name: "Telurium Dioksida",
        composedOf: [52, 8, 8],
        descriptions: "Telurium dioksida adalah padatan putih yang digunakan dalam produksi kaca optik untuk aplikasi inframerah, dalam produksi sel surya, dan sebagai katalis. Juga digunakan dalam media perekaman optik dan dalam alloy tembaga untuk meningkatkan kemampuan mesin."
    },
    {
        formula: "CsI",
        name: "Sesium Iodida",
        composedOf: [55, 53],
        descriptions: "Sesium iodida adalah kristal higroskopis yang digunakan dalam optik inframerah sebagai windows dan prism, dalam detektor radiasi untuk spektrometer sinar-X, dan dalam penelitian fisika nuklir. Juga digunakan dalam perangkat night vision."
    },
    {
        formula: "BaSO₄",
        name: "Barium Sulfat",
        composedOf: [56, 16, 8, 8, 8, 8],
        descriptions: "Barium sulfat adalah bubuk putih tidak larut yang digunakan sebagai agen kontras dalam radiologi untuk memvisualisasikan saluran pencernaan. Juga digunakan sebagai pigmen putih dalam cat, pengisi dalam plastik dan karet, dan sebagai bahan pemberat dalam pengeboran minyak."
    },
    {
        formula: "La₂O₃",
        name: "Lantanum Oksida",
        composedOf: [57, 57, 8, 8, 8],
        descriptions: "Lantanum oksida adalah padatan putih yang digunakan dalam kaca optik khusus, katalis cracking minyak bumi, dan dalam produksi electrode. Juga digunakan sebagai dopan dalam keramik dan dalam baterai nickel-metal hydride."
    },
    {
        formula: "CeO₂",
        name: "Serium Dioksida",
        composedOf: [58, 8, 8],
        descriptions: "Serium dioksida adalah bubuk kuning pucat yang digunakan sebagai katalis dalam konverter katalitik, sebagai polishing compound untuk kaca, dan dalam sel bahan bakar oksida padat. Juga digunakan dalam produksi enamel dan keramik."
    },
    {
        formula: "Pr₂O₃",
        name: "Praseodimium Oksida",
        composedOf: [59, 59, 8, 8, 8],
        descriptions: "Praseodimium oksida adalah padatan hijau-kuning yang digunakan dalam pigmen keramik, kaca penyerap inframerah, dan sebagai katalis. Juga digunakan dalam alloy magnet permanen dan dalam produksi carbon arc lights."
    },
    {
        formula: "Nd₂O₃",
        name: "Neodimium Oksida",
        composedOf: [60, 60, 8, 8, 8],
        descriptions: "Neodimium oksida adalah padatan biru pucat yang digunakan dalam magnet neodimium yang kuat, laser, dan pigmen kaca. Juga digunakan dalam keramik kapasitor dan sebagai katalis dalam produksi sintetik karet."
    },
    {
        formula: "Sm₂O₃",
        name: "Samarium Oksida",
        composedOf: [62, 62, 8, 8, 8],
        descriptions: "Samarium oksida adalah padatan kuning pucat yang digunakan dalam magnet samarium-kobalt, absorben neutron dalam reaktor nuklir, dan katalis. Juga digunakan dalam phosphor dan keramik khusus."
    },
    {
        formula: "Eu₂O₃",
        name: "Europium Oksida",
        composedOf: [63, 63, 8, 8, 8],
        descriptions: "Europium oksida adalah padatan merah muda yang digunakan dalam phosphor merah untuk lampu fluorescent dan TV CRT, dalam laser, dan sebagai dopan dalam plastik. Juga digunakan dalam penelitian kuantum dan memori komputer."
    },
    {
        formula: "Gd₂O₃",
        name: "Gadolinium Oksida",
        composedOf: [64, 64, 8, 8, 8],
        descriptions: "Gadolinium oksida adalah padatan putih yang digunakan dalam agen kontras MRI, dalam control rod reaktor nuklir, dan dalam phosphor. Juga digunakan dalam produksi kaca dan keramik khusus."
    },
    {
        formula: "Tb₂O₃",
        name: "Terbium Oksida",
        composedOf: [65, 65, 8, 8, 8],
        descriptions: "Terbium oksida adalah padatan coklat putih yang digunakan dalam phosphor hijau untuk lampu dan display, dalam magnetostrictive material, dan dalam laser. Juga digunakan dalam fuel cell dan sebagai dopan dalam material fosfor."
    },
    {
        formula: "Dy₂O₃",
        name: "Disprosium Oksida",
        composedOf: [66, 66, 8, 8, 8],
        descriptions: "Disprosium oksida adalah padatan putih-kuning yang digunakan dalam magnet neodimium untuk menstabilkan suhu tinggi, dalam lampu metal halide, dan sebagai dopan dalam material fosfor. Juga digunakan dalam reaktor nuklir sebagai poison."
    },
    {
        formula: "Ho₂O₃",
        name: "Holmium Oksida",
        composedOf: [67, 67, 8, 8, 8],
        descriptions: "Holmium oksida adalah padatan kuning terang yang digunakan dalam laser medis untuk prosedur urologi, dalam colorant kaca, dan sebagai dopan dalam fiber optic. Juga digunakan dalam kontrol reaktor nuklir."
    },
    {
        formula: "Er₂O₃",
        name: "Erbium Oksida",
        composedOf: [68, 68, 8, 8, 8],
        descriptions: "Erbium oksida adalah padatan merah muda yang digunakan dalam amplifier fiber optic untuk komunikasi, dalam laser dental dan medis, dan dalam colorant kaca dan keramik. Juga digunakan dalam produksi alloy khusus."
    },
    {
        formula: "Tm₂O₃",
        name: "Tulium Oksida",
        composedOf: [69, 69, 8, 8, 8],
        descriptions: "Tulium oksida adalah padatan hijau pucat yang digunakan dalam sumber radiasi portabel, dalam laser, dan dalam superkonduktor. Juga digunakan dalam penelitian medis dan perangkat keamanan."
    },
    {
        formula: "Yb₂O₃",
        name: "Iterbium Oksida",
        composedOf: [70, 70, 8, 8, 8],
        descriptions: "Iterbium oksida adalah padatan putih yang digunakan dalam laser inframerah, dalam stainless steel, dan sebagai katalis. Juga digunakan dalam tekanan sensor dan dalam quantum computing research."
    },
    {
        formula: "Lu₂O₃",
        name: "Lutesium Oksida",
        composedOf: [71, 71, 8, 8, 8],
        descriptions: "Lutesium oksida adalah padatan putih yang digunakan dalam katalis cracking minyak, dalam detektor radiasi, dan dalam produksi kaca khusus. Juga digunakan dalam penelitian fisika dan kimia fundamental."
    },
    {
        formula: "HfO₂",
        name: "Hafnium Oksida",
        composedOf: [72, 8, 8],
        descriptions: "Hafnium oksida adalah keramik dengan konstanta dielektrik tinggi yang digunakan dalam transistor mikroprosesor, dalam coating tahan panas untuk turbin, dan dalam optik. Juga digunakan dalam control rod reaktor nuklir."
    },
    {
        formula: "Ta₂O₅",
        name: "Tantalum Pentoksida",
        composedOf: [73, 73, 8, 8, 8, 8, 8],
        descriptions: "Tantalum pentoksida adalah padatan putih yang digunakan dalam kapasitor tantalum untuk elektronik, dalam lensa kamera anti-reflektif, dan sebagai katalis. Juga digunakan dalam implant medis dan alat pemotong."
    },
    {
        formula: "WO₃",
        name: "Tungsten Trioksida",
        composedOf: [74, 8, 8, 8],
        descriptions: "Tungsten trioksida adalah bubuk kuning yang digunakan dalam electrochromic window, dalam pigmen keramik, dan sebagai katalis. Juga digunakan dalam detektor gas dan dalam produksi tungsten logam."
    },
    {
        formula: "Re₂O₇",
        name: "Rhenium Heptoksida",
        composedOf: [75, 75, 8, 8, 8, 8, 8, 8, 8],
        descriptions: "Rhenium heptoksida adalah padatan kuning yang sangat reaktif digunakan sebagai katalis dalam alkilasi dan dehidrogenasi, dalam produksi alloy tahan panas, dan dalam katalis reforming minyak. Sangat mahal dan langka."
    },
    {
        formula: "OsO₄",
        name: "Osmium Tetroksida",
        composedOf: [76, 8, 8, 8, 8],
        descriptions: "Osmium tetroksida adalah kristal kuning pucat beracun yang digunakan dalam mikroskopi elektron untuk pewarnaan jaringan biologis, sebagai katalis dalam sintesis organik, dan dalam fingerprint detection. Sangat berbahaya dan memerlukan penanganan khusus."
    },
    {
        formula: "IrO₂",
        name: "Iridium Dioksida",
        composedOf: [77, 8, 8],
        descriptions: "Iridium dioksida adalah padatan hitam yang digunakan dalam electrode untuk produksi klorin, dalam memory resistor, dan sebagai katalis. Juga digunakan dalam pen tip ballpoint dan dalam peralatan tahan korosi."
    },
    {
        formula: "PtO₂",
        name: "Platinum Dioksida",
        composedOf: [78, 8, 8],
        descriptions: "Platinum dioksida adalah bubuk hitam yang digunakan sebagai katalis dalam hidrogenasi senyawa organik, dalam fuel cell, dan dalam produksi silikon rubber. Juga dikenal sebagai katalis Adams."
    },
    {
        formula: "AuCl₃",
        name: "Emas(III) Klorida",
        composedOf: [79, 17, 17, 17],
        descriptions: "Emas klorida adalah kristal merah digunakan dalam electroplating emas, dalam produksi kaca ruby, dan sebagai katalis dalam sintesis organik. Juga digunakan dalam fotografi dan pengobatan arthritis."
    },
    {
        formula: "Hg₂Cl₂",
        name: "Raksa(I) Klorida (Kalomel)",
        composedOf: [80, 80, 17, 17],
        descriptions: "Raksa(I) klorida adalah padatan putih tidak larut yang digunakan dalam electrode kalomel referensi, dalam obat tradisional (sekarang dilarang), dan dalam pyrotechnic. Sangat beracun dan penggunaannya sangat dibatasi."
    },
    {
        formula: "TlCl",
        name: "Talium(I) Klorida",
        composedOf: [81, 17],
        descriptions: "Talium klorida adalah kristal putih digunakan dalam detektor infrared, dalam kaca optik khusus, dan dalam penelitian. Sangat beracun dan pernah digunakan sebagai racun tikus (sekarang dilarang)."
    },
    {
        formula: "PbCl₂",
        name: "Timbal(II) Klorida",
        composedOf: [82, 17, 17],
        descriptions: "Timbal klorida adalah kristal putih digunakan dalam produksi timbal kromat pigmen, dalam solder, dan sebagai katalis. Juga digunakan dalam analisis kimia dan dalam produksi other lead compounds."
    },
    {
        formula: "Bi₂O₃",
        name: "Bismut Oksida",
        composedOf: [83, 83, 8, 8, 8],
        descriptions: "Bismut oksida adalah bubuk kuning digunakan dalam keramik, kosmetik, dan sebagai katalis. Juga digunakan dalam produksi glass dan dalam pengobatan untuk gangguan pencernaan (sebagai subsalicylate)."
    },
    {
        formula: "PoO₂",
        name: "Polonium Dioksida",
        composedOf: [84, 8, 8],
        descriptions: "Polonium dioksida adalah senyawa radioaktif digunakan dalam sumber neutron, dalam anti-static brush, dan dalam penelitian. Sangat berbahaya karena radioaktivitas tinggi dan toksisitas kimia."
    },
    {
        formula: "AtI",
        name: "Astatin Iodida",
        composedOf: [85, 53],
        descriptions: "Astatin iodida adalah senyawa radioaktif langka digunakan dalam penelitian medis untuk terapi kanker targeted alpha. Sangat tidak stabil dengan waktu paruh pendek, dipelajari untuk aplikasi radiopharmaceutical."
    },
    {
        formula: "RnF₂",
        name: "Radon Difluorida",
        composedOf: [86, 9, 9],
        descriptions: "Radon difluorida adalah senyawa gas radioaktif yang hanya dapat dipelajari dalam trace amount. Digunakan dalam penelitian fundamental kimia gas mulia dan dalam studi ikatan kimia. Sangat tidak stabil dan berbahaya."
    },
    {
        formula: "FrF",
        name: "Fransium Fluorida",
        composedOf: [87, 9],
        descriptions: "Fransium fluorida adalah senyawa hipotetis yang sangat radioaktif dan tidak stabil. Hanya dipelajari dalam jumlah trace untuk penelitian sifat kimia fransium. Waktu paruh sangat pendek membuat studi eksperimental sulit."
    },
    {
        formula: "RaSO₄",
        name: "Radium Sulfat",
        composedOf: [88, 16, 8, 8, 8, 8],
        descriptions: "Radium sulfat adalah senyawa radioaktif yang pernah digunakan dalam terapi kanker dan cat luminescent. Sangat berbahaya karena radioaktivitas tinggi, sekarang penggunaan medisnya digantikan oleh isotop lebih aman."
    },
    {
        formula: "Ac₂O₃",
        name: "Aktinium Oksida",
        composedOf: [89, 89, 8, 8, 8],
        descriptions: "Aktinium oksida adalah senyawa radioaktif digunakan dalam sumber neutron dan dalam penelitian. Sangat langka dan diproduksi dalam jumlah sangat kecil dari decay uranium dan thorium."
    },
    {
        formula: "ThO₂",
        name: "Thorium Dioksida",
        composedOf: [90, 8, 8],
        descriptions: "Thorium dioksida adalah keramik dengan titik leleh sangat tinggi digunakan dalam mantel lampu gas, dalam alloy magnesium, dan sebagai katalis. Radioaktif dan penggunaannya semakin dibatasi."
    },
    {
        formula: "Pa₂O₅",
        name: "Protaktinium Pentoksida",
        composedOf: [91, 91, 8, 8, 8, 8, 8],
        descriptions: "Protaktinium pentoksida adalah senyawa radioaktif langka digunakan dalam penelitian fundamental kimia aktinida. Sangat berbahaya dan sulit dipelajari karena radioaktivitas tinggi."
    },
    {
        formula: "UO₂",
        name: "Uranium Dioksida",
        composedOf: [92, 8, 8],
        descriptions: "Uranium dioksida adalah bahan bakar nuklir digunakan dalam reaktor nuklir, dalam pigmen keramik (sebelum diketahui radioaktif), dan dalam produksi depleted uranium untuk armor-piercing ammunition."
    },
    {
        formula: "NpO₂",
        name: "Neptunium Dioksida",
        composedOf: [93, 8, 8],
        descriptions: "Neptunium dioksida adalah senyawa radioaktif digunakan dalam penelitian nuklir dan dalam produksi plutonium-238 untuk generator termoelektrik radioisotop. Hanya diproduksi dalam jumlah kecil untuk penelitian."
    },
    {
        formula: "PuO₂",
        name: "Plutonium Dioksida",
        composedOf: [94, 8, 8],
        descriptions: "Plutonium dioksida adalah bahan bakar nuklir digunakan dalam reaktor nuklir dan dalam senjata nuklir. Sangat beracun dan radioaktif, memerlukan penanganan khusus dan keamanan tinggi."
    },
    {
        formula: "AmO₂",
        name: "Amerisium Dioksida",
        composedOf: [95, 8, 8],
        descriptions: "Amerisium dioksida adalah senyawa radioaktif digunakan dalam detektor asap sebagai sumber alpha particles, dalam penelitian nuklir, dan dalam spektrometer massa. Diproduksi dari decay plutonium dalam reaktor nuklir."
    },
    {
        formula: "Cm₂O₃",
        name: "Curium Oksida",
        composedOf: [96, 96, 8, 8, 8],
        descriptions: "Curium oksida adalah senyawa radioaktif digunakan dalam penelitian nuklir dan dalam produksi isotop untuk aplikasi medis dan industri. Sangat radioaktif dan hanya ditangani di fasilitas nuklir khusus."
    },
    {
        formula: "Bk₂O₃",
        name: "Berkelium Oksida",
        composedOf: [97, 97, 8, 8, 8],
        descriptions: "Berkelium oksida adalah senyawa radioaktif sintetik digunakan dalam penelitian sifat kimia aktinida dan dalam produksi elemen yang lebih berat. Hanya diproduksi dalam jumlah mikroskopis."
    },
    {
        formula: "Cf₂O₃",
        name: "Kalifornium Oksida",
        composedOf: [98, 98, 8, 8, 8],
        descriptions: "Kalifornium oksida adalah senyawa radioaktif digunakan dalam sumber neutron untuk analisis aktivasi neutron, dalam eksplorasi minyak, dan dalam penelitian. Salah satu elemen paling mahal yang diproduksi."
    },
    {
        formula: "Es₂O₃",
        name: "Einsteinium Oksida",
        composedOf: [99, 99, 8, 8, 8],
        descriptions: "Einsteinium oksida adalah senyawa radioaktif sintetik digunakan dalam penelitian fundamental kimia. Sangat langka dan hanya diproduksi dalam jumlah sangat kecil di reaktor nuklir penelitian."
    },
    {
        formula: "Fm₂O₃",
        name: "Fermium Oksida",
        composedOf: [100, 100, 8, 8, 8],
        descriptions: "Fermium oksida adalah senyawa radioaktif hipotetis yang belum dapat diisolasi dalam jumlah makroskopis. Dipelajari melalui teknik radiokimia canggih untuk memahami sifat kimia aktinida."
    },
    {
        formula: "Na₂O",
        name: "Natrium Oksida",
        composedOf: [11, 11, 8],
        descriptions: "Natrium oksida adalah padatan putih digunakan dalam produksi kaca dan keramik, sebagai flux dalam metalurgi, dan dalam sintesis kimia. Bereaksi hebat dengan air menghasilkan natrium hidroksida."
    },
    {
        formula: "K₂O",
        name: "Kalium Oksida",
        composedOf: [19, 19, 8],
        descriptions: "Kalium oksida adalah padatan kuning pucat digunakan dalam produksi pupuk, dalam industri kaca dan keramik, dan sebagai katalis. Sangat reaktif dengan air dan udara lembab."
    },
    {
        formula: "Rb₂O",
        name: "Rubidium Oksida",
        composedOf: [37, 37, 8],
        descriptions: "Rubidium oksida adalah padatan kuning digunakan dalam penelitian kimia, dalam fotosel, dan dalam produksi kaca khusus. Sangat reaktif dan harus disimpan dalam atmosfer inert."
    },
    {
        formula: "Cs₂O",
        name: "Sesium Oksida",
        composedOf: [55, 55, 8],
        descriptions: "Sesium oksida adalah padatan oranye digunakan dalam fotokatoda, dalam tabung photomultiplier, dan dalam penelitian. Salah satu oksida logam alkali paling reaktif."
    },
    {
        formula: "MgO",
        name: "Magnesium Oksida",
        composedOf: [12, 8],
        descriptions: "Magnesium oksida adalah bubuk putih digunakan sebagai refraktori dalam tungku, sebagai antasida, dalam konstruksi sebagai komponen cement, dan sebagai insulator listrik. Juga digunakan dalam suplemen gizi."
    },
    {
        formula: "CaO",
        name: "Kalsium Oksida (Kapur Tohor)",
        composedOf: [20, 8],
        descriptions: "Kalsium oksida adalah padatan putih digunakan dalam produksi semen, dalam pengolahan air, dalam industri baja, dan dalam pertanian untuk menetralkan tanah asam. Bereaksi dengan air menghasilkan panas (reaksi eksotermik)."
    },
    {
        formula: "SrO",
        name: "Stronsium Oksida",
        composedOf: [38, 8],
        descriptions: "Stronsium oksida adalah padatan putih digunakan dalam produksi kaca CRT, dalam kembang api untuk warna merah, dan dalam keramik. Juga digunakan dalam produksi stronsium ferit magnet."
    },
    {
        formula: "BaO",
        name: "Barium Oksida",
        composedOf: [56, 8],
        descriptions: "Barium oksida adalah padatan putih digunakan dalam produksi kaca, dalam coating electrode, dan sebagai katalis. Bereaksi dengan air menghasilkan barium hidroksida dan digunakan dalam produksi peroxide."
    },
    {
        formula: "BeCl₂",
        name: "Berilium Klorida",
        composedOf: [4, 17, 17],
        descriptions: "Berilium klorida adalah padatan putih digunakan dalam produksi berilium logam, sebagai katalis dalam reaksi Friedel-Crafts, dan dalam penelitian. Sangat beracun dan menyebabkan penyakit beriliosis jika terhirup."
    },
    {
        formula: "BCl₃",
        name: "Boron Triklorida",
        composedOf: [5, 17, 17, 17],
        descriptions: "Boron triklorida adalah gas tak berwarna digunakan sebagai katalis dalam produksi silikon, dalam refining aluminium, dan dalam sintesis organik. Juga digunakan dalam produksi boron fiber dan semiconductor doping."
    },
    {
        formula: "CCl₄",
        name: "Karbon Tetraklorida",
        composedOf: [6, 17, 17, 17, 17],
        descriptions: "Karbon tetraklorida adalah cairan tak berwarna pernah digunakan sebagai solvent dan pemadam api, sekarang dilarang karena toksisitas dan kerusakan ozon. Masih digunakan dalam laboratorium sebagai solvent non-polar."
    },
    {
        formula: "NCl₃",
        name: "Nitrogen Triklorida",
        composedOf: [7, 17, 17, 17],
        descriptions: "Nitrogen triklorida adalah cairan kuning sangat eksplosif digunakan dalam desinfeksi air minum dan dalam produksi flour. Sangat berbahaya dan harus ditangani dengan hati-hati."
    },
    {
        formula: "OF₂",
        name: "Oksigen Difluorida",
        composedOf: [8, 9, 9],
        descriptions: "Oksigen difluorida adalah gas kuning pucat sangat reaktif digunakan sebagai oksidator dalam propelan roket dan dalam sintesis senyawa fluorin. Sangat beracun dan korosif."
    },
    {
        formula: "Na₂S",
        name: "Natrium Sulfida",
        composedOf: [11, 11, 16],
        descriptions: "Natrium sulfida adalah padatan kuning digunakan dalam industri kulit untuk dehairing, dalam produksi kertas pulp, dan dalam pengolahan air. Juga digunakan dalam fotografi dan dyeing tekstil."
    },
    {
        formula: "SO₃",
        name: "Sulfur Trioksida",
        composedOf: [16, 8, 8, 8],
        descriptions: "Sulfur trioksida adalah cairan tak berwarna digunakan dalam produksi asam sulfat, dalam sulfonasi senyawa organik, dan sebagai oksidator. Sangat korosif dan bereaksi hebat dengan air."
    },
    {
        formula: "Cl₂O",
        name: "Diklorin Monoksida",
        composedOf: [17, 17, 8],
        descriptions: "Diklorin monoksida adalah gas coklat kemerahan digunakan sebagai pemutih dan disinfektan, dalam sintesis hipoklorit, dan dalam pengolahan air. Tidak stabil dan mudah terdekomposisi."
    },
    {
        formula: "K₂CO₃",
        name: "Kalium Karbonat",
        composedOf: [19, 19, 6, 8, 8, 8],
        descriptions: "Kalium karbonat adalah garam putih digunakan dalam produksi kaca, sabun, dan pupuk. Juga digunakan dalam makanan sebagai pengatur keasaman dan dalam fire extinguisher untuk memadamkan api minyak."
    },
    {
        formula: "NaNO₃",
        name: "Natrium Nitrat",
        composedOf: [11, 7, 8, 8, 8],
        descriptions: "Natrium nitrat adalah kristal putih digunakan dalam pupuk, dalam produksi asam nitrat, dalam pengawet makanan (E251), dan dalam pyrotechnic. Juga ditemukan secara alami sebagai mineral nitratine."
    },
    {
        formula: "KNO₃",
        name: "Kalium Nitrat",
        composedOf: [19, 7, 8, 8, 8],
        descriptions: "Kalium nitrat adalah kristal putih digunakan dalam pupuk, dalam bubuk mesiu, dalam pengawet makanan (E252), dan dalam pasta gigi untuk gigi sensitif. Juga digunakan dalam produksi kaca dan dalam treatment logam."
    },
    {
        formula: "NH₄Cl",
        name: "Amonium Klorida",
        composedOf: [7, 1, 1, 1, 1, 17],
        descriptions: "Amonium klorida adalah kristal putih digunakan dalam baterai dry cell, sebagai flux dalam soldering, dalam obat batuk, dan dalam pupuk. Juga digunakan dalam elektrolisis dan dalam produksi lem."
    },
    {
        formula: "NaHCO₃",
        name: "Natrium Bikarbonat",
        composedOf: [11, 1, 6, 8, 8, 8],
        descriptions: "Natrium bikarbonat adalah bubuk putih digunakan dalam baking sebagai pengembang, dalam antasida, dalam pemadam api, dan dalam pembersih. Juga digunakan dalam pengolahan air dan dalam farmasi."
    },
    {
        formula: "Na₂SO₄",
        name: "Natrium Sulfat",
        composedOf: [11, 11, 16, 8, 8, 8, 8],
        descriptions: "Natrium sulfat adalah garam putih digunakan dalam produksi deterjen, kertas pulp, dan kaca. Juga digunakan sebagai pengering dalam laboratorium dan dalam industri tekstil."
    },
    {
        formula: "MgCO₃",
        name: "Magnesium Karbonat",
        composedOf: [12, 6, 8, 8, 8],
        descriptions: "Magnesium karbonat adalah padatan putih digunakan dalam suplemen gizi, dalam antasida, dalam atletik sebagai grip powder, dan dalam produksi magnesium oksida. Juga digunakan dalam makanan sebagai anti-caking agent."
    },
    {
        formula: "CaSO₄",
        name: "Kalsium Sulfat",
        composedOf: [20, 16, 8, 8, 8, 8],
        descriptions: "Kalsium sulfat adalah mineral putih digunakan dalam produksi gypsum board, dalam semen, sebagai pengering, dan dalam makanan sebagai coagulant tahu. Dalam bentuk dihidrat dikenal sebagai gipsum."
    },
    {
        formula: "FeSO₄",
        name: "Besi(II) Sulfat",
        composedOf: [26, 16, 8, 8, 8, 8],
        descriptions: "Besi sulfat adalah kristal hijau-biru digunakan dalam suplemen zat besi, dalam tinta, dalam pengolahan air, dan sebagai mordan dalam dyeing. Juga digunakan dalam herbisida dan dalam preservative wood."
    },
    {
        formula: "CuSO₄",
        name: "Tembaga(II) Sulfat",
        composedOf: [29, 16, 8, 8, 8, 8],
        descriptions: "Tembaga sulfat adalah kristal biru digunakan sebagai fungisida, dalam electroplating, dalam pengolahan air, dan dalam pendidikan kimia. Juga digunakan dalam produksi cat dan sebagai katalis."
    },
    {
        formula: "ZnSO₄",
        name: "Seng Sulfat",
        composedOf: [30, 16, 8, 8, 8, 8],
        descriptions: "Seng sulfat adalah kristal putih digunakan dalam suplemen seng, dalam produksi rayon, dalam elektrolisis seng, dan dalam agricultur sebagai pupuk mikronutrien. Juga digunakan dalam pengobatan topical."
    },
    {
        formula: "AgNO₃",
        name: "Perak Nitrat",
        composedOf: [47, 7, 8, 8, 8],
        descriptions: "Perak nitrat adalah kristal putih digunakan dalam fotografi, dalam mirror production, dalam pengobatan sebagai cauterizing agent, dan dalam analisis kimia. Juga digunakan dalam produksi explosive."
    },
    {
        formula: "Ba(NO₃)₂",
        name: "Barium Nitrat",
        composedOf: [56, 7, 7, 8, 8, 8, 8, 8, 8],
        descriptions: "Barium nitrat adalah kristal putih digunakan dalam pyrotechnic untuk warna hijau, dalam produksi barium oxide, dan dalam manufacturing other barium compounds. Juga digunakan dalam ceramic glazes."
    },
    {
        formula: "Pb(NO₃)₂",
        name: "Timbal Nitrat",
        composedOf: [82, 7, 7, 8, 8, 8, 8, 8, 8],
        descriptions: "Timbal nitrat adalah kristal putih digunakan dalam production of matches, dalam dyeing, dalam photography, dan dalam production of other lead compounds. Beracun dan penggunaannya dibatasi."
    },
    {
        formula: "Na₃PO₄",
        name: "Natrium Fosfat",
        composedOf: [11, 11, 11, 15, 8, 8, 8, 8],
        descriptions: "Natrium fosfat adalah garam putih digunakan dalam deterjen, dalam pengolahan air, dalam makanan sebagai emulsifier, dan dalam metal cleaning. Juga digunakan dalam buffer solutions di laboratorium."
    },
    {
        formula: "K₃PO₄",
        name: "Kalium Fosfat",
        composedOf: [19, 19, 19, 15, 8, 8, 8, 8],
        descriptions: "Kalium fosfat adalah garam putih digunakan dalam pupuk, dalam buffer solutions, dalam makanan sebagai pengatur keasaman, dan dalam produksi liquid soap. Juga digunakan dalam farmasi."
    },
    {
        formula: "CaCl₂",
        name: "Kalsium Klorida",
        composedOf: [20, 17, 17],
        descriptions: "Kalsium klorida adalah garam higroskopis digunakan sebagai deicer, dalam pengawet makanan, dalam pengolahan air, dan dalam concrete accelerator. Juga digunakan dalam medicine sebagai sumber kalsium."
    },
    {
        formula: "MgSO₄",
        name: "Magnesium Sulfat",
        composedOf: [12, 16, 8, 8, 8, 8],
        descriptions: "Magnesium sulfat adalah kristal putih digunakan dalam medicine sebagai laxative, dalam agriculture sebagai pupuk, dalam bath salt, dan dalam production of tofu. Juga dikenal sebagai garam Epsom."
    },
    {
        formula: "AlCl₃",
        name: "Aluminium Klorida",
        composedOf: [13, 17, 17, 17],
        descriptions: "Aluminium klorida adalah padatan putih digunakan sebagai katalis dalam produksi ethylbenzene, dalam production of other aluminium compounds, dan dalam pengolahan minyak. Juga digunakan dalam deodoran dan dalam pengobatan."
    },
    {
        formula: "FeCl₂",
        name: "Besi(II) Klorida",
        composedOf: [26, 17, 17],
        descriptions: "Besi klorida adalah kristal hijau digunakan dalam production of ferric chloride, dalam dyeing, dalam medicine sebagai koagulan, dan dalam pengolahan air. Juga digunakan dalam production of circuit boards."
    },
    {
        formula: "NiSO₄",
        name: "Nikel Sulfat",
        composedOf: [28, 16, 8, 8, 8, 8],
        descriptions: "Nikel sulfat adalah kristal hijau digunakan dalam electroplating nikel, dalam production of catalyst, dalam battery, dan dalam production of other nickel compounds. Juga digunakan dalam ceramic pigment."
    },
    {
        formula: "CoSO₄",
        name: "Kobalt Sulfat",
        composedOf: [27, 16, 8, 8, 8, 8],
        descriptions: "Kobalt sulfat adalah kristal merah digunakan dalam production of pigment, dalam electroplating, dalam battery, dan dalam production of other cobalt compounds. Juga digunakan dalam agriculture sebagai suplemen."
    },
    {
        formula: "MnSO₄",
        name: "Mangan Sulfat",
        composedOf: [25, 16, 8, 8, 8, 8],
        descriptions: "Mangan sulfat adalah kristal merah muda digunakan dalam production of fertilizer, dalam production of other manganese compounds, dalam ceramic, dan dalam animal feed sebagai suplemen. Juga digunakan dalam pengolahan air."
    },
    {
        formula: "ZnCl₂",
        name: "Seng Klorida",
        composedOf: [30, 17, 17],
        descriptions: "Seng klorida adalah kristal putih digunakan dalam production of battery, dalam soldering flux, dalam wood preservation, dan dalam deodorant. Juga digunakan dalam production of other zinc compounds."
    },
    {
        formula: "SnCl₂",
        name: "Timah(II) Klorida",
        composedOf: [50, 17, 17],
        descriptions: "Timah klorida adalah kristal putih digunakan dalam production of other tin compounds, dalam electroplating, dalam reducing agent, dan dalam production of glass. Juga digunakan dalam food packaging."
    },
    {
        formula: "PbCl₂",
        name: "Timbal(II) Klorida",
        composedOf: [82, 17, 17],
        descriptions: "Timbal klorida adalah kristal putih digunakan dalam production of other lead compounds, dalam production of matches, dalam catalyst, dan dalam analysis kimia. Beracun dan penggunaannya dibatasi."
    },
    {
        formula: "CuCl",
        name: "Tembaga(I) Klorida",
        composedOf: [29, 17],
        descriptions: "Tembaga klorida adalah kristal putih digunakan dalam production of catalyst, dalam production of other copper compounds, dalam carbon monoxide detection, dan dalam organic synthesis. Tidak stabil di udara."
    },
    {
        formula: "Ag₂SO₄",
        name: "Perak Sulfat",
        composedOf: [47, 47, 16, 8, 8, 8, 8],
        descriptions: "Perak sulfat adalah kristal putih digunakan dalam production of other silver compounds, dalam battery, dalam mirror production, dan dalam analysis kimia. Juga digunakan dalam pengobatan."
    },
    {
        formula: "HgSO₄",
        name: "Raksa(II) Sulfat",
        composedOf: [80, 16, 8, 8, 8, 8],
        descriptions: "Raksa sulfat adalah kristal putih digunakan dalam production of other mercury compounds, dalam catalyst, dalam battery, dan dalam analysis kimia. Sangat beracun dan penggunaannya dibatasi."
    },
    {
        formula: "BaCO₃",
        name: "Barium Karbonat",
        composedOf: [56, 6, 8, 8, 8],
        descriptions: "Barium karbonat adalah bubuk putih digunakan dalam production of brick, dalam ceramic glaze, dalam production of other barium compounds, dan dalam rat poison. Beracun dan harus ditangani dengan hati-hati."
    },
    {
        formula: "SrCO₃",
        name: "Stronsium Karbonat",
        composedOf: [38, 6, 8, 8, 8],
        descriptions: "Stronsium karbonat adalah bubuk putih digunakan dalam production of CRT glass, dalam firework untuk warna merah, dalam ceramic, dan dalam production of other strontium compounds. Juga digunakan dalam medicine."
    },
    {
        formula: "Li₂CO₃",
        name: "Litium Karbonat",
        composedOf: [3, 3, 6, 8, 8, 8],
        descriptions: "Litium karbonat adalah bubuk putih digunakan dalam treatment bipolar disorder, dalam production of lithium ion battery, dalam ceramic, dan dalam production of other lithium compounds. Juga digunakan dalam aluminum production."
    },
    {
        formula: "Na₂S₂O₃",
        name: "Natrium Tiosulfat",
        composedOf: [11, 11, 16, 16, 8, 8, 8],
        descriptions: "Natrium tiosulfat adalah kristal putih digunakan dalam fotografi sebagai fixer, dalam pengobatan sebagai antidote untuk keracunan sianida, dalam analisis iodometri, dan dalam pengolahan air untuk dechlorination. Juga dikenal sebagai 'hypo' dalam fotografi."
    },
    {
        formula: "K₂CrO₄",
        name: "Kalium Kromat",
        composedOf: [19, 19, 24, 8, 8, 8, 8],
        descriptions: "Kalium kromat adalah kristal kuning digunakan sebagai indikator dalam analisis argentometri, dalam pigment untuk cat dan keramik, dalam leather tanning, dan dalam pyrotechnic. Bersifat karsinogenik dan memerlukan penanganan hati-hati."
    },
    {
        formula: "NaBrO₃",
        name: "Natrium Bromat",
        composedOf: [11, 35, 8, 8, 8],
        descriptions: "Natrium bromat adalah kristal putih digunakan sebagai agen pengoksidasi dalam sintesis kimia, dalam pengolahan air, dan pernah digunakan dalam pembuatan roti sebagai pengembang (sekarang dilarang di banyak negara karena toksisitas)."
    },
    {
        formula: "Mg₃N₂",
        name: "Magnesium Nitrida",
        composedOf: [12, 12, 12, 7, 7],
        descriptions: "Magnesium nitrida adalah padatan hijau-kuning yang bereaksi dengan air menghasilkan amonia. Digunakan sebagai katalis dalam sintesis boron nitrida kubik, dalam produksi keramik khusus, dan sebagai sumber nitrogen dalam sintesis kimia."
    },
    {
        formula: "CaC₂",
        name: "Kalsium Karbida",
        composedOf: [20, 6, 6],
        descriptions: "Kalsium karbida adalah padatan abu-abu-hitam yang bereaksi dengan air menghasilkan gas asetilena. Digunakan dalam lampu karbida, dalam produksi asetilena untuk pengelasan, dan dalam industri kimia sebagai prekursor untuk berbagai senyawa organik."
    },
    {
        formula: "AlN",
        name: "Aluminium Nitrida",
        composedOf: [13, 7],
        descriptions: "Aluminium nitrida adalah keramik dengan konduktivitas termal tinggi digunakan dalam elektronik sebagai substrate untuk chip, dalam produksi LED, dan dalam komponen tahan panas. Juga digunakan dalam produksi keramik khusus dan komposit."
    },
    {
        formula: "SiCl₄",
        name: "Silikon Tetraklorida",
        composedOf: [14, 17, 17, 17, 17],
        descriptions: "Silikon tetraklorida adalah cairan tak berwarna yang bereaksi dengan air menghasilkan asam klorida dan silika. Digunakan dalam produksi silikon murni untuk semikonduktor, dalam produksi silica fume, dan sebagai intermediate dalam sintesis silikon organik."
    },
    {
        formula: "PBr₃",
        name: "Fosfor Tribromida",
        composedOf: [15, 35, 35, 35],
        descriptions: "Fosfor tribromida adalah cairan tak berwarna yang digunakan sebagai reagent untuk mengkonversi alkohol menjadi alkil bromida dalam sintesis organik. Juga digunakan dalam produksi senyawa farmasi dan agrokimia. Sangat reaktif dengan air."
    },
    {
        formula: "S₂Cl₂",
        name: "Sulfur Monoklorida",
        composedOf: [16, 16, 17, 17],
        descriptions: "Sulfur monoklorida adalah cairan amber yang digunakan dalam vulkanisasi karet, dalam produksi insektisida, dan sebagai chlorinating agent dalam sintesis organik. Juga digunakan dalam military chemistry sebagai precursor untuk gas mustard."
    },
    {
        formula: "ClO₂",
        name: "Klorin Dioksida",
        composedOf: [17, 8, 8],
        descriptions: "Klorin dioksida adalah gas kuning-hijau digunakan sebagai disinfektan dalam pengolahan air minum, dalam pemutihan kertas pulp, dan dalam sterilisasi peralatan medis. Lebih efektif daripada klorin dan tidak menghasilkan trihalomethana yang berbahaya."
    },
    {
        formula: "KIO₃",
        name: "Kalium Iodat",
        composedOf: [19, 53, 8, 8, 8],
        descriptions: "Kalium iodat adalah kristal putih digunakan dalam fortifikasi garam dapur dengan iodin, dalam analisis kimia sebagai agen pengoksidasi, dan dalam dough conditioner untuk roti. Juga digunakan dalam pyrotechnic untuk warna ungu."
    },
    {
        formula: "Na₂O₂",
        name: "Natrium Peroksida",
        composedOf: [11, 11, 8, 8],
        descriptions: "Natrium peroksida adalah padatan kuning pucat yang merupakan oksidator kuat. Digunakan dalam pemutihan tekstil dan kertas, dalam regenerasi udara di kapal selam dan stasiun ruang angkasa, dan dalam sintesis kimia. Bereaksi keras dengan air."
    },
    {
        formula: "BaO₂",
        name: "Barium Peroksida",
        composedOf: [56, 8, 8],
        descriptions: "Barium peroksida adalah padatan abu-abu digunakan dalam produksi hidrogen peroksida, dalam pyrotechnic untuk warna hijau, dan sebagai sumber oksigen dalam welding. Juga digunakan dalam produksi kaca dan keramik khusus."
    },
    {
        formula: "Zn₃P₂",
        name: "Seng Fosfida",
        composedOf: [30, 30, 30, 15, 15],
        descriptions: "Seng fosfida adalah bubuk abu-abu gelap digunakan sebagai rodentisida (racun tikus), dalam produksi semikonduktor, dan dalam sintesis senyawa fosfor organik. Sangat beracun dan menghasilkan gas fosfin ketika bereaksi dengan asam."
    },
    {
        formula: "CuCN",
        name: "Tembaga(I) Sianida",
        composedOf: [29, 6, 7],
        descriptions: "Tembaga sianida adalah padatan putih-krem digunakan dalam electroplating tembaga, dalam sintesis senyawa organik, dan dalam produksi katalis. Sangat beracun karena kandungan sianida dan memerlukan penanganan khusus."
    },
    {
        formula: "AgCN",
        name: "Perak Sianida",
        composedOf: [47, 6, 7],
        descriptions: "Perak sianida adalah padatan putih digunakan dalam electroplating perak, dalam produksi perhiasan, dan dalam sintesis senyawa organik. Sangat beracun dan digunakan dalam plating bath dengan kontrol ketat."
    },
    {
        formula: "TiCl₃",
        name: "Titanium Triklorida",
        composedOf: [22, 17, 17, 17],
        descriptions: "Titanium triklorida adalah padatan ungu digunakan sebagai katalis dalam polimerisasi Ziegler-Natta untuk produksi polietilen dan polipropilen, dalam reduksi senyawa organik, dan dalam proses produksi logam titanium."
    },
    {
        formula: "VOCl₃",
        name: "Vanadium Oksitriklorida",
        composedOf: [23, 8, 17, 17, 17],
        descriptions: "Vanadium oksitriklorida adalah cairan kuning digunakan sebagai katalis dalam produksi karet sintetik EPDM, dalam proses oksidasi selektif, dan sebagai prekursor untuk senyawa vanadium lainnya. Bersifat korosif dan bereaksi dengan air."
    },
    {
        formula: "CrO₂Cl₂",
        name: "Kromil Klorida",
        composedOf: [24, 8, 8, 17, 17],
        descriptions: "Kromil klorida adalah cairan merah gelap digunakan sebagai agen pengoksidasi dalam kimia organik, dalam tes untuk alkohol sekunder, dan dalam produksi senyawa kromium lainnya. Sangat korosif dan beracun."
    },
    {
        formula: "Mn₂O₇",
        name: "Mangan Heptoksida",
        composedOf: [25, 25, 8, 8, 8, 8, 8, 8, 8],
        descriptions: "Mangan heptoksida adalah cairan hijau gelap sangat eksplosif digunakan sebagai oksidator kuat dalam penelitian kimia. Dapat menyala secara spontan ketika kontak dengan material organik. Sangat berbahaya dan memerlukan penanganan khusus."
    },
    {
        formula: "Fe₃C",
        name: "Sementit",
        composedOf: [26, 26, 26, 6],
        descriptions: "Sementit adalah senyawa interstisial dalam baja yang menentukan kekerasan dan kekuatan material. Merupakan komponen utama dalam struktur pearlite dan bainite. Memiliki sifat sangat keras namun rapuh."
    },
    {
        formula: "Ni(CO)₄",
        name: "Nikel Tetrakarbonil",
        composedOf: [28, 6, 6, 6, 6, 8, 8, 8, 8],
        descriptions: "Nikel tetrakarbonil adalah cairan sangat beracun digunakan dalam proses Mond untuk pemurnian nikel, sebagai prekursor untuk nikel murni, dan dalam deposisi uap kimia. Sangat berbahaya dan memerlukan penanganan khusus."
    },
    {
        formula: "Cu₂O",
        name: "Tembaga(I) Oksida",
        composedOf: [29, 29, 8],
        descriptions: "Tembaga(I) oksida adalah padatan merah digunakan sebagai pigmen dalam kaca dan keramik, sebagai fungisida dalam cat kapal, dalam sel surya thin-film, dan sebagai katalis dalam sintesis organik."
    },
    {
        formula: "ZnO₂",
        name: "Seng Peroksida",
        composedOf: [30, 8, 8],
        descriptions: "Seng peroksida adalah bubuk putih digunakan dalam krim antiseptik dan salep, dalam deodoran, dalam karet sebagai akselerator vulkanisasi, dan sebagai sumber oksigen dalam aplikasi khusus."
    },
    {
        formula: "Ga₂O₃",
        name: "Galium Oksida",
        composedOf: [31, 31, 8, 8, 8],
        descriptions: "Galium oksida adalah semikonduktor wide-bandgap digunakan dalam sensor gas, dalam perangkat elektronik daya tinggi, dalam katalisis, dan sebagai material tahan panas. Memiliki aplikasi dalam optoelektronik UV."
    },
    {
        formula: "GeS₂",
        name: "Germanium Disulfida",
        composedOf: [32, 16, 16],
        descriptions: "Germanium disulfida adalah padatan putih digunakan dalam kaca infrared, dalam sel surya, dalam fotokonduktor, dan dalam katalisis. Memiliki sifat semikonduktor dan aplikasi dalam optoelektronik."
    },
    {
        formula: "As₂S₃",
        name: "Arsen Trisulfida",
        composedOf: [33, 33, 16, 16, 16],
        descriptions: "Arsen trisulfida adalah mineral orpiment berwarna kuning cerah digunakan sebagai pigmen dalam cat, dalam pyrotechnic, dalam pengobatan tradisional (sekarang dilarang), dan dalam elektronik. Sangat beracun."
    },
    {
        formula: "SeO₃",
        name: "Selenium Trioksida",
        composedOf: [34, 8, 8, 8],
        descriptions: "Selenium trioksida adalah padatan putih higroskopis digunakan sebagai agen pengoksidasi kuat dalam sintesis organik, dalam produksi senyawa selenium lainnya, dan dalam penelitian kimia. Sangat reaktif dengan air."
    },
    {
        formula: "BrF₃",
        name: "Bromin Trifluorida",
        composedOf: [35, 9, 9, 9],
        descriptions: "Bromin trifluorida adalah cairan kuning sangat reaktif digunakan sebagai fluorinating agent dalam produksi senyawa fluorin, dalam pemrosesan bahan bakar nuklir, dan dalam sintesis senyawa anorganik. Sangat korosif dan beracun."
    },
    {
        formula: "KrF₂",
        name: "Kripton Difluorida",
        composedOf: [36, 9, 9],
        descriptions: "Kripton difluorida adalah padatan kristalin putih digunakan sebagai fluorinating agent kuat dalam sintesis senyawa gas mulia, dalam penelitian kimia fundamental, dan dalam produksi senyawa fluorin eksotis. Sangat reaktif dan tidak stabil."
    },
    {
        formula: "Rb₂O₂",
        name: "Rubidium Peroksida",
        composedOf: [37, 37, 8, 8],
        descriptions: "Rubidium peroksida adalah padatan kuning digunakan dalam sistem penghasil oksigen, dalam pyrotechnic, dan dalam penelitian kimia. Sangat reaktif dengan air dan harus disimpan dalam atmosfer inert."
    },
    {
        formula: "SrO₂",
        name: "Stronsium Peroksida",
        composedOf: [38, 8, 8],
        descriptions: "Stronsium peroksida adalah bubuk putih digunakan dalam pyrotechnic untuk warna merah, dalam produksi hidrogen peroksida, dan sebagai sumber oksigen dalam aplikasi khusus. Juga digunakan dalam pasta gigi sebagai pemutih."
    },
    {
        formula: "YCl₃",
        name: "Itrium Triklorida",
        composedOf: [39, 17, 17, 17],
        descriptions: "Itrium triklorida adalah padatan putih digunakan sebagai katalis dalam polimerisasi, dalam produksi logam itrium murni, dan dalam sintesis senyawa itrium organik. Juga digunakan dalam penelitian material."
    },
    {
        formula: "ZrCl₄",
        name: "Zirkonium Tetraklorida",
        composedOf: [40, 17, 17, 17, 17],
        descriptions: "Zirkonium tetraklorida adalah padatan putih digunakan dalam produksi zirkonium murni, dalam katalisis, dalam water repellent untuk tekstil, dan dalam produksi senyawa zirkonium organik. Higroskopis dan bereaksi dengan air."
    },
    {
        formula: "NbCl₅",
        name: "Niobium Pentaklorida",
        composedOf: [41, 17, 17, 17, 17, 17],
        descriptions: "Niobium pentaklorida adalah padatan kuning digunakan sebagai katalis Lewis dalam sintesis organik, dalam produksi niobium murni, dan dalam deposisi uap kimia untuk coating. Sangat reaktif dengan air."
    },
    {
        formula: "MoO₂",
        name: "Molibdenum Dioksida",
        composedOf: [42, 8, 8],
        descriptions: "Molibdenum dioksida adalah padatan ungu-coklat digunakan sebagai katalis dalam proses hidrogenasi, dalam electrode, dalam keramik, dan sebagai prekursor untuk senyawa molibdenum lainnya. Memiliki struktur kristal rutile."
    },
    {
        formula: "Tc₂O₇",
        name: "Teknesium Heptoksida",
        composedOf: [43, 43, 8, 8, 8, 8, 8, 8, 8],
        descriptions: "Teknesium heptoksida adalah padatan kuning radioaktif digunakan dalam penelitian kimia teknesium, dalam kedokteran nuklir sebagai prekursor, dan dalam studi fundamental sifat kimia unsur radioaktif. Sangat langka dan berbahaya."
    },
    {
        formula: "RuCl₃",
        name: "Rutenium Triklorida",
        composedOf: [44, 17, 17, 17],
        descriptions: "Rutenium triklorida adalah padatan coklat-hitam digunakan sebagai katalis dalam hidrogenasi, oksidasi, dan reaksi metatesis, dalam electroplating, dan dalam produksi electrode. Juga digunakan dalam sel surya dye-sensitized."
    },
    {
        formula: "Rh₂O₃",
        name: "Rodium Trioksida",
        composedOf: [45, 45, 8, 8, 8],
        descriptions: "Rodium trioksida adalah padatan abu-abu digunakan sebagai katalis dalam konverter katalitik, dalam proses industri kimia, dan dalam produksi rhodium murni. Juga digunakan dalam sensor gas dan perangkat elektronik."
    },
    {
        formula: "PdCl₂",
        name: "Paladium Klorida",
        composedOf: [46, 17, 17],
        descriptions: "Paladium klorida adalah padatan coklat-merah digunakan sebagai katalis dalam reaksi coupling organik (seperti Heck dan Suzuki), dalam electroplating, dalam detektor karbon monoksida, dan dalam produksi senyawa paladium lainnya."
    }
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