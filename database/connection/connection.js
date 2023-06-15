const mongoose = require("mongoose");
const mongourl = process.env.MONGOURL;

// console.log(process.env.DBNAME);

mongoose.connect(mongourl, {
    dbName: process.env.DBNAME
}).then(() => {
    console.log("connection Successfull");
}).catch(() => {
    console.log("connection failed");
})