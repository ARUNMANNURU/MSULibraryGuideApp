
const mongoose = require('mongoose');
console.log('db connection');

mongoose.connect('mongodb://127.0.0.1:27017/billing', {
	
});

mongoose.connection.once('open', function() {
    console.log('Connection succesfull');
}).on('error', function(error) {
    console.log('Connection error...', error);
});