const mongoose = require('mongoose');

const batterySubmissionSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    nin: {
        type: String,
        required: true,
    },
    time: {
        type: String, 
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    numberPlate: {
        type: String,
        required: true,
    },
    batterySize: {
        type: String,
        required: true,
    },
});

const BatterySubmission = mongoose.model('BatterySubmission', batterySubmissionSchema);

module.exports = BatterySubmission;
