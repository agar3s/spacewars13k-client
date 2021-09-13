
const MAINNET='mainnet';
const TESTNET='testnet';
const LOCAL='local';

const NETS = {
  [MAINNET]: MAINNET,
  [TESTNET]: TESTNET,
  [LOCAL]: LOCAL,
};

const BUSY = 0;
const LOBBY = 1;
const SETUP = 2;
const WAIT_PLAYERS = 3;
const SOLVING_TURN = 4;
const OVER = 5;


const GAME_STATE = {
  [BUSY]: BUSY,
  [LOBBY]: LOBBY,
  [SETUP]: SETUP,
  [WAIT_PLAYERS]: WAIT_PLAYERS,
  [SOLVING_TURN]: SOLVING_TURN,
  [OVER]: OVER
};

let net = LOCAL;

let players;
let player;
let game;

const resetState = () => {
  players = [];
  player = {
    id: -1,
    shipId: 0,
    alive: true,
    arsenal: [0, 1, 2, regularRandomInt(0, 9)],
    hand: [],
    ready: false,
    victories: 0
  };
  game = {
    id: regularRandomInt(0,1000),
    state: GAME_STATE[LOBBY],
    totalPlayers: 0,
    round: 0
  };
};


const loadGameScreen = () => {
  changePage('game');
  renderGamePage();
};

const setGameState = (state) => {
  game.state = state;
};

