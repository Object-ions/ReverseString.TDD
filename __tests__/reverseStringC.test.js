import { reverseStringC } from '../src/js/reverseStringC.js';

describe('reverse string', () => {
  it('should be a function', () => {
    expect(typeof reverseStringC).toEqual('function');
  });

  it('should return a string', () => {
    expect(typeof reverseStringC('hello')).toEqual('string');
  });

  it('should return the reversed string', () => {
    expect(reverseStringC('hello')).toEqual('olleh');
  });
});