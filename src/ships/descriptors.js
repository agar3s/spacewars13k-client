// n7
const ship1 = [
  'm 30 89 -19 -4 v 6 l 19 8 19 -8 v -6 l -19 4 z m 13 -46 V 31 l 3 -5 v -9 l -3 -3 V 5 h 5 l 12 19 v 11 l -7 29 -10 -21 z M 30 63 v 26 L 8 84 V 64 l 23 -2 z M 17 44 V 31 l -3 -5 v -9 l 3 -3 V 5 h -5 L 1 24 v 11 l 7 29 10 -21 z m 13 19 v 26 l 23 -5 V 64 l -23 -2 z',//0
  'm 2 40 6 1 2 8 -4 7 z m 40 3 -12 -2 -13 2 -9 21 22 -2 23 2 -10 -21 z m 17 -3 -6 1 -2 8 4 7 z',//1
  'm 30 68 8 2 v 17 m -8 -19 -8 2 v 17 m 8 -25 V 41 M 15 5 V 0 m 31 5 V 1 M 9 20 v 8 l 4 4 v 4 H 1 m 51 -16 v 8 l -3 4 v 4 h 11'//2
];
// n4
const ship2 = [
  'M 28 0 c -9 11 -11 25 -11 25 V 83 h 23 V 26 S 37 11 28 0 z',
  'M 22 54 s -4 11 -12 17 -9 14 -9 14 h 21 z m 13 0 s 4 11 12 17 9 14 9 14 H 34 z M 22 85 h 13 v 8 h -13 z',
  'M 28 32 c -8 4 -8 25 -8 25 v 30 h 17 V 57 s 0 -21 -8 -25 z',
  'M 30 97 h -3 V 70 a 1 1 0 0 1 1 -1 1 1 0 0 1 1 1 z M 20 63 l 4 2 v 9 l -4 2 V 63 z m 17 0 -4 2 v 9 l 4 2 V 63 z',
  'M 11 85 v -7 m 4 7 V 74 m 29 11 v -7 m -4 7 V 74'
];
// n1
const ship3 = [
  'M 31 37 19 2 16 1 l -3 1 L 3 37 1 64 v 19 l 6 10 10 6 10 -6 6 -10 V 64 z',
  'm 9 15 3 5 -2 10 -6 3 z m 15 0 -3 5 3 10 6 3 z M 7 93 l 10 -9 10 9 -10 6 z m 9 -45 L 6 60 v 3 l 10 -7 12 7 v -3 z',
  'M 16 48 V 1 m 13 35 h -5 m 7 4 h -8 m -15 0 H 3 m 7 -4 H 2 m 14 20 L 6 63 v 17 h 22 V 63 z'
];
// n2
const ship4 = [
  'M 22 25 14 1 7 25 1 49 v 23 l 14 15 14 -15 V 49 z',
  'm 21 52 -6 -10 -6 10 -5 10 v 9 l 11 6 11 -6 v -9 z M 8 21 l 3 5 -2 13 -6 4 z m 13 0 -3 5 3 13 6 4 z',
  'M 14 1 v 22 m 0 5 v 5'
];
// n3
const ship5 = [
  "M 5 80 H 23 V 93 H 5 z",
  "M 13 2 C 0 7 1 22 1 22 v 63 h 26 V 22 S 26 7 14 2 z",
  "M 16 99 h -4 V 58 a 2 3 0 0 1 2 -3 3 3 0 0 1 2 3 z m -2 -84 s -7 0 -9 5 h 18 c -2 -5 -9 -5 -9 -5 z M 1 48 l 7 4 v 14 L 1 70 v -22 z m 26 0 -7 4 v 14 l 7 3 z",
  "M 26 22 H 1 M 26 27 h -8 m 8 3 h -8 m -10 -3 H 1 m 8 3 H 1"
];

const ship6 = [
  "M 39 22 32 1 26 22 l -6 22 v 20 L 32 99 l 12 -34 v -20 z",
  "m 37 47 -5 -9 -5 9 -5 9 v 8 l 10 5 10 -5 v -8 z m 7 -2 14 20 v 14 L 44 64 z M 27 19 l 3 5 -3 12 -5 3 z m 11 0 -3 5 3 12 5 3 z M 20 44 6 64 v 14 l 14 -14 z",
  "M 16 50 v 5 l -3 4 -4 0 z m 31 0 v 5 l 3 4 4 0 z",
  "M 32 1 v 24 m 0 3 v 7"
];

const ship7 = [
  "m 50 39 -7 -24 -7 24 -6 24 V 84 l 14 14 14 -14 V 62 z",
  "m 49 35 23 -13 L 68 1 l 14 11 4 23 -30 22 z M 37 35 14 22 19 1 5 11 1 34 l 30 23 z",
  "M 49 65 a 6 6 0 0 0 -10 0 l -5 9 V 83 l 10 -4 L 54 83 v -9 z M 37 35 l 3 5 -3 13 -6 4 z m 12 0 -3 5 3 13 7 4 z M 80 39 l -9 -5 -8 6 1 11 z M 69 5 l 5 4 1 6 -3 5 z M 8 39 l 10 -5 8 7 -1 11 z M 18 5 l -6 4 -1 6 3 5 z",
  "M 43 15 v 20 m 0 5 v 5 M 77 28 52 43 M 35 43 10 28"
];

// -9 -11 60 120
const ship8 = [
  "M 16 1 C 9 8 -11 34 9 93 v 5 h 17 v -5 c 20 -59 0 -85 -7 -92 a 3 3 0 0 0 -4 0 z",
  "M 18 22 V 99 M 10 21 v 8 m 15 0 v -8 M 10 31 v 4 m 15 0 v -4",
  "M 18 22 a 44 45 1 0 0 13 -2 c -4 -10 -8 -16 -11 -19 a 3 3 0 0 0 -4 0 C 13 4 8 10 5 20 a 45 45 0 0 0 13 2 z M 18 59 a 3 3 0 0 0 -3 3 V 95 h 6 V 61 a 3 3 0 0 0 -3 -2 z"
];

const wings1 = [
  "M 8 37 4 40 1 37 V 11 L 4 1 l 4 11 v 25 z",
  "M 21 33 h 16 V 13 H 21 L 8 18 v 12 l 13 3 z M 1 15 l 4 3 V 28 L 1 33 V 15 z",
  "M 13 16 v 7 m 4 -8 v 6"
];

const wings2 = [
  "M 23 1 8 23 v 16 l 15 -16 14 0 V 1 H 23 z",
  "M 8 8 v 42 L 1 43 V 30 l 7 -22 z",
  "M 1 30 h 7 v 9 H 1 z",
  "M 18 8 v 6 l -3 5 -4 1 L 18 8 z"
];

const wings3 = [
  "M 33 24 S 27 41 14 50 1 71 1 71 h 42 V 1 z",
  "M 24 71 v -15 m -6 15 V 59"
];

const wings4 = [
  "M 6 1 c -5 5 -5 17 -5 17 v 50 h 10 V 17 S 12 5 6 1 z",
  "M 12 70 H 0 l 1 -7 h 10 l 1 7 z m -1 -28 h 14 v 7 H 11 z",
  "M 7 18 H 1 M 7 24 H 1"
];

const wings5 = [
  "M 8 26 h 4 v 15 H 8 z m 11 -7 h 4 V 47 H 19 z m 36 16 V 10 l -21 5 v 18 z",
  "M 34 33 H 15 V 20 l 19 -8 v 21 z",
  "M 15 33 H 1 v -6 l 14 -5 v 11 z m 3 -14 2 3 8 -3 2 -5 -12 5 z M 55 1 38 9 v 5 l 17 -4 z"
];

const wings6 = [
  "M 22 6 7 15 v 15 l 15 -3 14 0 V 6 H 22 z",
  "M 7 1 v 40 L 1 34 V 22 L 7 1 z m 4 12 c 0 0 0 8 0 8 L 16 26 V 10"
];

const wings7 = [
  "M 9 6 h 4 v 16 h -4 z M 21 1 h 4 v 20 h -4 z",
  "M 16 15 H 1 v 6 l 16 5 z M 59 41 l -22 -7 V 15 h 22 z",
  "M 37 15 H 16 v 14 l 21 8 z M 1 22 V 7 l 3 -3 v 18 z",
  "M 19 30 l 2 -4 8 3 2 6 z"
];

const wings8 = [
  "M 41 1 4 28 a 8 8 0 0 0 -3 6 v 6 l 40 -9 z",
  "m 20 16 2 7 m -9 -2 1 5",
  "m 1 36 40 -13"
];


const shipEncoded1 = [
  "_,}¸L[*e)rgrW*Y)Lc&,l1$~)bZ*V)\\\\$d0d)kr*j)X|UJ&.}*y(g³$)v]&.p$~)\\Z*V)b\\$d0Z(`w*j)f|iJ&,lr*y)vZ$)H]&",
  "`,ae`ag[f&,bS]RaVtu]vaUJ&,p\\Y`]gcf&",
  "a,}£ga*p,WLWa*p,gF$.nd$_,~d$`.hs*g)cc*c+`,O*g)\\c*c0j"
];

const shipEncoded2 = [
  "`.{_#VjTxTx$²0v$y'j{_&",
  "`.u-[jSpVmVm0t&,l_-cjkphmhm+&.u´0l*g0R&",
  "_.{#WcWxWx*}0p$-_JWF&",
  "`.}À0\\$¥/``__``^``__```&.s)ca*h)[a$&,p_[a*h)ca$&",
  "a.j´*X,cf$©,|j*X,[f$©"
];

const shipEncoded3 = [
  "_.~rao`)\\`(b`*r)eiieiYeU$&",
  "`,hnbd]iYb&,n_\\dbieb&.f¼)iVihUe&,h2(e*b)iXkf*\\&",
  "a.o$`,l0Z,fc0W,P_+b,f[+a,ms(e*p0u$&"
];

const shipEncoded4 = [
  "_.uxm`fx`*v)mnmP$&",
  "`,tYUYiZi*h)jejY*V&.gt)bd]lYc&,l_\\dblec&",
  "a.m`*u,_d*d"
];

const PIECE_KEY = 'pieces';
const SCALE_KEY = 'scale';
const TRANSLATE_KEY = 'translate';
const LEFT_WING_TRANSLATE_KEY = 'leftTranslate';
const RIGHT_WING_TRANSLATE_KEY = 'rightTranslate';
const STYLES_KEY = 'styles';

const ENCODED_SHAPES = {
  0: {
    [PIECE_KEY]: ship1,
    [TRANSLATE_KEY]: [-6, 20],
    [SCALE_KEY]: [0.75, 0.75],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  1: {
    [PIECE_KEY]: ship2,
    [TRANSLATE_KEY]: [-10, 0],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [1, 1, 0, 1]
  },
  2: {
    [PIECE_KEY]: ship3,
    [TRANSLATE_KEY]: [4, 10],
    [SCALE_KEY]: [0.9, 0.9],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  3: {
    [PIECE_KEY]: ship4,
    [TRANSLATE_KEY]: [4, 10],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [0, 1, 0, 1],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  4: {
    [PIECE_KEY]: ship5,
    [TRANSLATE_KEY]: [4.5, 0],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [1, 0, 1, 1]
  },
  5: {
    [PIECE_KEY]: ship6,
    [TRANSLATE_KEY]: [-14, 0],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  6: {
    [PIECE_KEY]: ship7,
    [TRANSLATE_KEY]: [-26, -10],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [0, 0, 1, 0]
  },
  7: {
    [PIECE_KEY]: ship8,
    [TRANSLATE_KEY]: [0.5, 0],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [0, 0, 1, 0]
  },
  8: {
    [PIECE_KEY]: ship7,
    [TRANSLATE_KEY]: [-18, -90],
    [SCALE_KEY]: [0.7, -1.4],
    [STYLES_KEY]: [0, 1, 0, 0]
  }
};

const ENCODED_WINGS = {
  0: {
    [PIECE_KEY]: wings1,
    [TRANSLATE_KEY]: [5.5, 50],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [-20, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-47, 0],
    [STYLES_KEY]: [0, 1, 0]
  },
  1: {
    [PIECE_KEY]: wings2,
    [TRANSLATE_KEY]: [5.5, 60],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [-25, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-50, 0],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  2: {
    [PIECE_KEY]: wings3,
    [TRANSLATE_KEY]: [11.5, 45],
    [SCALE_KEY]: [0.70, 0.70],
    [LEFT_WING_TRANSLATE_KEY]: [-40, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-70, 0],
    [STYLES_KEY]: [1, 0]
  },
  3: {
    [PIECE_KEY]: wings4,
    [TRANSLATE_KEY]: [0, 28],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [-6.5, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-43.5, 0],
    [STYLES_KEY]: [0, 1, 0]
  },
  4: {
    [PIECE_KEY]: wings5,
    [TRANSLATE_KEY]: [7, 52],
    [SCALE_KEY]: [0.85, 0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-53, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-81, 0],
    [STYLES_KEY]: [0, 1, 0]
  },
  5: {
    [PIECE_KEY]: wings6,
    [TRANSLATE_KEY]: [5, 45],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [-20, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-46, 0],
    [STYLES_KEY]: [1, 0]
  },
  6: {
    [PIECE_KEY]: wings7,
    [TRANSLATE_KEY]: [-1.5, 52],
    [SCALE_KEY]: [0.85, 0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-45, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-90, 0],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  7: {
    [PIECE_KEY]: wings8,
    [TRANSLATE_KEY]: [-4, 70],
    [SCALE_KEY]: [0.85, 0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-20, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-70, 0],
    [STYLES_KEY]: [1, 1]
  },
  8: {
    [PIECE_KEY]: wings1,
    [TRANSLATE_KEY]: [-1, -95],
    [SCALE_KEY]: [1.5, -1],
    [LEFT_WING_TRANSLATE_KEY]: [-20, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-47, 0],
    [STYLES_KEY]: [1,0, 0]
  },
  9: {
    [PIECE_KEY]: wings7,
    [TRANSLATE_KEY]: [-1.5, -98],
    [SCALE_KEY]: [0.85, -0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-45, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-90, 0],
    [STYLES_KEY]: [1, 0, 1, 0]
  },
  10: {
    [PIECE_KEY]: wings3,
    [TRANSLATE_KEY]: [1.5, 170],
    [SCALE_KEY]: [1.10, 0.30],
    [LEFT_WING_TRANSLATE_KEY]: [-38, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-68, 0],
    [STYLES_KEY]: [0, 1]
  },
  11: {
    [PIECE_KEY]: wings7,
    [TRANSLATE_KEY]: [-1.5, 28],
    [SCALE_KEY]: [0.85, 0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-45, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-90, 0],
    [STYLES_KEY]: [1, 1, 0, 1]
  },
  12: {
    [PIECE_KEY]: [],
    [TRANSLATE_KEY]: [0, 0],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [0, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [0, 0],
    [STYLES_KEY]: []
  }
};

const palletes = [
  [],                             // 0
  [0.95, 0.5, 108, 0.5, 0.9, 1],  // 1
  [0.7, 1, 0, 5, 1.1, 0],         // 2
  [0.7, 1, 45, 1, 1.3, 0],        // 3
  [0.6, 1, 90, 3, 1.1, 0],        // 4
  [0.4, 1, 135, 12, 1.1, 0],      // 5
  [0.6, 1, 180, 6, 1.3, 0],       // 6
  [0.12, 1, 225, 3, 3.9, 0],      // 7
  [0.4, 1, 270, 3, 1.2, 0],       // 8
  [0.4, 1, 320, 4, 1.3, 0],       // 9
  [0.9, 1, 0, 2, 0.8, 1],           //10
  [1.6, 1, 38, 13, 2, 1],          // 11
  [1.01, 1, 90, 4, 1.0, 1],          // 12
  [1.4, 1, 135, 13, 1.5, 1],       // 13
  [0.83, 1, 180, 18, 1, 1],       // 14
  [0.65, 1, 225, 6, 1, 1],        // 15
  [1.1, 1, 270, 18, 0.9, 1],         // 16
  [0.75, 1, 315, 8, 1, 1]         // 17
]

const keys = {'c': '#', 'V':'$', 'h': '%', 'z': '&', 'S': "'", 'L':'(', 'l':')', 'v':'*', 'H':'+', 'm':',', 's': '-', 'M': '.', 'a': '/', 'C':'0'};
const keyString = "cVhzSLlvHmsMaCA";
const initialKeyCode = 35;
const safeCodes = initialKeyCode + keyString.length;
const minNumberCode = -92;


const encode = (svgLine) => {
  return svgLine.split(' ').map(a => {
    if (isNaN(a)) {
      if (!keys[a]) console.log(a);
      return  keys[a];
    }
    return String.fromCharCode(parseInt(a) - minNumberCode + safeCodes);
  }).join('');
}

const decode = (svgEncoded) => {
  return svgEncoded.split('').reduce((path, value) => {
    var index = value.charCodeAt(0);
    return index < safeCodes?`${path}${keyString[index - initialKeyCode]} `:`${path}${index - safeCodes + minNumberCode} `;
  }, '');
};

const translateShip = (ship) => {
  return ship.map(layer=>encode(layer)).map(layer=>decode(layer));
};



const createSVGelement = (elementType) => document.createElementNS('http://www.w3.org/2000/svg', elementType);
const setAttribute = (element, attribute, value) => element.setAttribute(attribute, value);
const appendChild = (element, child) => element.appendChild(child);

const SVG_ATTRIBUTES = {
  TRANSFORM: 'transform',
};

const injectPieces = (element, config, patterns) => {
  const {[PIECE_KEY]: pieces, [STYLES_KEY]: styles} = config;
  pieces.map((piece)=>decode(encode(piece))).forEach((encoded, index) => {
    //const d = translateShip(encoded);
    const d = encoded;
    const piece = createSVGelement('path');
    const pattern = patterns[styles[index]];
    setAttribute(piece, 'fill', `url(#pattern${ pattern })`);
    setAttribute(piece, 'd', d);
    appendChild(element, piece);
  });
};

const setTransform = (element, translate, scale=[1, 1]) => {
  setAttribute(element, SVG_ATTRIBUTES.TRANSFORM, `scale(${scale[0]}, ${scale[1]}) translate(${ translate[0] }, ${translate[1]})`);
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

const wrapInCard = (node) => {
  const card = document.createElement('div');
  card.classList.add('c');
  card.appendChild(node);
  document.body.appendChild(card);
};

const changePallete = (index) => {
  const [b=1, sep=0, hue=0, sat=0, b2=1, inv=0] = palletes[index];
  document.body.style.filter = `brightness(${b}) sepia(${sep}) hue-rotate(${hue}deg) saturate(${sat}) brightness(${b2}) invert(${inv})`;
};

const backgroundConfig = [
  [-1, 0], [0, 0], [1, 0], [2, 0], [3, 0], [4, 0],
  [-1, 1], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1]
];
const createCanvasElement = (cIndex) => {
  const canvas = document.createElement('canvas');
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
    ctx.strokeStyle = '#888';
    palleteIndex>=0 && stars[palleteIndex].forEach(star => star.draw(ctx));
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

const contexts = [];

const backCovers = [
  'discount',
  'skulls',
  'biohazard',
  'lobby',
  'target',
  'trellis'
];

const getRandomshipConfig = () => { 
  return {
    shapeId: ~~(Math.random()*Object.keys(ENCODED_SHAPES).length),
    wingsId: ~~(Math.random()*Object.keys(ENCODED_WINGS).length),
    bgColor: ~~(Math.random()*10),
    fgColor: ~~(Math.random()*10),
    bgEffect: ~~(Math.random()*backgroundConfig.length),
    pallete: ~~(Math.random()*palletes.length),
    backCover: ~~(Math.random()*backCovers.length)
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

const shipsShapesDistribution = {};
const shipsWingsDistribution = {};
const shipsBGColorDistribution = {};
const shipsFGColorDistribution = {};
const shipBGEffectDistribution = {};
const shipPalleteDistribution = {};
const shipBackCoverDistribution = {};

const ShipGeneration = () => {
  let collisions = 0;
  let addToDistribution = (distribution, value) => {
    if (!distribution[value]) {
      distribution[value] = 0;
    }
    distribution[value] += 1;
  }
  const ships = {};
  const shipsToGenerate = 13*1024
  for (let i = 0; codesToShip.length < shipsToGenerate; i++) {
    const config = getConfigWithSeed(i);
  
    
    const key = config.adn.substring(0,5);
    if (!ships[key]) {
      ships[key] = 1;
      codesToShip.push(config.adn);
      addToDistribution(shipsShapesDistribution, config.shapeId);
      addToDistribution(shipsWingsDistribution, config.wingsId);
      addToDistribution(shipsBGColorDistribution, config.bgColor);
      addToDistribution(shipsFGColorDistribution, config.fgColor);
      addToDistribution(shipBGEffectDistribution, config.bgEffect);
      addToDistribution(shipPalleteDistribution, config.pallete);
      addToDistribution(shipBackCoverDistribution, config.backCover);
    } else {
      collisions += 1;
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
  const cover = 'discount';
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
    const cardBackElement = document.createElement('div');
      cardBackElement.className = `card-face ${ backCovers[backCover] } card-backing`;
    cardElement.appendChild(cardBackElement);
    
    const cardFrontElement = document.createElement('div');
      cardFrontElement.className = 'card-face card-front';
      const canvasTest = createCanvasElement(bgEffect);
        contexts.push(canvasTest.draw);
      cardFrontElement.appendChild(canvasTest.canvas);
      let svgGenerated = renderShip(shapeId, wingsId, bgColor, fgColor);
      cardFrontElement.appendChild(svgGenerated);
    cardElement.appendChild(cardFrontElement);
    cardElement.onclick = e => {
      const el = e.target;
      e.stopPropagation();
      if (cardElement.classList.contains('card--flipped')) {
        cardElement.classList.add('card--unflip');
        setTimeout(() => {
          cardElement.classList.remove('card--flipped', 'card--unflip');
        }, 500);
      }
      else { 
        cardElement.classList.add("card--flipped");
      }
    }
  
  changePallete(shipConfig.pallete);

  return {
    cardElement,
    setShipConfiguration: (config) => {
      shipConfig = {...shipConfig, ...config};
      cardFrontElement.removeChild(svgGenerated);
      svgGenerated = renderShip(shipConfig.shapeId, shipConfig.wingsId, shipConfig.bgColor, shipConfig.fgColor);
      canvasTest.setIndex(shipConfig.bgEffect)
      cardFrontElement.appendChild(svgGenerated);
      
      cardBackElement.className = `card-face ${ backCovers[shipConfig.backCover] } card-backing`;
      // be careful to apply this only with the main card
      changePallete(shipConfig.pallete);
    }
  };
};

ShipGeneration();

if (DEBUG) {
  console.log(decode(encode(ship8[0])));
  ship8.forEach((svgLine)=>console.log(encode(svgLine)));
  
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
    <a class='button' onclick='randomConfig()'>randomProps</a>
    <a class='button' onclick='randomConfig(true)'>all random</a>
    <a class='button' onclick='addCard()'>add card</a>
    <br>
    <a class='button' onclick='loadById()'>
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
    console.log(key, `${key}-id-prob`);
    document.getElementById(`${key}-id-prob`).innerHTML = `${ key }: ${ percentage }% ships have this property`;
  }
  window.loadById = () => {
    const adn = codesToShip[parseInt(shipid.value)];
    const config = adnToShipConfig(adn);
    cards.forEach(card=>card.setShipConfiguration(config));
    document.getElementById('adn-debug').innerHTML = adn;
    setProbText('shapeId', shipsShapesDistribution, config);
    setProbText('wingsId', shipsWingsDistribution, config);
    setProbText('bgColor', shipsBGColorDistribution, config);
    setProbText('fgColor', shipsFGColorDistribution, config);
    setProbText('bgEffect', shipBGEffectDistribution, config);
    setProbText('pallete', shipPalleteDistribution, config);
    setProbText('backCover', shipBackCoverDistribution, config);
  };
  
  // let i = 999999;
  // setInterval(()=> {
  //   if (++i > 13*1024) i=0;
  //   shipid.value = i;
  //   const adn = codesToShip[i];
  //   const config = adnToShipConfig(adn);
  //   cards.forEach(card=>card.setShipConfiguration(config));
  //   document.getElementById('adn-debug').innerHTML = adn;
  // }, 500)

  
  let shapeId = ~~(Math.random()*9);
  let wingsId = ~~(Math.random()*13);
  let bgColor = Math.ceil(Math.random()*10);
  let fgColor = Math.ceil(Math.random()*10);
  
  const addCard = () => {
    const card = createCard(getRandomshipConfig());
    previewDebug.appendChild(card.cardElement);
    cards.push(card);

    const chooseCardLink = document.createElement('a');
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