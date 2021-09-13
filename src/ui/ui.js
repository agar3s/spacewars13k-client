
let currentPage = 'index';

const changePage = (page) => {
  addClass(byId(currentPage), 'hide');
  removeClass(byId(page), 'hide');
  currentPage = page;
};

const toggleJoin = () => {
  toggleClass(joinGamebtn, 'hide');
  toggleClass(joinGameLabel, 'hide');
  netSelect.disabled = !netSelect.disabled;
};

let dialogTopn;
let dialogMax;
let dialogCategory = '';
let dialogOpen = false;

let dialogConfig = {
  rules: {
    max: -40
  },
  join: {
    max: -14,
    disableLinks: true,
    onOpen: joinGame
  },
  wait: {
    max: -14,
    disableLinks: true,
    onOpen: async () => {
      await delay(800);
      md(-14);
      await delay(1200);
      loadGameScreen();
      await delay(600);
      td();
    }
  },
  'battle-lose': {
    max: -14,
    onOpen: async () => {
      await delay(1200);
      md(-14);
    },
    onClose: reload
  }, 
  'battle-win': {
    max: -14,
    disableLinks: true,
    onOpen: async () => {
      await delay(2000);
      md(-14);
      await delay(3000);
      td();
    },
    onClose: roundFinish
  },
  'chicken-dinner': {
    max: -28,
    top: 60,
    onOpen: async () => {
      const aLink = `<a class='da' href='?id=${ player.shipId }' target='_blank'>#${ player.shipId }</a>`;
      if (net == NETS[LOCAL]) {
        winnerMessage.innerHTML = `Now you can Join to the<br>Near blockchain to earn<br>spaceships NFTs`;
      } else {
        winnerMessage.innerHTML = `The NFT ${aLink} is beeing<br>assigned to your wallet!`;
      }
      addClass(playerA.querySelector('.card'), 'chicken');
      await delay(2000);
      md(-14);
      await delay(3000);
    },
    onClose: reload
  }
};

md = (val) => {
  dialogTop += val;
  if (dialogTop < dialogMax) dialogTop -= val;
  if (dialogTop > 0) dialogTop =  0;
  dlt.style.top = `${dialogTop}vh`;
};

joinGamebtn.onclick=()=>credits<1?displayCustomDialog('not enough credits'):td("join");


const displayCustomDialog = async (text, timeout=1200) => {
  document.querySelector('#dl-custom p').innerHTML = text;
  let globalResolve =_=>_;
  const returnPromise = new Promise(resolve=>globalResolve=resolve);
  dialogConfig.custom = {
    max: 0,
    disableLinks: true,
    onOpen: async () => {
      if (timeout==0) return;
      await delay(timeout);
      td();
    },
    onClose: globalResolve
  };
  this.td('custom');
  return returnPromise;
}

td = async (category=dialogCategory, props) => {
  dialogTop = 0;
  dlt.style.top = `${dialogTop}vh`;
  const targetDialog = byId(`dl-${category}`);
  //targetDialog.classList.toggle('hide');
  let isOpenEvent = containsClass(targetDialog, 'hide');
  dialogCategory=category;
  let { max, disableLinks, onOpen, onClose, top=35 } = props || dialogConfig[category];
  dialogMax = max;
  const links = dl.querySelectorAll('a');
  
  for (let i=0;i<links.length;i++) {
    disableLinks?addClass(links[i], 'hide'):removeClass(links[i], 'hide');
  }
  if (isOpenEvent) {
    toggleClass(targetDialog, 'hide');
    toggleClass(dl, 'hide');
    await delay(1);
    dlb.style.top = `${ top }vh`;
    dlb.style.opacity = '1';
    await delay(300);
    onOpen && onOpen();
    dialogOpen = true;
  } else {
    await delay(1);
    dlb.style.top = '100vh';
    dlb.style.opacity = '0';
    await delay(300);
    dlb.style.top = '0vh';
    toggleClass(targetDialog, 'hide');
    toggleClass(dl, 'hide');
    onClose && onClose();
    dialogOpen = false;
  }
};

// dgs div game state
const MINS = 3; // setup different times depending on network?
let targetTime;
const setTargetTime = delay => targetTime = Date.now() + 1000 * 60 * MINS + delay;
setTargetTime(0);

const updatetime = () => {
  const time = targetTime - Date.now();
  if (time < 0) {
    // emit timeout!!!
    setTargetTime(time);
  }

  const mins = ~~(time / (1000 * 60));
  const secs = (~~((time - mins*60*1000) / 1000)).toString().padStart(2, '0');
  dgs.innerHTML = `game will start in ${mins}:${secs}`;
  const timer = byId('timer')
  if (timer) timer.innerHTML = `${mins}:${secs}`;
}

const starGroups = [[],[],[],[],[]];

const addStar = () => {
  let x=~~(rand()*300), y=-50, vy=rand()*5+5;
  starGroups[0].push({
    move: _ => y = y+vy>300?((vy=rand()*5 + 5)||-50):y+vy,
    draw: ctx => ctx.fillRect(x, y, 2, 4)
  })
}
const addExplodingStar = () => {
  let speed = rand()*5 + 0;
  let r = rand()*Math.PI*2;
  let x = -1, y = -1;
  let vx=0;
  let vy=0;
  const reset = () => {
    x = 100;
    y = 150;
    r = rand()*Math.PI*2;
    vx=Math.cos(r)*speed; vy=Math.sin(r)*speed;
  };

  starGroups[1].push({
    move: _=> {
      y += vy; x+= vx;
      if (y<0||y>300||x<0||x>200) reset();
    }, draw:(ctx)=>{
      ctx.translate(x, y);
      ctx.rotate(r);
      ctx.fillRect(0, -15, 1, 30)
    }
  })
}


const addRandomDimension = () => {
  let x = -1;
  let vx=rand()+1;
  const reset = () => {
    x = 100;
    vx=rand()+1;
  };
  starGroups[2].push({
    move: _=> {
      x+= vx;
      if (x<0||x>200) reset();
    }, draw:(ctx)=>{
      //ctx.fillStyle = '#999';
      ctx.globalAlpha = 1- (200-x)/100;
      ctx.fillRect(x, 0, 2, 300)
      ctx.fillRect(200-x, 0, 2, 300)
    }
  })
}

const enterTheVoid = () => {
  let speed = rand()+1;
  let r = rand()*50;
  starGroups[3].push({
    move: _=> {
      r += speed;
      if (r > 200) r = 1;
    }, draw:(ctx)=>{
      ctx.translate(100, 150);
      ctx.beginPath();
      //ctx.strokeStyle = '#eee';
      ctx.strokeWidth = 2;
      ctx.arc(0, 0, r, 0, 2 * Math.PI, false);
      ctx.stroke();
    }
  })
};

const increasingStars = () => {
  let speed = rand()+1;
  let r = rand()*200;
  let tangSpeed = 0.01;
  let angle = rand()*Math.PI*2;
  starGroups[4].push({
    move: _=> {
      r += speed;
      angle += tangSpeed;
      if (r > 200) r = 1;
    }, draw:(ctx)=>{
      ctx.translate(100, 150);
      ctx.rotate(Math.PI*3/4);
      //ctx.strokeStyle = '#eee';
      ctx.strokeRect(-r, -r, r*2, r*2);
    }
  })
}


for (let i=0;i<10; i++){
  addRandomDimension();
  increasingStars();
}
for (let i=0;i<100; i++){ 
  addExplodingStar();
  addStar();
}
for (let i=0;i<30; i++){ enterTheVoid();}

const loopStars = () => {
  starGroups.forEach(stars => stars.forEach(star => star.move()));
  contexts.forEach(fn => fn(starGroups));
};
const blMeStates = ['waiting for orders', 'ready for battle'];
let blIndex = 0;
const renderGamePage = () => {
  if (!ship.children.length) {
    const config = getShipById(player.shipId);
    const card = createCard(config);
    ship.appendChild(card.cardElement);
  }
  gameStats.innerHTML = `
<tr><td>spacewar: #${ game.id }</td><td>${ net }</td></tr>
<tr><td>round: #${ game.round }</td><td>next battle: <span id='timer'></td></tr>
<tr><td>remaining ships: ${ game.totalPlayers }</td><td>${ game.totalPlayers==2?' - last round -':'' }</td></tr>
  `;

  shipStats.innerHTML = `
<span class='shipName'>${BASE_NAMES[player.config.shapeId]} ${WINGS_NAMES[player.config.wingsId]}</span>
<hr>
<span>spaceship: <a href='https://bafybeifh3mmbyccjo64qjr6thhphyspnxirtcv6rxb3bsip5noaicv5v4i.ipfs.dweb.link?id=${ player.shipId }' target='_blank'>#${ player.shipId }</a></span>
<span>galaxy: ${ GALAXY_NAMES[player.config.bgEffect] }</span>
<span>faction: ${ FACTION_NAMES[player.config.backCover] }</span>
<span>victories: ${ player.victories }</span>
<hr>
<a id='blMe' href='#'>${blMeStates[blIndex]}</a>`;
  group.innerHTML='';
  player.arsenal.forEach((card, arsenalIndex) => group.appendChild(getHTMLCard(card, arsenalIndex)));
};

netSelect.onchange = _ => {
  net = netSelect.value;
  saveLocalStorage('net', net);
  if (net==LOCAL) return reload();
  connectTo(true);
}

// init code
const initialization = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = parseInt(urlParams.get('id'));
  if (isNaN(id) || id < 0 || id >= TOTAL_NFTS) return;
  changePage('viewCard');
  const config = getShipById(id);
  const card = createCard(config);
  viewCard.appendChild(card.cardElement);
  addClass(card.cardElement, 'cf');
}
resetState();
initNear();
if (DEBUG) {
  initialization();
  timeFactor = 0.5;
  //setGameState(JOINED);
  //changePage('viewBattle');
  //startGame();
  //loadGameScreen();
  //changePage('debugView')
}



