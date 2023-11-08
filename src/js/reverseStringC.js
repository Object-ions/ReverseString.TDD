export const reverseStringC = (str) => {
  return str.split('').reduce((reversed, char) => char + reversed, '');
};