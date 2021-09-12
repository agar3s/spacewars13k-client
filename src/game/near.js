

const contractName = 'dev-1629007181166-2789359';

const getNetworkConfig = (networkId) => {
  return {
    networkId,
    nodeUrl: `https://rpc.${networkId}.near.org`,
    walletUrl: `https://wallet.${networkId}.near.org`,
    contractName,
    deps: { keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore() }
  };
}

const connectTo = async () => {
  const near = await nearApi.connect(getNetworkConfig(NETS[net].toLowerCase()));
  
  const walletConnection = new nearApi.WalletConnection(near);
  contract = await new nearApi.Contract(walletConnection.account(), contractName, {
    viewMethods: ['getAccount', 'getGameState', 'getGame'],
    changeMethods: ['addCredit', 'getLastBattleLog', 'joinGame', 'startGame', 'setHand'],
    sender: walletConnection.account()
  });
  if (walletConnection.isSignedIn()) {
    // Logged in account, can write as user signed up through wallet
    //account = walletConnection.account();
    syncGameState()
  } else {
    let account = new nearApi.Account(near.connection, contractName);
    walletConnection.requestSignIn(contractName)
  }
  logout = async () => {
    displayCustomDialog('loading...', 0);
    await walletConnection.signOut();
    saveLocalStorage('net', LOCAL);
    location.reload();
  }
}


addCreditNear = () => {
  displayCustomDialog('loading...', 0);
  contract.addCredit({}, '20000000000000', '100000000000000000000000');
}

const syncGameState = async () => {
  let { ships=[], credits=1, player:_player, inQueue=-1} = (await contract.getAccount({account_id:contract.account.accountId})) || {};
  game = await contract.getGame();
  updateCredits(credits);
  if (_player) {
    //player = _player;
    player = assignPlayer(_player.id, _player.ship, _player.arsenal, _player.wins);
    //player.shipId = _player.ship;
    players=[player];
  }
  if (_player&&_player.state!=5 && game.state>LOBBY&&game.state<OVER) {
    await delay(100);
    loadGameScreen();
  }
  if (game.state==LOBBY && inQueue>=0) {
    toggleJoin();
    joinGameLabel.innerHTML = `${game.waitingPlayers}/8 PLAYERS READY TO PLAY`;
  }
}

const updateCredits = (_credits) => {
  credits = _credits;
  tCredits.innerHTML = `CREDITS ${credits.toString().padStart(3, '0')}`;
}
updateCredits(1);



const initNear = async () => {
  net = getLocalStorage('net', LOCAL);
  netSelect.value = net;
  if (net !== LOCAL) await connectTo();
}

