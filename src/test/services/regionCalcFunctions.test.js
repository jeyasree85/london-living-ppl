const expect  = require('chai').expect;
const services = require('../../services/regionCalcFunctions');

describe('getLondonLivingUsers',()=>{
    it('Test People living in and withing 50 miles of london returned',(done)=>{
        const data =services.getLondonLivingUsers([{"id":266,"first_name":"Ancell","last_name":"Garnsworthy","email":"agarnsworthy7d@seattletimes.com","ip_address":"67.4.69.137","latitude":51.6553959,"longitude":0.0572553},
                                                         {"id":322,"first_name":"Hugo","last_name":"Lynd","email":"hlynd8x@merriam-webster.com","ip_address":"109.0.153.166","latitude":108.6710832,"longitude":0.8078532}])
        expect(data[0].id).to.equal(266)
        expect(data[0].first_name).to.equal('Ancell')
        expect(data[0].last_name).to.equal('Garnsworthy')
        done();
    })
    it('Test People not living in and withing 50 miles of london should not be returned',(done)=>{
        const data =services.getLondonLivingUsers([{"id":266,"first_name":"Ancell","last_name":"Garnsworthy","email":"agarnsworthy7d@seattletimes.com","ip_address":"67.4.69.137","latitude":51.6553959,"longitude":0.0572553},
                                                         {"id":322,"first_name":"Hugo","last_name":"Lynd","email":"hlynd8x@merriam-webster.com","ip_address":"109.0.153.166","latitude":108.6710832,"longitude":0.8078532}])
        expect(data).to.not.contains(322)
        expect(data).to.not.contains("Hugo")
        expect(data).to.not.contains("Lynd")
        done();
    })
});
