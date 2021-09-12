

const CONTRACT_NAME = 'dev-1629007181166-2789359';

const mainnet = {
  networkId: 'mainnet',
  nodeUrl: 'https://rpc.mainnet.near.org',
  contractName: CONTRACT_NAME,
  walletUrl: 'https://wallet.near.org',
  deps: { keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore() }
}
const testnet = {
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  contractName: CONTRACT_NAME,
  walletUrl: 'https://wallet.testnet.near.org',
  deps: { keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore() }
}

const connectTo = async () => {
  const near = await nearApi.connect(testnet);
  
  const walletConnection = new nearApi.WalletConnection(near);
  contract = await new nearApi.Contract(walletConnection.account(), CONTRACT_NAME, {
    viewMethods: ['getAccount', 'getGameState', 'getGame'],
    changeMethods: ['addCredit', 'getLastBattleLog', 'joinGame', 'startGame', 'setHand'],
    sender: walletConnection.account()
  });
  let account;
  if (walletConnection.isSignedIn()) {
    // Logged in account, can write as user signed up through wallet
    account = walletConnection.account();
  } else {
  // Contract account, normally only gonna work in read only mode
    account = new nearApi.Account(near.connection, CONTRACT_NAME);
  }
  walletConnection.requestSignIn(CONTRACT_NAME)
}

addCreditNear = () => contract.addCredit({}, 20*10**12, nearApi.utils.format.parseNearAmount('0.1'));


getAccountState = async () => {
  let { id, state, totalPlayers, turn} = await contract.getGame();
  let { ships=[], credits=1, player=null, inQueue=-1} = (await contract.getAccount({account_id:contract.account.accountId})) || {};
  updateCredits(credits);
  if (player && player.state!=5 && state != 5) {
    setPlayer(assignPlayer(player.id, player.ship, player.cards, player.wins))
    await delay(100);
    setGameState(JOINED);
  }
  if (inQueue>=0) {
    toggleJoin();
  }
}

updateCredits = (credits) => {
  window.credits = credits;
  tCredits.innerHTML = `CREDITS ${credits.toString().padStart(3, '0')}`;
}


const initNear = async () => {
  await connectTo();
  await getAccountState();
//  addCreditNear();
}

