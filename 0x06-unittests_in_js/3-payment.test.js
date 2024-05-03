import { spy } from 'sinon';
import { expect } from 'chai';

import sendPaymentRequestToApi from '3-payment';
import Utils from './utils';

describe('spies', () => {
    it('equal', () => {
        const spyU = spy(Utils, 'calculateNumber');
        const spyC = spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(spyU.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyC.calledOnceWithExactly('The total is: 120')).to.be.true;

        spyU.restore();
        spyC.restore();
    });
});
