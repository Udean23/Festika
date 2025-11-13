const planetData = {
    sun: {
        name: "Sun",
        type: "G-Type Main-Sequence Star",
        description: "The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun is by far the most important source of energy for life on Earth.",
        diameter: "1,392,000 km",
        mass: "1.989 × 10³⁰ kg",
        orbital: "N/A (Center of Solar System)",
        rotation: "25-35 days",
        moons: "N/A",
        temp: "5,500°C (surface)",
        facts: [
            "The Sun contains 99.86% of the mass in the Solar System",
            "About 1 million Earths could fit inside the Sun",
            "The Sun is 4.6 billion years old",
            "Energy from the Sun takes 8 minutes to reach Earth"
        ]
    },
    mercury: {
        name: "Mercury",
        type: "Terrestrial Planet",
        description: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets. It has no atmosphere to retain heat, causing extreme temperature variations.",
        diameter: "4,879 km",
        mass: "3.30 × 10²³ kg",
        orbital: "88 days",
        rotation: "59 days",
        moons: "0",
        temp: "-173°C to 427°C",
        facts: [
            "Mercury is the fastest planet, orbiting the Sun at 47 km/s",
            "A day on Mercury lasts 176 Earth days",
            "Despite being closest to the Sun, it's not the hottest planet",
            "Mercury has a large iron core making up 75% of its radius"
        ]
    },
    venus: {
        name: "Venus",
        type: "Terrestrial Planet",
        description: "Venus is the second planet from the Sun and Earth's closest planetary neighbor. It's similar in structure and size to Earth, but has a thick, toxic atmosphere that traps heat in a runaway greenhouse effect, making it the hottest planet.",
        diameter: "12,104 km",
        mass: "4.87 × 10²⁴ kg",
        orbital: "225 days",
        rotation: "243 days (retrograde)",
        moons: "0",
        temp: "462°C average",
        facts: [
            "Venus rotates backwards compared to other planets",
            "A day on Venus is longer than its year",
            "Venus is the brightest natural object in the night sky after the Moon",
            "The atmospheric pressure on Venus is 92 times that of Earth"
        ]
    },
    earth: {
        name: "Earth",
        type: "Terrestrial Planet",
        description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. Its surface is 71% water and 29% land, with an atmosphere rich in nitrogen and oxygen that protects life from harmful solar radiation.",
        diameter: "12,742 km",
        mass: "5.97 × 10²⁴ kg",
        orbital: "365.26 days",
        rotation: "24 hours",
        moons: "1",
        temp: "-88°C to 58°C",
        facts: [
            "Earth is the only planet not named after a god",
            "A year on Earth isn't exactly 365 days",
            "Earth has a powerful magnetic field that protects us from solar radiation",
            "The Earth's core is as hot as the Sun's surface"
        ]
    },
    mars: {
        name: "Mars",
        type: "Terrestrial Planet",
        description: "Mars is the fourth planet from the Sun, known as the Red Planet due to iron oxide on its surface. It has the largest volcano and canyon in the Solar System, and evidence suggests it once had liquid water on its surface.",
        diameter: "6,779 km",
        mass: "6.42 × 10²³ kg",
        orbital: "687 days",
        rotation: "24.6 hours",
        moons: "2 (Phobos and Deimos)",
        temp: "-87°C to -5°C",
        facts: [
            "Mars has the tallest volcano in the solar system: Olympus Mons",
            "A day on Mars is very similar to a day on Earth",
            "Mars has seasons like Earth due to its tilted axis",
            "Pieces of Mars have fallen to Earth as meteorites"
        ]
    },
    jupiter: {
        name: "Jupiter",
        type: "Gas Giant",
        description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It's a gas giant with a mass more than twice that of all other planets combined. Jupiter's famous Great Red Spot is a giant storm larger than Earth.",
        diameter: "139,820 km",
        mass: "1.90 × 10²⁷ kg",
        orbital: "11.86 years",
        rotation: "9.9 hours",
        moons: "95+",
        temp: "-108°C average",
        facts: [
            "Jupiter has the shortest day of all planets",
            "The Great Red Spot has been raging for at least 400 years",
            "Jupiter's moon Ganymede is the largest moon in the Solar System",
            "Jupiter acts as a cosmic vacuum cleaner, protecting Earth from asteroids"
        ]
    },
    saturn: {
        name: "Saturn",
        type: "Gas Giant",
        description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System. It's best known for its spectacular ring system, made mostly of ice particles with a smaller amount of rocky debris and dust.",
        diameter: "116,460 km",
        mass: "5.68 × 10²⁶ kg",
        orbital: "29.46 years",
        rotation: "10.7 hours",
        moons: "146+",
        temp: "-139°C average",
        facts: [
            "Saturn is the least dense planet and would float in water",
            "Its rings are only about 10 meters thick",
            "Saturn's moon Titan has a thick atmosphere and liquid lakes",
            "Saturn has a hexagonal storm at its north pole"
        ]
    },
    uranus: {
        name: "Uranus",
        type: "Ice Giant",
        description: "Uranus is the seventh planet from the Sun and the first planet discovered with a telescope. It rotates on its side, making it unique among the planets. Its atmosphere contains hydrogen, helium, and methane, giving it a blue-green color.",
        diameter: "50,724 km",
        mass: "8.68 × 10²⁵ kg",
        orbital: "84 years",
        rotation: "17.2 hours (retrograde)",
        moons: "27+",
        temp: "-197°C average",
        facts: [
            "Uranus rotates on its side at a 98-degree angle",
            "It was the first planet discovered using a telescope",
            "Uranus has 13 known rings",
            "A season on Uranus lasts 21 Earth years"
        ]
    },
    neptune: {
        name: "Neptune",
        type: "Ice Giant",
        description: "Neptune is the eighth and farthest planet from the Sun in the Solar System. It's an ice giant with the strongest winds in the solar system, reaching speeds of 2,100 km/h. Neptune was the first planet located through mathematical predictions.",
        diameter: "49,244 km",
        mass: "1.02 × 10²⁶ kg",
        orbital: "164.8 years",
        rotation: "16.1 hours",
        moons: "14+",
        temp: "-201°C average",
        facts: [
            "Neptune has the strongest winds in the Solar System",
            "It was discovered through mathematical calculations before being seen",
            "Neptune's largest moon Triton orbits backwards",
            "A year on Neptune equals 165 Earth years"
        ]
    }
};