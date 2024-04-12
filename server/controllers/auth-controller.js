const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth-manager");
const Department = require("../models/Department");
const Doctor = require("../models/Doctor");
require("dotenv").config()

// is user logged in currently
async function loggedIn(req, res) {
    // method : GET
    // route : /auth/loggedIn
    try {
        // find user in database using JWT
        let userId = auth.userVerify(req)

        // if user DNE or token expired return null user
        if (!userId) 
            return res.status(200).json({
                loggedIn: false,
                user: null,
                department: null,
                isDoctor: false,
                isAdmin: false
            })

        // else find user and return it
        const user = await User.findById(userId);
        let departmentId = null;
        if (user.department) 
            departmentId = await Department.findById(user.department)

        return res.status(200).json({
            loggedIn: true,
            user: user,
            department: departmentId.departmentName,
            isDoctor: user.doctor !== null,
            isAdmin: user.isAdmin
        })

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

async function login(req, res) {
    // method : POST
    // route : /auth/register

    try {
        // check fields are provided
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({
                message: "Please enter all required fields."
            });

        // find user by email. If none exists send status of 401 with wrong fields provided
        const user = await User.findOne({ email: email });
        if (!user)
            return res.status(401).json({
                message: "Wrong email or password provided."
            });

        let id = user._id

        // check password matches
        const passwordCorrect = await bcrypt.compare(password, user.passwordHash);
        if (!passwordCorrect) 
            return res.status(401).json({
                message: "Wrong email or password provided."
            });

        // login the user by signing a token and sending it in a cookie
        // then send status of 200 with user info
        let token = auth.tokenSign(id);

        res.status(200).json({
            user: user,
            token
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

function logout(req, res) {
    // method : GET
    // route : /auth/logout
    
    // send cookie with token = "" and expires as soon as it gets there
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none"
    }).send();
}

async function register(req, res) {
    // method : POST
    // route : /auth/register

    // check fields are provided/correct and if not then send status 400
    const {name, email, password, confirmPassword, department, phone_number} = req.body
    const emailRegex = /.+@.+\.+/

    if (!name || !email || !password || !confirmPassword || !department || !phone_number)
        return res.status(400).json({
            message: "Please provide all fields"
        });

    if (password.length < 8)
        return res.status(400).json({
            message: "Please provide password of at least 8 characters"
        });

    if (password !== confirmPassword)
        return res.status(400).json({
            message: "Please make sure passwords match"
        });

    
    if (!emailRegex.test(email))
        return res.status(400).json({
            message: "Please provide a valid email"
        });

    // check if user with certain fields (email) already exists
    // if they do, send status 400
    let user = await User.findOne({ email: email});
    if (user) 
        return res.status(400).json({
            message: "An account with this email address already exists."
        })

    // generate username based on name provided
    let username = `${name}12345`

    // hash password and save user in database
    let saltRounds = 8;
    let salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

    user = {name, username, email, passwordHash, department, phone_number}
    await new User(user).save();
    
    // send status of 200 along with user created info if needed
    res.status(200).json({
        message: `User ${username} created`,
        user: user
    })
}

const AuthController =  {
    loggedIn,
    login,
    register,
    logout
}

module.exports = AuthController