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

// GET route to retrieve all patients
router.get('/', (req, res) => {
    Patient.find()
        .then(patients => res.status(200).json(patients))
        .catch(error => res.status(500).json({ error: 'Error fetching patients: ' + error }));
});

// GET route to retrieve a specific patient by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Patient.findById(id)
        .then(patient => {
            if (!patient) {
                return res.status(404).json({ message: 'Patient not found' });
            }
            res.status(200).json(patient);
        })
        .catch(error => res.status(500).json({ error: 'Error fetching patient: ' + error }));
});

module.exports = router;