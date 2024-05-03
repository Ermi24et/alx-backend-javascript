const sinon = require('sinon');
import { expect } from 'chai';

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('spies', () => {
    it('equal', () => {
        const spyU = sinon.spy(Utils, 'calculateNumber');
        const spyC = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(spyU.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyC.calledOnceWithExactly('The total is: 120')).to.be.true;

        spyU.restore();
        spyC.restore();
    });
});
