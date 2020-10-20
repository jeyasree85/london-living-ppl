const axios = require ("axios")
const url = `https://bpdts-test-app.herokuapp.com/users`
const services = require('../services/regionCalcFunctions')

exports.getLondonUsers= async (req,res)=>{
        await axios.get(url).then((response) => {
        const data=services.getLondonLivingUsers(response.data)
        return res.status(200).send(data)
    }).catch(error => {
        console.error(error);
        return Promise.reject(error);
    });
}


