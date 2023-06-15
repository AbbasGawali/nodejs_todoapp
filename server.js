const app = require("./app"); 

// console.log("SERVER "+process.env.MONGOURL);
// const appd = require("./app");
require("dotenv").config({ path: "./config.env" });

const connection = require("./database/connection/connection");

// app.get("/r", (req, res) => {
//     res.send("hello r")
// })


app.listen(process.env.PORT, () => {
    console.log(process.env.NODE_ENV);
    console.log(`listening at port ${process.env.PORT} IN ${process.env.NODE_ENV}`);
})