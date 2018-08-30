const getNumbers = require('./../task2-argv');

describe('Task2', () => {
  it('should get numbers, where numbers x^2 + y^2 = param', () => {
    expect(getNumbers(580)).toEqual([2, 24]);
  });
  it('no numbers, where x^2 + y^2 = param', () => {
    expect(getNumbers(4)).toBe(`There are no numbers`);
  });
  it(`shouldn't work for param less than 0`, () => {
    expect(getNumbers(-2)).toBe(`Input natural number bigger than 0, please`);
  });
});
