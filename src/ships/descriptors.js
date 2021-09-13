

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

//wrapInCard(renderSVG(translateShip(ship7)));
// renderSVG(document.body, translateShip(ship7));
// renderSVG(document.body, translateShip(ship6));
// renderSVG(document.body, translateShip(ship5));
// renderSVG(document.body, translateShip(ship4));
// renderSVG(document.body, translateShip(ship3));
// renderSVG(document.body, translateShip(ship2));
// renderSVG(document.body, translateShip(ship1));
  //renderSVG(document.body, ship2);