const geocode = require('./geocode/geocode')
const yargs = require('yargs');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'The address of the location to grab the weather for',
        string: true
    }
}).help().alias('help','h').argv;

geocode.geocodeAddress(argv.address, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(JSON.stringify(res, undefined, 4));
    }
})