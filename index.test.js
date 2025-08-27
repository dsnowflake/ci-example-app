const { add } = require('./index.js');

describe('Add function', () => {
  it('should correctly add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
