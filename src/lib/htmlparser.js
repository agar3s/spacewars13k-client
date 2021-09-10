


const replaceAll = (code, pattern, replacement) => code.replaceAll(pattern, replacement);

const ELEMENT_TYPES = {
  d: 'div',
  s: 'span'
}

const createElement = (elementType) => {
  document.createElement(ELEMENT_TYPES[elementType]||elementType);
};

const mapElements = {
  '&#': " id='",
  '&.': " class='",
  '$d': "<div",
  '@d': "</div>",
  '$s': "<span",
  '@s': "</span>",
  '&c': "onclick='",
  '$o': "<option>",
  '@o': "</option>",
  '$p': "<p>",
  '@p': "</p>",
  '^':  "'>",
  '@a': "</a>",
  '$P': "<path d='",
  '$P': "<path d='",
  '&_': " href='#' ",
};
let processed = gameBody;
Object.entries(mapElements).forEach(([key, value]) => processed = replaceAll(processed, key, value));

main.innerHTML = processed;

