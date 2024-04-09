const mongoose = require('mongoose');

const { Schema } = mongoose;

const patientSchema = new Schema({
    patientName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    healthInsurance: { type: String, required: true },
    visitNo: { type: Number, required: true },
    sex: { type: String, required: true, enum: ['male', 'female', 'other'] },
    age: { type: Number, required: true },
    medicalHistory: [{
                date: Date,
                reasonForVisit: String,
                doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor' },
                carePlan: String,
                testsOrdered: [String],
        }],
    department: {
                type: Schema.Types.ObjectId,
                ref: 'Department',
                required: true
        },
    patientStatus: { type: String, required: true, enum: ['admitted', 'discharged', 'under observation'] },
    roomNo: Number,
})

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;