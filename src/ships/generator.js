// given an id generate a spaceship

const shipShapesChances = [5, 10, 25, 35, 30, 5, 10, 15, 2];
const shipWingsChances = [10, 8, 4, 10, 45, 35, 30, 25, 25, 15, 9, 3, 1];
const shipColorsChances = [1, 30, 30, 28, 50, 28, 20, 20, 15, 1];
const shipFGColorsChances = [1, 30, 30, 28, 50, 28, 20, 20, 15, 1];

const shipPalleteChances = [20, 20, 6, 6, 3 ,6, 6, 3, 6, 3, 3, 1, 1, 1, 1, 1, 3, 5];
const shipFactionChances = [];

const randomInt = (min, max) => ~~(Math.random()*(max - min) + min);

const getRandomIndexProb = (probs) => {
  const total = probs.reduce((acc, value) => acc + value, 0);
  const value = randomInt(0, total);
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