const { expect } = require('chai');

describe('Basic Mocha String Test', function () {
  it('should return number of charachters in a string', function () {
    expect("Hello").to.have.length(5)
  });
  it('should return first charachter of the string', function () {
    expect("Hello".charAt(0)).to.equal('H');
  });
});
