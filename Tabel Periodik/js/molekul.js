function initMolekul() {
  const canvas = document.getElementById('mainCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  canvas.width = 1600;
  canvas.height = 700;
  
  const width = canvas.width;
  const height = canvas.height;

  let t = 0;

  function drawBall(x, y, radius, colorInner, colorOuter) {
    const grad = ctx.createRadialGradient(
      x - radius * 0.4,
      y - radius * 0.4,
      radius * 0.1,
      x,
      y,
      radius
    );
    grad.addColorStop(0, colorInner);
    grad.addColorStop(1, colorOuter);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    const highlight = ctx.createRadialGradient(
      x - radius * 0.45,
      y - radius * 0.45,
      1,
      x - radius * 0.45,
      y - radius * 0.45,
      radius * 0.35
    );
    highlight.addColorStop(0, "rgba(255,255,255,0.9)");
    highlight.addColorStop(0.6, "rgba(255,255,255,0)");

    ctx.beginPath();
    ctx.arc(x - radius * 0.45, y - radius * 0.45, radius * 0.35, 0, Math.PI * 2);
    ctx.fillStyle = highlight;
    ctx.fill();
  }

  function drawConnector(x1, y1, x2, y2, width, colorBright, colorDark) {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const length = Math.hypot(x2 - x1, y2 - y1);

    ctx.save();
    ctx.translate(x1, y1);
    ctx.rotate(angle);

    const grad = ctx.createLinearGradient(0, -width / 2, length, width / 2);
    grad.addColorStop(0, colorBright);
    grad.addColorStop(0.5, colorDark);
    grad.addColorStop(1, colorBright);

    ctx.fillStyle = grad;
    ctx.lineJoin = "round";
    ctx.lineWidth = width;
    ctx.strokeStyle = grad;

    ctx.beginPath();
    ctx.moveTo(0, -width / 2);
    ctx.lineTo(length, -width / 2);
    ctx.quadraticCurveTo(length + width / 3, 0, length, width / 2);
    ctx.lineTo(0, width / 2);
    ctx.quadraticCurveTo(-width / 3, 0, 0, -width / 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  function drawH2OStructure(x, y) {
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    ctx.font = 'bold 48px amaranth, sans-serif';
    ctx.fillText('H', x + 260, y);

    ctx.font = 'bold 28px amaranth, sans-serif';
    ctx.fillText('2', x + 290, y + 20);

    ctx.font = 'bold 48px amaranth, sans-serif';
    ctx.fillText('O', x + 320, y);

    ctx.font = '36px amaranth, sans-serif';
    ctx.fillText('O', x + 425, y + 70);

    ctx.font = '28px Arial';
    ctx.fillText('H', x + 370, y + 180);
    ctx.fillText('H', x + 480, y + 180);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(x + 420, y + 90);
    ctx.lineTo(x + 380, y + 160);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + 430, y + 90);
    ctx.lineTo(x + 470, y + 160);
    ctx.stroke();
  }

  function drawO2Structure(x, y) {
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    ctx.font = 'bold 48px Amaranth, sans-serif';
    ctx.fillText('O', x + 70, y);

    ctx.font = 'bold 28px Amaranth, sans-serif';
    ctx.fillText('2', x + 100, y + 20);
  }

  function drawScene() {
    ctx.clearRect(0, 0, width, height);

    const floatBlue = Math.sin(t) * 10;
    const floatRed = Math.cos(t * 0.7) * 10;

    const blueBaseX = width * 0.22;
    const blueBaseY = height * 0.27;
    const redBaseX = width * 0.74;
    const redBaseY = height * 0.6;

    const blueY = blueBaseY + floatBlue;
    const redY  = redBaseY + floatRed;
    const redX2 = redBaseX + 170;

    drawBall(blueBaseX, blueY, 100, '#FF4B4B', '#8B0000');
    drawBall(blueBaseX - 120, blueY + 105, 55, '#2D90FF', '#003A60');
    drawBall(blueBaseX + 120, blueY + 105, 55, '#2D90FF', '#003A60');

    drawConnector(blueBaseX - 60, blueY + 60, blueBaseX - 70, blueY + 75, 18, '#a8b1b7', '#758092');
    drawConnector(blueBaseX + 60, blueY + 60, blueBaseX + 70, blueY + 75, 18, '#a8b1b7', '#758092');

    drawConnector(redBaseX, redY, redX2, redY, 20, '#ff6666', '#b22222');
    drawBall(redBaseX, redY, 85, '#FF4B4B', '#8B0000');
    drawBall(redX2 + 10, redY, 85, '#FF4B4B', '#8B0000');

    drawH2OStructure(blueBaseX, blueBaseY + 260);
    drawO2Structure(redBaseX + 55, redBaseY + 150);
  }

  function animate() {
    t += 0.05;
    drawScene();
    requestAnimationFrame(animate);
  }

  animate();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMolekul);
} else {
  initMolekul();
}
