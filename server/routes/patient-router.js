const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const PatientController = require('../controllers/patient-controller');

// POST route to create a new patient
router.post('/', PatientController.createPatient);

// PUT to update patient data by id
router.put('/:id', PatientController.updatePatient);

// GET route to get all patients
router.get("/", PatientController.getAllPatients);

// GET route to get single patient by id
router.get("/:id", PatientController.getPatient);

module.exports = router;