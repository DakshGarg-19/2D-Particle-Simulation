const container = document.getElementById("container");
const particles = [];

class Particle {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "ball";

    this.radius = 8 + Math.random() * 6;
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;

    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;

    this.el.style.width = `${this.radius * 2}px`;
    this.el.style.height = `${this.radius * 2}px`;

    container.appendChild(this.el);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Friction (reducing speed by 1%)
    this.vx *= 0.99;
    this.vy *= 0.99;

    // Bounce (velocity is vector, turning the v from positive going forward to -ve, bringing back in the opposite direction (-x, -y))
    if (this.x < this.radius) {
      this.x = this.radius;
      this.vx *= -1;
    }

    if (this.x > window.innerWidth - this.radius) {
      this.x = window.innerWidth - this.radius;
      this.vx *= -1;
    }

    if (this.y < this.radius) {
      this.y = this.radius;
      this.vy *= -1;
    }

    if (this.y > window.innerHeight - this.radius) {
      this.y = window.innerHeight - this.radius;
      this.vy *= -1;
    }

    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    const hue = speed * 60;

    this.el.style.background = `
      radial-gradient(circle at 30% 30%,
        hsl(${hue}, 100%, 70%),
        hsl(${hue + 40}, 100%, 40%)
      )
    `;

    this.el.style.transform = `translate(${this.x - this.radius}px, ${this.y - this.radius}px)`;
  }
}

// Particle creation
for (let i = 0; i < 40; i++) {
  particles.push(new Particle());
}

window.addEventListener("wheel", (e) => {
  // force in x direction
  const fx = e.deltaX * 0.01;

  // force in y direction
  const fy = e.deltaY * 0.01;

  particles.forEach((p) => {
    p.vx += fx + (Math.random() - 0.5) * 0.2;
    p.vy += fy + (Math.random() - 0.5) * 0.2;
  });
});

function animate() {
  particles.forEach((p) => p.update());
  requestAnimationFrame(animate); // wait for browser to complete the current paint before repainting.
}

animate();
