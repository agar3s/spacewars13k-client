
a.split(' ').reduce((c, b)=>c.concat(b.split('M').join(' M ')), []).join(' ')

a = 'M29.79 36.55 19.52 1.78 16.17.5l-3.34 1.28L2.56 36.55.5 63.76v19.36l5.91 9.53 9.76 5.85 9.77-5.85 5.91-9.53V63.76l-2.06-27.21z'
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