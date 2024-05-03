const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM no round', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber('SUM', 2, 4), 6);
    });
  });
  describe('SUM first round', () => {
    it('should return 7', () => {
      assert.equal(calculateNumber('SUM', 3.4, 4), 7);
    });
  });
  describe('SUM second round', () => {
    it('should return 7', () => {
      assert.equal(calculateNumber('SUM', 5, 2.4), 7);
    });
  });
  describe('SUM both round', () => {
    it('should return 7', () => {
      assert.equal(calculateNumber('SUM', 2.4, 4.5), 7);
    });
  });
  describe('SUBTRACT no round', () => {
    it('should return 3', () => {
      assert.equal(calculateNumber('SUBTRACT', 5, 2), 3);
    });
  });
  describe('SUBTRACT first round', () => {
    it('should return -4', () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 5.5), -4);
    });
  });
  describe('SUBTRACT second round', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', 4.5, 3), 2);
    });
  });
  describe('SUBTRACT both round', () => {
    it('should return -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.4, 4.5), -3);
    });
  });
  describe('DIVIDE no round', () => {
    it('should return 3', () => {
      assert.equal(calculateNumber('DIVIDE', 9, 3), 3);
    });
  });
  describe('DIVIDE first round', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber('DIVIDE', 11.5, 2), 6);
    });
  });
  describe('DIVIDE second round', () => {
    it('should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 2, 4.5), 0.4);
    });
  });
  describe('DIVIDE both round', () => {
    it('should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.2, 4.5), 0.2);
    });
  });
  describe('DIVIDE Error', () => {
    it('should return Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});