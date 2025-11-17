class Particle {
  constructor(x, y, radius, symbol, charge, canvasWidth, canvasHeight) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.symbol = symbol;
    this.charge = charge;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = (Math.random() - 0.5) * 1.2;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.mass = radius;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.font = `${this.radius * 0.9}px Irish Grover`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.symbol, this.x, this.y + 2);

    if (this.charge) {
      ctx.font = `${this.radius * 0.5}px Irish Grover`;
      ctx.fillText(this.charge, this.x + this.radius * 0.55, this.y - this.radius * 0.45);
    }
  }

  update(chargeCircle) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.radius > this.canvasWidth || this.x - this.radius < 0) {
      this.vx *= -1;
      this.x = Math.max(this.radius, Math.min(this.canvasWidth - this.radius, this.x));
    }

    if (this.y + this.radius > this.canvasHeight || this.y - this.radius < 0) {
      this.vy *= -1;
      this.y = Math.max(this.radius, Math.min(this.canvasHeight - this.radius, this.y));
    }

    if (chargeCircle) {
      const dx = this.x - chargeCircle.x;
      const dy = this.y - chargeCircle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.radius + chargeCircle.radius) {
        const angle = Math.atan2(dy, dx);
        const targetX = chargeCircle.x + Math.cos(angle) * (chargeCircle.radius + this.radius);
        const targetY = chargeCircle.y + Math.sin(angle) * (chargeCircle.radius + this.radius);

        this.x = targetX;
        this.y = targetY;

        const normalX = dx / distance;
        const normalY = dy / distance;
        const dotProduct = this.vx * normalX + this.vy * normalY;

        this.vx = this.vx - 2 * dotProduct * normalX;
        this.vy = this.vy - 2 * dotProduct * normalY;
      }
    }
  }

  checkCollision(other) {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < this.radius + other.radius;
  }

  resolveCollision(other) {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance === 0) return;

    const nx = dx / distance;
    const ny = dy / distance;
    const dvx = other.vx - this.vx;
    const dvy = other.vy - this.vy;
    const dvn = dvx * nx + dvy * ny;

    if (dvn > 0) return;

    const impulse = (2 * dvn) / (this.mass + other.mass);

    this.vx += impulse * other.mass * nx;
    this.vy += impulse * other.mass * ny;
    other.vx -= impulse * this.mass * nx;
    other.vy -= impulse * this.mass * ny;

    const overlap = (this.radius + other.radius - distance) / 2;
    this.x -= overlap * nx;
    this.y -= overlap * ny;
    other.x += overlap * nx;
    other.y += overlap * ny;
  }
}

class IonCanvas {
  constructor(canvasId, particles, label, chargeSymbol, chargePosition) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = particles;
    this.label = label;
    this.chargeSymbol = chargeSymbol;
    this.chargePosition = chargePosition;

    const chargeRadius = 35;
    if (this.chargePosition === 'top-right') {
      this.chargeCircle = { x: this.canvas.width - 55, y: 55, radius: chargeRadius };
    } else {
      this.chargeCircle = { x: 55, y: this.canvas.height - 55, radius: chargeRadius };
    }

    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = this.chargeSymbol === '−' ? '#ff9999' : '#6bdbff';
    this.ctx.font = '28px Irish Grover';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(this.label, this.canvas.width / 2, this.canvas.height / 2);

    const chargeRadius = 35;
    let chargeX = this.chargeCircle.x;
    let chargeY = this.chargeCircle.y;

    this.ctx.beginPath();
    this.ctx.arc(chargeX, chargeY, chargeRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.chargeSymbol === '−' ? 'rgba(255, 150, 180, 0.15)' : 'rgba(107, 219, 255, 0.15)';
    this.ctx.fill();
    this.ctx.strokeStyle = this.chargeSymbol === '−' ? '#ff96b4' : '#6bdbff';
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();

    const innerRadius = chargeRadius * 0.55;
    this.ctx.beginPath();
    this.ctx.arc(chargeX, chargeY, innerRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.chargeSymbol === '−' ? 'rgba(255, 150, 180, 0.6)' : 'rgba(107, 219, 255, 0.6)';
    this.ctx.fill();

    this.ctx.fillStyle = '#000000';
    this.ctx.font = 'bold 32px Irish Grover';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(this.chargeSymbol, chargeX, chargeY);

    this.particles.forEach(p => {
      p.update(this.chargeCircle);
      p.draw(this.ctx);
    });

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        if (this.particles[i].checkCollision(this.particles[j])) {
          this.particles[i].resolveCollision(this.particles[j]);
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

const anionParticles = [];
const anionCanvas = document.getElementById('anion');
const anionPositions = [
  { x: 50, y: 50 }, { x: 150, y: 35 }, { x: 240, y: 25 }, { x: 320, y: 70 },
  { x: 100, y: 100 }, { x: 200, y: 130 }, { x: 60, y: 160 }, { x: 280, y: 150 }
];

  anionParticles.push(new Particle(50, 50, 20, 'cl', '⁻', anionCanvas.width, anionCanvas.height));
  anionParticles.push(new Particle(150, 35, 20, 'Br', '⁻', anionCanvas.width, anionCanvas.height));
  anionParticles.push(new Particle(240, 25, 20, 'O', '²⁻', anionCanvas.width, anionCanvas.height));
  anionParticles.push(new Particle(320, 70, 20, 'S', '²⁻', anionCanvas.width, anionCanvas.height));
  anionParticles.push(new Particle(100, 100, 20, 'N', '³⁻', anionCanvas.width, anionCanvas.height));
  anionParticles.push(new Particle(200, 130, 20, 'OH', '⁻', anionCanvas.width, anionCanvas.height));
  anionParticles.push(new Particle(60, 160, 20, 'I', '⁻', anionCanvas.width, anionCanvas.height));
  anionParticles.push(new Particle(280, 150, 20, 'NO', '³⁻', anionCanvas.width, anionCanvas.height));

const kationParticles = [];
const kationCanvas = document.getElementById('kation');
const kationPositions = [
  { x: 70, y: 45 }, { x: 180, y: 30 }, { x: 280, y: 50 }, { x: 380, y: 70 },
  { x: 120, y: 110 }, { x: 250, y: 140 }, { x: 90, y: 165 }, { x: 350, y: 155 }
];

  kationParticles.push(new Particle(70, 45, 20, 'H', '⁺', kationCanvas.width, kationCanvas.height));
  kationParticles.push(new Particle(180, 30, 20, 'Na', '⁺', kationCanvas.width, kationCanvas.height));
  kationParticles.push(new Particle(280, 50, 20, 'K', '⁺', kationCanvas.width, kationCanvas.height));
  kationParticles.push(new Particle(380, 70, 20, 'Ca', '²⁺', kationCanvas.width, kationCanvas.height));
  kationParticles.push(new Particle(120, 110, 20, 'Mg', '²⁺', kationCanvas.width, kationCanvas.height));
  kationParticles.push(new Particle(250, 140, 20, 'Fe', '²⁺', kationCanvas.width, kationCanvas.height));
  kationParticles.push(new Particle(90, 165, 20, 'Al', '³⁺', kationCanvas.width, kationCanvas.height));
  kationParticles.push(new Particle(350, 155, 20, 'Fe', '³⁺', kationCanvas.width, kationCanvas.height));

new IonCanvas('anion', anionParticles, '(Anion)', '−', 'top-right');
new IonCanvas('kation', kationParticles, '(Kation)', '+', 'bottom-left');
