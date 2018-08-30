const getNum = num => {
  let res;
  if (num <= 1) {
    res = 'Please input number bigger than 1';
  } else {
    for (let k = 0; 4 ** k < num; k += 1) {
      res = k;
    }
  }
  return res;
};
module.exports = {
  getNum
};
console.log(getNum(process.argv[2]));
