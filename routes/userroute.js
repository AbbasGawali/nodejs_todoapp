const express = require("express")
const router = express.Router();
const User = require("../database/scheema/UserScheema");

const isAuthenticated = require("../middlewares/auth")
const { login, getAllUsers, registerUser } = require("../controllers/usercontroller");
// const {} = require("../controllers/usercontroller")
// const {} = require("../controllers/usercontroller")
const app = express();

router.get("/all", getAllUsers)

router.post("/add", registerUser)
router.post("/login", login)

// app.post('/add', function (req, res) {
//     usercontrollerr.registerUser
// });

// app.post('/login', function (req, res) {
//     usercontrollerr.login
// });


// router.get("/userid/:id", async (req, res) => {
router.get("/me", isAuthenticated, async (req, res) => {



    // console.log(token);
    // const user = await User.findById(decodeddata._id);

    res.status(200).json({
        success: true,
        user: req.user
    })
})
router.get("/logout", async (req, res) => {
    res.status(200).cookie("token", "null", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Developement" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Developement" ? false : true,

    }).json({
        success: true,
        message: "Logout Successfull"
    })
})

module.exports = router;