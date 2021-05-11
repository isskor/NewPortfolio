export const draw = (ctx, context) => {
  ctx.width = window.innerWidth;
  ctx.canvas.width = window.innerWidth;
  ctx.height = window.innerHeight;
  ctx.canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  ctx.font = '2vw Roboto';
  ctx.lineWidth = 1;
  // ctx.rotate((20 * Math.PI) / 180);
  ctx.textAlign = 'center';
  ctx.fillText(
    'J e r r y P h u o n g',
    ctx.canvas.clientWidth / 6,
    ctx.canvas.height / 5.5
  );
  // ctx.textBaseline = 'middle';
  const textCoords = ctx.getImageData(
    0,
    0,
    ctx.canvas.clientWidth,
    ctx.canvas.clientHeight
  );

  let particleArray = [];

  let adjustX = 0;
  let adjustY = 0;
  // handle mouse

  const mouse = {
    x: null,
    y: null,
    radius: 110,
  };

  window.addEventListener('mousemove', function (e) {
    mouse.x = (e.offsetX * ctx.width) / ctx.canvas.clientWidth;
    mouse.y = (e.offsetY * ctx.height) / ctx.canvas.clientHeight;
  });

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 3;
      // particle start poistion
      this.baseX = x;
      this.baseY = y;
      // simulate particle weight
      // this.density = Math.random() * 80 - 5;
      this.directionX = 0;
      this.directionY = 0;
    }

    draw() {
      // ctx.fillStyle = '#10242e';
      ctx.fillStyle = 'hsl(200, 48%, 18%)';
      ctx.textAlign = 'center';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      // ctx.closePath();
      ctx.fill();
    }
    update() {
      let homeDX = this.baseX - this.x;
      let homeDY = this.baseY - this.y;
      //   distance between particle and mouse
      //   hypothenus between particle and mouse
      let distance = Math.sqrt(Math.pow(homeDX, 2) + Math.pow(homeDY, 2));

      let homeForce = distance * 0.01;
      let homeAngle = Math.atan2(homeDY, homeDX);
      // let forceDirectionX = dx / distance;
      // let forceDirectionY = dy / distance;
      let cursorForce = 0;
      let cursorAngle = 0;
      if (mouse.x > 0) {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let maxDistance = Math.pow(dx, 2) + Math.pow(dy, 2);
        cursorForce = Math.min(10000 / maxDistance, 10000);
        cursorAngle = Math.atan2(dx, dy);
      } else {
        cursorForce = 0;
        cursorAngle = 0;
      }

      // let force = (maxDistance - distance) / maxDistance;
      this.directionX +=
        homeForce * Math.cos(homeAngle) + cursorForce * Math.cos(cursorAngle);
      this.directionY +=
        homeForce * Math.sin(homeAngle) + cursorForce * Math.sin(cursorAngle);

      //   this.size = 30;
      this.directionX *= 0.9;
      this.directionY *= 0.9;

      this.x += this.directionX;
      this.y += this.directionY;

      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }

  function init() {
    particleArray = [];

    for (let y = 0, y2 = textCoords.height; y < y2; y++) {
      for (let x = 0, x2 = textCoords.width; x < x2; x++) {
        // find particle has opacity > ~20%
        if (textCoords.data[y * 4 * textCoords.width + x * 4 + 3] > 64) {
          let positionX = x + adjustX;
          let positionY = y + adjustY;
          particleArray.push(new Particle(positionX * 3, positionY * 3));
        }
      }
    }
  }
  init();

  function animate() {
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].draw();
      particleArray[i].update();
    }
    window.requestAnimationFrame(animate);
    // window.cancelAnimationFrame(animate);
  }
  animate();
};
