const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('stubs', () => {
  it('equal', () => {
    const stubU = sinon.stub(Utils, 'calculateNumber');
    stubU.returns(10);
    const spyC = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubU.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyC.calledOnceWithExactly('The total is: 20')).to.be.true;

    stubU.restore();
    spyC.restore();
  });
});
