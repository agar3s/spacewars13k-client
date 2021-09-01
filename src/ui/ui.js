
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
const stars = [];
const addStar = () => {
  let x=~~(Math.random()*300), y=-50, vy=Math.random()*5+5;
  stars.push({
    x, y, vy, move: _=> y = y+vy>300?((vy=Math.random()*5 + 5)||-50):y+vy, draw:(ctx)=>ctx.fillRect(x, y, 2, 4)
  })
}
for (let i=0;i<100; i++){ addStar();}

var playing = true;
// const loopStars = () => {
//   console.log(stars.length)
//   backCardContext.fillStyle = 'rgba(0,0,0, 0.1)';
//   backCardContext.fillRect(0, 0, 400, 300);
//   backCardContext.fillStyle = '#aaa';
//   stars.forEach(star=>star.move() && star.draw(backCardContext))
// };
var playing = true;
const loopStars = () => {
  console.log(stars.length)
  backCardContext.fillStyle = 'rgba(0,0,0, 0.1)';
  backCardContext.fillRect(0, 0, 400, 300);
  backCardContext.fillStyle = '#aaa';
  stars.forEach(star=>star.move() && star.draw(backCardContext))
};

if (DEBUG) {
  changePage('game');
}