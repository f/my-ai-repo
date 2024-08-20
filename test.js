const { strPadLeft, strPadRight } = require('./index');
const assert = require('assert');


describe('padStr', function() {
  it('should pad the string with spaces by default to the left', function() {
    assert.strictEqual(strPadLeft('test', 8, ' '), 'test    ');
  });

  it('should pad the string with the specified character to the left', function() {
    assert.strictEqual(strPadLeft('test', 8, '-'), 'test----');
  });

  it('should return the string unchanged if it is already long enough to the left', function() {
    assert.strictEqual(strPadLeft('test', 4, ' ', 'left'), 'test');
  });
});

describe('padStr-right', function() {
  it('should pad the string with spaces by default to the right', function() {
    assert.strictEqual(strPadRight('test', 8, '-', 'right'), 'test    ');
  });

  it('should pad the string with the specified character to the right', function() {
    assert.strictEqual(strPadRight('test', 8, '-', 'right'), 'test----');
  });

  it('should return the string unchanged if it is already long enough to the right', function() {
    assert.strictEqual(strPadRight('test', 4, ' ', 'right'), 'test');
  });
});
