
const battleCardClick = (cardElement) => {
  flipCard(cardElement);

};

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
  await delay(second?800:1200);
  !second && flipCard(cardElementA);
  !second && flipCard(cardElementB);
  await delay(second?0:800);
  let winner = solveCards(cardA, cardB, second);
  cardElementA.classList.add(winner);
  cardElementB.classList.add(winner);
  if (!second && winner===TIE) {
    await delay(500);
    cardElementA.classList.remove(winner);
    cardElementB.classList.remove(winner);
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
  await delay(2500);
  const cardsA = sideA.querySelectorAll('.card');
  const cardsB = sideB.querySelectorAll('.card');
  const cardsLength = cardsA.length;
  for(let i=0;i<cardsLength;i++) {
    cardsA[i].classList.contains('card--flipped')&&flipCard(cardsA[i]);
    cardsB[i].classList.contains('card--flipped')&&flipCard(cardsB[i]);
    //flipCard(cardsA[i]);
    //flipCard(cardsB[i]);
  }
  await delay(550);
  for(let i=0;i<cardsLength;i++) {
    cardsA[i].classList.add('vanish');
    cardsB[i].classList.add('vanish');
  }
  await delay(1400);
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
  await delay(1000);
  flipCard(cardA);
  await delay(700);
  viewBattle.querySelector('h3').classList.toggle('hide');
  await delay(700);
  flipCard(cardB);
  await delay(1200);

  let scores = [0, 0];
  let winner = false;

  for (let index = 0; index < battleLog.rounds.length && !winner; index++) {
    const { handA, handB } = battleLog.rounds[index];
    const roundWinner = await solveBattleScript(configA.backCover, configB.backCover, handA.map(c=>battleLog.arsenalA[c]), handB.map(c=>battleLog.arsenalB[c]));
    console.log(playerA.querySelector(`ul:nth-child(1)`));
    if (roundWinner>0) {
      scores[0]++;
      console.log(playerA.querySelector(`li`));
      playerA.querySelector(`li:nth-child(${scores[0]})`).classList.add('score');
    };
    if (roundWinner<0) {
      scores[1]++;
      console.log(playerB.querySelector(`li:nth-child(${scores[1]})`));
      playerB.querySelector(`li:nth-child(${scores[1]})`).classList.add('score');
    };
    winner = scores[0] >= 2 || scores[1] >= 2;
    await delay(1500);
    if(!winner) {
      await displayCustomDialog('next round');
      await dismissCards();
    }
  }
  toggleDialog('battle-end');
  await delay(2000);
  toggleDialog();
  back();
  player.arsenal.push(~~(Math.random()*8));
  player.hand = [];
  handSet = [false, false, false];
  renderGamePage();
  // display winner
}