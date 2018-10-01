const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns a string where no line is longer than max length', () => {
    expect(
      wrap('this is a test string. this string is to be tested', 10)
    ).to.equal(
      'this is a \ntest \nstring. \nthis \nstring is \nto be \ntested'
    );
  });
});
