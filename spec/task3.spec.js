const getPairOfNumbers = require(`./../task3-argv`);

describe(`Task3`, () => {
  it(`should return all pair of numbers, where x^2 + y^2 = param`, () => {
    expect(getPairOfNumbers(580)).toEqual([[18, 16], [24, 2]]);
  });
  it(`no numbers, where x^2 + y^2 = param`, () => {
    expect(getPairOfNumbers(4)).toBe(`There are no numbers`);
  });
  it(`shouldn't work for param less than 0`, () => {
    expect(getPairOfNumbers(-2)).toBe(
      `Input natural number bigger than 0, please`
    );
  });
});
