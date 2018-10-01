const wrap = (line, maxLen) => {
  let output = '';

  const splitString = line.split(' ');

  let subOutput = '';
  for (let i = 0; i < splitString.length; i++) {
    let currWordLength = splitString[i].length + 1;

    if (subOutput.length + currWordLength <= maxLen) {
      subOutput += splitString[i] + ' ';
    } else if (subOutput.length + currWordLength - 1 <= maxLen) {
      subOutput += splitString[i];
    } else {
      output += subOutput;
      output += '\n';

      if (splitString[i] === splitString[splitString.length - 1]) {
        output += splitString[i];
      } else {
        subOutput = splitString[i] + ' ';
      }
    }
  }

  return output;
};

module.exports = wrap;

// console.log('output: ', output);
