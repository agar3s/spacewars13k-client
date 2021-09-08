
const timeFactor = 80;

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
  await delay(second?timeFactor*8:12*timeFactor);
  !second && flipCard(cardElementA);
  !second && flipCard(cardElementB);
  await delay(second?0:8*timeFactor);
  let winner = solveBattle(cardA, cardB, second);
  cardElementA.classList.add(winner);
  cardElementB.classList.add(winner);
  if (!second && winner===TIE) {
    await delay(5*timeFactor);
    cardElementA.classList.remove(winner);
    cardElementB.classList.remove(winner);
    secondOption(cardElementA);
    secondOption(cardElementB);
    return await animateBattle(cardElementA, cardElementB, cardA, cardB, true);
  }
  return BATTLE_VALUES[winner];
}

const solveBattleScript = async (playerHandA, playerHandB) => {
  console.log(playerHandA)
  console.log(playerHandB)
  const handA = setupHand(sideA, playerHandA, configA.backCover);
  const handB = setupHand(sideB, playerHandB, configB.backCover);
  await delay(1*timeFactor);
  handA.forEach(cardElement=>cardElement.style.top=0);
  handB.forEach(cardElement=>cardElement.style.top=0);
  let points = 0;
  for (let index = 0; index < handA.length && Math.abs(points)<2; index++) {
    points += await animateBattle(handA[index], handB[index], playerHandA[index], playerHandB[index]);
  }
  return points;
}

const dismissCards = async () => {
  await delay(25*timeFactor);
  const cardsA = sideA.querySelectorAll('.card');
  const cardsB = sideB.querySelectorAll('.card');
  const cardsLength = cardsA.length;
  for(let i=0;i<cardsLength;i++) {
    cardsA[i].classList.contains('card--flipped')&&flipCard(cardsA[i]);
    cardsB[i].classList.contains('card--flipped')&&flipCard(cardsB[i]);
    //flipCard(cardsA[i]);
    //flipCard(cardsB[i]);
  }
  await delay(5.5*timeFactor);
  for(let i=0;i<cardsLength;i++) {
    cardsA[i].classList.add('vanish');
    cardsB[i].classList.add('vanish');
  }
  await delay(14*timeFactor);
}

const configA = getRandomshipConfig();
const configB = getRandomshipConfig();
const battleLog = {
  shipA: ~~(Math.random()*13*1024),
  shipB: ~~(Math.random()*13*1024),
  arsenalA: [0,0,0,0,0].map(c=>~~(Math.random()*9)),
  arsenalB: [0,0,0,0,0].map(c=>~~(Math.random()*9)),
  winner: 0,
  rounds: [
    {
      handA: [0,0,0].map(c=>~~(Math.random()*5)),
      handB: [0,0,0].map(c=>~~(Math.random()*5))
    },
    {
      handA: [0,0,0].map(c=>~~(Math.random()*5)),
      handB: [0,0,0].map(c=>~~(Math.random()*5))
    },
    {
      handA: [0,0,0].map(c=>~~(Math.random()*5)),
      handB: [0,0,0].map(c=>~~(Math.random()*5))
    },
    {
      handA: [0].map(c=>~~(Math.random()*5)),
      handB: [0].map(c=>~~(Math.random()*5))
    },
    {
      handA: [0].map(c=>~~(Math.random()*5)),
      handB: [0].map(c=>~~(Math.random()*5))
    }
  ]
}
const loadBattle = async (battleLog) => {
  // present cards
  const cardA = addCardToBattle(configA, playerA);
  const cardB = addCardToBattle(configB, playerB);
  changePallete(configA.pallete);
  await delay(10*timeFactor);
  flipCard(cardA);
  await delay(7*timeFactor);
  viewBattle.querySelector('h3').classList.toggle('hide');
  await delay(7*timeFactor);
  flipCard(cardB);
  await delay(12*timeFactor);

  let scores = [0, 0];
  let winner = false;

  for (let index = 0; index < battleLog.rounds.length && !winner; index++) {
    const { handA, handB } = battleLog.rounds[index];
    const roundWinner = await solveBattleScript(handA.map(c=>battleLog.arsenalA[c]), handB.map(c=>battleLog.arsenalB[c]));
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
    await delay(15*timeFactor);
    if(!winner) {
      await displayCustomDialog('next round');
      await dismissCards();
    }
  }
  toggleDialog('battle-end');

  // display winner
}
