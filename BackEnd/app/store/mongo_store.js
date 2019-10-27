var mongoose = require('mongoose');
let config = require('config');

var mongoSettings = config.get("mongo");
var options = {
    useNewUrlParser: true,
    poolSize: mongoSettings.connectionLimit,
    reconnectInterval: mongoSettings.reconnectInterval,
    reconnectTries: Number.MAX_VALUE,
    keepAlive: true
};

if (mongoSettings.user) {
    options.user = mongoSettings.user;
}
if (mongoSettings.password) {
    options.pass = mongoSettings.password;
}
var mongoUrl = 'mongodb://localhost:27017/nghiadinh';
mongoose.nghiadinh = mongoose.createConnection(mongoUrl, options);

// CONNECTION EVENTS
// When successfully connected
mongoose.nghiadinh.on('connected', function (err) {
    console.log('Mongoose Connected Successfully!! ', err);
});

// If the connection throws an error
mongoose.nghiadinh.on('error', function (err) {
    console.log('Mongoose default connection error: ', err);
});

mongoose.nghiadinh.on('disconnected', function (err) {
    console.log('Mongoose default connection disconnected', err);
});

module.exports = mongoose;