const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('Hooks', () => {
    let spyC;
    beforeEach(() => {
        spyC = sinon.spy(console, 'log');
    });
    afterEach(() => {
        spyC.restore();
    });
    it('correct output 100, 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spyC.calledOnceWithExactly('The total is: 120')).to.be.true;
        expect(spyC.calledOnce).to.be.true;
    });
    it('correct output 10, 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(spyC.calledOnceWithExactly('The total is: 20')).to.be.true;
        expect(spyC.calledOnce).to.be.true;
    });
});
