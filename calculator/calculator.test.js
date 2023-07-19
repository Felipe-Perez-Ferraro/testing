const Calculator = require('./calculator');

describe('Calculator add func', () => {
  it('Should sum two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(2, 3)).toBe(5);
  })
})
describe('Calculator subtract func', () => {
  it('Should subtract two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(4, 2)).toBe(2);
  })
})
describe('Calculator multiply func', () => {
  it('Should multiply two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(4, 2)).toBe(8);
  })
})
describe('Calculator divide func', () => {
  it('Should divide two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.divide(4, 2)).toBe(2);
  })
})