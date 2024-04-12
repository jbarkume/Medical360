const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth-manager")
require("dotenv").config()

/**
 * Sends a response with the user if they are logged in to the site.
 * Otherwise sends a null user
 */
async function loggedIn(req, res) {
    // method : GET
    // route : /auth/loggedIn
    try {
        // find user in database using JWT
        let userId = auth.verifyUser(req)


        // if user DNE or token expired return null user
        if (!userId) 
            return res.status(200).json({
                loggedIn: false,
                user: null
            })

        // Else find user and return it
        const user = await User.findById(userId);

        return res.status(200).json({
            loggedIn: true,
            user: user
        })

    } catch (err) {
        // internal server error
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
        const pwTrue = await bcrypt.compare(password, user.passwordHash);
        if (!pwTrue) 
            return res.status(401).json({
                message: "Wrong email or password provided."
            });

        // login the user by signing a token and sending it in a cookie
        // then send status of 200 with user info
        let token = auth.signToken(id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: true
        }).status(200).json({
            user: user,
            token: token
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

function logout(req, res) {
    // method : POST
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

async function resetPassword(req, res) {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({ message: "Please provide all required fields." });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            
            return res.status(200).json({ message: "If an account with that email exists, a password reset link has been sent." });
        }

        const saltRounds = 10;
        user.passwordHash = await bcrypt.hash(newPassword, saltRounds);
        await user.save();

        res.status(200).json({ message: "Password has been successfully reset." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const AuthController =  {
    loggedIn,
    login,
    register,
    logout,
    resetPassword
}

module.exports = AuthController