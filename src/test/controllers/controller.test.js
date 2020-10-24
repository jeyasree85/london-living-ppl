const axios = require('axios');
const getLondonUsers = require('../../controllers/controller')
const mockResponse = require('../utils/mock-response');

jest.mock('axios');
describe('getLondonUsers', () => {
    it('fetches successfully data from an API', async () => {
        const data = ([{"id":266,"first_name":"Ancell","last_name":"Garnsworthy","email":"agarnsworthy7d@seattletimes.com","ip_address":"67.4.69.137","latitude":51.6553959,"longitude":0.0572553},
            {"id":322,"first_name":"Hugo","last_name":"Lynd","email":"hlynd8x@merriam-webster.com","ip_address":"109.0.153.166","latitude":108.6710832,"longitude":0.8078532}]);
        axios.get.mockImplementationOnce(() => Promise.resolve({data:data}));
        const res = mockResponse();
        const mockSend = jest.fn();
        res.send = mockSend;
        await getLondonUsers.getLondonUsers(null,res)
        expect(mockSend).toBeCalledWith([data[0]]);
    });
    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
    });
});

