const pseudoRandom = (seed) => {
  let value = seed + 13312;
  return () => value = value * 16807 % 2147483647;
}
