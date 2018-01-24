// const geocode = require('./geocode/geocode')
// const yargs = require('yargs');

// const argv = yargs.options({
//     a: {
//         demand: true,
//         alias: 'address',
//         describe: 'The address of the location to grab the weather for',
//         string: true
//     }
// }).help().alias('help','h').argv;

// geocode.geocodeAddress(argv.address, (err, res) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(JSON.stringify(res, undefined, 4));
//     }
// })


//516bbec57c521973a7b1eb4541d92fa3


const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/516bbec57c521973a7b1eb4541d92fa3/37.8267,-122.4233',
    json: true
}, (err, resp, body) => {
    if (!err && resp.statusCode === 200) {
        console.log(body.currently.temperature);   
    }
    else {
        console.log('Unable to connect to find the weather for that location... Interesting...')
    }
});