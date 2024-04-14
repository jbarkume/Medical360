const express = require('express');
const router = express.Router();
const EquipmentController = require('../controllers/equipment-controller');  // Adjust path as necessary

router.post('/', EquipmentController.createEquipment);
router.put('/:id', EquipmentController.updateEquipment);
router.get('/', EquipmentController.getAllEquipment);
router.get('/:id', EquipmentController.getEquipment);
router.delete('/:id', EquipmentController.deleteEquipment);

module.exports = router;
