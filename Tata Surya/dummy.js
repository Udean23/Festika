const planetData = {
    mercury: {
        name: "Merkurius",
        type: "Planet Terestrial",
        description: "Merkurius adalah planet terkecil dan terdekat dengan Matahari. Orbitnya mengelilingi Matahari selama 87,97 hari Bumi, yang merupakan yang tercepat di antara semua planet. Ia tidak memiliki atmosfer untuk menahan panas, sehingga mengalami perbedaan suhu ekstrem.",
        diameter: "4.879 km",
        mass: "3,30 × 10²³ kg",
        orbital: "88 hari",
        rotation: "59 hari",
        moons: "0",
        temp: "-173°C hingga 427°C",
        facts: [
            "Merkurius adalah planet tercepat, mengorbit Matahari dengan kecepatan 47 km/detik",
            "Satu hari di Merkurius setara dengan 176 hari Bumi",
            "Meskipun paling dekat dengan Matahari, bukan yang terpanas",
            "Merkurius memiliki inti besi besar yang membentuk 75% radiusnya"
        ]
    },
    venus: {
        name: "Venus",
        type: "Planet Terestrial",
        description: "Venus adalah planet kedua dari Matahari dan merupakan tetangga terdekat Bumi. Ukurannya mirip dengan Bumi, tetapi memiliki atmosfer tebal beracun yang menahan panas akibat efek rumah kaca ekstrem, menjadikannya planet terpanas di Tata Surya.",
        diameter: "12.104 km",
        mass: "4,87 × 10²⁴ kg",
        orbital: "225 hari",
        rotation: "243 hari (berputar terbalik)",
        moons: "0",
        temp: "462°C rata-rata",
        facts: [
            "Venus berotasi berlawanan arah dengan planet lain",
            "Satu hari di Venus lebih panjang dari satu tahunnya",
            "Venus adalah objek alami paling terang di langit malam setelah Bulan",
            "Tekanan atmosfer Venus 92 kali lipat tekanan di Bumi"
        ]
    },
    earth: {
        name: "Bumi",
        type: "Planet Terestrial",
        description: "Bumi adalah planet ketiga dari Matahari dan satu-satunya benda astronomi yang diketahui mendukung kehidupan. Permukaannya terdiri dari 71% air dan 29% daratan, dengan atmosfer kaya nitrogen dan oksigen yang melindungi kehidupan dari radiasi berbahaya Matahari.",
        diameter: "12.742 km",
        mass: "5,97 × 10²⁴ kg",
        orbital: "365,26 hari",
        rotation: "24 jam",
        moons: "1",
        temp: "-88°C hingga 58°C",
        facts: [
            "Bumi adalah satu-satunya planet yang tidak dinamai dari dewa",
            "Satu tahun di Bumi tidak tepat 365 hari",
            "Bumi memiliki medan magnet kuat yang melindungi dari radiasi Matahari",
            "Inti Bumi memiliki suhu setara dengan permukaan Matahari"
        ]
    },
    mars: {
        name: "Mars",
        type: "Planet Terestrial",
        description: "Mars adalah planet keempat dari Matahari, dikenal sebagai Planet Merah karena oksida besi di permukaannya. Mars memiliki gunung berapi dan ngarai terbesar di Tata Surya, dan bukti menunjukkan bahwa pernah ada air cair di permukaannya.",
        diameter: "6.779 km",
        mass: "6,42 × 10²³ kg",
        orbital: "687 hari",
        rotation: "24,6 jam",
        moons: "2 (Phobos dan Deimos)",
        temp: "-87°C hingga -5°C",
        facts: [
            "Mars memiliki gunung berapi tertinggi di Tata Surya: Olympus Mons",
            "Satu hari di Mars hampir sama dengan di Bumi",
            "Mars memiliki musim seperti Bumi karena kemiringan sumbunya",
            "Potongan batu dari Mars pernah jatuh ke Bumi sebagai meteorit"
        ]
    },
    jupiter: {
        name: "Jupiter",
        type: "Raksasa Gas",
        description: "Jupiter adalah planet kelima dari Matahari dan yang terbesar di Tata Surya. Ia merupakan raksasa gas dengan massa lebih dari dua kali gabungan semua planet lainnya. Bintik Merah Besar Jupiter adalah badai raksasa yang lebih besar dari Bumi.",
        diameter: "139.820 km",
        mass: "1,90 × 10²⁷ kg",
        orbital: "11,86 tahun",
        rotation: "9,9 jam",
        moons: "95+",
        temp: "-108°C rata-rata",
        facts: [
            "Jupiter memiliki waktu rotasi tercepat di antara semua planet",
            "Bintik Merah Besar telah berlangsung setidaknya selama 400 tahun",
            "Bulan Ganymede milik Jupiter adalah bulan terbesar di Tata Surya",
            "Jupiter bertindak seperti penyedot kosmik, melindungi Bumi dari asteroid"
        ]
    },
    saturn: {
        name: "Saturnus",
        type: "Raksasa Gas",
        description: "Saturnus adalah planet keenam dari Matahari dan yang kedua terbesar di Tata Surya. Ia terkenal karena sistem cincinnya yang spektakuler, terdiri dari partikel es dengan sedikit puing batuan dan debu.",
        diameter: "116.460 km",
        mass: "5,68 × 10²⁶ kg",
        orbital: "29,46 tahun",
        rotation: "10,7 jam",
        moons: "146+",
        temp: "-139°C rata-rata",
        facts: [
            "Saturnus adalah planet dengan kerapatan paling rendah dan dapat mengapung di air",
            "Cincinnya hanya sekitar 10 meter tebalnya",
            "Bulan Titan milik Saturnus memiliki atmosfer tebal dan danau cair",
            "Saturnus memiliki badai berbentuk heksagonal di kutub utaranya"
        ]
    },
    uranus: {
        name: "Uranus",
        type: "Raksasa Es",
        description: "Uranus adalah planet ketujuh dari Matahari dan merupakan planet pertama yang ditemukan menggunakan teleskop. Ia berputar miring pada sisinya, menjadikannya unik di antara planet lain. Atmosfernya terdiri dari hidrogen, helium, dan metana yang memberikan warna biru-hijau.",
        diameter: "50.724 km",
        mass: "8,68 × 10²⁵ kg",
        orbital: "84 tahun",
        rotation: "17,2 jam (berputar terbalik)",
        moons: "27+",
        temp: "-197°C rata-rata",
        facts: [
            "Uranus berputar miring dengan sudut 98 derajat",
            "Merupakan planet pertama yang ditemukan dengan teleskop",
            "Uranus memiliki 13 cincin yang diketahui",
            "Satu musim di Uranus berlangsung selama 21 tahun Bumi"
        ]
    },
    neptune: {
        name: "Neptunus",
        type: "Raksasa Es",
        description: "Neptunus adalah planet kedelapan dan terjauh dari Matahari di Tata Surya. Ia merupakan raksasa es dengan angin terkuat di Tata Surya yang mencapai kecepatan 2.100 km/jam. Neptunus adalah planet pertama yang ditemukan melalui perhitungan matematika.",
        diameter: "49.244 km",
        mass: "1,02 × 10²⁶ kg",
        orbital: "164,8 tahun",
        rotation: "16,1 jam",
        moons: "14+",
        temp: "-201°C rata-rata",
        facts: [
            "Neptunus memiliki angin terkuat di Tata Surya",
            "Ditemukan melalui perhitungan matematika sebelum terlihat",
            "Bulan terbesar Neptunus, Triton, mengorbit berlawanan arah",
            "Satu tahun di Neptunus setara dengan 165 tahun Bumi"
        ]
    }
};

