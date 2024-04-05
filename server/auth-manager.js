const jwt = require("jsonwebtoken")
require("dotenv").config()

function authManager() {

    verifyUser = (req) => {
        try {
            const token = req.cookies.token;
            if (!token) {
                return null;
            }

            const userToken = jwt.verify(token, process.env.JWT_SECRET);
            return userToken.userId;
        } catch (err) {
            return null;
        }
    }

    signToken = (userId) => {
        return jwt.sign({
            userId: userId
        }, process.env.JWT_SECRET);
    }
    return this;
}

const auth = authManager();
module.exports = auth;