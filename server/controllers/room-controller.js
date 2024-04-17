const Room = require("../models/Room"); 
const mongoose = require('mongoose');

function createRoom(req, res) {
  const { roomNumber, roomType, equipment, availabilityStatus } = req.body;

  const equipmentIds = equipment.map(id => 
    mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : null
  ).filter(id => id !== null);

  if (equipmentIds.length !== equipment.length) {
    return res.status(400).json({ error: "Invalid equipment ID(s) provided." });
  }

  const newRoom = new Room({
    roomNumber,
    roomType,
    equipment: equipmentIds,
    availabilityStatus
  });

  newRoom.save()
    .then(room => {
      console.log("Room saved successfully", room);
      res.status(201).json(room);
    })
    .catch(error => {
      console.error("Error saving room:", error);
      res.status(400).json({ error: "Error saving room: " + error.message });
    });
}

async function updateRoom(req, res) {
  try {
    let id = req.params.id;
    const updateObject = { $set: req.body };

    const updatedRoom = await Room.findOneAndUpdate({ _id: id }, updateObject, {
      new: true,
    });
    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ room: updatedRoom, message: "Updated room" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAllRooms(req, res) {
  try {
    const roomList = await Room.find();
    res.status(200).json(roomList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getRoom(req, res) {
  try {
    const room = await Room.findById(req.params.id).populate("equipment");
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteRoom(req, res) {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Deleted room" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const RoomController = {
  createRoom,
  updateRoom,
  getAllRooms,
  getRoom,
  deleteRoom,
};

module.exports = RoomController;
