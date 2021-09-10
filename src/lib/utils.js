const pseudoRandom = (seed) => {
  let value = seed + 13*1024;
  return () => value = value * 16807 % 2147483647;
};

const rand = Math.random;

const randomSort = (a, b) => Math.random()>0.5?-1:1;

let timeFactor = 1;
const delay = (ms) => new Promise((resolve)=>setTimeout(resolve, ~~(ms*timeFactor)));
