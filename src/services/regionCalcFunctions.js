const geolib = require('geolib');

exports.getLondonLivingUsers = function (users) {
    let londonGeoLocation = {lat: 51.5074, lon: 0.1278} ;
    let londonLivingUser = users.filter(function(user){
    let userGeoLocation={lat: user.latitude,lon: user.longitude}
    let distance=geolib.getDistance(londonGeoLocation, userGeoLocation);
        return distance<=80467.2
    });
    return londonLivingUser;
}


