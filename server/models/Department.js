const mongoose = require('mongoose');

const { Schema } = mongoose;

const departmentSchema = new Schema({
    departmentName: {
        type: String,
        required: true
     },
     head: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'headModel',
        required: true,
    },
    headModel: {
        type: String,
        required: true,
        enum: ['Cardiology', 'Spinal'] // Add other possible departments here if needed
    },

    doctorList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }]

})

const Department = mongoose.model('Department',departmentSchema)
module.exports = Department;