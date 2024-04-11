const mongoose = require('mongoose');

const { Schema } = mongoose;

const doctorSchema = new Schema({
  departmentName: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    default: null
  },
  surgeryCount: {
    type: Number,
    default: 0
  },
  appointmentNo: {
    type: Number,
    default: 0
  },
  hours: {
    type: Number,
    default: 0
  },
  profileDetails: {
    focusAreas: [String],
    specialization: [String]
  },
  schedule: [{
    day: String,
    start: Date,
    end: Date,
  }],
  patientList: [{
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  }]
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;