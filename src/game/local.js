

let mockRemoteGameState = LOBBY;

const assignPlayer = (id) => {
  const shipId = regularRandomInt(0, 13*1024);
  const shipADN = codesToShip[shipId];
  return {
    id,
    shipId,
    shipADN,
    config: adnToShipConfig(shipADN),
    alive: true,
    arsenal: [0, 1, 2, regularRandomInt(3, cards.length)],
    hand: [],
    ready: false,
    victories: 0
  };
}

const startGame = async () => {
  if (dialogOpen) await td();
  for (let i=0; i<8; i++) {
    players.push(assignPlayer(i));
  }
  game.totalPlayers = player.length;
  player = { ...players[0] };
  td('wait');
  loadNewRound();
};

const createGame = () => {
  game.id = 0;
  setGameState(LOBBY);
  game.totalPlayers = 0;
  game.round = 0;
}

const joinGameLocal = async () => {
  await delay(5000);
  startGame();
};

const loadNewRound = () => {
  game.round += 1;
  player.ready = false;
  player.hand = [];
  setGameState(TURN);
};

const setHandLocal = () => {
  setGameState(HOLD);
  setTimeout(() => {
    solveTurnLocal();
  }, 3000);
};

const randomHand = (arsenal) => arsenal.map((_, index)=>index).sort(randomSort).splice(0, 3);

const solveTurnLocal = () => {
  if (game.state !== HOLD) return;
  if (player.hand.length === 0) {
    player.hand = randomHand(player.arsenal);
  }
  const rival = players[regularRandomInt( 1, players.length)];
  rival.hand = randomHand(rival.arsenal);
  const battleLog = solveBattle(player, rival);

  changePage('viewBattle');
  loadBattle(battleLog);
  setGameState(SOLVING_TURN);
}

const solveCardAbsolute = (cardA, cardB) => {
  let sol = solveCards(cardA, cardB);
  if (sol === TIE) {
    sol = solveCards(cardA, cardB, true);
  }
  return BATTLE_VALUES[sol];
}

const solveBattle = (playerA, playerB) => {
  let log = {
    shipA: playerA.shipId,
    shipB: playerB.shipId,
    arsenalA: playerA.arsenal,
    arsenalB: playerB.arsenal,
    winner: -1,
    rounds: []
  };
  let scores = [0, 0];
  let battleRound = 0;
  let handA = playerA.hand.map(_=>_);
  let handB = playerB.hand.map(_=>_);
  while (scores[0]<2&&scores[1]<2) {
    //console.log('a problem?', battleRound);
    if (battleRound>10) break;
    switch (battleRound) {
      case 0:
        //console.log(0, handA, handB);
      break;
      case 1:
          handA = playerA.hand.sort(randomSort).map(_=>_);
          handB = playerB.hand.sort(randomSort).map(_=>_);
          //console.log(1, handA, handB);
          break;
          case 2: 
          handA = randomHand(playerA.arsenal);
          handB = randomHand(playerB.arsenal);
          //console.log(2, handA, handB);
      break;
      default:
        handA = [regularRandomInt(0, playerA.arsenal.length)];
        handB = [regularRandomInt(0, playerB.arsenal.length)];
      break;
    }
    const res = handA.reduce((score, _, index) => score + solveCardAbsolute(playerA.arsenal[handA[index]], playerB.arsenal[handB[index]]), 0);
    if (res>0) scores[0]++;
    if (res<0) scores[1]++;
    //console.log(battleRound, handA, handB);
    //console.log(res);
    log.rounds.push({ handA, handB });
    battleRound += 1;
  }
  log.winner = scores[0]>scores[1]?0:1;
  return log;
}

const checkGameState = () => {
  if (mockRemoteGameState === SOLVING_TURN || mockRemoteGameState === TURN) {
    //console.log('do something');
  }
}


