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
        formula: "H2",
        name: "Hidrogen Molekuler",
        composedOf: [1, 1],
        descriptions:
            "Hidrogen molekuler (H₂) adalah gas hidrogen dalam bentuk dua atom hidrogen yang saling terikat. Ini adalah bentuk hidrogen yang paling umum di alam, misalnya di ruang antarbintang, di atmosfer beberapa planet, dan juga dapat diproduksi di Bumi lewat proses industri atau elektrolisis air. Contoh penggunaannya: H₂ dipakai sebagai bahan bakar ramah lingkungan (fuel cell) untuk mobil hidrogen, sebagai gas pelindung (shielding gas) dalam pengelasan, dan sebagai bahan baku utama di industri pupuk untuk membuat amonia (NH₃). Manfaatnya antara lain sebagai sumber energi bersih karena saat bereaksi dengan oksigen hanya menghasilkan air, membantu mengurangi emisi karbon, mendukung proses industri kimia skala besar, dan dalam riset medis sedang diteliti potensinya sebagai antioksidan yang dapat melindungi sel dari kerusakan oksidatif."
    },
    {
        formula: "OH",
        name: "Radikal Hidroksil",
        composedOf: [8, 1],
        descriptions:
            "Radikal hidroksil (OH) adalah spesies reaktif yang terdiri dari satu atom oksigen dan satu atom hidrogen dengan satu elektron bebas, sehingga sangat mudah bereaksi dengan molekul lain. Di ruang antarbintang, OH berperan sebagai penanda adanya proses kimia aktif dan pembentukan molekul yang lebih kompleks, sedangkan di atmosfer bumi, radikal ini membantu menguraikan polutan. Contoh keberadaannya dapat ditemukan di awan molekuler dan di lapisan atmosfer atas. Manfaat ilmiahnya adalah sebagai tracer dalam astronomi untuk mempelajari kondisi fisik gas antarbintang serta dalam kimia atmosfer untuk memahami mekanisme pembersihan alami udara dari gas-gas berbahaya."
    },
    {
        formula: "H2O",
        name: "Air",
        composedOf: [1, 1, 8],
        descriptions:
            "Air (H₂O) adalah molekul yang tersusun dari dua atom hidrogen dan satu atom oksigen, dan merupakan senyawa esensial bagi kehidupan seperti yang kita kenal. Di ruang antarbintang, air bisa berupa uap atau es yang menempel pada butiran debu kosmik dan komet. Contoh keberadaannya adalah es air di komet, bulan-bulan es, dan awan antarbintang yang dingin. Manfaat air di konteks astrofisika adalah sebagai indikator potensi lingkungan layak huni, bahan pembentuk komet dan planet, serta sebagai salah satu molekul kunci dalam studi evolusi kimia di tata surya dan galaksi."
    },
    {
        formula: "CO",
        name: "Karbon Monoksida",
        composedOf: [6, 8],
        descriptions:
            "Karbon monoksida (CO) adalah molekul yang terdiri dari satu atom karbon dan satu atom oksigen dengan ikatan kuat di antara keduanya. Di astronomi, CO adalah salah satu molekul paling penting karena pancaran gelombang mikronya dipakai untuk memetakan awan molekuler di galaksi. Contoh keberadaannya dapat ditemukan dalam jumlah besar di awan molekuler dingin tempat bintang-bintang baru lahir. Manfaat utamanya bagi ilmuwan adalah sebagai penanda densitas dan distribusi gas hidrogen yang sulit diamati secara langsung, sehingga membantu memahami proses pembentukan bintang dan struktur galaksi."
    },
    {
        formula: "CO2",
        name: "Karbon Dioksida",
        composedOf: [6, 8, 8],
        descriptions:
            "Karbon dioksida (CO₂) adalah molekul yang tersusun dari satu atom karbon dan dua atom oksigen dan dikenal sebagai gas rumah kaca penting di atmosfer planet. Di ruang antarbintang, CO₂ sering ditemukan dalam bentuk es yang membeku di permukaan butiran debu dan komet. Contoh keberadaannya terlihat pada es komet dan di atmosfer beberapa planet dan bulan. Manfaat mempelajari CO₂ dalam konteks antariksa adalah untuk memahami komposisi atmosfer planet, sejarah termal permukaan, serta peran gas rumah kaca dalam menjaga atau mengubah iklim planet dan bulan."
    },
    {
        formula: "CH",
        name: "Radikal Metilidina",
        composedOf: [6, 1],
        descriptions:
            "Radikal metilidina (CH) adalah molekul sederhana yang terdiri dari satu atom karbon dan satu atom hidrogen dengan sifat sangat reaktif. Di ruang antarbintang, CH sering muncul di wilayah transisi antara gas atomik dan molekuler dan menjadi salah satu molekul pertama yang terbentuk saat karbon mulai berikatan dengan hidrogen. Contohnya terdeteksi dalam awan difus dan awan molekuler yang tidak terlalu padat. Manfaatnya dalam penelitian adalah sebagai penanda tahap awal kimia karbon di medium antarbintang dan sebagai indikator kondisi radiasi dan kerapatan gas."
    },
    {
        formula: "CH2",
        name: "Metilena",
        composedOf: [6, 1, 1],
        descriptions:
            "Metilena (CH₂) adalah molekul yang terdiri dari satu atom karbon dan dua atom hidrogen dengan struktur yang sangat reaktif sehingga berperan sebagai perantara dalam banyak reaksi kimia organik. Di ruang antarbintang, CH₂ dianggap sebagai salah satu langkah awal dalam pembentukan molekul hidrokarbon yang lebih kompleks. Contohnya teridentifikasi di awan molekuler tempat bintang baru terbentuk. Manfaat ilmiahnya adalah membantu menjelaskan jalur reaksi dari atom karbon bebas menuju rantai karbon panjang dan molekul organik yang lebih besar."
    },
    {
        formula: "CH3",
        name: "Radikal Metil",
        composedOf: [6, 1, 1, 1],
        descriptions:
            "Radikal metil (CH₃) adalah gugus yang terdiri dari satu atom karbon dan tiga atom hidrogen, dan menjadi salah satu blok pembangun utama bagi banyak molekul organik. Di ruang antarbintang, CH₃ berperan sebagai perantara penting dalam pembentukan metana dan hidrokarbon lainnya. Contohnya dapat muncul di awan molekuler padat dan di dekat bintang muda yang memanaskan gas di sekitarnya. Manfaat mempelajari CH₃ adalah untuk memahami bagaimana molekul organik sederhana berkembang menjadi senyawa yang lebih kompleks di medium antarbintang."
    },
    {
        formula: "CH4",
        name: "Metana",
        composedOf: [6, 1, 1, 1, 1],
        descriptions:
            "Metana (CH₄) adalah molekul yang terdiri dari satu atom karbon yang terikat dengan empat atom hidrogen dan merupakan hidrokarbon paling sederhana. Di tata surya, metana ditemukan di atmosfer planet raksasa dan pada permukaan objek dingin seperti Titan. Di ruang antarbintang, metana dapat membeku sebagai es di butiran debu. Contoh manfaatnya adalah sebagai gas bahan bakar, penanda proses geologis atau biologis potensial di planet lain, dan sebagai bagian dari kimia awal yang mengarah ke molekul organik lebih besar."
    },
    {
        formula: "NH3",
        name: "Amonia",
        composedOf: [7, 1, 1, 1],
        descriptions:
            "Amonia (NH₃) adalah molekul yang terdiri dari satu atom nitrogen dan tiga atom hidrogen dan berbentuk gas dengan bau tajam di Bumi. Di ruang antarbintang, amonia ditemukan di awan molekuler padat dan sering dipakai untuk mengukur suhu gas karena garis spektrumnya sensitif terhadap kondisi fisik. Contohnya juga ada di atmosfer beberapa planet raksasa seperti Jupiter dan Saturnus. Manfaatnya dalam penelitian adalah sebagai termometer kosmik dan sebagai molekul kunci dalam kimia nitrogen yang bisa mengarah ke pembentukan asam amino dan senyawa biologis lainnya."
    },
    {
        formula: "HCN",
        name: "Hidrogen Sianida",
        composedOf: [1, 6, 7],
        descriptions:
            "Hidrogen sianida (HCN) adalah molekul yang terdiri dari hidrogen, karbon, dan nitrogen dengan ikatan rangkap antara karbon dan nitrogen yang sangat kuat. Di Bumi, HCN dikenal sebagai zat beracun, tetapi di ruang antarbintang ia justru penting sebagai bahan awal pembentukan molekul organik kompleks. Contohnya banyak ditemukan di awan molekuler padat dan di atmosfer beberapa planet serta komet. Manfaat ilmiahnya adalah sebagai indikator kimia organik kaya nitrogen dan sebagai salah satu kandidat molekul prekursor bagi pembentukan asam amino dalam skala kosmik."
    },
    {
        formula: "HNC",
        name: "Hidrogen Isosianida",
        composedOf: [1, 7, 6],
        descriptions:
            "Hidrogen isosianida (HNC) adalah isomer dari HCN, artinya memiliki komposisi atom sama tetapi susunan berbeda sehingga sifat kimianya juga sedikit berbeda. Di ruang antarbintang, rasio HNC terhadap HCN dipakai untuk menilai temperatur dan kondisi evolusi awan molekuler. Contohnya terdeteksi di wilayah pembentukan bintang dan awan gelap yang sangat dingin. Manfaat penelitian HNC adalah untuk memahami keseimbangan kimia, suhu, dan dinamika gas dalam berbagai fase pembentukan bintang."
    },
    {
        formula: "CN",
        name: "Radikal Sianogen",
        composedOf: [6, 7],
        descriptions:
            "Radikal sianogen (CN) adalah molekul kecil yang terdiri dari satu atom karbon dan satu atom nitrogen dengan satu elektron tak berpasangan, sehingga sangat reaktif. Di astronomi, CN sering digunakan untuk mengukur komposisi kimia komet dan awan antarbintang karena garis spektrumnya cukup kuat. Contoh keberadaannya tampak jelas pada spektrum komet saat mendekati Matahari. Manfaatnya sebagai penanda kandungan karbon-nitrogen dan sebagai indikator proses fotodisosiasi di sekitar bintang."
    },
    {
        formula: "NO",
        name: "Nitrogen Monoksida",
        composedOf: [7, 8],
        descriptions:
            "Nitrogen monoksida (NO) adalah molekul yang terdiri dari satu atom nitrogen dan satu atom oksigen yang di Bumi dikenal terkait dengan proses biologis dan polusi udara. Di ruang antarbintang, NO terdeteksi di awan molekuler dan di sekitar bintang muda sebagai hasil reaksi antara nitrogen dan oksigen di kondisi dingin. Contoh manfaat ilmiahnya adalah sebagai penanda kimia nitrogen-oksigen serta membantu memetakan bagaimana unsur biogenik seperti N dan O terikat dalam molekul di luar bumi."
    },
    {
        formula: "N2",
        name: "Nitrogen Molekuler",
        composedOf: [7, 7],
        descriptions:
            "Nitrogen molekuler (N₂) adalah molekul dua atom nitrogen yang terikat kuat satu sama lain dan merupakan komponen utama atmosfer Bumi. Di ruang antarbintang, N₂ sulit dideteksi secara langsung karena transisinya lemah, tapi keberadaannya diperkirakan penting sebagai reservoir nitrogen. Contohnya dipelajari secara tidak langsung melalui molekul turunan seperti N₂H⁺. Manfaat memahami N₂ adalah untuk mengetahui seberapa banyak nitrogen yang tersedia dalam bentuk inert dan bagaimana ia kemudian dikonversi menjadi molekul reaktif yang mendukung kimia organik."
    },
    {
        formula: "O2",
        name: "Oksigen Molekuler",
        composedOf: [8, 8],
        descriptions:
            "Oksigen molekuler (O₂) adalah gas yang terdiri dari dua atom oksigen dan menjadi komponen vital atmosfer Bumi bagi respirasi makhluk hidup. Di ruang antarbintang, O₂ ternyata jauh lebih sulit ditemukan daripada yang diprediksi teori, sehingga setiap deteksinya sangat berharga. Contohnya beberapa kali dilaporkan di awan molekuler padat tertentu. Manfaat penelitian O₂ adalah untuk memahami keseimbangan kimia oksigen, bagaimana oksigen lebih sering tersimpan dalam bentuk air atau karbon monoksida, dan implikasinya bagi potensi lingkungan layak huni."
    },
    {
        formula: "H2CO",
        name: "Formaldehida",
        composedOf: [1, 1, 6, 8],
        descriptions:
            "Formaldehida (H₂CO) adalah molekul organik sederhana yang terdiri dari dua atom hidrogen, satu atom karbon, dan satu atom oksigen dengan gugus aldehida. Di ruang antarbintang, formaldehida sering ditemukan di awan molekuler padat dan pada lapisan es butiran debu. Contohnya juga telah terdeteksi pada komet dan di sekitar bintang muda. Manfaatnya dalam astrokimia adalah sebagai perantara pembentukan gula sederhana dan senyawa organik yang lebih kompleks, serta sebagai indikator adanya proses fotokimia dan pemanasan lokal."
    },
    {
        formula: "HCOOH",
        name: "Asam Format",
        composedOf: [1, 1, 6, 8, 8, 1],
        descriptions:
            "Asam format (HCOOH) adalah asam karboksilat paling sederhana yang terdiri dari atom hidrogen, karbon, dan dua oksigen, salah satunya membentuk gugus –COOH. Di ruang antarbintang, asam ini ditemukan pada awan molekuler kaya organik dan di sekitar protobintang. Contohnya juga muncul pada komet sebagai bagian dari komposisi es organik. Manfaat mempelajari HCOOH adalah untuk memahami bagaimana asam organik dapat terbentuk jauh sebelum planet dan kehidupan muncul, sehingga memberi petunjuk tentang asal-usul kimia prebiotik."
    },
    {
        formula: "CH3OH",
        name: "Metanol",
        composedOf: [6, 1, 1, 1, 1, 8],
        descriptions:
            "Metanol (CH₃OH) adalah alkohol paling sederhana yang terdiri dari satu atom karbon, empat atom hidrogen, dan satu atom oksigen. Di ruang antarbintang, metanol biasanya terbentuk pada permukaan butiran es lewat reaksi bertahap dari CO dan H. Contohnya sangat melimpah di daerah pembentukan bintang dan sering memancarkan garis maser yang kuat. Manfaatnya adalah sebagai penanda awan molekuler aktif, sebagai bahan dasar pembentukan molekul organik yang lebih kompleks, dan sebagai indikator proses kimia permukaan butiran debu."
    },
    {
        formula: "C2H2",
        name: "Asetilena",
        composedOf: [6, 6, 1, 1],
        descriptions:
            "Asetilena (C₂H₂) adalah hidrokarbon tak jenuh dengan dua atom karbon yang terikat rangkap tiga dan dua atom hidrogen. Di astrofisika, asetilena ditemukan di atmosfer bintang kaya karbon dan di beberapa atmosfer planet serta bulan. Contohnya juga muncul dalam kimia fotolitik di atmosfer atas Titan. Manfaatnya adalah sebagai molekul kunci dalam pembentukan rantai karbon panjang dan jelaga kosmik, serta sebagai indikator lingkungan yang kaya karbon dan radiasi ultraviolet."
    },
    {
        formula: "C2H4",
        name: "Etilena",
        composedOf: [6, 6, 1, 1, 1, 1],
        descriptions:
            "Etilena (C₂H₄) adalah hidrokarbon tak jenuh dengan dua atom karbon yang dihubungkan ikatan rangkap dua dan empat atom hidrogen. Di ruang antarbintang dan atmosfer planet, etilena dapat terbentuk dari pemecahan dan rekombinasi hidrokarbon yang lebih sederhana seperti metana. Contohnya ditemukan di atmosfer beberapa planet raksasa dan bulan. Manfaat ilmiahnya adalah sebagai penanda reaksi fotokimia hidrokarbon dan sebagai salah satu langkah menuju pembentukan molekul organik yang lebih berat."
    },
    {
        formula: "C2H6",
        name: "Etana",
        composedOf: [6, 6, 1, 1, 1, 1, 1, 1],
        descriptions:
            "Etana (C₂H₆) adalah hidrokarbon jenuh dengan dua atom karbon dan enam atom hidrogen yang merupakan lanjutan paling sederhana setelah metana. Di tata surya, etana ditemukan di atmosfer planet raksasa dan menjadi bagian dari danau hidrokarbon di permukaan Titan. Di ruang antarbintang, etana bisa terbentuk di es butiran debu. Manfaat mempelajari etana adalah untuk memahami evolusi kimia hidrokarbon di atmosfer dan di permukaan benda-benda dingin, serta kaitannya dengan potensi lingkungan kimia unik seperti di Titan."
    },
    {
        formula: "HC3N",
        name: "Sianoasetilena",
        composedOf: [1, 6, 6, 6, 7],
        descriptions:
            "Sianoasetilena (HC₃N) adalah molekul linear yang menggabungkan rantai tiga karbon dengan gugus sianida, sehingga kaya akan karbon dan nitrogen. Di ruang antarbintang, HC₃N sering ditemukan di awan molekuler padat dan di cakram protoplanet. Contohnya juga terdeteksi di atmosfer Titan. Manfaatnya adalah sebagai molekul kunci dalam kimia organik kaya nitrogen dan sebagai salah satu kandidat prekursor senyawa prabiotik yang lebih kompleks."
    },
    {
        formula: "HCO+",
        name: "Ion Formil",
        composedOf: [1, 6, 8],
        descriptions:
            "Ion formil (HCO⁺) adalah kation yang terdiri dari hidrogen, karbon, dan oksigen, dan menjadi salah satu ion paling penting di awan molekuler. Di astrofisika, HCO⁺ sering digunakan untuk melacak gas padat dan terionisasi lemah karena garis spektrumnya kuat dan mudah diamati. Contohnya banyak ditemukan di wilayah pembentukan bintang dan di sekitar inti galaksi aktif. Manfaatnya bagi penelitian adalah sebagai tracer kerapatan gas tinggi dan sebagai indikator proses ionisasi kosmik."
    },
    {
        formula: "NH2CHO",
        name: "Formamida",
        composedOf: [7, 1, 1, 6, 8],
        descriptions:
            "Formamida (NH₂CHO) adalah molekul organik yang mengandung gugus amida, menggabungkan nitrogen, hidrogen, karbon, dan oksigen dalam satu struktur. Di ruang antarbintang, formamida telah terdeteksi di awan molekuler kaya organik dan di sekitar protobintang. Contohnya sering disebut sebagai salah satu molekul yang relevan dengan kimia prabiotik. Manfaat mempelajarinya adalah karena formamida dianggap dapat menjadi bahan awal pembentukan basa nitrogen DNA/RNA dan senyawa biologis lainnya."
    },
    {
        formula: "CH3CN",
        name: "Asetonitril",
        composedOf: [6, 1, 1, 1, 6, 7],
        descriptions:
            "Asetonitril (CH₃CN) adalah molekul organik yang menggabungkan gugus metil dengan gugus nitril, sehingga kaya karbon dan nitrogen. Di ruang antarbintang, acetonitrile ditemukan di daerah pembentukan bintang masif dan di awan molekuler yang sangat padat. Contohnya juga muncul dalam komposisi beberapa komet. Manfaatnya sebagai penanda lingkungan kaya organik dan sebagai langkah menuju pembentukan molekul organik kompleks yang berpotensi relevan untuk kimia kehidupan."
    },
    {
        formula: "C6H6",
        name: "Benzena",
        composedOf: [6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1],
        descriptions:
            "Benzena (C₆H₆) adalah molekul aromatik cincin dengan enam atom karbon dan enam atom hidrogen, yang menjadi struktur dasar bagi banyak senyawa aromatik lain. Dalam astrofisika, benzena dianggap sebagai salah satu blok pembangun awal dari hidrokarbon aromatik polisiklik (PAH). Contohnya telah diusulkan hadir di atmosfer Titan dan di beberapa lingkungan kaya karbon. Manfaat mempelajari benzena adalah untuk memahami bagaimana cincin aromatik terbentuk di ruang dan bagaimana PAH berkembang yang kemudian memengaruhi emisi inframerah di galaksi."
    },
    {
        formula: "SiO",
        name: "Silikon Monoksida",
        composedOf: [14, 8],
        descriptions:
            "Silikon monoksida (SiO) adalah molekul yang terdiri dari satu atom silikon dan satu atom oksigen dan sering terkait dengan debu silikat di ruang antarbintang. Di daerah pembentukan bintang dan di jet protostellar, garis emisi SiO kuat karena molekul ini dapat terbentuk ketika debu silikat hancur oleh gelombang kejut. Contohnya digunakan untuk memetakan aliran keluar gas dari bintang muda. Manfaat ilmiahnya adalah sebagai penanda proses kejut, penghancuran dan pembentukan ulang debu, serta dinamika gas di sekitar protobintang."
    },
    {
        formula: "SiS",
        name: "Silikon Sulfida",
        composedOf: [14, 16],
        descriptions:
            "Silikon sulfida (SiS) adalah molekul yang terbentuk dari atom silikon dan sulfur dan biasanya muncul di lingkungan yang kaya unsur berat di sekitar bintang tua atau bintang kaya karbon. Di cangkang gas yang mengelilingi bintang raksasa merah tertentu, SiS dapat menjadi penanda kombinasi antara kimia silikon dan sulfur. Contohnya juga telah terdeteksi dalam beberapa awan molekuler. Manfaat mempelajari SiS adalah untuk memahami bagaimana unsur berat seperti silikon dan sulfur didistribusikan ke medium antarbintang melalui angin bintang."
    },
    {
        formula: "HC5N",
        name: "Sianobutadiina",
        composedOf: [1, 6, 6, 6, 6, 6, 7],
        descriptions:
            "Sianobutadiina (HC₅N) adalah molekul rantai panjang yang menggabungkan lima atom karbon dengan gugus sianida di ujung rantai. Di ruang antarbintang, molekul ini muncul di awan molekuler yang sangat dingin dan padat di mana rantai karbon panjang dapat terbentuk. Contohnya terdeteksi di awan kaya karbon seperti TMC-1. Manfaat ilmiahnya adalah untuk melacak perkembangan rantai karbon yang semakin panjang dan untuk menguji model kimia yang menjelaskan pembentukan molekul organik kompleks."
    },
    {
        formula: "HC7N",
        name: "Sianoheksatriina",
        composedOf: [1, 6, 6, 6, 6, 6, 6, 6, 7],
        descriptions:
            "Sianoheksatriina (HC₇N) adalah rantai karbon yang lebih panjang lagi dengan tujuh atom karbon dan satu gugus sianida, menjadikannya molekul sangat panjang untuk ukuran medium antarbintang. Molekul ini biasanya ditemukan di awan molekuler sangat dingin dan tenang yang memungkinkan rantai karbon tumbuh tanpa segera hancur. Contohnya juga dikenal dari awan TMC-1. Manfaatnya adalah sebagai bukti bahwa kimia di ruang bisa menghasilkan struktur organik panjang bahkan sebelum adanya planet, memperkaya potensi bahan awal kimia kehidupan."
    },
    {
        formula: "C3H2",
        name: "Siklopropenilidena",
        composedOf: [6, 6, 6, 1, 1],
        descriptions:
            "Siklopropenilidena (C₃H₂) adalah molekul dengan tiga atom karbon dalam struktur cincin kecil dan dua atom hidrogen, sehingga mewakili salah satu cincin karbon terkecil yang diketahui di ruang. Di awan molekuler, C₃H₂ cukup umum dan dapat digunakan sebagai penanda kepadatan dan kondisi kimia tertentu. Contohnya ditemukan di berbagai lingkungan, dari awan gelap hingga wilayah HII. Manfaat mempelajarinya adalah untuk memahami pembentukan struktur cincin karbon dan hubungannya dengan molekul aromatik yang lebih besar."
    },
    {
        formula: "C3H",
        name: "Radikal Propargil",
        composedOf: [6, 6, 6, 1],
        descriptions:
            "Radikal propargil (C₃H) adalah molekul rantai pendek dengan tiga atom karbon dan satu hidrogen yang memiliki elektron tak berpasangan sehingga sangat reaktif. Di ruang antarbintang, C₃H muncul sebagai bagian dari keluarga molekul rantai karbon yang berkembang menjadi struktur lebih besar. Contohnya terdeteksi di awan kaya karbon dan di sekitar bintang karbon. Manfaat ilmiahnya adalah sebagai indikator kimia rantai karbon terbuka dan sebagai perantara menuju pembentukan hidrokarbon lebih kompleks."
    },
    {
        formula: "C3O",
        name: "Trikarbon Monoksida",
        composedOf: [6, 6, 6, 8],
        descriptions:
            "Trikarbon monoksida (C₃O) adalah molekul linear yang menggabungkan tiga atom karbon berderet dengan satu atom oksigen di ujung rantai. Di medium antarbintang, C₃O termasuk dalam kelompok molekul rantai karbon yang kaya oksigen. Contohnya ditemukan di awan molekuler tertentu dengan kondisi kimia khusus. Manfaat mempelajarinya adalah untuk mengevaluasi bagaimana oksigen terikat dalam rantai karbon dan bagaimana keseimbangan antara molekul kaya oksigen dan kaya nitrogen terbentuk di ruang."
    },
    {
        formula: "H2S",
        name: "Hidrogen Sulfida",
        composedOf: [1, 1, 16],
        descriptions:
            "Hidrogen sulfida (H₂S) adalah gas dengan dua atom hidrogen dan satu atom sulfur yang di Bumi dikenal berbau telur busuk. Di ruang antarbintang, H₂S dapat berada dalam bentuk gas maupun es yang menempel pada butiran debu. Contohnya juga ditemukan di atmosfer beberapa benda tata surya dan komet. Manfaat ilmiahnya adalah sebagai salah satu reservoir sulfur dan sebagai petunjuk bagaimana sulfur berpindah dari bentuk sederhana ke molekul sulfur yang lebih kompleks di medium antarbintang."
    },
    {
        formula: "SO",
        name: "Sulfur Monoksida",
        composedOf: [16, 8],
        descriptions:
            "Sulfur monoksida (SO) adalah molekul yang terdiri dari satu atom sulfur dan satu atom oksigen dan sering terkait dengan gas yang mengalami pemanasan atau gelombang kejut. Di daerah pembentukan bintang, SO muncul kuat ketika es sulfur menguap dan bereaksi dengan oksigen. Contohnya diamati di sekitar protobintang dan wilayah dengan aktivitas kejut. Manfaatnya adalah sebagai penanda aktivitas dinamis seperti aliran keluar gas dan sebagai bagian dari rantai reaksi kimia sulfur di ruang."
    },
    {
        formula: "SO2",
        name: "Sulfur Dioksida",
        composedOf: [16, 8, 8],
        descriptions:
            "Sulfur dioksida (SO₂) adalah molekul dengan satu atom sulfur dan dua atom oksigen yang di Bumi dikenal sebagai gas vulkanik dan polutan udara. Di antariksa, SO₂ dapat terbentuk di lingkungan yang kaya sulfur dan oksigen, misalnya di dekat objek dengan aktivitas vulkanik seperti Io, atau di awan molekuler yang dipanaskan. Contohnya dipakai untuk mengkaji proses geologis dan fotokimia. Manfaatnya adalah sebagai indikator aktivitas kimia sulfur dan kondisi energi tinggi di lingkungan tersebut."
    },
    {
        formula: "OCS",
        name: "Karbonil Sulfida",
        composedOf: [8, 6, 16],
        descriptions:
            "Karbonil sulfida (OCS) adalah molekul linear dengan atom oksigen, karbon, dan sulfur dan merupakan salah satu molekul sulfur paling umum di medium antarbintang. OCS sering ditemukan sebagai es di butiran debu maupun dalam fase gas. Contohnya terdeteksi di awan molekuler padat, komet, dan lingkungan pembentukan bintang. Manfaat mempelajari OCS adalah untuk memahami siklus sulfur antara fase padat dan gas serta kaitannya dengan pembentukan senyawa organik mengandung sulfur."
    },
    {
        formula: "H2CS",
        name: "Tioformaldehida",
        composedOf: [1, 1, 6, 16],
        descriptions:
            "Tioformaldehida (H₂CS) adalah analog sulfur dari formaldehida, di mana oksigen diganti oleh sulfur, sehingga mengandung dua hidrogen, satu karbon, dan satu sulfur. Di ruang antarbintang, H₂CS ditemukan di awan molekuler padat dan di sekitar bintang muda. Contohnya membantu membandingkan jalur reaksi kimia antara versi oksigen dan sulfur. Manfaat ilmiahnya adalah sebagai jembatan untuk memahami bagaimana kimia organik dapat bervariasi jika unsur heteroatomnya berbeda."
    },
    {
        formula: "NH2",
        name: "Radikal Amino",
        composedOf: [7, 1, 1],
        descriptions:
            "Radikal amino (NH₂) adalah spesies reaktif yang terdiri dari satu atom nitrogen dan dua atom hidrogen dengan satu elektron tak berpasangan. Di medium antarbintang, NH₂ muncul sebagai perantara dalam pembentukan senyawa nitrogen-hidrogen seperti amonia dan amina lainnya. Contohnya ditemukan di awan molekuler dan di dekat sumber radiasi kuat. Manfaat mempelajarinya adalah untuk memahami langkah awal pembentukan gugus amino yang sangat penting dalam biokimia di Bumi."
    },
    {
        formula: "HNO",
        name: "Nitrosil Hidride",
        composedOf: [1, 7, 8],
        descriptions:
            "Nitrosil hidride (HNO) adalah molekul yang menggabungkan hidrogen, nitrogen, dan oksigen dalam satu struktur kecil dan relatif reaktif. Di ruang antarbintang, HNO terdeteksi di awan molekuler dan dianggap sebagai bagian dari jaringan reaksi kimia nitrogen-oksigen. Contohnya memberikan petunjuk bagaimana NO, H₂O, dan senyawa terkait saling berhubungan. Manfaat ilmiahnya adalah sebagai penghubung dalam memahami siklus nitrogen dan oksigen dalam lingkungan astrofisika."
    },
    {
        formula: "NO+",
        name: "Ion Nitrogen Oksida",
        composedOf: [7, 8],
        descriptions:
            "Ion nitrogen oksida (NO⁺) adalah bentuk bermuatan positif dari molekul NO dan biasanya muncul di lingkungan yang terionisasi oleh radiasi kuat atau partikel energik. Di ruang antarbintang, NO⁺ dapat ditemukan di dekat sumber radiasi ultraviolet dan di wilayah HII. Contohnya menjadi indikator proses ionisasi yang intens. Manfaat mempelajarinya adalah untuk mengerti bagaimana radiasi bintang memengaruhi komposisi kimia gas di sekitarnya."
    },
    {
        formula: "HCO",
        name: "Radikal Formil",
        composedOf: [1, 6, 8],
        descriptions:
            "Radikal formil (HCO) adalah molekul kecil yang mengandung hidrogen, karbon, dan oksigen dengan satu elektron tak berpasangan sehingga sangat reaktif. Di ruang antarbintang, HCO muncul sebagai perantara dalam pembentukan formaldehida dan molekul organik lain yang berbasis karbonil. Contohnya terdeteksi di awan molekuler dan di sekitar protobintang. Manfaatnya adalah sebagai indikator jalur pembentukan molekul karbonil dan kondisi energi dalam awan."
    },
    {
        formula: "C2O",
        name: "Dikarbon Monoksida",
        composedOf: [6, 6, 8],
        descriptions:
            "Dikarbon monoksida (C₂O) adalah molekul yang terdiri dari dua atom karbon dan satu atom oksigen yang membentuk rantai pendek kaya karbon. Di medium antarbintang, C₂O termasuk dalam keluarga molekul rantai karbon yang mengandung oksigen. Contohnya teramati di awan molekuler tertentu dengan kimia khusus. Manfaat ilmiahnya adalah untuk menguji model pembentukan rantai karbon teroksigenasi dan peran oksigen dalam jaringan reaksi tersebut."
    },
    {
        formula: "C2S",
        name: "Dikarbon Monosulfida",
        composedOf: [6, 6, 16],
        descriptions:
            "Dikarbon monosulfida (C₂S) adalah molekul rantai pendek yang terdiri dari dua atom karbon dan satu atom sulfur dan sering muncul di awan molekuler dingin. Di ruang antarbintang, C₂S menjadi salah satu penanda kimia sulfur dalam fase gas. Contohnya terdeteksi di awan kaya karbon seperti TMC-1. Manfaat mempelajarinya adalah untuk memahami bagaimana sulfur bergabung dengan rantai karbon dan bagaimana distribusi sulfur berubah seiring evolusi awan."
    },
    {
        formula: "H2O+",
        name: "Ion Hidroksil Hidron",
        composedOf: [1, 1, 8],
        descriptions:
            "Ion hidroksil hidron (H₂O⁺) adalah bentuk terionisasi dari air, di mana molekul H₂O kehilangan satu elektron sehingga bermuatan positif. Di medium antarbintang dan atmosfer planet, H₂O⁺ terbentuk ketika air terpapar radiasi energik atau partikel bermuatan. Contohnya diamati di awan yang terionisasi dan di dekat komet yang disinari Matahari. Manfaat ilmiahnya adalah untuk memetakan proses ionisasi air dan peran radiasi dalam mengubah kimia molekul volatil."
    },
    {
        formula: "H3O+",
        name: "Ion Hidronium",
        composedOf: [1, 1, 1, 8],
        descriptions:
            "Ion hidronium (H₃O⁺) adalah ion yang terbentuk ketika proton (H⁺) bergabung dengan molekul air, dan dalam larutan berperan sebagai bentuk efektif ion hidrogen. Di ruang antarbintang, H₃O⁺ muncul di awan molekuler sebagai produk ionisasi air dan memainkan peran penting dalam jaringan reaksi yang menghasilkan molekul oksigen lain. Contohnya digunakan untuk mengukur tingkat ionisasi dan jumlah air di awan. Manfaatnya adalah sebagai indikator aktivitas kimia yang melibatkan air dan sebagai kunci untuk memahami keseimbangan asam–basa di gas antarbintang."
    },
    {
        formula: "NH4+",
        name: "Ion Amonium",
        composedOf: [7, 1, 1, 1, 1],
        descriptions:
            "Ion amonium (NH₄⁺) adalah kation yang merupakan bentuk terprotonasi dari amonia, dengan satu nitrogen dan empat hidrogen. Di medium antarbintang, NH₄⁺ diperkirakan muncul terutama dalam fase es di butiran debu saat asam dan basa bereaksi di permukaan. Contohnya dipahami lewat tanda-tanda spektral pada es molekuler. Manfaat mempelajarinya adalah untuk memahami kimia nitrogen dalam fase padat dan bagaimana ion ini terlibat dalam pembentukan amina dan senyawa nitrogen lain saat es menguap."
    },
    {
        formula: "CH3CHO",
        name: "Asetaldehida",
        composedOf: [6, 6, 1, 1, 1, 1, 8],
        descriptions:
            "Asetaldehida (CH₃CHO) adalah aldehida sederhana dengan dua atom karbon, empat hidrogen, dan satu oksigen yang membentuk gugus –CHO. Di ruang antarbintang, asetaldehida ditemukan di awan molekuler kaya organik dan di sekitar protobintang hangat. Contohnya menunjukkan bahwa molekul karbonil yang lebih kompleks dapat terbentuk di medium antarbintang. Manfaatnya adalah sebagai salah satu molekul perantara menuju pembentukan alkohol, asam, dan molekul organik lain yang relevan dengan kimia kehidupan."
    },
    {
        formula: "CH3NH2",
        name: "Metilamina",
        composedOf: [6, 1, 1, 1, 7, 1, 1],
        descriptions:
            "Metilamina (CH₃NH₂) adalah molekul organik yang menggabungkan gugus metil dengan gugus amino, sehingga mengandung karbon, hidrogen, dan nitrogen dalam struktur yang mirip dengan blok penyusun asam amino. Di ruang antarbintang, metilamina telah terdeteksi di lingkungan pembentukan bintang dan pada es butiran debu yang tereksitasi. Contohnya sering dikaitkan dengan kimia prabiotik. Manfaat mempelajarinya adalah untuk memahami bagaimana gugus amino dapat terbentuk sebelum adanya planet dan bagaimana hal itu membuka kemungkinan asal-usul molekul biologis."
    },
    {
        formula: "CH3SH",
        name: "Metanetiol",
        composedOf: [6, 1, 1, 1, 16, 1],
        descriptions:
            "Metanetiol (CH₃SH) adalah analog sulfur dari metanol, di mana oksigen digantikan oleh sulfur sehingga menghasilkan molekul berbau kuat dan khas. Di ruang antarbintang, keberadaan metanetiol menunjukkan bahwa sulfur juga bisa masuk ke dalam molekul organik mirip alkohol. Contohnya terdeteksi di beberapa awan molekuler kaya organik. Manfaat ilmiahnya adalah sebagai penanda kimia organik yang melibatkan sulfur dan sebagai bagian dari pemetaan penuh unsur heteroatom dalam molekul organik kosmik."
    },
    {
        formula: "C2H3CN",
        name: "Akrilonitril",
        composedOf: [6, 6, 1, 1, 1, 6, 7],
        descriptions:
            "Akrilonitril (C₂H₃CN) adalah molekul organik tak jenuh yang menggabungkan rantai karbon pendek dengan gugus nitril dan dikenal di Bumi sebagai bahan industri polimer. Di ruang antarbintang dan atmosfer Titan, akrilonitril menarik perhatian karena berpotensi membentuk struktur mirip membran dalam kondisi ekstrem. Contohnya telah dilaporkan di atmosfer Titan. Manfaat mempelajarinya adalah untuk mengeksplorasi kemungkinan bentuk kimia “membran” alternatif bagi kehidupan di lingkungan yang tidak seperti Bumi."
    },
    {
        formula: "HCOCN",
        name: "Asam Isosianat",
        composedOf: [1, 6, 8, 6, 7],
        descriptions:
            "Asam isosianat (HCOCN) adalah molekul yang mengandung kombinasi karbon, oksigen, dan nitrogen dalam struktur yang kaya energi dan relatif reaktif. Di ruang antarbintang, bentuk ini terkait dengan berbagai isomer asam sianat dan isosianat yang muncul di awan molekuler. Contohnya memberikan informasi tentang bagaimana gugus –NCO dan –CNO terbentuk dan saling bertransformasi. Manfaat ilmiahnya adalah membantu memetakan jaringan reaksi molekul mengandung CN dan CO yang relevan dengan kimia prabiotik."
    },
    {
        formula: "HNCO",
        name: "Asam Isosianat",
        composedOf: [1, 7, 6, 8],
        descriptions:
            "Asam isosianat (HNCO) adalah molekul yang menggabungkan hidrogen, nitrogen, karbon, dan oksigen dalam satu rantai pendek dan merupakan salah satu isomer penting dalam keluarga asam sianat. Di medium antarbintang, HNCO sering ditemukan di awan molekuler padat dan wilayah pembentukan bintang. Contohnya dipakai untuk menilai kondisi suhu dan kepadatan gas. Manfaatnya adalah sebagai molekul kunci untuk memahami kimia CN–CO dan sebagai calon prekursor berbagai senyawa organik nitrogen-oksigen."
    },
    {
        formula: "HOCN",
        name: "Asam Sianat",
        composedOf: [1, 8, 6, 7],
        descriptions:
            "Asam sianat (HOCN) adalah isomer lain dalam keluarga asam sianat yang menyusun ulang posisi atom hidrogen, oksigen, karbon, dan nitrogen dibanding HNCO. Di ruang antarbintang, rasio HOCN terhadap isomer lain membantu mengungkap jalur pembentukan dan kondisi kimia di awan molekuler. Contohnya memberikan gambaran mana jalur reaksi yang lebih dominan, apakah di fase gas atau di permukaan es. Manfaat ilmiahnya adalah untuk menyusun peta lengkap kimia isomerik yang terkait dengan gugus CN dan CO."
    },
    {
        formula: "NH2CN",
        name: "Sianamida",
        composedOf: [7, 1, 1, 6, 7],
        descriptions:
            "Sianamida (NH₂CN) adalah molekul yang mengandung gugus amino dan gugus sianida dalam satu struktur, sehingga kaya nitrogen dan berpotensi reaktif dalam kimia prabiotik. Di ruang antarbintang, NH₂CN ditemukan di awan molekuler yang kaya molekul organik kompleks. Contohnya dianggap relevan sebagai prekursor pembentukan basa nitrogen dan asam amino. Manfaat mempelajarinya adalah untuk mengeksplorasi bagaimana senyawa kaya nitrogen dapat berkembang menjadi blok penyusun biomolekul."
    },
    {
        formula: "CH2NH",
        name: "Metilenimina",
        composedOf: [6, 1, 1, 7, 1],
        descriptions:
            "Metilenimina (CH₂NH) adalah molekul kecil yang menggabungkan karbon, hidrogen, dan nitrogen dalam bentuk imina dan sering dianggap sebagai perantara dalam pembentukan asam amino sederhana. Di ruang antarbintang, CH₂NH telah terdeteksi di awan molekuler dan di sekitar protobintang yang hangat. Contohnya menghubungkan kimia sederhana berbasis NH₃ dan hidrokarbon dengan molekul yang lebih dekat ke struktur organik biologis. Manfaat ilmiahnya adalah sebagai jembatan penting dalam skenario kimia prabiotik di skala kosmik."
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