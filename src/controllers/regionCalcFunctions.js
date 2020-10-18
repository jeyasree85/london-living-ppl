const geolib = require('geolib');
const axios = require ("axios")
const url = `https://bpdts-test-app.herokuapp.com/users`

"use strict";
exports.getLondonLivingUsers = function (users) {
    let londonGeoLocation = {lat: 51.5074, lon: 0.1278} ;
    let londonLivingUser = users.filter(function(user){
    let userGeoLocation={lat: user.latitude,lon: user.longitude}
    let distance=geolib.getDistance(londonGeoLocation, userGeoLocation);
        return distance<=80467.2
    });
    return londonLivingUser;
}
exports.checkLondonLivingUser=function(user){
    let londonGeoLocation = {lat: 51.5074, lon: 0.1278} ;
    let userLocation={lat: user.latitude,lon: user.longitude}
    let distance=geolib.getDistance(londonGeoLocation, userLocation);
    if(distance<=80467.2)
        return true;
    else
        return false;
}

