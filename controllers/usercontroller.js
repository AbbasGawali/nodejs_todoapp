
const jwt = require("jsonwebtoken");
const User = require("../database/scheema/UserScheema");
const bcrypt = require("bcrypt");
const sendcookie = require("../utils/features");



const getAllUsers = async (req, res) => {
    res.send("hello");
}


const login = async (req, res) => {
    try {


        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.json({
                success: false,
                message: "Invalid Email or Password"
            })
        }
        console.log("password is " + password + "user password is " + user.password);
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid Email or Password"
            })
        }

        sendcookie(user, res, "Login Success", 200);
        // res.send("login");

    } catch (err) {
        console.log(err);
    }

}

const registerUser = async (req, res) => {
    try {


        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(404).json({
                success: false,
                message: "User Already Exists"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        user = await User.create({
            name,
            email,
            password: hashPassword
        })
        sendcookie(user, res, "Registered Successfully", 201);
    } catch (err) {
        console.log(err);
    }
};


module.exports = { getAllUsers, registerUser, login };