const Room = require("../models/Room"); // Assuming the Room model is in the models directory

function createRoom(req, res) {
  const newRoom = new Room({
    roomNumber: req.body.roomNumber,
    roomType: req.body.roomType,
    equipment: req.body.equipment,
    availabilityStatus: req.body.availabilityStatus,
  });

  newRoom
    .save()
    .then((room) => res.status(201).json(room))
    .catch((error) =>
      res.status(400).json({ error: "Error saving room: " + error })
    );
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
    const rooms = await Room.find().populate("equipment");
    res.status(200).json(rooms);
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
