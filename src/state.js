
const MAINNET=0;
const TESTNET=1;
const LOCALNET=2;

const NETS = {
  [MAINNET]: 'mainnet',
  [TESTNET]: 'testnet',
  [LOCALNET]: '',
};

const LOBBY = 0;
const JOINED = 1;
const WAITING = 2;
const SOLVING_TURN = 3;
const END = 4;

const GAME_STATE = {
  [LOBBY]: LOBBY,
  [JOINED]: JOINED,
  [WAITING]: WAITING,
  [SOLVING_TURN]: SOLVING_TURN,
  [END]: END
};

let net = NETS[MAINNET];
// Im in a game?
let inGame = false;

let game = {
  state: GAME_STATE[LOBBY],
  shipId: ~~(Math.random()*13*1024),
  alive: true,
  arsenal: [0, 1, 2, 0],
  hand: [],
  ready: false,
  victories: 0,
  totalPlayers: 0,
  round: 3
};

const loadGameScreen = () => {
  changePage('game', false);
  console.log(game.shipId);
  const adn = codesToShip[game.shipId];
  const config = adnToShipConfig(adn);
  const card = createCard(config);
  ship.appendChild(card.cardElement);
  renderGamePage();
};

const setGameState = (state) => {
  switch (state) {
    case LOBBY: break;
    case JOINED:
      loadGameScreen();
    break;
    case WAITING: break;
    case SOLVING_TURN: break;
    case END: break;
  }
  game.state = state;
};

