
const assert = require('assert');
const { strPadLeft, strPadRight } = require('./index');

describe('strPadLeft', function() {
  it('should pad the string with spaces by default', function() {
    assert.strictEqual(strPadLeft('test', 8), 'test    ');
  });

  it('should pad the string with the specified character', function() {
    assert.strictEqual(strPadLeft('test', 8, '-'), 'test----');
  });

  it('should return the string unchanged if it is already long enough', function() {
    assert.strictEqual(strPadLeft('test', 4), 'test');
  });
});

describe('strPadRight', function() {
  it('should pad the string with spaces by default', function() {
    assert.strictEqual(strPadRight('test', 8), '    test');
  });

  it('should pad the string with the specified character', function() {
    assert.strictEqual(strPadRight('test', 8, '-'), '----test');
  });

  it('should return the string unchanged if it is already long enough', function() {
    assert.strictEqual(strPadRight('test', 4), 'test');
  });
});
