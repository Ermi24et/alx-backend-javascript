const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  describe('two integers', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber(1, 4), 5);
    });
  });
  describe('sum while second argument rounded', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber(1, 4.7), 6);
    });
  });
  describe('sum while the first argument rounded', () => {
    it('it should return 6', () => {
      assert.equal(calculateNumber(4.7, 1), 6);
    })
  });
  describe('sum while the second argument round floor', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber(1, 4.3), 5);
    });
  });
  describe('sum while the first argument round floor', () => {
    it('should return 6', () => {
      assert(calculateNumber(4.3, 1), 5);
    });
  })
  describe('sum while two arguments round', () => {
    it('should return 8', () => {
      assert.equal(calculateNumber(2.5, 4.7), 8);
    });
  });
  describe('sum while first arg round floor and second round', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber(2.2, 3.7), 6);
    });
  });
  describe('sum while the second arg round floor and the first round', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber(3.7, 2.2), 6);
    });
  });
  describe('sum while both args round floor', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber(2.2, 2.1), 4);
    });
  });
});
