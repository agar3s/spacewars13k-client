
let currentPage = 'index';
let previousPage = [];

const changePage = (page, back) => {
  if (!back) previousPage.push(currentPage);
  //console.log(currentPage, page);
  addClass(byId(currentPage), 'hide');
  removeClass(byId(page), 'hide');
  currentPage = page;
};

const joinGame = async () => {
  joinGameLocal();
  await delay(1500);
  md(-14);
  await delay(1300);
  md(-14);
  await delay(1000);
  td();
  addClass(joinGamebtn, 'hide');
  removeClass(joinGameLabel, 'hide');
  netSelect.disabled = true;
};

window.back = () => {
  changePage(previousPage.pop(), true);
};

let dialogTop = 0;
let dialogMax = -105;
let dialogCategory = '';
let dialogConfig = {
  rules: {
    max: -105
  },
  join: {
    max: -28,
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
      setGameState(JOINED);
      await delay(600);
      td();
    }
  },
  'battle-end': {
    max: -14,
    disableLinks: true,
    onOpen: async () => {
      await delay(800);
    }
  }
};

md = (val) => {
  dialogTop += val;
  if (dialogTop < dialogMax) td(dialogCategory);
  if (dialogTop > 0) dialogTop =  0;
  dlt.style.top = `${dialogTop}vh`;
};

let dialogOpen = false;

const displayCustomDialog = async (text, timeout=1200) => {
  document.querySelector('#dl-custom p').innerHTML = text;
  dialogConfig.custom = {
    max: 0,
    disableLinks: true,
    onOpen: async () => {
      await delay(timeout);
      td();
    }
  };
  await this.td('custom')
}

td = async (category=dialogCategory, props) => {
  dialogTop = 0;
  dlt.style.top = `${dialogTop}vh`;
  const targetDialog = byId(`dl-${category}`);
  //targetDialog.classList.toggle('hide');
  let isOpenEvent = containsClass(targetDialog, 'hide');
  dialogCategory=category;
  let {max, disableLinks, onOpen} = dialogConfig[category];
  dialogMax = max;
  const links = dl.querySelectorAll('a');
  
  for (let i=0;i<links.length;i++) {
    disableLinks?addClass(links[i], 'hide'):removeClass(links[i], 'hide');
  }
  if (isOpenEvent) {
    toggleClass(targetDialog, 'hide');
    toggleClass(dl, 'hide');
    await delay(1);
    dlb.style.top = '35vh';
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
    dialogOpen = false;
  }
};

// dgs div game state
let targetTime = Date.now() + 1000 * 60 * 5;
const updatetime = () => {
  const time = targetTime - Date.now();
  const mins = ~~(time / (1000 * 60));
  const secs = (~~((time - mins*60*1000) / 1000)).toString().padStart(2, '0');
  dgs.innerHTML = `NEXT WAR IN ${mins}:${secs}`;
  const timer = byId('timer')
  if (timer) timer.innerHTML = `${mins}:${secs}`;
}

const starGroups = [[],[],[],[],[]];

const addStar = () => {
  let x=~~(rand()*300), y=-50, vy=rand()*5+5;
  starGroups[0].push({
    move: _=> y = y+vy>300?((vy=rand()*5 + 5)||-50):y+vy, draw:(ctx)=>ctx.fillRect(x, y, 2, 4)
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
  //console.log(vx, vy);
  starGroups[1].push({
    move: _=> {
      y += vy; x+= vx;
      if (y<0||y>300||x<0||x>200) {
        reset();
      }
      return 1;
    }, draw:(ctx)=>{
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(r);
      ctx.fillRect(0, -15, 1, 30)
      ctx.restore();
    }
  })
}


const addRandomDimension = () => {
  let speed = rand()+1;
  let x = -1, y = -1;
  let vx=0;
  let vy=0;
  const reset = () => {
    x = 100;
    vx=speed;
  };
  starGroups[2].push({
    move: _=> {
      x+= vx;
      if (x<0||x>200) {
        reset();
      }
      return 1;
    }, draw:(ctx)=>{
      ctx.save();
      //ctx.fillStyle = '#999';
      ctx.globalAlpha = 1- (200-x)/100;
      ctx.fillRect(x, 0, 2, 300)
      ctx.fillRect(200-x, 0, 2, 300)
      ctx.restore();
    }
  })
}

const enterTheVoid = () => {
  let speed = rand()+1;
  let r = rand()*50;
  starGroups[3].push({
    move: _=> {
      r += speed;
      if (r > 200) {
        r = 1;
      }
      return 1;
    }, draw:(ctx)=>{
      ctx.save();
      ctx.translate(100, 150);
      ctx.beginPath();
      //ctx.strokeStyle = '#eee';
      ctx.strokeWidth = 2;
      ctx.arc(0, 0, r, 0, 2 * Math.PI, false);
      ctx.stroke();
      ctx.restore();
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
      if (r > 200) {
        r = 1;
      }
      return 1;
    }, draw:(ctx)=>{
      ctx.save();
      ctx.translate(100, 150);
      ctx.rotate(Math.PI*3/4);
      //ctx.strokeStyle = '#eee';
      ctx.strokeRect(-r, -r, r*2, r*2);
      ctx.restore();
    }
  })
}


for (let i=0;i<10; i++){ addRandomDimension();}
for (let i=0;i<100; i++){ addExplodingStar();}
for (let i=0;i<100; i++){ addStar();}
for (let i=0;i<10; i++){ increasingStars();}
for (let i=0;i<30; i++){ enterTheVoid();}


var playing = true;
const loopStars = () => {
  starGroups.forEach(stars => stars.forEach(star => star.move()));
  contexts.forEach(fn => fn(starGroups));
};

const renderGamePage = () => {
  gameStats.innerHTML = `
<tr><td>SPACEWAR: #${ game.id }</td><td>${ net }</td></tr>
<tr><td>ROUND: #${ game.round }</td><td>NEXT BATTLE: <span id='timer'>00:00:11</td></tr>
<tr><td>REMAINING SHIPS: ${ 8 }</td></tr>
  `;

  shipStats.innerHTML = `
<span class='shipName'>${BASE_NAMES[player.config.shapeId]} ${WINGS_NAMES[player.config.wingsId]}</span>
<hr>
<span>SPACESHIP: <a href='?id=${ player.shipId }' target='_blank'>#${ player.shipId }</a></span>
<span>GALAXY: ${ GALAXY_NAMES[player.config.bgEffect] }</span>
<span>FACTION: ${ FACTION_NAMES[player.config.backCover] }</span>
<span>VICTORIES: ${ player.victories }</span>
<hr>
<a style='display:block;margin-top:1vh' class='blink_me' href='#'>WAITING FOR ORDERS</a>`;
  group.innerHTML='';
  player.arsenal.forEach((card, arsenalIndex) => group.appendChild(getHTMLCard(card, arsenalIndex)));
};

window.setOrderAction = () => {
  //console.log('player.hand', player.hand);
  if (player.hand.length < 3) {
    displayCustomDialog('choose 3 cards from your arsenal');
  } else {
    setHandLocal();
  }
  //changePage('viewBattle');
  //loadBattle(battleLog);
}


// init code
const initialization = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = parseInt(urlParams.get('id'));
  if (isNaN(id) || id < 0 || id >= 13*1024) return;
  changePage('viewCard');
  const config = getShipById(id);
  const card = createCard(config);
  viewCard.appendChild(card.cardElement);
  addClass(card.cardElement, 'cf');
}

initialization();
if (DEBUG) {
  timeFactor = 1;
  //startGame();  
  //setGameState(JOINED);
  //changePage('viewBattle');
  //loadBattle(battleLog);
  //changePage('game');
  //loadGameScreen();
  //changePage('debugView')
}



