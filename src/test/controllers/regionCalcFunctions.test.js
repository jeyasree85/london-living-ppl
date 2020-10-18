const expect  = require('chai').expect;
const axios = require ("axios")
const url = `https://bpdts-test-app.herokuapp.com/users`
const region=require('../../controllers/regionCalcFunctions');
process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;

describe('regionCalcFunctions',function() {
    it('API Test London Users only returned',  function () {
         axios.get(url).then((response) => {
             const londonLivingUsers=region.getLondonLivingUsers(response.data)
             var testPassed = true;
             for (var user of londonLivingUsers) {
                 var londonUser = region.checkLondonLivingUser(user);
                 if (londonUser === false)
                     testPassed = false;
             }
             expect(testPassed).to.eql(true);
        }).catch((error) => {
            console.log(error);
        })
    });
});

