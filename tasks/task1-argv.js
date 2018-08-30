const getNum = num => {
  let res;
  if (num <= 1) {
    res = `Please input number bigger than 1`;
  } else {
    for (let i = 0; 4 ** i < num; i += 1) {
      res = i;
    }
  }
  return res;
};
module.exports = {
  getNum
};
getNum(process.argv[2]);
