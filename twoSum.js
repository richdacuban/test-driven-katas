const twoSum = (numArr, targetVal) => {
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === targetVal) {
        return [i, j];
      }
    }
  }
};

module.exports = twoSum;
