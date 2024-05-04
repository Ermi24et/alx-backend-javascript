const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM no round', () => {
    it('should return 6', () => {
      expect(calculateNumber('SUM', 2, 4)).to.equal(6);
    });
  });
  describe('SUM first round', () => {
    it('should return 7', () => {
      expect(calculateNumber('SUM', 3.4, 4)).to.equal(7);
    });
  });
  describe('SUM second round', () => {
    it('should return 7', () => {
      expect(calculateNumber('SUM', 5, 2.4)).to.equal(7);
    });
  });
  describe('SUM both round', () => {
    it('should return 7', () => {
      expect(calculateNumber('SUM', 2.4, 4.5)).to.equal(7);
    });
  });
  describe('SUBTRACT no round', () => {
    it('should return 3', () => {
      expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
    });
  });
  describe('SUBTRACT first round', () => {
    it('should return -4', () => {
      expect(calculateNumber('SUBTRACT', 2, 5.5)).to.equal(-4);
    });
  });
  describe('SUBTRACT second round', () => {
    it('should return 2', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 3)).to.equal(2);
    });
  });
  describe('SUBTRACT both round', () => {
    it('should return -3', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 4.5)).to.equal(-3);
    });
  });
  describe('DIVIDE no round', () => {
    it('should return 3', () => {
      expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
    });
  });
  describe('DIVIDE first round', () => {
    it('should return 6', () => {
      expect(calculateNumber('DIVIDE', 11.5, 2)).to.equal(6);
    });
  });
  describe('DIVIDE second round', () => {
    it('should return 0.2', () => {
      expect(calculateNumber('DIVIDE', 2, 4.5)).to.equal(0.4);
    });
  });
  describe('DIVIDE both round', () => {
    it('should return 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.2, 4.5)).to.equal(0.2);
    });
  });
  describe('DIVIDE Error', () => {
    it('should return Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
