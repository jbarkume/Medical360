const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const Patient = require("../models/Patient"); // Adjust the path to your Patient model

// Mock the Patient model
jest.mock("../models/Patient");

const app = express();
app.use(bodyParser.json()); // support json encoded bodies

const patientRouter = require("../routes/patient-router"); // Adjust the path to your patient-router
app.use("/patients", patientRouter); // Mount the patientRouter at /patients

describe("POST /patients", () => {
  it("should create a new patient and return 201 status", async () => {
    // Setup the Patient model's mock implementation
    Patient.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue({
        patientName: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "1234567890",
        healthInsurance: "HealthInsuranceProvider",
        sex: "male",
        age: "30",
        patientStatus: "admitted",
        roomNo: "101",
      }),
    }));

    // Define the payload to send in the POST request
    const newPatientData = {
      patientName: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "1234567890",
      healthInsurance: "HealthInsuranceProvider",
      sex: "male",
      age: "30",
      patientStatus: "admitted",
      roomNo: "101",
    };

    // Make a POST request to the route and assert the response
    const response = await request(app)
      .post("/patients") // Note the change in the URL
      .send(newPatientData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("patientName", "John Doe");
    // Add more assertions as necessary
  });

  // Add more tests as needed
});
