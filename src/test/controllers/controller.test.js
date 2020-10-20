const { expect } = require('chai')
const usersApi = require('../../controllers/controller')
const sinon = require('sinon');

describe('API test', () => {
    it('API Test should 200 status', () => {
        const req = {};
        const res = {
            status() {},
            send() {}
        };
        before(() => {
            sinon.spy(res, 'status');
            sinon.spy(res, 'send');
        })
        it('should return 200', () => {
            usersApi.getLondonUsers(res, res);
            expect(res.status.calledOnceWith(200)).to.be.true;
        })
    })
})
