
let currentPage = 'index';
let previousPage = [];

const changePage = (page, back) => {
  if (!back) previousPage.push(currentPage);
  console.log(currentPage, page);
  document.getElementById(currentPage).classList.add('hide');
  document.getElementById(page).classList.remove('hide');
  currentPage = page;
};

const joinGame = async () => {
  joinGameLocal();
  await delay(1500);
  moveDialog(-14);
  await delay(1300);
  moveDialog(-14);
  await delay(1000);
  toggleDialog();
  joinGameButton.classList.add('hide');
  joinGameLabel.classList.remove('hide');
  netSelect.disabled = true;
};

window.back = () => {
  changePage(previousPage.pop(), true);
};

const delay = (ms) => new Promise((resolve)=>setTimeout(resolve, ms));

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
      moveDialog(-14);
      await delay(1200);
      setGameState(JOINED);
      await delay(600);
      toggleDialog();
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

moveDialog = (val) => {
  dialogTop += val;
  if (dialogTop < dialogMax) toggleDialog(dialogCategory);
  if (dialogTop > 0) dialogTop =  0;
  dialogText.style.top = `${dialogTop}vh`;
};

let dialogOpen = false;

const displayCustomDialog = async (text, timeout=1200) => {
  document.querySelector('#dialog-custom p').innerHTML = text;
  dialogConfig.custom = {
    max: 0,
    disableLinks: true,
    onOpen: async () => {
      await delay(timeout);
      toggleDialog();
    }
  };
  await this.toggleDialog('custom')
}

toggleDialog = async (category=dialogCategory, props) => {
  dialogTop = 0;
  dialogText.style.top = `${dialogTop}vh`;
  const targetDialog = document.getElementById(`dialog-${category}`);
  //targetDialog.classList.toggle('hide');
  let isOpenEvent = targetDialog.classList.contains('hide');
  dialogCategory=category;
  let {max, disableLinks, onOpen} = dialogConfig[category];
  dialogMax = max;
  const links = dialog.querySelectorAll('a');
  
  for (let i=0;i<links.length;i++) {
    disableLinks?links[i].classList.add('hide'):links[i].classList.remove('hide');
  }
  if (isOpenEvent) {
    targetDialog.classList.toggle('hide');
    dialog.classList.toggle('hide');
    await delay(1);
    dialogBox.style.top = '35vh';
    dialogBox.style.opacity = '1';
    await delay(300);
    onOpen && onOpen();
    dialogOpen = true;
  } else {
    await delay(1);
    dialogBox.style.top = '100vh';
    dialogBox.style.opacity = '0';
    await delay(300);
    dialogBox.style.top = '0vh';
    targetDialog.classList.toggle('hide');
    dialog.classList.toggle('hide');
    dialogOpen = false;
  }
};

const divGameState = document.getElementById('game-state');
let targetTime = Date.now() + 1000 * 60 * 5;
const updatetime = () => {
  const time = targetTime - Date.now();
  const mins = ~~(time / (1000 * 60));
  const secs = (~~((time - mins*60*1000) / 1000)).toString().padStart(2, '0');
  divGameState.innerHTML = `NEXT WAR IN ${mins}:${secs}`;
  const timer = document.getElementById('timer');
  if (timer) {
    timer.innerHTML = `${mins}:${secs}`;
  }
}

const divShip = document.getElementById('ship');
divShip.onclick = (e) => {
  const el = e.target;
  e.stopPropagation();
  if(divShip.classList.contains('card--flipped')) {
    divShip.classList.add('card--unflip');
    setTimeout(() => {
      divShip.classList.remove('card--flipped', 'card--unflip');
    }, 500);
  }
  else { 
    divShip.classList.add("card--flipped");
  }
};

window.oncardClicked = (target) => {
  if(target.classList.contains('card--flipped')) {
    target.classList.add('card--unflip');
    setTimeout(() => {
      target.classList.remove('card--flipped', 'card--unflip');
    }, 500);
  }
  else { 
    target.classList.add("card--flipped");
  }
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
  console.log(vx, vy);
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
    <span>ROUND: #${ game.round }</span>
    <span>NEXT BATTLE: <span id='timer'>00:00:11</span></span>
    <span>REMAINING SHIPS: ${ 8 }</span>
  `;

  shipStats.innerHTML = `
    <span>SPACESHIP: <a href='?id=${ player.shipId }' target='_blank'>#${ player.shipId }</a></span>
    <span>FACTION: VULTK</span>
    <span>BASE: ZEPPEL</span>
    <span>WINGS: NONE</span>
    <hr>
    <span>VICTORIES: ${ player.victories }</span>
  `;
  group.innerHTML='';
  player.arsenal.forEach((card, arsenalIndex) => group.appendChild(getHTMLCard(card, arsenalIndex)));
};

window.setOrderAction = () => {
  console.log('player.hand', player.hand);
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
  card.cardElement.classList.add('card--flipped');
}

if (DEBUG) {
  //setGameState(JOINED);
  //changePage('viewBattle');
  //loadBattle(battleLog);
  //changePage('game');
  //loadGameScreen();
}




initialization();