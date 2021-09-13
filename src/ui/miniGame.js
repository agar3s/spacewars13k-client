const loop = () => {
  loopStars();
  requestAnimationFrame(loop);
};

loop();

