// n7
const ship1 = [
  '0 m 30 89 -19 -4 v 6 l 19 8 19 -8 v -6 l -19 4 z m 13 -46 V 31 l 3 -5 v -9 l -3 -3 V 5 h 5 l 12 19 v 11 l -7 29 -10 -21 z M 30 63 v 26 L 8 84 V 64 l 23 -2 z M 17 44 V 31 l -3 -5 v -9 l 3 -3 V 5 h -5 L 1 24 v 11 l 7 29 10 -21 z m 13 19 v 26 l 23 -5 V 64 l -23 -2 z',
  '1 m 2 40 6 1 2 8 -4 7 z m 40 3 -12 -2 -13 2 -9 21 22 -2 23 2 -10 -21 z m 17 -3 -6 1 -2 8 4 7 z',
  '2 m 30 68 8 2 v 17 m -8 -19 -8 2 v 17 m 8 -25 V 41 M 15 5 V 0 m 31 5 V 1 M 9 20 v 8 l 4 4 v 4 H 1 m 51 -16 v 8 l -3 4 v 4 h 11'
];
// n4
const ship2 = [
  '1 M 28 0 c -9 11 -11 25 -11 25 V 83 h 23 V 26 S 37 11 28 0 z',
  '1 M 22 54 s -4 11 -12 17 -9 14 -9 14 h 21 z m 13 0 s 4 11 12 17 9 14 9 14 H 34 z M 22 85 h 13 v 8 h -13 z',
  '0 M 28 32 c -8 4 -8 25 -8 25 v 30 h 17 V 57 s 0 -21 -8 -25 z',
  '1 M 30 97 h -3 V 70 a 1 1 0 0 1 1 -1 1 1 0 0 1 1 1 z M 20 63 l 4 2 v 9 l -4 2 V 63 z m 17 0 -4 2 v 9 l 4 2 V 63 z',
  '2 M 11 85 v -7 m 4 7 V 74 m 29 11 v -7 m -4 7 V 74'
];
// n1
const ship3 = [
  '0 M 31 37 19 2 16 1 l -3 1 L 3 37 1 64 v 19 l 6 10 10 6 10 -6 6 -10 V 64 z',
  '1 m 9 15 3 5 -2 10 -6 3 z m 15 0 -3 5 3 10 6 3 z M 7 93 l 10 -9 10 9 -10 6 z m 9 -45 L 6 60 v 3 l 10 -7 12 7 v -3 z',
  '2 M 16 48 V 1 m 13 35 h -5 m 7 4 h -8 m -15 0 H 3 m 7 -4 H 2 m 14 20 L 6 63 v 17 h 22 V 63 z'
];
// n2
const ship4 = [
  '0 M 22 25 14 1 7 25 1 49 v 23 l 14 15 14 -15 V 49 z',
  '1 m 21 52 -6 -10 -6 10 -5 10 v 9 l 11 6 11 -6 v -9 z M 8 21 l 3 5 -2 13 -6 4 z m 13 0 -3 5 3 13 6 4 z',
  '2 M 14 1 v 22 m 0 5 v 5'
];
// n3
const ship5 = [
  "1 M 5 80 H 23 V 93 H 5 z",
  "0 M 13 2 C 0 7 1 22 1 22 v 63 h 26 V 22 S 26 7 14 2 z",
  "1 M 16 99 h -4 V 58 a 2 3 0 0 1 2 -3 3 3 0 0 1 2 3 z m -2 -84 s -7 0 -9 5 h 18 c -2 -5 -9 -5 -9 -5 z M 1 48 l 7 4 v 14 L 1 70 v -22 z m 26 0 -7 4 v 14 l 7 3 z",
  "2 M 26 22 H 1 M 26 27 h -8 m 8 3 h -8 m -10 -3 H 1 m 8 3 H 1"
];

const ship6 = [
  "1 M 39 22 32 1 26 22 l -6 22 v 20 L 32 99 l 12 -34 v -20 z",
  "0 m 37 47 -5 -9 -5 9 -5 9 v 8 l 10 5 10 -5 v -8 z m 7 -2 14 20 v 14 L 44 64 z M 27 19 l 3 5 -3 12 -5 3 z m 11 0 -3 5 3 12 5 3 z M 20 44 6 64 v 14 l 14 -14 z",
  "1 M 16 50 v 5 l -3 4 -4 0 z m 31 0 v 5 l 3 4 4 0 z",
  "2 M 32 1 v 24 m 0 3 v 7"
];

const ship7 = [
  "0 m 50 39 -7 -24 -7 24 -6 24 V 84 l 14 14 14 -14 V 62 z",
  "0 m 49 35 23 -13 L 68 1 l 14 11 4 23 -30 22 z M 37 35 14 22 19 1 5 11 1 34 l 30 23 z",
  "1 M 49 65 a 6 6 0 0 0 -10 0 l -5 9 V 83 l 10 -4 L 54 83 v -9 z M 37 35 l 3 5 -3 13 -6 4 z m 12 0 -3 5 3 13 7 4 z M 80 39 l -9 -5 -8 6 1 11 z M 69 5 l 5 4 1 6 -3 5 z M 8 39 l 10 -5 8 7 -1 11 z M 18 5 l -6 4 -1 6 3 5 z",
  "2 M 43 15 v 20 m 0 5 v 5 M 77 28 52 43 M 35 43 10 28"
];

// -9 -11 60 120
const ship8 = [
  "0 M 16 1 C 9 8 -11 34 9 93 v 5 h 17 v -5 c 20 -59 0 -85 -7 -92 a 3 3 0 0 0 -4 0 z",
  "2 M 18 22 V 99 M 10 21 v 8 m 15 0 v -8 M 10 31 v 4 m 15 0 v -4",
  "1 M 18 22 a 44 45 1 0 0 13 -2 c -4 -10 -8 -16 -11 -19 a 3 3 0 0 0 -4 0 C 13 4 8 10 5 20 a 45 45 0 0 0 13 2 z M 18 59 a 3 3 0 0 0 -3 3 V 95 h 6 V 61 a 3 3 0 0 0 -3 -2 z"
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
  "M 37 15 H 16 v 14 l 21 8z M 1 22 V 7 l 3 -3 v 18 z",
  "M 19 30 l 2 -4 8 3 2 6 z"
];

const wings8 = [
  "m 41 1 -37 27 A 8 8 0 0 0 1 34 v 6 l 40 -9 z",
  "m 20 16 2 7 m -9 -2 1 5",
  "m 1 36 40 -13"
];

const shipEncoded = [
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



const fills = [
  '#f26527',
  '#0781a2',
  'none',
  '#f26527'
];

const renderSVG = (ship) => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  iconSvg.setAttribute('viewBox', '0 0 60 120');
  iconSvg.setAttribute('stroke', '#1f2121');
  iconSvg.setAttribute('stroke-linejoin', 'round');
  iconSvg.setAttribute('stroke-linecap', 'round');
  
  ship.forEach(d => {
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    const style = d[0];
    d = d.replace(style, ' ');
    iconPath.setAttribute('d', d);
    iconPath.setAttribute('fill', fills[style]);
      
    iconSvg.appendChild(iconPath);
  });
    
  return iconSvg;
};

const wrapInCard = (node) => {
  const card = document.createElement('div');
  card.classList.add('c');
  card.appendChild(node);
  document.body.appendChild(card);
};

console.log(decode(encode(ship8[0])));
ship8.forEach((svgLine)=>console.log(encode(svgLine)));
//wrapInCard(renderSVG(translateShip(ship7))); 
// renderSVG(document.body, translateShip(ship7));
// renderSVG(document.body, translateShip(ship6));
// renderSVG(document.body, translateShip(ship5));
// renderSVG(document.body, translateShip(ship4));
// renderSVG(document.body, translateShip(ship3));
// renderSVG(document.body, translateShip(ship2));
// renderSVG(document.body, translateShip(ship1));
  //renderSVG(document.body, ship2);