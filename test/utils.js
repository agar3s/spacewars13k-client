
//a.split(' ').reduce((c, b)=>c.concat(b.split('M').join(' M ')), []).join(' ')

a = ["M16.22 24.62s-1.53 3.12-2.33 5.09c-1 2.38 2 5 3.93 3.06 2.11-2.14 4.34-7 4.34-7m-3.77 6.94c0 3.26 4 3.26 5.22 1.68.94-1.2 3.44-5.67 3.44-5.67M10.84 35.62a7.23 7.23 0 0 0-1.37-4.46 4.83 4.83 0 0 0-4.11-1.94 11.67 11.67 0 0 1 4.39-2.14c.92-0.22 3.75-0.48 4.67-0.67 2.88-0.57 2.33-5.26-1.14-5-2.39.17-8.64.87-10.36 2.53C-2.52 29.2 1.23 43 14.06 42.64c6.76-0.18 13.21-8.21 13.21-13.62 0-5.09-3.85-4.49-5.11-3.2 2.19-3.46-1-4.95-2.7-4.53-2.66.64-3.09-5.29-1.6-17.84.43-3.55-4.36-4.18-4.7-0.31-1.1 12.47-0.81 17.16-2.76 17.21-1.67.05-1.7-4.47-2.4-15.87-0.21-3.35-4.86-3.33-4.59.08.59 7.18 1.21 14.07.72 18.25"]
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
  path = path.replaceAll('-.', '-0.');
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