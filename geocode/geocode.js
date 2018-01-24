const request = require('request');

let geocodeAddress = (address, returns) => {
    address = encodeURIComponent(address)
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    }, (err, resp, body) => {
        if (err) {
            returns('Unable to locate Google Servers.')
        }
        else if (body.status === 'ZERO_RESULTS') {
            returns('We could not find that address, can you give it another shot?')
        }
        else if (body.status === 'OK') {
            returns(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    })
}

module.exports = {
    geocodeAddress
}