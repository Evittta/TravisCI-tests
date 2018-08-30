const readline = require('readline');

const getPairOfNumbers = num => {
  const arr = [];
  if (num < 1) return 'Input natural number bigger than 0, please';
  for (let i = 1; i <= num / 2; i += 1) {
    for (let j = 1; j <= num / 2; j += 1) {
      const condition = i >= j && i * i + j * j === num;
      if (condition) {
        arr.push([i, j]);
      }
    }
  }
  if (arr.length === 0) {
    return 'There are no numbers';
  }
  return arr;
};

const getParams = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Please input natural number bigger than 0 > ', num => {
    console.log(getPairOfNumbers(Number(num)));
    rl.close();
  });
};

getParams();
