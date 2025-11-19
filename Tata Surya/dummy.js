const planetData = {
    mercury: {
        name: "Merkurius",
        type: "Planet Terestrial (kebumian)",
        description: "Merkurius adalah planet terkecil di tata surya kita dan paling dekat dengan Matahari. Ukurannya hanya sedikit lebih besar daripada Bulan Bumi. Dari permukaan Merkurius, Matahari akan tampak tiga kali lebih besar daripada jika dilihat dari Bumi, dan cahaya Matahari akan tujuh kali lebih terang.",
        distance: "58 juta kilometer (36 juta mil)",
        mass: "3,285 × 10²³ kg (0,055 kali massa Bumi)",
        orbital: "88 hari",
        rotation: "59 hari",
        moons: "0",
        temp: "333°F (167°C)",
        size: "2.440 kilometer (1.516 mil)",
        image: "../assets/merkurius2.jpg",
        url: "https://science.nasa.gov/mercury/",
        facts: [
            "Merkurius adalah planet tercepat, mengorbit Matahari dengan kecepatan 47 km/detik",
            "Satu hari di Merkurius setara dengan 176 hari Bumi",
            "Meskipun paling dekat dengan Matahari, bukan yang terpanas",
            "Merkurius memiliki inti besi besar yang membentuk 75% radiusnya"
        ]
    },
    venus: {
        name: "Venus",
        type: "Planet Terestrial (kebumian)",
        description: "Venus adalah planet kedua dari Matahari, dan tetangga terdekat Bumi. Venus adalah objek paling terang ketiga di langit setelah Matahari dan Bulan. Venus berputar perlahan ke arah yang berlawanan dengan kebanyakan planet. Venus memiliki struktur dan ukuran yang mirip dengan Bumi, dan terkadang disebut kembaran jahat Bumi. Atmosfernya yang tebal memerangkap panas dalam efek rumah kaca yang tak terkendali, menjadikannya planet terpanas di tata surya kita dengan suhu permukaan yang cukup panas untuk melelehkan timah. Di bawah awan yang padat dan persisten, permukaannya memiliki gunung berapi dan pegunungan yang terdeformasi.",
        distance: "108 juta kilometer (67 juta mil)",
        mass: "4,867 × 10²⁴ kg (0,815 kali massa Bumi)",
        orbital: "225 hari",
        rotation: "243 hari (berputar terbalik)",
        moons: "0",
        temp: "867°F (464°C)",
        size: "12.104 km",
        image: "../assets/venus2.jpg",
        url: "https://science.nasa.gov/venus/",
        facts: [
            "Venus berotasi berlawanan arah dengan planet lain",
            "Satu hari di Venus lebih panjang dari satu tahunnya",
            "Venus adalah objek alami paling terang di langit malam setelah Bulan",
            "Tekanan atmosfer Venus 92 kali lipat tekanan di Bumi"
        ]
    },
    earth: {
        name: "Bumi",
        type: "Planet Terestrial (kebumian)",
        description: "Meskipun Bumi hanya planet terbesar kelima di tata surya, ia adalah satu-satunya planet di tata surya kita yang memiliki air cair di permukaannya. Hanya sedikit lebih besar dari Venus di dekatnya, Bumi adalah planet terbesar dari empat planet terdekat dengan Matahari, yang semuanya terbuat dari batuan dan logam.",
        distance: "150 juta kilometer (93 juta mil)",
        mass: "5,972 × 10²⁴ kg",
        orbital: "365,25 hari",
        rotation: "23,9 jam",
        moons: "1 (Bulan)",
        temp: "59°F (15°C)",
        size: "12.756 kilometer (7.926 mil)",
        image: "../assets/earth2.jpg",
        url: "https://science.nasa.gov/earth/",
        facts: [
            "Bumi adalah satu-satunya planet yang tidak dinamai dari dewa",
            "Satu tahun di Bumi tidak tepat 365 hari",
            "Bumi memiliki medan magnet kuat yang melindungi dari radiasi Matahari",
            "Inti Bumi memiliki suhu setara dengan permukaan Matahari"
        ]
    },
    mars: {
        name: "Mars",
        type: "Planet Terestrial (kebumian)",
        description: "Mars adalah planet keempat dari Matahari, dikenal sebagai Planet Merah karena oksida besi di permukaannya. Mars memiliki gunung berapi dan ngarai terbesar di Tata Surya, dan bukti menunjukkan bahwa pernah ada air cair di permukaannya.",
        distance: "228 juta kilometer (142 juta mil)",
        mass: "6,39 × 10²³ kg (0,107 kali massa Bumi)",
        orbital: "687 hari",
        rotation: "24,6 jam",
        moons: "2 (Phobos dan Deimos)",
        temp: "-85°F (-65°C)",
        size: "6.779 km",
        image: "../assets/mars2.jpg",
        url: "https://science.nasa.gov/mars/",
        facts: [
            "Mars memiliki gunung berapi tertinggi di Tata Surya: Olympus Mons (21 km)",
            "Satu hari di Mars hampir sama dengan di Bumi",
            "Mars memiliki musim seperti Bumi karena kemiringan sumbunya",
            "Potongan batu dari Mars pernah jatuh ke Bumi sebagai meteorit"
        ]
    },
    jupiter: {
        name: "Jupiter",
        type: "Raksasa Gas (gas giant)",
        description: "Jupiter adalah planet terbesar dan tertua di tata surya kita. Jika Jupiter adalah cangkang berongga, 1.000 Bumi bisa muat di dalamnya. Namun, Raja Planet ini bukanlah raksasa yang lamban Jupiter memiliki hari terpendek di tata surya, membutuhkan waktu sekitar 9,9 jam untuk berputar sekali pada porosnya. Jupiter adalah planet kelima dari Matahari dan yang terbesar di Tata Surya.",
        distance: "778 juta kilometer (484 juta mil)",
        mass: "1,898 × 10²⁷ kg (317,8 kali massa Bumi)",
        orbital: "11,86 tahun",
        rotation: "9,9 jam",
        moons: "95+ (Empat satelit terbesarnya – Io, Europa, Ganymede, dan Callisto)",
        size: "139.820 km",
        temp: "-166°F (-110°C)",
        image: "../assets/jupiter2.jpg",
        url: "https://science.nasa.gov/jupiter/",
        facts: [
            "Jupiter memiliki waktu rotasi tercepat di antara semua planet",
            "Bintik Merah Besar telah berlangsung setidaknya selama 400 tahun",
            "Bulan Ganymede milik Jupiter adalah bulan terbesar di Tata Surya",
            "Jupiter bertindak seperti penyedot kosmik, melindungi Bumi dari asteroid"
        ]
    },
    saturn: {
        name: "Saturnus",
        type: "Raksasa Gas (gas giant)",
        description: "Saturnus adalah planet keenam dari Matahari dan yang kedua terbesar di Tata Surya. Ia terkenal karena sistem cincinnya yang spektakuler. Saturnus bukan satu-satunya planet yang memiliki cincin, tetapi tidak ada yang sehebat atau serumit cincin Saturnus. Cincin ini terdiri dari partikel es dengan sedikit puing batuan dan debu.",
        distance: "1,4 miliar kilometer (886 juta mil)",
        mass: "5,683 × 10²⁶ kg (95,2 kali massa Bumi)",
        orbital: "29,46 tahun",
        rotation: "10,7 jam",
        moons: "146+",
        temp: "-220°F (-140°C)",
        size: "116.460 km",
        image: "../assets/saturn2.jpg",
        url: "https://science.nasa.gov/saturn/",
        facts: [
            "Saturnus adalah planet dengan kerapatan paling rendah dan dapat mengapung di air",
            "Cincinnya hanya sekitar 10 meter tebalnya",
            "Bulan Titan milik Saturnus memiliki atmosfer tebal dan danau cair",
            "Saturnus memiliki badai berbentuk heksagonal di kutub utaranya"
        ]
    },
    uranus: {
        name: "Uranus",
        type: "Raksasa Es (ice giant)",
        description: "Uranus adalah planet ketujuh dari Matahari dan merupakan planet pertama yang ditemukan menggunakan teleskop. Ia berputar miring pada sisinya, menjadikannya unik di antara planet lain. Atmosfernya terdiri dari hidrogen, helium, dan metana yang memberikan warna biru-hijau.",
        distance: "2,9 miliar kilometer (1,8 miliar mil)",
        mass: "8,681 × 10²⁵ kg (14,5 kali massa Bumi)",
        orbital: "84 tahun",
        rotation: "17,2 jam (berputar terbalik)",
        moons: "27. Lima bulan yang paling besar adalah Titania, Oberon, Umbriel, Ariel, dan Miranda",
        temp: "-320°F (-195°C)",
        size: "50.724 km",
        image: "../assets/uranus2.png",
        url: "https://science.nasa.gov/uranus/",
        facts: [
            "Uranus berputar miring dengan sudut 98 derajat",
            "Merupakan planet pertama yang ditemukan dengan teleskop",
            "Uranus memiliki 13 cincin yang diketahui",
            "Satu musim di Uranus berlangsung selama 21 tahun Bumi"
        ]
    },
    neptune: {
        name: "Neptunus",
        type: "Raksasa Es (ice giant)",
        description: "Neptunus adalah planet kedelapan dan terjauh dari Matahari di Tata Surya. Ia merupakan raksasa es (ice giant) dengan angin terkuat di Tata Surya yang mencapai kecepatan 2.100 km/jam. Neptunus adalah planet pertama yang ditemukan melalui perhitungan matematika.",
        distance: "4,5 miliar kilometer (2,8 miliar mil)",
        mass: "1,024 × 10²⁶ kg (17,1 kali massa Bumi)",
        orbital: "164,8 tahun",
        rotation: "16,1 jam",
        moons: "14. Bulan terbesar adalah Triton",
        temp: "-330°F (-200°C)",
        size: "49.244 km",
        image: "../assets/neptune2.jpg",
        url: "https://science.nasa.gov/neptune/",
        facts: [
            "Neptunus memiliki angin terkuat di Tata Surya",
            "Ditemukan melalui perhitungan matematika sebelum terlihat",
            "Bulan terbesar Neptunus, Triton, mengorbit berlawanan arah",
            "Satu tahun di Neptunus setara dengan 165 tahun Bumi"
        ]
    },
    pluto: {
        name: "Pluto",
        type: "Planet Katai",
        description: "Pluto adalah planet katai di sabuk Kuiper, sebuah wilayah objek es di luar Neptunus. Pluto ditemukan pada tahun 1930 dan sempat diklasifikasikan sebagai planet kesembilan hingga 2006. Pluto memiliki permukaan es dengan gunung-gunung yang terbuat dari air beku dan atmosfer tipis yang mengembang ketika mendekati Matahari.",
        distance: "5,9 miliar kilometer (3,7 miliar mil) rata-rata",
        mass: "1,309 × 10²² kg (0,00218 kali massa Bumi)",
        orbital: "248 tahun",
        rotation: "6,4 hari",
        moons: "5 (Charon, Styx, Nix, Kerberos, Hydra)",
        temp: "-375°F (-225°C)",
        size: "2.377 km",
        image: "../assets/pluto2.jpg",
        url: "https://science.nasa.gov/pluto/",
        facts: [
            "Pluto lebih kecil dari Bulan Bumi",
            "Memiliki atmosfer tipis yang membeku ketika menjauh dari Matahari",
            "Bulan Charon hampir setengah ukuran Pluto",
            "New Horizons adalah wahana pertama yang memotret Pluto dari dekat pada 2015"
        ]
    }
};