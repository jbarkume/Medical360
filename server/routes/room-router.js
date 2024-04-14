const express = require('express');
const router = express.Router();
const RoomController = require('../controllers/room-controller'); 

router.post('/', RoomController.createRoom);
router.put('/:id', RoomController.updateRoom);
router.get('/', RoomController.getAllRooms);
router.get('/:id', RoomController.getRoom);
router.delete('/:id', RoomController.deleteRoom);

module.exports = router;
