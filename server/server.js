const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

// config .env files
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(cors({

    // origin: [`https://medical360-d65d823d7d75.herokuapp.com/`],
    origin: [`http://localhost:5173`],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// // This is temporary, will get removed after backend is properly setup
// app.use(express.static(path.join(__dirname, '../client/dist')));


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'../client/dist/index.html'));
//   });
// // Serve static files (Make sure this is before your catch-all route if you are using React Router)
// app.use(express.static(path.join(__dirname, "../client/dist")));

// // Catch-all handler for SPA (Make sure the path is correctly formatted)
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
// });


// set up routers
const authRouter = require('./routes/auth-router')
const userRouter = require('./routes/user-router')
const patientRouter = require('./routes/patient-router');
const departmentRouter = require('./routes/department-router');

app.use('/patients', patientRouter);
app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/departments', departmentRouter);

// connect the database
mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to Database"))
  .catch((e) => console.error("Connection error", e.message));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Run the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
