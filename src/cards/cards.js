
const PATH_KEY = 0;
const VIEWPORT_KEY = 1;
const SVG_ROCK = {
  [PATH_KEY]: 'M15 17c-1 2 2 5 5 3a21 20 0 0 0 4-6m-14 1c0 1 5 8 8-5m3 9c-1 4 4 4 5 3 0 0 3-4 4-8m-18 9a20 10-50 0 0-6-7c2-2 4-3 9-3 3 0 5-6-1-6 0 0-6 0-11 3-3 3-8 21 12 21 9 0 15-10 15-16 0-4-3-5-5-3m0 0a2 2 0 0 0-6-3c2-4-3-6-5-4 1-3-4-6-8-2-3 3-5 12-5 11m7-8L7 8',
  [VIEWPORT_KEY]: '0 0 32 32'
};

const SVG_SCISSORS = {
  [PATH_KEY]: 'm17 24-2 5c-1 2 1 7 4 3 1-1 4-8 3-6m-4 7c0 3 4 3 5 1l3-6m-16 7a5 8-1 0 0-1-4 4 3 10 0 0-4-2l5-2 4-1c3-1 3-5-1-5-1 0-8 2-10 3-6 5-1 19 11 19 6 0 11-9 12-14 1-4-4-5-4-3 2-3 0-6-3-5-4 1-3-5-2-18 0-3-5-3-5 1-1 12-1 16-3 16S7 15 7 5c0-4-5-4-5 0 1 9 1 15 0 20',
  [VIEWPORT_KEY]: '0 0 32 44'
};

const SVG_PAPER = {
  [PATH_KEY]: 'M18 35c-2-7-7-7-9-8a14 14 0 0 1-3-3c-5-5-7 1-4 3s6 4 6 7c1 9 14 10 18 8 7-4 2-11 13-28 2-3-2-5-3-2-4 7-5 10-6 10s-1-4 1-16a2 2 0 1 0-4-1c-2 11-2 16-4 15-1 0-1-5-1-17 0-3-5-4-5 0 0 12 1 17-1 17s-2-4-4-15c0-3-5-2-4 1 2 10 4 18 2 21',
  [VIEWPORT_KEY]: '-1 -1 42 45'
};

const ROCK_PAPER_SCISSORS = [SVG_ROCK, SVG_PAPER, SVG_SCISSORS];

const cards = [
  [0, 0],
  [1, 1],
  [2, 2],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 2],
  [2, 0],
  [2, 1]
];

const getGameCard = (svgConfig, order) => {
  const mainSVG = createSVGelement('svg');
  setAttribute(mainSVG, 'viewBox', svgConfig[VIEWPORT_KEY]);
  setAttribute(mainSVG, 'class', `opt${ order }`);
  const path = createSVGelement('path');
  setAttribute(path, 'd', svgConfig[PATH_KEY]);
  setAttribute(path, 'class', 'cls-1');
  appendChild(mainSVG, path);
  return mainSVG;
};

let handSet = [false, false, false];
const toggleArsenalCard = (cardElement, orderElement, arsenalIndex) => {
  const indexOfCard = player.hand.indexOf(arsenalIndex);
  const addCard = indexOfCard==-1;
  if ( addCard && player.hand.length >=3) return;
  toggleClass(cardElement, 'selected');
  if (addCard) {
    player.hand.push(arsenalIndex);
    let indexHand = handSet.indexOf(false);
    orderElement.innerHTML = indexHand + 1;
    handSet[indexHand] = true;
  } else {
    player.hand.splice(indexOfCard, 1);
    handSet[parseInt(orderElement.innerHTML) - 1] = false;
  }
};

const getHTMLCard = (code, arsenalIndex) => {
  const svgs = cards[code].map((id, index) => getGameCard(ROCK_PAPER_SCISSORS[id], index));
  const orderElement = createElement('div');
  orderElement.className = 'order';
  svgs.push(orderElement);
  const cardElement = wrapInCard(1, svgs, 
    _ => {
      toggleArsenalCard(cardElement, orderElement, arsenalIndex);
    }
    , 'arsenal');
  flipCard(cardElement);
  return cardElement;
};

const WINNER = 'winner';
const LOSER = 'loser';
const TIE = 'tie';

const BATTLE_VALUES = {
  [WINNER]: 1,
  [TIE]: 0,
  [LOSER]: -1
};

const solveCards = (idA, idB, second=false) => {
  let valA = cards[idA][second?1:0];
  let valB = cards[idB][second?1:0];
  if (valA === 0 && valB === 2) return WINNER;
  if (valA === 1 && valB === 0) return WINNER;
  if (valA === 2 && valB === 1) return WINNER;
  if (valA === valB) return TIE;
  return LOSER;
};


