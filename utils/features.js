const jwt = require("jsonwebtoken");

const sendcookie = (user, res, message, statuscode = 200) => {

    const token = jwt.sign({ _id: user._id }, process.env.jwtSecret)
    // console.log(process.env.NODE_ENV);
    // console.log(process.env.NODE_ENV === "Developement");

    res.status(201)
        .cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            sameSite: process.env.NODE_ENV === "Developement" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Developement" ? false : true,

        })
        .json({
            success: true,
            message
        })

}

module.exports = sendcookie;