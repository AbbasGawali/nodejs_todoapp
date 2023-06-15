const express = require("express");
module.exports = app = express();
const userRouter = require("./routes/userroute");
const taskRouter = require("./routes/taskroute");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
const cors = require("cors");

console.log("connected app");


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));
//  using error middleware


// using custom router using below 
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
    console.log("app.js" + process.env.PORT);


    res.send("home page");
})
// app.use(errorMiddleware);


