const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
const { describe, it } = require('node:test');

describe('calculateNumber', () => {
  it('it round the first argument', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
