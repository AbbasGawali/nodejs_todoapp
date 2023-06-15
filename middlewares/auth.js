const User = require("../database/scheema/UserScheema");
const jwt = require("jsonwebtoken")
const isAuthenticated = async(req,res,next)=>{
    
    const { token } = req.cookies;

    if (!token) {
        return res.status(404).json({
            success: false,
            message: "Please Login"
        })
    }
    const decodeddata = jwt.verify(token, process.env.jwtSecret);

    // console.log(token);
    req.user = await User.findById(decodeddata._id);
    next();
 
}

module.exports = isAuthenticated;