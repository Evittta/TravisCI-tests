const task1 = require(`./../tasks/task1-argv`);

describe(`Task 1`, () => {
  it(`should return num, where 4^num < param`, () => {
    expect(task1.getNum(580)).toEqual(4);
  });
  it(`shouldn't work for num less than 0`, () => {
    expect(task1.getNum(-100)).toBe(`Please input number bigger than 1`);
  });
});
