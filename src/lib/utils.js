
const TOTAL_NFTS = 13*1024;
const pseudoRandom = (seed) => {
  let value = seed + TOTAL_NFTS;
  return () => value = value * 16807 % 2147483647;
};
const rand = Math.random;

const randomSort = (a, b) => rand()>0.5?-1:1;

let timeFactor = 1;
const delay = (ms) => new Promise((resolve)=>setTimeout(resolve, ~~(ms*timeFactor)));


const createSVGelement = (elementType) => document.createElementNS('http://www.w3.org/2000/svg', elementType);
const createElement = (elementType) => document.createElement(elementType);
const setAttribute = (element, attribute, value) => element.setAttribute(attribute, value);
const appendChild = (element, child) => element.appendChild(child);
const byId = (id) => document.getElementById(id);
// class mod
const classListName = 'classList';
const addClass = (element, _class) => element[classListName].add(_class);
const removeClass = (element, _class) => element[classListName].remove(_class);
const containsClass = (element, _class) => element[classListName].contains(_class);
const toggleClass = (element, _class) => element[classListName].toggle(_class);


const saveLocalStorage = (key, value) => localStorage.setItem(`13ksp-${key}`, value);
const getLocalStorage = (key, _default) => localStorage.getItem(`13ksp-${key}`)||_default;
const reload = () => location.reload();
// const addPatternA = (values) => {
//   return `repeating-radial-gradient(
// circle at ${values[0]}vh ${values[1]}vh,
// #111, #111 0.22vh,
// transparent 0.23vh,
// transparent 2vh
// )`;
// };
// const discountPatternA = [[0, 0.95], [5, -10.05], [0, -0.05], [5, 10.95], [0, 0.3], [0, 0.7], [5, 10.3], [5, 10.7], [10.3, 5], [10.7, 5], [10.3, 5], [10.7, 5]];
// const calculatedPatternA = discountPatternA.map((values) => addPatternA(values)).join(',');


// var style = document.createElement('style');
// style.innerHTML = `
// .discount {
//   background-color: #e3e3e3;
//   background-image: ${calculatedPatternA};
//   background-size: 100% 100%;
//   background-position: 100% 100%;
// }
// .skulls {
// 	background-color: #111;
// 	background-image:${calculatedPatternB};
// `;
// document.getElementsByTagName('head')[0].appendChild(style);
/*
document.styleSheets[0].insertRule(`.discount {
  background-color: #e3e3e3;
  background-image: ${calculatedPattern};
  background-size: 100% 100%;
  background-position: 100% 100%;
}`);*/