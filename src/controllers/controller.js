const axios = require ("axios")
const url = `https://bpdts-test-app.herokuapp.com/users`
const region = require('./regionCalcFunctions')

"use strict";
exports.getLondonUsers= async (req,res)=>{
        axios.get(url).then((response) => {
        const data=region.getLondonLivingUsers(response.data)
        return res.send(data)
    }).catch(error => {
        console.error(error);
        return Promise.reject(error);
    });
}


