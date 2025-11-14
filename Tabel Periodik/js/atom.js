const atomCanvas = document.getElementById("atomCanvas");
const atomCtx = atomCanvas.getContext("2d");
const acx = atomCanvas.width / 2;
const acy = atomCanvas.height / 2;

function rotateX(p, a) {
  const { y, z } = p;
  return { ...p, y: y * Math.cos(a) - z * Math.sin(a), z: y * Math.sin(a) + z * Math.cos(a) };
}

function rotateY(p, a) {
  const { x, z } = p;
  return { ...p, x: x * Math.cos(a) + z * Math.sin(a), z: -x * Math.sin(a) + z * Math.cos(a) };
}

function project3D(p) {
  return { x: acx + p.x, y: acy + p.y };
}

const atomOrbits = [
  { r: 125, rx: 5 * Math.PI / 180, ry: 65 * Math.PI / 180, speed: 0.025, angle: 0 },
  { r: 125, rx: -54 * Math.PI / 180, ry: 65 * Math.PI / 180, speed: 0.031, angle: 1 },
  { r: 125, rx: 54 * Math.PI / 180, ry: 65 * Math.PI / 180, speed: 0.025, angle: 2 }
];

function drawOrbitBorder3D(r, ax, ay) {
  atomCtx.beginPath();
  let f = true;
  for (let a = 0; a <= Math.PI * 2; a += 0.02) {
    let p = { x: Math.cos(a) * r, y: Math.sin(a) * r, z: 0 };
    p = rotateX(p, ax);
    p = rotateY(p, ay);
    const pr = project3D(p);
    if (f) {
      atomCtx.moveTo(pr.x, pr.y);
      f = false;
    } else atomCtx.lineTo(pr.x, pr.y);
  }
  atomCtx.strokeStyle = "rgba(255,255,255,0.15)";
  atomCtx.lineWidth = 1;
  atomCtx.lineCap = "round";
  atomCtx.stroke();
}

function drawOrbitSegment3D(r, ax, ay, sa, ea, op) {
  atomCtx.beginPath();
  let f = true;
  for (let a = sa; a <= ea; a += 0.02) {
    let p = { x: Math.cos(a) * r, y: Math.sin(a) * r, z: 0 };
    p = rotateX(p, ax);
    p = rotateY(p, ay);
    const pr = project3D(p);
    if (f) {
      atomCtx.moveTo(pr.x, pr.y);
      f = false;
    } else atomCtx.lineTo(pr.x, pr.y);
  }
  atomCtx.strokeStyle = `rgba(0,234,255,${op})`;
  atomCtx.lineWidth = 10;
  atomCtx.lineCap = "round";
  atomCtx.stroke();
}

function drawOrbitGlow3D(ea, r, ax, ay) {
  const n = 60;
  const len = 1.5;
  for (let i = 0; i < n; i++) {
    const off = (i / n) * len;
    const sa = ea - off;
    const ea2 = sa + 0.03;
    const f = i / n;
    const op = (1 - Math.pow(f, 0.8)) * 0.35;
    if (op > 0.01) drawOrbitSegment3D(r, ax, ay, sa, ea2, op);
  }
}

function drawElectron3D(r, a, ax, ay) {
  let p = { x: Math.cos(a) * r, y: Math.sin(a) * r, z: 0 };
  p = rotateX(p, ax);
  p = rotateY(p, ay);
  const pos = project3D(p);

  atomCtx.beginPath();
  const g2 = atomCtx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 25);
  g2.addColorStop(0, "rgba(0,234,255,0.8)");
  g2.addColorStop(1, "rgba(0,234,255,0)");
  atomCtx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
  atomCtx.fillStyle = g2;
  atomCtx.fill();

  atomCtx.beginPath();
  atomCtx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
  atomCtx.fillStyle = "#00eaff";
  atomCtx.shadowBlur = 25;
  atomCtx.shadowColor = "#00eaff";
  atomCtx.fill();
  atomCtx.shadowBlur = 0;

  return pos;
}

function drawNucleus3D(t) {
  const gl = 40 + Math.sin(t * 2) * 10;

  atomCtx.beginPath();
  const g1 = atomCtx.createRadialGradient(acx, acy, 0, acx, acy, 60);
  g1.addColorStop(0, "rgba(0,234,255,0.3)");
  g1.addColorStop(1, "rgba(0,234,255,0)");
  atomCtx.arc(acx, acy, 60, 0, Math.PI * 2);
  atomCtx.fillStyle = g1;
  atomCtx.fill();

  atomCtx.beginPath();
  const g = atomCtx.createRadialGradient(acx, acy, 0, acx, acy, 20);
  g.addColorStop(0, "#00eaff");
  g.addColorStop(0.8, "#0077ff");
  g.addColorStop(1, "#0055cc");
  atomCtx.arc(acx, acy, 20, 0, Math.PI * 2);
  atomCtx.fillStyle = g;
  atomCtx.shadowBlur = gl;
  atomCtx.shadowColor = "#00eaff";
  atomCtx.fill();
  atomCtx.shadowBlur = 0;
}

function drawCurveArrow(x1, y1, x2, y2, t, align = "left", cd = 1) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const d = Math.sqrt(dx * dx + dy * dy);
  const ox = (-dy / d) * 50 * cd;
  const oy = (dx / d) * 50 * cd;
  const cx = mx + ox;
  const cy = my + oy;

  atomCtx.beginPath();
  atomCtx.moveTo(x2, y2);
  atomCtx.quadraticCurveTo(cx, cy, x1, y1);
  atomCtx.strokeStyle = "rgba(255,255,255,0.8)";
  atomCtx.lineWidth = 2;
  atomCtx.stroke();

  const ang = Math.atan2(y1 - cy, x1 - cx);
  const al = 12;
  const aw = 6;

  atomCtx.beginPath();
  atomCtx.moveTo(x1, y1);
  atomCtx.lineTo(x1 - al * Math.cos(ang) + aw * Math.sin(ang), y1 - al * Math.sin(ang) - aw * Math.cos(ang));
  atomCtx.lineTo(x1 - al * Math.cos(ang) - aw * Math.sin(ang), y1 - al * Math.sin(ang) + aw * Math.cos(ang));
  atomCtx.closePath();
  atomCtx.fillStyle = "rgba(255,255,255,0.8)";
  atomCtx.fill();

  atomCtx.beginPath();
  atomCtx.arc(x2, y2, 4, 0, Math.PI * 2);
  atomCtx.fillStyle = "white";
  atomCtx.fill();

  atomCtx.font = "20px Arial";
  atomCtx.fillStyle = "white";
  atomCtx.textAlign = align;
  const xo = align === "right" ? -10 : 10;
  atomCtx.fillText(t, x1 + xo, y1 + 5);
}

function animateAtom() {
  atomCtx.clearRect(0, 0, atomCanvas.width, atomCanvas.height);
  const t = performance.now() / 1000;

  drawNucleus3D(t);

  atomOrbits.forEach((o) => {
    drawOrbitBorder3D(o.r, o.rx, o.ry);
    o.angle += o.speed;
    drawOrbitGlow3D(o.angle, o.r, o.rx, o.ry);
    drawElectron3D(o.r, o.angle, o.rx, o.ry);
  });

  drawCurveArrow(acx + 180, acy - 140, acx + 15, acy - 12, "Proton");
  drawCurveArrow(acx + 180, acy + 80, acx + 15, acy + 12, "Neutron", "left", -1);
  drawCurveArrow(80, atomCanvas.height - 60, acx - 80, acy + 100, "Elektron", "right");

  requestAnimationFrame(animateAtom);
}

animateAtom();