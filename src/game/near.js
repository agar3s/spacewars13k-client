
console.log(nearApi);
const CONTRACT_NAME = 'dev-1629007181166-2789359';
with(nearApi) {
  const mainnet = {
    networkId: 'mainnet',
    nodeUrl: 'https://rpc.mainnet.near.org',
    contractName: CONTRACT_NAME,
    walletUrl: 'https://wallet.near.org',
    deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() }
  }
  const testnet = {
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    contractName: CONTRACT_NAME,
    walletUrl: 'https://wallet.testnet.near.org',
    deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() }
  }
  
  const connectTo = async () => {
    const near = await connect(testnet)
    
    const walletConnection = new WalletConnection(near);
    console.log(walletConnection);
    contract = await new Contract(walletConnection.account(), CONTRACT_NAME, {
      viewMethods: ['testAlgo2'],
      changeMethods: ['setGreeting', 'joinGame', 'startGame', 'setHand', 'solveTurn', 'newGame'],
      sender: walletConnection.account()
    });
    let account;
    if (walletConnection.isSignedIn()) {
      // Logged in account, can write as user signed up through wallet
      account = walletConnection.account();
    } else {
    // Contract account, normally only gonna work in read only mode
      account = new Account(near.connection, CONTRACT_NAME);
    }
    console.log(account);
    walletConnection.requestSignIn(CONTRACT_NAME)
  }
  connectTo();
}

