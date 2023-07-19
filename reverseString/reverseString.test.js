const reverseString = require('./reverseString');

describe('reverseString function', () => {
  it('should reverse the string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});