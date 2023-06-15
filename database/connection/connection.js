const mongoose = require("mongoose");
const mongourl = process.env.MONGOURL;

// console.log(process.env.DBNAME);

mongoose.connect(mongourl, {
    dbName: process.env.DBNAME
}).then((c) => {
    console.log(`connection Successfull with ${c.connection.host}`);
}).catch(() => {
    console.log("connection failed");
})