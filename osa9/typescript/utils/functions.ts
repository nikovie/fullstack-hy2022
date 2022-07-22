export const __inRange = (x: number, min: number, max: number) => {
  return ((x - min) * (x - max) <= 0);
};

export const __resolveFilename = (path: string) => {
  return path.replace(/^.*[\\/]/, '');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const __isNumberArray = (arr?: any) => {
  if (Array.isArray(arr)) {
    const isStringArray =
      arr.length > 0 &&
      arr.every((value) => {
        return typeof value === 'number';
      });
  
    return (isStringArray);
  } else {
    return false;
  }
};
