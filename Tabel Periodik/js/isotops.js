const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let w, h;

function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
}
resize();
window.addEventListener('resize', resize);

function drawOrbitRing(x, y, radiusX, radiusY, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    let orbitWidth = 20;
    for (let i = 0; i < orbitWidth; i++) {
        let alpha = 0.2 * (1 - i / orbitWidth);
        ctx.strokeStyle = `rgba(180, 180, 180, ${alpha})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(0, 0, radiusX - i, radiusY - i * 0.45, 0, 0, Math.PI * 2);
        ctx.stroke();
    }

    ctx.restore();
}

function drawGradientBall(x, y, radius, colorCenter, colorEdge) {
    let gradient = ctx.createRadialGradient(x - radius / 3, y - radius / 3, radius / 8, x, y, radius);
    gradient.addColorStop(0, colorCenter);
    gradient.addColorStop(1, colorEdge);
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.shadowColor = colorCenter;
    ctx.shadowBlur = 12;
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
}

const atoms = [
    {
        name: 'Protium',
        label: ['1 proton', '1 elektron'],
        labelPos: { x: 170, y: -70 },
        labelLineTo: { x: 20, y: -50 },
        dotLineRadius: 6,
        x: w * 0.2,
        y: h * 0.3,
        protons: 1,
        neutrons: 0,
        electrons: 1,
        protonColorCenter: '#ff6464',
        protonColorEdge: '#7a0000',
        neutronColorCenter: null,
        neutronColorEdge: null
    },
    {
        name: 'Deuterium',
        label: ['1 proton', '1 neutron', '1 elektron'],
        labelPos: { x: 180, y: 90 },
        labelLineTo: { x: 80, y: 50 },
        dotLineRadius: 6,
        x: w * 0.45,
        y: h * 0.45,
        protons: 1,
        neutrons: 1,
        electrons: 1,
        protonColorCenter: '#ff6464',
        protonColorEdge: '#7a0000',
        neutronColorCenter: '#6699ff',
        neutronColorEdge: '#00307a'
    },
    {
        name: 'Tritium',
        label: ['1 proton', '2 neutron', '1 elektron'],
        labelPos: { x: 230, y: -70 },
        labelLineTo: { x: 100, y: -40 },
        dotLineRadius: 6,
        x: w * 0.7,
        y: h * 0.25,
        protons: 1,
        neutrons: 2,
        electrons: 1,
        protonColorCenter: '#ff6464',
        protonColorEdge: '#7a0000',
        neutronColorCenter: '#6699ff',
        neutronColorEdge: '#00307a'
    },
];

function drawLabelConnection(atom) {
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 2;
    const startX = atom.labelPos.x + atom.x;
    const startY = atom.labelPos.y + atom.y;
    const midX = atom.labelLineTo.x + atom.x;
    const midY = startY;
    const endX = atom.labelLineTo.x + atom.x;
    const endY = atom.labelLineTo.y + atom.y;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(midX, midY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(endX, endY, atom.dotLineRadius, 0, 2 * Math.PI);
    ctx.fill();
}

function drawLabels(atom) {
    ctx.fillStyle = 'white';
    ctx.font = '22px Amaranth, sans-serif';
    ctx.textAlign = 'left';
    const baseX = atom.labelPos.x + atom.x;
    const baseY = atom.labelPos.y + atom.y;
    atom.label.forEach((line, i) => {
        ctx.fillText(line, baseX, baseY + i * 28);
    });

    ctx.fillStyle = '#799bdc';
    ctx.font = 'bold 30px Amaranth, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(atom.name, atom.x, atom.y + 100);
}

function drawAtom(atom, angleElectron, orbitRotation) {
    const rProton = 14;
    const rNeutron = 12;
    const rElectron = 8;
    const orbitRadiusX = 75;
    const orbitRadiusY = 35;

    drawOrbitRing(atom.x, atom.y, orbitRadiusX, orbitRadiusY, orbitRotation);

    if (atom.protons === 1 && atom.neutrons === 0) {
        drawGradientBall(atom.x, atom.y, rProton, atom.protonColorCenter, atom.protonColorEdge);
    } else if (atom.protons === 1 && atom.neutrons === 1) {
        drawGradientBall(atom.x - 10, atom.y, rProton, atom.protonColorCenter, atom.protonColorEdge);
        drawGradientBall(atom.x + 10, atom.y, rNeutron, atom.neutronColorCenter, atom.neutronColorEdge);
    } else if (atom.protons === 1 && atom.neutrons === 2) {
        drawGradientBall(atom.x, atom.y, rProton, atom.protonColorCenter, atom.protonColorEdge);
        drawGradientBall(atom.x - 20, atom.y, rNeutron, atom.neutronColorCenter, atom.neutronColorEdge);
        drawGradientBall(atom.x + 20, atom.y, rNeutron, atom.neutronColorCenter, atom.neutronColorEdge);
    }

    const cosR = Math.cos(orbitRotation);
    const sinR = Math.sin(orbitRotation);
    const exUnrot = orbitRadiusX * Math.cos(angleElectron);
    const eyUnrot = orbitRadiusY * Math.sin(angleElectron);
    const ex = atom.x + exUnrot * cosR - eyUnrot * sinR;
    const ey = atom.y + exUnrot * sinR + eyUnrot * cosR;

    drawGradientBall(ex, ey, rElectron, '#32cd32', '#004d00');

    ctx.fillStyle = 'white';
    ctx.font = '18px Amaranth, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`(${atom.protons + atom.neutrons} H)`, atom.x + 100, atom.y + 35);
}

let angle = 0;
function animate() {
    ctx.clearRect(0, 0, w, h);

    atoms.forEach((atom, i) => {
        let orbitRotation = 0.3;
        let angleElectron = angle + i * Math.PI / 1.8;
        drawAtom(atom, angleElectron, orbitRotation);
        drawLabels(atom);
        drawLabelConnection(atom);
    });

    angle += 0.02;
    requestAnimationFrame(animate);
}
animate();