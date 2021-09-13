

const contexts = [];

const injectPieces = (element, config, patterns) => {
  const {[PIECE_KEY]: pieces, [STYLES_KEY]: styles} = config;
  pieces.forEach((path, index) => {
    //const d = translateShip(encoded);
    const piece = createSVGelement('path');
    const pattern = patterns[styles[index]];
    setAttribute(piece, 'fill', `url(#pattern${ pattern })`);
    setAttribute(piece, 'd', path);
    appendChild(element, piece);
  });
};

const setTransform = (element, translate, scale=[1, 1]) => {
  setAttribute(element, 'transform', `scale(${scale[0]}, ${scale[1]}) translate(${ translate[0] }, ${translate[1]})`);
}

const renderShip = (shapeId, wingsId, bgColor, fgColor) => {
  const mainSVG = createSVGelement('svg');
  const patterns = [bgColor, fgColor];
  setAttribute(mainSVG, 'viewBox', '0 -50 35 200');
    const ship = createSVGelement('g');
    setTransform(ship, [0, 0]);
    setAttribute(ship, 'class', 'cls-1');
    
      // wings body
      const wingsData = ENCODED_WINGS[wingsId];
      const wings = createSVGelement('g');
      setTransform(wings, wingsData[TRANSLATE_KEY], wingsData[SCALE_KEY]);
        // -- left wing
        const leftWing = createSVGelement('g');
        setTransform(leftWing, wingsData[LEFT_WING_TRANSLATE_KEY]);
        injectPieces(leftWing, wingsData, patterns);
        appendChild(wings, leftWing);
        // -- right wing
        const rightWing = leftWing.cloneNode(4);
        setTransform(rightWing, wingsData[RIGHT_WING_TRANSLATE_KEY], [-1, 1]);
        appendChild(wings, rightWing);

      appendChild(ship, wings);
      
      // shape body
      const shapeData = ENCODED_SHAPES[shapeId];
      const shape = createSVGelement('g');
      setTransform(shape, shapeData[TRANSLATE_KEY], shapeData[SCALE_KEY]);
      injectPieces(shape, shapeData, patterns);

      appendChild(ship, shape);
    appendChild(mainSVG, ship);
    
  return mainSVG;
};


const changePallete = (index) => {
  const [b=1, sep=0, hue=0, sat=0, b2=1, inv=0] = palletes[index];
  document.body.style.filter = `brightness(${b}) sepia(${sep}) hue-rotate(${hue}deg) saturate(${sat}) brightness(${b2}) invert(${inv})`;
  dl.style.filter = inv?`invert(1) brightness(${1/b2}) saturate(2) sepia(1) brightness(${1/b})`:'';
};


const createCanvasElement = (cIndex) => {
  const canvas = createElement('canvas');
  setAttribute(canvas, 'width', 200);
  setAttribute(canvas, 'height', 300);
  const ctx = canvas.getContext('2d');
  let index = 0;
  let palleteIndex = 0;
  let colorBack = 0;
  const draw = (stars) => {
    ctx.save();
    ctx.fillStyle = `rgba(${colorBack},${colorBack},${colorBack}, 0.1)`;
    //ctx.fillStyle = 'rgba(255,255,255, 0.2)';
    //ctx.clearRect(0,0,400,400);
    ctx.fillRect(0, 0, 200, 300);
    ctx.fillStyle = '#888';
    ctx.strokeStyle = ctx.fillStyle;
    palleteIndex>=0 && stars[palleteIndex].forEach(star => {
      ctx.save();
      star.draw(ctx);
      ctx.restore();
    });
    ctx.restore();
  };
  const setIndex = (_index) => {
    index = _index;
    palleteIndex = backgroundConfig[index][0];
    colorBack = backgroundConfig[index][1]*255;
  };
  setIndex(cIndex);
  return {
    canvas,
    setIndex,
    draw
  }
}

const getRandomshipConfig = () => { 
  return {
    shapeId: ~~(rand()*Object.keys(ENCODED_SHAPES).length),
    wingsId: ~~(rand()*Object.keys(ENCODED_WINGS).length),
    bgColor: ~~(rand()*10),
    fgColor: ~~(rand()*10),
    bgEffect: ~~(rand()*backgroundConfig.length),
    pallete: ~~(rand()*palletes.length),
    backCover: ~~(rand()*backCovers.length)
  }
};

const codesToShip = [];
const getConfigWithSeed = (id) => {
  const rnd = pseudoRandom(id);
  const config = {
    shapeId: getRandomIndexProb(rnd, shipShapesChances),
    wingsId: getRandomIndexProb(rnd, shipWingsChances),
    bgColor: getRandomIndexProb(rnd, shipBGColorsChances),
    fgColor: getRandomIndexProb(rnd, shipFGColorsChances),
    bgEffect: getRandomIndexProb(rnd, shipBGEffectChances),
    pallete: getRandomIndexProb(rnd, shipPalleteChances),
    backCover: getRandomIndexProb(rnd, shipBackCoverChances)
  }
  const encodeADN = index => index.toString(16);
  let adn = `${encodeADN(config.shapeId)}`;
  adn += `${encodeADN(config.wingsId)}`;
  adn += `${encodeADN(config.bgColor)}`;
  adn += `${encodeADN(config.fgColor)}`;
  adn += `${encodeADN(config.bgEffect)}`;
  adn += `${encodeADN(config.pallete)}`;
  adn += `${encodeADN(config.backCover)}`;
  config.adn = adn;
  return config;
};
if (DEBUG) {
  shipsShapesDistribution = {};
  shipsWingsDistribution = {};
  shipsBGColorDistribution = {};
  shipsFGColorDistribution = {};
  shipBGEffectDistribution = {};
  shipPalleteDistribution = {};
  shipBackCoverDistribution = {};
}

const ShipGeneration = () => {
  //let collisions = 0;
  let addToDistribution;
  if (DEBUG) {
    addToDistribution = (distribution, value) => {
      if (!distribution[value]) {
        distribution[value] = 0;
      }
      distribution[value] += 1;
    }
  }
  const ships = {};
  const shipsToGenerate = TOTAL_NFTS;
  for (let i = 0; codesToShip.length < shipsToGenerate; i++) {
    const config = getConfigWithSeed(i);
    const key = config.adn.substring(0,5);
    if (!ships[key]) {
      ships[key] = 1;
      codesToShip.push(config.adn);
      if (DEBUG) {
        addToDistribution(shipsShapesDistribution, config.shapeId);
        addToDistribution(shipsWingsDistribution, config.wingsId);
        addToDistribution(shipsBGColorDistribution, config.bgColor);
        addToDistribution(shipsFGColorDistribution, config.fgColor);
        addToDistribution(shipBGEffectDistribution, config.bgEffect);
        addToDistribution(shipPalleteDistribution, config.pallete);
        addToDistribution(shipBackCoverDistribution, config.backCover);
      }
    } else {
      //collisions += 1;
      ships[key] += 1;
    }
  }
}

const adnToShipConfig = (adn) => {
  const pieces = adn.split('').map(code=>parseInt(code, 16));
  return {
    shapeId: pieces[0],
    wingsId: pieces[1],
    bgColor: pieces[2],
    fgColor: pieces[3],
    bgEffect: pieces[4],
    pallete: pieces[5],
    backCover: pieces[6]
  }
}

const flipCard = (cardElement) => {
  //e.stopPropagation();
  if (containsClass(cardElement, 'cf')) {
    addClass(cardElement, 'cu');
    setTimeout(() => {
      removeClass(cardElement, 'cf');
      removeClass(cardElement, 'cu');
    }, 500);
  }
  else { 
    addClass(cardElement, 'cf');
  }
};

const wrapInCard = (backCover, frontChilds, onclick, className='') => {
  const cardElement = createElement('div');
  cardElement.className = `card ${ className }`;
    const cardBackElement = createElement('div');
      cardBackElement.className = `card-face ${ backCovers[backCover] } card-backing`;
    cardElement.appendChild(cardBackElement);
    
    const cardFrontElement = createElement('div');
      cardFrontElement.className = 'card-face card-front';
      frontChilds.forEach(child=>cardFrontElement.appendChild(child));
      
  cardElement.appendChild(cardFrontElement);
  cardElement.onclick = () => onclick(cardElement);
  return cardElement;
}

const createCard = ({ shapeId=0, wingsId=0, bgColor=0, fgColor=0, bgEffect=0, pallete=0, backCover=0 }) => {
  let shipConfig = {
    shapeId,
    wingsId,
    bgColor,
    fgColor,
    bgEffect,
    pallete,
    backCover
  };

  const canvasTest = createCanvasElement(bgEffect);
  contexts.push(canvasTest.draw);
  let svgGenerated = renderShip(shapeId, wingsId, bgColor, fgColor);
  const cardElement = wrapInCard(backCover, [canvasTest.canvas, svgGenerated], flipCard);
  changePallete(shipConfig.pallete);
  //const cardFrontElement = cardElement.querySelector('.card-front');
  //const cardBackElement = cardElement.querySelector('.card-backing');
  return {
    cardElement,
    setShipConfiguration: (config) => {
      shipConfig = {...shipConfig, ...config};
      //cardFrontElement.removeChild(svgGenerated);
      svgGenerated = renderShip(shipConfig.shapeId, shipConfig.wingsId, shipConfig.bgColor, shipConfig.fgColor);
      canvasTest.setIndex(shipConfig.bgEffect)
      //cardFrontElement.appendChild(svgGenerated);
      //cardBackElement.className = `card-face ${ backCovers[shipConfig.backCover] } card-backing`;
      // be careful to apply this only with the main card
      changePallete(shipConfig.pallete);
    }
  };
};

const getShipById = (id) => adnToShipConfig(codesToShip[id]);

ShipGeneration();

if (DEBUG) {
  
  debugView.innerHTML = `
    <div id='previewDebug' style='width=100%;display=block;height=40vh'></div>
    <span>Shape: </span>
    <a onclick='setShapeDebug(0)'>0</a>
    <a onclick='setShapeDebug(1)'>1</a>
    <a onclick='setShapeDebug(2)'>2</a>
    <a onclick='setShapeDebug(3)'>3</a>
    <a onclick='setShapeDebug(4)'>4</a>
    <a onclick='setShapeDebug(5)'>5</a>
    <a onclick='setShapeDebug(6)'>6</a>
    <a onclick='setShapeDebug(7)'>7</a>
    <a onclick='setShapeDebug(8)'>8</a>
    <br>
    <span>Wings: </span>
    <a onclick='setWingsDebug(0)'>0</a>
    <a onclick='setWingsDebug(1)'>1</a>
    <a onclick='setWingsDebug(2)'>2</a>
    <a onclick='setWingsDebug(3)'>3</a>
    <a onclick='setWingsDebug(4)'>4</a>
    <a onclick='setWingsDebug(5)'>5</a>
    <a onclick='setWingsDebug(6)'>6</a>
    <a onclick='setWingsDebug(7)'>7</a>
    <a onclick='setWingsDebug(8)'>8</a>
    <a onclick='setWingsDebug(9)'>9</a>
    <a onclick='setWingsDebug(10)'>10</a>
    <a onclick='setWingsDebug(11)'>11</a>
    <a onclick='setWingsDebug(12)'>12</a>
    <br>
    <span>BGcolor: </span>
    <a onclick='setColorBgDebug(0)'>0</a>
    <a onclick='setColorBgDebug(1)'>1</a>
    <a onclick='setColorBgDebug(2)'>2</a>
    <a onclick='setColorBgDebug(3)'>3</a>
    <a onclick='setColorBgDebug(4)'>4</a>
    <a onclick='setColorBgDebug(5)'>5</a>
    <a onclick='setColorBgDebug(6)'>6</a>
    <a onclick='setColorBgDebug(7)'>7</a>
    <a onclick='setColorBgDebug(8)'>8</a>
    <a onclick='setColorBgDebug(9)'>9</a>
    <br>
    <span>FGcolor: </span>
    <a onclick='setColorFgDebug(0)'>0</a>
    <a onclick='setColorFgDebug(1)'>1</a>
    <a onclick='setColorFgDebug(2)'>2</a>
    <a onclick='setColorFgDebug(3)'>3</a>
    <a onclick='setColorFgDebug(4)'>4</a>
    <a onclick='setColorFgDebug(5)'>5</a>
    <a onclick='setColorFgDebug(6)'>6</a>
    <a onclick='setColorFgDebug(7)'>7</a>
    <a onclick='setColorFgDebug(8)'>8</a>
    <a onclick='setColorFgDebug(9)'>9</a>
    <br>
    <span>Pallete: </span>
    <a onclick='changePallete(0)'>0</a>
    <a onclick='changePallete(1)'>1</a>
    <a onclick='changePallete(2)'>2</a>
    <a onclick='changePallete(3)'>3</a>
    <a onclick='changePallete(4)'>4</a>
    <a onclick='changePallete(5)'>5</a>
    <a onclick='changePallete(6)'>6</a>
    <a onclick='changePallete(7)'>7</a>
    <a onclick='changePallete(8)'>8</a>
    <a onclick='changePallete(9)'>9</a>
    <a onclick='changePallete(10)'>10</a>
    <a onclick='changePallete(11)'>11</a>
    <a onclick='changePallete(12)'>12</a>
    <a onclick='changePallete(13)'>13</a>
    <a onclick='changePallete(14)'>14</a>
    <a onclick='changePallete(15)'>15</a>
    <a onclick='changePallete(16)'>16</a>
    <a onclick='changePallete(17)'>17</a>
    <br>
    <span>Background: </span>
    <a onclick='setBackground(0)'>0</a>
    <a onclick='setBackground(1)'>1</a>
    <a onclick='setBackground(2)'>2</a>
    <a onclick='setBackground(3)'>3</a>
    <a onclick='setBackground(4)'>4</a>
    <a onclick='setBackground(5)'>5</a>
    <a onclick='setBackground(6)'>6</a>
    <a onclick='setBackground(7)'>7</a>
    <a onclick='setBackground(8)'>8</a>
    <a onclick='setBackground(9)'>9</a>
    <a onclick='setBackground(10)'>10</a>
    <a onclick='setBackground(11)'>11</a>
    <br>
    <span>Back cover: </span>
    <a onclick='setBackCover(0)'>${backCovers[0]}</a>
    <a onclick='setBackCover(1)'>${backCovers[1]}<b/a>
    <a onclick='setBackCover(2)'>${backCovers[2]}</a>
    <a onclick='setBackCover(3)'>${backCovers[3]}</a>
    <a onclick='setBackCover(4)'>${backCovers[4]}</a>
    <a onclick='setBackCover(5)'>${backCovers[5]}</a>
    <br>
    <div id='cardsSelector'><span>Select Card: </span></div>
    <br>
    <a class='btn' onclick='randomConfig()'>randomProps</a>
    <a class='btn' onclick='randomConfig(true)'>all random</a>
    <a class='btn' onclick='addCard()'>add card</a>
    <br>
    <a class='btn' onclick='loadById()'>
      load by id
      <input id='shipid' type='number' value='0'/>
    </a>
    <br>
    <span id='adn-debug'></span></br>
    <span id='shapeId-id-prob'>shapeId: </span></br>
    <span id='wingsId-id-prob'>wingsId: </span></br>
    <span id='bgColor-id-prob'>bgColor: </span></br>
    <span id='fgColor-id-prob'>fgColor: </span></br>
    <span id='bgEffect-id-prob'>bgEffect: </span></br>
    <span id='pallete-id-prob'>pallete: </span></br>
    <span id='backCover-id-prob'>backCover: </span>
`;
 
  let cards = [];
  let selectedCard = 0;
  window.setShapeDebug = (shapeId) => {
    cards[selectedCard].setShipConfiguration({ shapeId });
  }
  window.setWingsDebug = (wingsId) => {
    cards[selectedCard].setShipConfiguration({ wingsId });
  }
  window.setColorBgDebug = (bgColor) => {
    cards[selectedCard].setShipConfiguration({ bgColor });
  }
  window.setColorFgDebug = (fgColor) => {
    cards[selectedCard].setShipConfiguration({ fgColor });
  }
  window.changePallete = (pallete) => {
    cards[selectedCard].setShipConfiguration({ pallete });
  };
  window.setBackground = (bgEffect) => {
    cards[selectedCard].setShipConfiguration({ bgEffect });
  };
  window.setBackCover = (backCover) => {
    cards[selectedCard].setShipConfiguration({ backCover });
  };
  window.chooseCard = (index) => {
    selectedCard = index;
    cards[selectedCard].setShipConfiguration({});
  };

  window.randomConfig = (all=false) => {
    if (all) {
      cards.forEach(card => card.setShipConfiguration(getRandomshipConfig()));
    } else {
      cards[selectedCard].setShipConfiguration(getRandomshipConfig());
    }
  };
  

  const setProbText = ( key, dis, config) => {
    const value = config[key];
    const percentage = ((dis[config[key]]*100)/13312).toFixed(2);
    byId(`${key}-id-prob`).innerHTML = `${ key }: ${ percentage }% ships have this property`;
  }
  window.loadById = () => {
    const adn = codesToShip[parseInt(shipid.value)];
    const config = adnToShipConfig(adn);
    cards.forEach(card=>card.setShipConfiguration(config));
    byId('adn-debug').innerHTML = adn;
    setProbText('shapeId', shipsShapesDistribution, config);
    setProbText('wingsId', shipsWingsDistribution, config);
    setProbText('bgColor', shipsBGColorDistribution, config);
    setProbText('fgColor', shipsFGColorDistribution, config);
    setProbText('bgEffect', shipBGEffectDistribution, config);
    setProbText('pallete', shipPalleteDistribution, config);
    setProbText('backCover', shipBackCoverDistribution, config);
  };
  
  
  let shapeId = ~~(rand()*9);
  let wingsId = ~~(rand()*13);
  let bgColor = Math.ceil(rand()*10);
  let fgColor = Math.ceil(rand()*10);
  
  const addCard = () => {
    const card = createCard(getRandomshipConfig());
    previewDebug.appendChild(card.cardElement);
    cards.push(card);

    const chooseCardLink = createElement('a');
    chooseCardLink.setAttribute('onclick', `chooseCard(${cards.length - 1})`);
    chooseCardLink.innerHTML = cards.length - 1;
    cardsSelector.appendChild(chooseCardLink);
  }

  const total = 0;
  for (let i = 0; i < total; i++) {
    addCard();
  }

  window.addCard = addCard;
}
//wrapInCard(renderSVG(translateShip(ship7)));
// renderSVG(document.body, translateShip(ship7));
// renderSVG(document.body, translateShip(ship6));
// renderSVG(document.body, translateShip(ship5));
// renderSVG(document.body, translateShip(ship4));
// renderSVG(document.body, translateShip(ship3));
// renderSVG(document.body, translateShip(ship2));
// renderSVG(document.body, translateShip(ship1));
  //renderSVG(document.body, ship2);