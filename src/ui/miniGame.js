
const ctx = c.getContext('2d');

const spaceShipsCanvas = [];
const addSpaceShip = () => {
  let x = Math.random()*400;
  let y = Math.random()*300;
  let vx = (Math.random() - 0.5) * 2;
  let vy = (Math.random() - 0.5) * 2;
  const spaceShipCanvas = {
    move: () => {
      x += vx;
      y += vy;
      if (x > 400 || x < 0) vx = -vx;
      if (y > 300 || y < 0) vy = -vy;
      return true;
    },
    draw: (ctx) => ctx.fillRect(~~x, ~~y, 2, 1)
  }
  spaceShipsCanvas.push(spaceShipCanvas);
}

for(let i=0;i<50;i++) {
  addSpaceShip();
}

const loop = () => {
  ctx.clearRect(0, 0, 400, 300);
  ctx.fillStyle = '#ffffff';
  spaceShipsCanvas.forEach(ship=>ship.move()&&ship.draw(ctx));
  
  updatetime();
  loopStars();
  requestAnimationFrame(loop);
};

loop();

