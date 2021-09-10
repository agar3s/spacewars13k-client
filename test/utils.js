
//a.split(' ').reduce((c, b)=>c.concat(b.split('M').join(' M ')), []).join(' ')

a = [
  "M263.63 336.1c-2.48-.37-54.55-3.91-67.19-4-3.34 0-4.3 1.35-5 4.61-13.39 60.92 79.35 73.13 80.82 11.06.21-10 .91-10.26-8.63-11.67zM201.75 374c-5.17-23.09 44.5-12.22 57.74 4.75-29.38 19.15-56.79-.53-57.74-4.75zm-.47-41.09c11.55.39 49.6 2.82 62.21 3.35-5.86 16.48-54.83 10.56-62.21-3.36zM256.72 298c9.94-6.64-.58-11.35-4.7-41.36-1.75 18.8 1.7 35.55-5.45 45.85a36.23 36.23 0 0 0 10.15-4.49z",
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

function en(c){var x='charCodeAt',b,e={},f=c.split(""),d=[],a=f[0],g=256;for(b=1;b<f.length;b++)c=f[b],null!=e[a+c]?a+=c:(d.push(1<a.length?e[a]:a[x](0)),e[a+c]=g,g++,a=c);d.push(1<a.length?e[a]:a[x](0));for(b=0;b<d.length;b++)d[b]=String.fromCharCode(d[b]);return d.join("")}
function de(b){var a,e={},d=b.split(""),c=f=d[0],g=[c],h=o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join("")}

