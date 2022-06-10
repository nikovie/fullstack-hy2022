export const __inRange = (x: number, min: number, max: number) => {
  return ((x - min) * (x - max) <= 0);
};

export const __resolveFilename = (path: string) => {
  return path.replace(/^.*[\\/]/, '');
};
