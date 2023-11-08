import { reverseStringB } from '../src/js/reverseStringB.js';

describe('reverse string', () => {
  it('should be a function', () => {
    expect(typeof reverseStringB).toEqual('function');
  });

  it('should return a string', () => {
    expect(typeof reverseStringB('hello')).toEqual('string');
  });

  it('should return the reversed string', () => {
    expect(reverseStringB('hello')).toEqual('olleh');
  });
});