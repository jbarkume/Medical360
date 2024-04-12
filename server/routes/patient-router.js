const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// POST route to create a new patient
router.post('/', (req, res) => {
    const newPatient = new Patient({
        patientName: req.body.patientName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        healthInsurance: req.body.healthInsurance,
        
        sex: req.body.sex,
        age: req.body.age,
       
        department: req.body.department, 
        patientStatus: req.body.patientStatus,
        roomNo: req.body.roomNo,
    });

    newPatient.save()
        .then(patient => res.status(201).json(patient))
        .catch(error => res.status(400).json({ error: 'Error saving patient: ' + error }));
});

module.exports = router;