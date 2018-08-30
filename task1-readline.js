const readline = require('readline');

const getNum = num => {
  let res;
  if (num <= 1) {
    res = `Input namber bigger than 1`;
  } else {
    for (let k = 0; 4 ** k < num; k += 1) {
      res = k;
    }
  }
  return res;
};

const formResult = params => {
  let p = params;
  p = p.slice(0, p.length - 1);
  return p.map(el => getNum(el));
};

const getParams = () => {
  const rl = readline.createInterface(process.stdin, process.stdout);
  const params = [];
  rl.setPrompt('Input number> ');
  rl.prompt();
  rl.on('line', line => {
    params.push(Number(line));
    if (line === '') {
      rl.close();
    }
    rl.prompt();
  }).on('close', () => {
    console.log(formResult(params));
    process.exit(0);
  });
};

getParams();
