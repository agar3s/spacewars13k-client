
const battleCardClick = flipCard;

const addCardToBattle = (config, parent) => {
  const card = createCard(config);
  parent.appendChild(card.cardElement);
  card.cardElement.onclick = () => {
    changePallete(config.pallete);
  };
  return card.cardElement;
}

const setupHand = (parent, hand, backCover) => {
  parent.innerHTML = '';
  return hand.map((id, i) => {
    const svgs = cards[id].map((_id, index) => getGameCard(ROCK_PAPER_SCISSORS[_id], index));
    const cardElement = wrapInCard(backCover, svgs, _=>_, 'arsenal');
    parent.appendChild(cardElement);
    cardElement.style.top = `-${15*i}vh`;
    return cardElement;
  });
}

const secondOption = (cardElement) => {
  const a = cardElement.querySelectorAll('svg');
  a[0].setAttribute('class', 'opt1');
  a[1].setAttribute('class', 'opt0');
}

const animateBattle = async (cardElementA, cardElementB, cardA, cardB, second=false) => {
  await delay(second?400:600);
  !second && flipCard(cardElementA);
  !second && flipCard(cardElementB);
  await delay(second?0:600);
  let winner = solveCards(cardA, cardB, second);
  addClass(cardElementA, winner);
  addClass(cardElementB, winner);
  if (!second && winner===TIE) {
    await delay(600);
    removeClass(cardElementA, winner);
    removeClass(cardElementB, winner);
    secondOption(cardElementA);
    secondOption(cardElementB);
    return await animateBattle(cardElementA, cardElementB, cardA, cardB, true);
  }
  return BATTLE_VALUES[winner];
}

const solveBattleScript = async (coverA, coverB, playerHandA, playerHandB) => {
  const handA = setupHand(sideA, playerHandA, coverA);
  const handB = setupHand(sideB, playerHandB, coverB);
  await delay(100);
  handA.forEach(cardElement=>cardElement.style.top=0);
  handB.forEach(cardElement=>cardElement.style.top=0);
  let points = 0;
  for (let index = 0; index < handA.length && Math.abs(points)<2; index++) {
    points += await animateBattle(handA[index], handB[index], playerHandA[index], playerHandB[index]);
  }
  return points;
}

const dismissCards = async () => {
  await delay(500);
  const cardsA = sideA.querySelectorAll('.card');
  const cardsB = sideB.querySelectorAll('.card');
  const cardsLength = cardsA.length;
  for(let i=0;i<cardsLength;i++) {
    containsClass(cardsA[i], 'cf')&&flipCard(cardsA[i]);
    containsClass(cardsB[i], 'cf')&&flipCard(cardsB[i]);
    //flipCard(cardsA[i]);
    //flipCard(cardsB[i]);
  }
  await delay(300);
  for(let i=0;i<cardsLength;i++) {
    addClass(cardsA[i], 'vanish');
    addClass(cardsB[i], 'vanish');
  }
  await delay(800);
}

const loadBattle = async (battleLog) => {
  const configA = getShipById(battleLog.shipA);
  const configB = getShipById(battleLog.shipB);
  const playerContent = "<ul class='victories'><li></li><li></li></ul>";
  playerA.innerHTML = playerContent;
  playerB.innerHTML = playerContent;
  sideA.innerHTML = '';
  sideB.innerHTML = '';
  // present cards
  const cardA = addCardToBattle(configA, playerA);
  const cardB = addCardToBattle(configB, playerB);
  changePallete(configA.pallete);
  await delay(400);
  flipCard(cardA);
  await delay(300);
  toggleClass(viewBattle.querySelector('h3'), 'hide');
  await delay(300);
  flipCard(cardB);
  await delay(400);

  let scores = [0, 0];
  let winner = false;
  for (let index = 0; index < battleLog.rounds.length && !winner; index++) {
    let message = 'point!!!';
    const { handA, handB } = battleLog.rounds[index];
    const roundWinner = await solveBattleScript(configA.backCover, configB.backCover, handA.map(c=>battleLog.arsenalA[c]), handB.map(c=>battleLog.arsenalB[c]));
    if (roundWinner>0) {
      scores[0]++;
      addClass(playerA.querySelector(`li:nth-child(${scores[0]})`), 'score');
    }
    if (roundWinner<0) {
      scores[1]++;
      addClass(playerB.querySelector(`li:nth-child(${scores[1]})`), 'score');
    }
    if (roundWinner == 0) {
      message = 'draw!!!'
    }
    winner = scores[0] >= 2 || scores[1] >= 2;
    await delay(500);
    if(!winner) {
      await displayCustomDialog(message);
      await dismissCards();
    }
  }
  if (battleLog.winner === player.id) {
    if (game.totalPlayers === 1) {
      gameOver=true;
      td('chicken-dinner');
    } else {
      td('battle-win');
    }
  } else {
    gameOver=true;
    td('battle-lose');
  }
  // display winner
}
