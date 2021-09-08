const pseudoRandom = (seed) => {
  let value = seed + 13*1024;
  return () => value = value * 16807 % 2147483647;
};

const rand = Math.random;
