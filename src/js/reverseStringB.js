export const reverseStringB = (str) => {
  let reversed = '';

  for (let char of str) {
    reversed = char+reversed
  }

  return reversed;
};