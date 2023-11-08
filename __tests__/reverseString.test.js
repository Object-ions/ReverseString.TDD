import { reverseString } from '../src/js/reverseString.js';

describe('reverse string', () => {
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });
  
  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });
});