const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Chance = require("chance");
const chance = new Chance();
const User = require("./models/User");
const Doctor = require("./models/Doctor");
const Department = require("./models/Department");
const Patient = require("./models/Patient");
const Room = require("./models/Room");
const Equipment = require("./models/Equipment");
require("dotenv").config();

mongoose.connect(
  "mongodb://localhost/medical360",
  {
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.once("open", async () => {
  console.log("Connected to MongoDB");

  try {
    const departments = ["Cardiology", "Spinal", "Plastic", "Oncology"];
    // Create admin user
    const adminUser = new User({
      name: "Admin",
      email: "admin@example.com",
      phoneNumber: chance.phone(),
      passwordHash: await bcrypt.hash("admin@123", 10),
      isAdmin: true,
    });
    await adminUser.save();

    // create doctor for head of departments
    let department_ids = [];
    for (let i = 0; i < departments.length; i++) {
      // create user that is head doctor
      const doctor = new Doctor({
        surgeryCount: chance.integer(),
        appointmentNo: chance.integer(),
        hours: chance.integer(),
        profileDetails: {
          focusAreas: [chance.word(), chance.word()],
          specialization: [chance.word(), chance.word()],
        },
        schedule: [
          { day: "Monday", start: chance.date(), end: chance.date() },
          { day: "Tuesday", start: chance.date(), end: chance.date() },
        ],
        patientList: [],
      });

      await doctor.save();

      const name = chance.name();
      const email = chance.email();
      const passwordHash = await bcrypt.hash("password@123", 10);
      const isAdmin = true;

      const user = new User({
        name,
        email,
        passwordHash,
        isAdmin,
        doctor: doctor._id,
      });

      await user.save();

      const dep = new Department({
        departmentName: departments[i],
        head: doctor._id, // Head can be added later
        headModel: departments[i],
      });

      await dep.save();

      department_ids.push(dep._id);

      // update user and doctor with department
      await User.findOneAndUpdate({ _id: user._id }, { department: dep._id });

      await Doctor.findOneAndUpdate(
        { _id: doctor._id },
        { departmentName: dep._id }
      );
    }

    // Populate users that are doctors and not heads
    const users = [];
    const doctors = [];
    for (let i = 0; i < 5; i++) {
      const doctor = new Doctor({
        departmentName: chance.pickone(department_ids),
        surgeryCount: chance.integer(),
        appointmentNo: chance.integer(),
        hours: chance.integer(),
        profileDetails: {
          focusAreas: [chance.word(), chance.word()],
          specialization: [chance.word(), chance.word()],
        },
        schedule: [
          { day: "Monday", start: chance.date(), end: chance.date() },
          { day: "Tuesday", start: chance.date(), end: chance.date() },
        ],
        patientList: [],
      });

      const name = chance.name();
      const email = chance.email();
      const passwordHash = await bcrypt.hash("password@123", 10);
      const isAdmin = false;
      const department = chance.pickone(department_ids); // assign to doctor

      const user = new User({
        name,
        email,
        passwordHash,
        isAdmin,
        department, // Set department reference
        doctor: doctor._id,
      });
      doctors.push(doctor);
      users.push(user);
    }

    await User.insertMany(users);
    await Doctor.insertMany(doctors);

    // populate users that are nurses
    const nurses = [];
    for (let i = 0; i < 5; i++) {
      const name = chance.name();
      const email = chance.email();
      const phoneNumber = chance.phone();

      const passwordHash = await bcrypt.hash("password@123", 10);
      const isAdmin = false;

      const nurse = new User({
        name,
        email,
        phoneNumber,
        passwordHash,
        isAdmin,
      });
      nurses.push(nurse);
    }

    await User.insertMany(nurses);

    // Populate patients
    const patients = [];
    let allDoctors = await Doctor.find();
    for (let i = 0; i < 10; i++) {
      let doctor = chance.pickone(allDoctors);

      const patient = new Patient({
        patientName: chance.name(),
        email: chance.email(),
        phoneNumber: chance.phone(),
        healthInsurance: chance.word(),
        visitNo: chance.integer(),
        sex: chance.pickone(["male", "female", "other"]),
        age: chance.integer({ min: 18, max: 100 }),
        department: chance.pickone(department_ids),
        patientStatus: chance.pickone([
          "admitted",
          "discharged",
          "under observation",
        ]),
        roomNo: chance.integer({ min: 100, max: 200 }),
      });
      patients.push(patient);

      // add patient to doctors patients
      doctor.patientList.push(patient._id);
      await doctor.save();
    }
    await Patient.insertMany(patients);

    // Define room-equipment mapping
    const roomEquipmentMapping = {
      ICU: ["ECG Machine", "Ventilator", "Defibrillator"],
      General: ["Ultrasound", "X-Ray", "Blood Pressure Monitor"],
      Surgical: ["Anesthesia Machine", "Surgical Table", "Surgical Lights"],
      Maternity: ["Fetal Doppler", "Ultrasound", "Incubator"],
    };

    // Generate equipment
    const equipmentList = [];
    Object.entries(roomEquipmentMapping).forEach(
      ([roomType, equipmentTypes]) => {
        equipmentTypes.forEach((type) => {
          for (let i = 1; i < 5; i++) {
            // Create two of each type for diversity
            const equipment = new Equipment({
              equipmentName: `${type} ${i}`,
              equipmentType: type,
              quantity: chance.integer({ min: 1, max: 5 }),
              location: `${roomType} Storage`,
              maintenanceStatus: chance.pickone([
                "Operational",
                "Maintenance Required",
              ]),
            });
            equipmentList.push(equipment);
          }
        });
      }
    );

    await Equipment.insertMany(equipmentList);

    // Map typed equipment for room assignment
    const typedEquipment = {};
    Object.keys(roomEquipmentMapping).forEach((roomType) => {
      typedEquipment[roomType] = equipmentList
        .filter((eq) =>
          roomEquipmentMapping[roomType].includes(eq.equipmentType)
        )
        .map((eq) => eq._id);
    });

    // Create rooms, assigning equipment based on room type
    const roomNumbers = [...Array(20).keys()].map((i) => 100 + i);
    const rooms = roomNumbers.map((roomNumber) => {
      const roomType = chance.pickone([
        "ICU",
        "General",
        "Surgical",
        "Maternity",
      ]);
      return new Room({
        roomNumber,
        roomType,
        equipment: chance.pickset(
          typedEquipment[roomType],
          chance.integer({ min: 1, max: typedEquipment[roomType].length })
        ),
        availabilityStatus: chance.pickone(["Occupied", "Available"]),
      });
    });

    await Room.insertMany(rooms);

    console.log("Seeding completed");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    // Close connection
    db.close();
  }
});
