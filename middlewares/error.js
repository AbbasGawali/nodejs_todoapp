class ErrorHandler extends Error {
    constructor(message, statusCode) {
        console.log("❤️❤️ err custom class ");
        super(message);
        this.statusCode = statusCode
    }
}


module.exports = errorMiddleware = (err, req, res, next) => {
    console.log("❤️❤️ err middleware ");
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
    
    console.log("❤️❤️"+success,message);
    console.log("❤️"+err);


    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
}

module.exports = ErrorHandler;