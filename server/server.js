const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const path = require('path');


// config .env files
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: [`https://medical360-d65d823d7d75.herokuapp.com/`],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// // This is temporary, will get removed after backend is properly setup
app.use(express.static(path.join(__dirname, '../client/dist')));

// // This is temporary, will get removed after backend is properly setup
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/dist/index.html'));
  });


// set up routers
const authRouter = require('./routes/auth-router')
app.use('/auth', authRouter)

// connect the database
mongoose
    .connect(process.env.MONGODB_URI)
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
db.once("connected", () => {
    console.log("Connected To Database")
})
db.on('error', () => console.error('MongoDB connection error:'))

// run the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))