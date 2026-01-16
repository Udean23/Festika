const params = new URLSearchParams(window.location.search);
const planetKey = params.keys().next().value || 'jupiter';
const data = planetData[planetKey];

const textureConfig = {
    mercury: { texture: '../Tata Surya/assets/merkurius2.jpg', moons: [] },
    venus: { texture: '../Tata Surya/assets/venus2.jpg', moons: [] },
    earth: { texture: '../Tata Surya/assets/earth2.jpg', moons: [{ texture: '../Tata Surya/assets/earthmoon.jpg', size: 0.75, dist: 4 }] },
    mars: { texture: '../Tata Surya/assets/mars2.jpg', moons: [{ texture: '../Tata Surya/assets/phobos.jpg', size: 0.3, dist: 3.5 }, { texture: '../Tata Surya/assets/deimos.jpeg', size: 0.225, dist: 4.5 }] },
    jupiter: { texture: '../Tata Surya/assets/jupiter2.jpg', moons: [{ texture: '../Tata Surya/assets/lo.jpg', size: 0.45, dist: 4 }, { texture: '../Tata Surya/assets/europa.jpeg', size: 0.42, dist: 5.5 }, { texture: '../Tata Surya/assets/ganymede.jpeg', size: 0.525, dist: 7 }] },
    saturn: { texture: '../Tata Surya/assets/saturn2.jpg', moons: [{ texture: '../Tata Surya/assets/titan.png', size: 0.6, dist: 6 }, { texture: '../Tata Surya/assets/dione.jpeg', size: 0.3, dist: 4.5 }, { texture: '../Tata Surya/assets/enceladus.jpeg', size: 0.27, dist: 3.5 }] },
    uranus: { texture: '../Tata Surya/assets/uranus2.png', moons: [{ texture: '../Tata Surya/assets/miranda.jpeg', size: 0.3, dist: 4 }, { texture: '../Tata Surya/assets/ariel.jpeg', size : 0.33, dist : 5 }, { texture : '../Tata Surya/assets/umbriel.jpeg' , size : 0.315 , dist :6 } ]},
    neptune :{texture:'../Tata Surya/assets/neptune2.jpg' , moons:[{texture:'../Tata Surya/assets/triton.png' ,size :0.45 ,dist :5},{texture:'../Tata Surya/assets/proteus.jpg' ,size :0.27 ,dist :4},{texture:'../Tata Surya/assets/nereid.png' ,size :0.225 ,dist :6}]},
    pluto:{texture:'../Tata Surya/assets/pluto2.png' ,moons:[ ]}
};

const container = document.getElementById('planet-viewer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(8, 6, 8);
directionalLight.castShadow = true;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

const textureLoader = new THREE.TextureLoader();
const planetTexture = textureLoader.load(textureConfig[planetKey].texture);
const geometry = new THREE.SphereGeometry(2.5, 64, 64);
const material = new THREE.MeshPhongMaterial({ 
    map: planetTexture, 
    shininess: 20,
    emissive: 0x111111
});
const planet = new THREE.Mesh(geometry, material);
planet.castShadow = true;
planet.receiveShadow = true;
scene.add(planet);

const moons = [];
const moonData = textureConfig[planetKey].moons;
moonData.forEach(m => {
    const moonTex = textureLoader.load(m.texture);
    const moonGeo = new THREE.SphereGeometry(m.size, 32, 32);
    const moonMat = new THREE.MeshPhongMaterial({ 
        map: moonTex,
        shininess: 10,
        emissive: 0x0a0a0a
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    moonMesh.castShadow = true;
    moonMesh.receiveShadow = true;
    const angle = Math.random() * Math.PI * 2;
    const speed = (0.002 + Math.random() * 0.005) * (Math.random() > 0.5 ? 1 : -1);
    moons.push({ mesh: moonMesh, radius: m.dist, speed: speed, angle: angle });
    scene.add(moonMesh);
});

camera.position.z = 8;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 5;
controls.maxDistance = 15;

document.getElementById("planet-name").textContent = data.name;
document.getElementById("planet-type").textContent = data.type;

const slider = document.getElementById("info-slider");

const getJupiterInfo = () => [
    { title: "Gambaran Umum Jupiter", text: "Jupiter adalah planet terbesar di Tata Surya dan merupakan planet kelima dari Matahari. Planet ini termasuk raksasa gas yang tersusun terutama dari hidrogen dan helium, serta memiliki massa paling besar dibandingkan planet lain." },
    { title: "Tampilan Jupiter", text: "Jupiter tampak memiliki garis-garis awan berwarna cokelat, putih, dan oranye yang membentang di seluruh permukaannya. Ciri paling khasnya adalah Bintik Merah Besar, yaitu badai raksasa yang telah berlangsung selama ratusan tahun." },
    { title: "Struktur dan Tekstur Jupiter", text: "Jupiter tidak memiliki permukaan padat. Bagian luarnya berupa lapisan gas tebal, sedangkan bagian dalammya terdiri atas gas cair bertekanan tinggi dengan inti yang sangat panas dan padat." },
    { title: "Atmosfer dan Kondisi Alam", text: "Atmosfer Jupiter sangat aktif dengan badai besar dan angin berkecepatan tinggi. Planet ini juga memiliki medan magnet terkuat di Tata Surya." },
    { title: "Satelit Alami Jupiter", text: "Jupiter memiliki puluhan satelit alami, termasuk empat satelit terbesar yang dikenal sebagai satelit Galilea, yaitu Io, Europa, Ganymede, dan Callisto. Ganymede bahkan merupakan satelit terbesar di Tata Surya." },
    { title: "Medan Magnet Jupiter", text: "Jupiter memiliki medan magnet terkuat di antara seluruh planet. Medan magnet ini sangat luas dan berperan penting dalam melindungi satelit-satelit alaminya dari radiasi luar angkasa." },
    { title: "Julukan Jupiter", text: "Jupiter dijuluki sebagai \"Raja Planet\" karena ukurannya yang sangat besar serta pengaruh gravitasinya yang kuat dalam menjaga kestabilan Tata Surya." }
];

const getOtherInfo = (d) => [
    { title: `Gambaran Umum ${d.name}`, text: d.description },
    { title: `Tampilan ${d.name}`, text: `Permukaan planet ini memiliki karakteristik unik dengan ${d.facts[0].toLowerCase() || "detail visual yang menakjubkan"}.` },
    { title: `Struktur dan Tekstur ${d.name}`, text: `Memiliki diameter sebesar ${d.size}. Massa planet ini diperkirakan mencapai ${d.mass}.` },
    { title: `Atmosfer dan Kondisi Alam`, text: `Suhu rata-rata permukaan adalah ${d.temp}. Membutuhkan waktu ${d.orbital} untuk satu kali revolusi.` },
    { title: `Satelit Alami ${d.name}`, text: `Memiliki ${d.moons} satelit alami yang teridentifikasi hingga saat ini.` },
    { title: `Medan Magnet ${d.name}`, text: `Memiliki medan magnet yang unik yang melindungi planet dari radiasi luar angkasa.` },
    { title: `Julukan ${d.name}`, text: `Satu hari di planet ini berlangsung selama ${d.rotation}. Kunjungi NASA untuk info lebih lanjut.` }
];

const infoSections = (planetKey === 'jupiter') ? getJupiterInfo() : getOtherInfo(data);

let currentSlide = 0;
const totalSlides = infoSections.length;
let lastDirection = 'down';

function updateSlider() {
    const allSections = slider.querySelectorAll('.info-section');
    allSections.forEach((section, index) => {
        section.classList.remove('active', 'next', 'prev', 'slide-up', 'slide-down');
        if (index === currentSlide) {
            section.classList.add('active');
            if (lastDirection === 'down') {
                section.classList.add('slide-up');
            } else {
                section.classList.add('slide-down');
            }
        } else if (index === (currentSlide + 1) % totalSlides) {
            section.classList.add('next');
        } else if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
            section.classList.add('prev');
        }
    });
}

function slideNext() {
    lastDirection = 'down';
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function slidePrev() {
    lastDirection = 'up';
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

infoSections.forEach((info, index) => {
    const div = document.createElement("div");
    let classes = "info-section";
    if (index === 0) classes += " active";
    if (index === 1) classes += " next";
    if (index === totalSlides - 1) classes += " prev";
    
    div.className = classes;
    
    const nextIndex = (index + 1) % totalSlides;
    const prevIndex = (index - 1 + totalSlides) % totalSlides;
    const nextInfo = infoSections[nextIndex];
    const prevInfo = infoSections[prevIndex];
    
    div.innerHTML = `
        <div class="silhouette-preview-top">
            <h4 class="silhouette-title">${prevInfo.title}</h4>
            <p class="silhouette-text">${prevInfo.text}</p>
        </div>
        <div class="info-content-wrapper">
            <div class="info-nav-btn btn-up" data-dir="up"><i class="fa-solid fa-arrow-up text-xl"></i></div>
            <h3 class="info-title">${info.title}</h3>
            <p class="info-text">${info.text}</p>
            <div class="info-nav-btn btn-down" data-dir="down"><i class="fa-solid fa-arrow-down text-xl"></i></div>
        </div>
        <div class="silhouette-preview">
            <h4 class="silhouette-title">${nextInfo.title}</h4>
            <p class="silhouette-text">${nextInfo.text}</p>
        </div>
    `;

    div.querySelector('.btn-up').onclick = slidePrev;
    div.querySelector('.btn-down').onclick = slideNext;

    slider.appendChild(div);
});

const planetKeys = Object.keys(planetData);
const currentIndex = planetKeys.indexOf(planetKey);
const prevKey = planetKeys[(currentIndex - 1 + planetKeys.length) % planetKeys.length];
const nextKey = planetKeys[(currentIndex + 1) % planetKeys.length];

const prevEl = document.getElementById('prev-planet');
const nextEl = document.getElementById('next-planet');

prevEl.querySelector('span').textContent = `Jelajahi ${planetData[prevKey].name}`;
prevEl.querySelector('div').style.backgroundImage = `url(${textureConfig[prevKey].texture})`;
prevEl.onclick = () => window.location.search = `?${prevKey}`;

nextEl.querySelector('span').textContent = `Jelajahi ${planetData[nextKey].name}`;
nextEl.querySelector('div').style.backgroundImage = `url(${textureConfig[nextKey].texture})`;
nextEl.onclick = () => window.location.search = `?${nextKey}`;

document.getElementById("back-btn").onclick = () => {
    window.location.href = "./index.html";
};

function animate() {
    requestAnimationFrame(animate);
    planet.rotation.y += 0.001;
    moons.forEach(m => {
        m.angle += m.speed;
        m.mesh.position.x = Math.cos(m.angle) * m.radius;
        m.mesh.position.z = Math.sin(m.angle) * m.radius;
        m.mesh.rotation.y += 0.01;
    });
    controls.update();
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

animate();
