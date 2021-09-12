// given an id generate a spaceship

const shipShapesChances = [1, 10, 25, 25, 20, 5, 10, 15, 2];
const shipWingsChances = [10, 18, 4, 10, 45, 35, 30, 25, 25, 15, 18, 3, 1];
const shipBGColorsChances = [2, 30, 30, 28, 50, 28, 20, 20, 15, 1];
const shipFGColorsChances = [2, 30, 30, 28, 50, 28, 20, 20, 15, 1];
const shipBGEffectChances = [10, 12, 10, 10, 5, 2, 8, 6, 4, 4, 2, 2];
const shipPalleteChances = [10, 10, 6, 6, 3 ,6, 6, 3, 6, 3, 3, 1, 1, 1, 1, 1, 3, 5];
const shipBackCoverChances = [1, 1, 1, 20, 10, 20];

const randomInt = (rnd = getConfigForId(~~(rand()*1000)), min, max) => ~~(rnd()%(max - min) + min);
const regularRandomInt = (min, max) => ~~(rand()*(max-min)) + min;
const getRandomIndexProb = (rnd, probs) => {
  const total = probs.reduce((acc, value) => acc + value, 0);
  const value = randomInt(rnd, 0, total);
  let acc = 0;
  for (let i = 0; i < probs.length; i++) {
    acc += probs[i];
    if (value < acc) {
      return i;
    }
  }
  return probs.length - 1;
};

const chanceOf = (probs, index) => {
  const total = probs.reduce((acc, value) => acc + value, 0);
  return probs[index]/total;
};