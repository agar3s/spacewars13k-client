
const loop = () => {
  updatetime();
  loopStars();
  requestAnimationFrame(loop);
};

loop();

