const stringLength = require('./stringLength');

describe('stringLength function', () => {
  // Test original functionality
  it('should return the correct string length', () => {
    const testString = "Hello";
    expect(stringLength(testString)).toBe(testString.length);
  });

  // Additional test cases for the original functionality, if needed
});

