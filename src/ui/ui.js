
let currentPage = 'index';
let previousPage = [];

const changePage = (page, back) => {
  if (!back) previousPage.push(currentPage);
  console.log(currentPage, page);
  document.getElementById(currentPage).classList.add('hide');
  document.getElementById(page).classList.remove('hide');
  currentPage = page;
};

window.joinGame = () => {
  changePage('game', false);
};

window.back = () => {
  changePage(previousPage.pop(), true);
};

const divGameState = document.getElementById('game-state');
let targetTime = Date.now() + 1000 * 60 * 5;
const updatetime = () => {
  const time = targetTime - Date.now();
  const mins = ~~(time / (1000 * 60));
  const secs = (~~((time - mins*60*1000) / 1000)).toString().padStart(2, '0');
  divGameState.innerHTML = `NEXT WAR IN ${mins}:${secs}`;
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


const backCardContext = d.getContext('2d');
const starGroups = [[],[],[],[],[]];
const addStar = () => {
  let x=~~(Math.random()*300), y=-50, vy=Math.random()*5+5;
  starGroups[0].push({
    move: _=> y = y+vy>300?((vy=Math.random()*5 + 5)||-50):y+vy, draw:(ctx)=>ctx.fillRect(x, y, 2, 4)
  })
}
const addExplodingStar = () => {
  let speed = Math.random()*5 + 0;
  let r = Math.random()*Math.PI*2;
  let x = -1, y = -1;
  let vx=0;
  let vy=0;
  const reset = () => {
    x = 100;
    y = 150;
    r = Math.random()*Math.PI*2;
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
  let speed = Math.random()+1;
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
  let speed = Math.random()+1;
  let r = Math.random()*50;
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
  let speed = Math.random()+1;
  let r = Math.random()*200;
  let tangSpeed = 0.01;
  let angle = Math.random()*Math.PI*2;
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
var playing = true;
const loopStars = () => {
  backCardContext.fillStyle = 'rgba(0,0,0, 0.2)';
  //backCardContext.fillStyle = 'rgba(255,255,255, 0.2)';
  //backCardContext.clearRect(0,0,400,400);
  backCardContext.fillRect(0, 0, 200, 300);
  backCardContext.fillStyle = '#999';
  starGroups.forEach(stars=>stars.forEach(star=>star.move()));
  contexts.forEach(fn => {
    fn(starGroups)
  });
};

if (DEBUG) {
  changePage('fullcard');
}