const isoCanvas = document.getElementById('isotopeCanvas');
const isoCtx = isoCanvas.getContext('2d');
let iw, ih;

function isoResize() {
  iw = window.innerWidth;
  ih = window.innerHeight;
  isoCanvas.width = iw;
  isoCanvas.height = ih;
}

isoResize();
window.addEventListener('resize', isoResize);

function drawOrbitRing(x, y, rx, ry, rot) {
  isoCtx.save();
  isoCtx.translate(x, y);
  isoCtx.rotate(rot);
  let ow = 20;
  for (let i = 0; i < ow; i++) {
    let a = 0.2 * (1 - i / ow);
    isoCtx.strokeStyle = `rgba(180,180,180,${a})`;
    isoCtx.lineWidth = 3;
    isoCtx.beginPath();
    isoCtx.ellipse(0, 0, rx - i, ry - i * 0.45, 0, 0, Math.PI * 2);
    isoCtx.stroke();
  }
  isoCtx.restore();
}

function drawBall(x, y, r, c1, c2) {
  let g = isoCtx.createRadialGradient(x - r / 3, y - r / 3, r / 8, x, y, r);
  g.addColorStop(0, c1);
  g.addColorStop(1, c2);
  isoCtx.beginPath();
  isoCtx.fillStyle = g;
  isoCtx.shadowColor = c1;
  isoCtx.shadowBlur = 12;
  isoCtx.arc(x, y, r, 0, Math.PI * 2);
  isoCtx.fill();
  isoCtx.shadowBlur = 0;
}

const atoms = [
  {
    name: 'Protium',
    label: ['1 proton', '1 elektron'],
    labelPos: { x: 170, y: -70 },
    labelLineTo: { x: 20, y: -50 },
    dotLineRadius: 6,
    x: iw * 0.2,
    y: ih * 0.3,
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
    x: iw * 0.45,
    y: ih * 0.45,
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
    x: iw * 0.7,
    y: ih * 0.25,
    protons: 1,
    neutrons: 2,
    electrons: 1,
    protonColorCenter: '#ff6464',
    protonColorEdge: '#7a0000',
    neutronColorCenter: '#6699ff',
    neutronColorEdge: '#00307a'
  }
];

function drawLabelLine(a) {
  isoCtx.strokeStyle = 'white';
  isoCtx.fillStyle = 'white';
  isoCtx.lineWidth = 2;
  const sx = a.labelPos.x + a.x;
  const sy = a.labelPos.y + a.y;
  const mx = a.labelLineTo.x + a.x;
  const my = sy;
  const ex = a.labelLineTo.x + a.x;
  const ey = a.labelLineTo.y + a.y;

  isoCtx.beginPath();
  isoCtx.moveTo(sx, sy);
  isoCtx.lineTo(mx, my);
  isoCtx.lineTo(ex, ey);
  isoCtx.stroke();

  isoCtx.beginPath();
  isoCtx.arc(ex, ey, a.dotLineRadius, 0, 2 * Math.PI);
  isoCtx.fill();
}

function drawLabel(a) {
  isoCtx.fillStyle = 'white';
  isoCtx.font = '22px Amaranth, sans-serif';
  isoCtx.textAlign = 'left';
  const bx = a.labelPos.x + a.x;
  const by = a.labelPos.y + a.y;
  a.label.forEach((t, i) => isoCtx.fillText(t, bx, by + i * 28));

  isoCtx.fillStyle = '#799bdc';
  isoCtx.font = 'bold 30px Irish Grover, sans-serif';
  isoCtx.textAlign = 'center';
  isoCtx.fillText(a.name, a.x, a.y + 100);
}

function drawIsotopeAtom(a, angE, rot) {
  const rp = 14;
  const rn = 12;
  const re = 8;
  const rx = 75;
  const ry = 35;

  drawOrbitRing(a.x, a.y, rx, ry, rot);

  if (a.protons === 1 && a.neutrons === 0) drawBall(a.x, a.y, rp, a.protonColorCenter, a.protonColorEdge);
  else if (a.protons === 1 && a.neutrons === 1) {
    drawBall(a.x - 10, a.y, rp, a.protonColorCenter, a.protonColorEdge);
    drawBall(a.x + 10, a.y, rn, a.neutronColorCenter, a.neutronColorEdge);
  }
  else if (a.protons === 1 && a.neutrons === 2) {
    drawBall(a.x, a.y, rp, a.protonColorCenter, a.protonColorEdge);
    drawBall(a.x - 20, a.y, rn, a.neutronColorCenter, a.neutronColorEdge);
    drawBall(a.x + 20, a.y, rn, a.neutronColorCenter, a.neutronColorEdge);
  }

  const cr = Math.cos(rot);
  const sr = Math.sin(rot);
  const ex = a.x + rx * Math.cos(angE) * cr - ry * Math.sin(angE) * sr;
  const ey = a.y + rx * Math.cos(angE) * sr + ry * Math.sin(angE) * cr;

  drawBall(ex, ey, re, '#32cd32', '#004d00');

  isoCtx.fillStyle = 'white';
  isoCtx.font = '18px Amaranth, sans-serif';
  isoCtx.textAlign = 'center';
  isoCtx.fillText(`(${a.protons + a.neutrons} H)`, a.x + 100, a.y + 35);
}

let isoAngle = 0;

function animateIso() {
  isoCtx.clearRect(0, 0, iw, ih);

  atoms.forEach((a, i) => {
    const r = 0.3;
    const angE = isoAngle + i * Math.PI / 1.8;
    drawIsotopeAtom(a, angE, r);
    drawLabel(a);
    drawLabelLine(a);
  });

  isoAngle += 0.02;
  requestAnimationFrame(animateIso);
}

animateIso();