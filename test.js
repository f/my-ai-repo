const assert = require('assert');
const padString = require('./index');

describe('padString', function() {
  it('should pad the string with spaces by default', function() {
    assert.strictEqual(padString('test', 8), '    test');
  });

  it('should pad the string with the specified character', function() {
    assert.strictEqual(padString('test', 8, '-', 'left'), '----test');
    assert.strictEqual(padString('test', 8, '-', 'right'), 'test----');
  });

  it('should pad the string with the specified character', function() {
    assert.strictEqual(padString('test', 8, '-'), '----test');
  });

  it('should return the string unchanged if it is already long enough', function() {
    assert.strictEqual(padString('test', 4), 'test');
  });
});
