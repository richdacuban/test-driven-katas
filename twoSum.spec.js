const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns two indices in array provided that equal to target', () => {
    console.log(twoSum([1, 2, 3], 5));
    expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
  });
});
