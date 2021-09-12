

let mockRemoteGameState = LOBBY;
const LOCAL_PLAYERS = 8;

const assignPlayer = (id, _shipId, _arsenal, _wins) => {
  const shipId = _shipId || regularRandomInt(0, TOTAL_NFTS);
  const shipADN = codesToShip[shipId];
  return {
    id,
    shipId,
    shipADN,
    config: adnToShipConfig(shipADN),
    alive: true,
    arsenal: _arsenal || [0, 1, 2, regularRandomInt(3, cards.length)],
    hand: [],
    ready: false,
    victories: _wins || 0
  };
}



const startGame = async () => {
  if (dialogOpen) await td();
  // check network
  for (let i=0; i<LOCAL_PLAYERS; i++) {
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
  await delay(350);
  startGame();
};

const loadNewRound = () => {
  game.round += 1;
  player.ready = false;
  player.hand = [];
};


const randomHand = (arsenal) => arsenal.map((_, index)=>index).sort(randomSort).splice(0, 3);

const solveTurnLocal = async () => {
  //if (game.state !== HOLD) return;
  if (player.hand.length === 0) {
    player.hand = randomHand(player.arsenal);
  }
  const [rival] = players.splice(regularRandomInt( 1, players.length), 1);
  players.splice(1, ~~(players.length/2));
  rival.hand = randomHand(rival.arsenal);
  const battleLog = solveBattle(player, rival);
  await displayCustomDialog('BATTLE IS ABOUT TO START!', 1500);
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
  let handA;
  let handB;
  while (scores[0]<2&&scores[1]<2) {
    if (battleRound>10) break;
    switch (battleRound) {
      case 0:
        handA = playerA.hand.map(_=>_);
        handB = playerB.hand.map(_=>_);
      break;
      case 1:
        handA = playerA.hand.sort(randomSort).map(_=>_);
        handB = playerB.hand.sort(randomSort).map(_=>_);
        break;
        case 2: 
        handA = randomHand(playerA.arsenal);
        handB = randomHand(playerB.arsenal);
      break;
      default:
        handA = [regularRandomInt(0, playerA.arsenal.length)];
        handB = [regularRandomInt(0, playerB.arsenal.length)];
      break;
    }
    const res = handA.reduce((score, _, index) => score + solveCardAbsolute(playerA.arsenal[handA[index]], playerB.arsenal[handB[index]]), 0);
    if (res>0) scores[0]++;
    if (res<0) scores[1]++;
    log.rounds.push({ handA, handB });
    battleRound += 1;
  }
  log.winner = scores[0]>scores[1]?0:1;
  return log;
}

const checkGameState = () => {
}


const roundFinish = () => {
  changePage('game');
  player.arsenal.push(regularRandomInt(0,9));
  player.hand = [];
  handSet = [false, false, false];

  player.victories += 1;
  game.round += 1;
  blIndex = 0;
  renderGamePage();
}


// handle events depending on network
addCredits = () => {
  if (net!=NETS[LOCAL]) {
    addCreditNear();
  }
}


const joinGame = async () => {
  if (credits==0) return;
  await delay(1500);
  if (net!=NETS[LOCAL]) {
    const reply = await contract.joinGame();
    if (reply === 3) updateCredits(credits-1);
  }
  // add network
  md(-14);
  await delay(1300);
  md(-14);
  await delay(1000);
  td();
  if (net==NETS[LOCAL]) {
    joinGameLocal();
  }
  toggleJoin();
};

setHand = async () => {
  if (player.hand.length < 3) {
    displayCustomDialog('choose 3 cards from your arsenal');
  } else {
    blIndex = 1;
    const reply = blMeStates[blIndex];
    await displayCustomDialog(reply);
    byId('blMe').innerHTML=reply;
    if (net==NETS[LOCAL]) { 
      await solveTurnLocal();
    } else {
      await contract.setHand({hand:player.hand});
    }
  }
  //changePage('viewBattle');
  //loadBattle(battleLog);
}

loadLastBattle = async () => {
  displayCustomDialog('BATTLE IS ABOUT TO START!', 0);
  const battleLog = await contract.getLastBattleLog({account_id:contract.account.accountId});
  battleLog.rounds = battleLog.rounds.map(([handA, handB])=> { return {handA, handB};});
  changePage('viewBattle');
  loadBattle(battleLog);
  td();
}

