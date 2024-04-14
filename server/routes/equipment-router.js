const express = require('express');
const router = express.Router();
const EquipmentController = require('../controllers/equipment-controller');  // Adjust path as necessary


// POST route to create a new room
router.post('/', EquipmentController.createEquipment);

// PUT to update equipment data by id
router.put('/:id', EquipmentController.updateEquipment);

// GET route to get all equipments
router.get('/', EquipmentController.getAllEquipment);

// GET route to get single equipment by id
router.get('/:id', EquipmentController.getEquipment);

// DELETE route to delete a specific equipment by ID
router.delete('/:id', EquipmentController.deleteEquipment);

module.exports = router;
