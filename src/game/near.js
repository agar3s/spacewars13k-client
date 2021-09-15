
const contractName = 'spacewars.neuromancer';

const getNetworkConfig = (networkId) => {
  return {
    networkId,
    nodeUrl: `https://rpc.${networkId}.near.org`,
    walletUrl: `https://wallet.${networkId}.near.org`,
    contractName: `${contractName}.${networkId}`,
    deps: { keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore() }
  };
}

const connectTo = async (force) => {
  const near = await nearApi.connect(getNetworkConfig(NETS[net]));
  const con = `${contractName}.${net}`;
  const walletConnection = new nearApi.WalletConnection(near);
  contract = await new nearApi.Contract(walletConnection.account(), con, {
    viewMethods: ['getAccount', 'getGame'],
    changeMethods: ['addCredit', 'getLastBattleLog', 'joinGame', 'setHand'],
    sender: walletConnection.account()
  });
  if (walletConnection.isSignedIn()) {
    // Logged in account, can write as user signed up through wallet
    //account = walletConnection.account();
    displayCustomDialog(`connected to ${NETS[net]}`, 2400);
    await syncGameState();
    toggleClass(bye, 'hide');
  } else if (force) {
    let account = new nearApi.Account(near.connection, con);
    walletConnection.requestSignIn(con)
  } else {
    netSelect.value = LOCAL;
    saveLocalStorage('net', LOCAL);
    reload();
  }
  logout = async () => {
    displayCustomDialog('loading...', 0);
    await walletConnection.signOut();
    saveLocalStorage('net', LOCAL);
    reload();
  }
}


addCreditNear = () => {
  displayCustomDialog('loading...', 0);
  contract.addCredit({}, '20000000000000', '100000000000000000000000');
}

const syncGameState = async () => {
  if (gameOver) return;
  let { ships=[], credits=1, player:_player, inQueue=-1} = (await contract.getAccount({account_id:contract.account.accountId})) || {};
  updateCredits(credits);
  if (_player) {
    if (player.id != _player.id || game.state<=SETUP) {
      player = assignPlayer(_player.id, _player.ship);
      player.alive = getLocalStorage('pS')=='true';
      players=[player];
    }
    player.state = _player.state;
    player.arsenal = _player.arsenal;
    player.victories = _player.wins;
  }

  handleGameUpdate(await contract.getGame());
  if (game.state==LOBBY && inQueue>=0) {
    !containsClass(joinGamebtn, 'hide') && toggleJoin();
    joinGameLabel.innerHTML = `${game.waitingPlayers}/8 players ready to play`;
  }

  setTimeout(syncGameState, 10000);
}

const updateCredits = (_credits) => {
  credits = _credits;
  tCredits.innerHTML = `credits ${credits.toString().padStart(3, '0')}`;
}
updateCredits(1);



const initNear = async () => {
  net = getLocalStorage('net', LOCAL);
  netSelect.value = net;
  if (net !== LOCAL) await connectTo();
}

