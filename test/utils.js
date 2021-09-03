
//a.split(' ').reduce((c, b)=>c.concat(b.split('M').join(' M ')), []).join(' ')

a = [
    "m40.62.5-37 26.83A7.66 7.66 0 0 0 .5 33.51v6.3l40.12-9z",
    "m19.85 15.96 1.69 7.16m-9.28-1.65 1.35 5.07",
    "m.21 35.9 40.41-12.58"
]
const commands = 'cVhzSLlvHmsMaC'.split('');

const extractPieces = (value) => {
  const piece = parseFloat(value);
  if (isNaN(piece)) return '';
  if(value[0]=='.') value = `0${value}`;
  value = value.replace(`${piece}`, '');
  return `${ Math.round(piece) } ${extractPieces(value)}`.trim();
}

const spl = (path) => {
  commands.forEach(command=> {
    path = path.replaceAll(command, ` ${ command } `);
  });
  path = path.replaceAll('  ', ' ');
  return path.trim().split(' ').map(value => {
    if (isNaN(value)) {
      var floatPart = extractPieces(value);
      if (!floatPart) return value;
      return floatPart;
    }
    return Math.round(parseFloat(value));
  }).join(' ');
};

a.map(_=>spl(_));