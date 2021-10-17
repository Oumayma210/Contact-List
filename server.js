// 1 require express
const express = require("express");
//2 creation instance
const app = express();
// 5 require dotenv
require("dotenv").config();
// 6 connect DB
const connectDB = require("./config/connectDB");
connectDB();
//8 middelware
app.use(express.json());
//7 require les routes
app.use("/api/contacts", require("./routes/contact"));
//n3abi base de donnee: schema

//3 creation port
const PORT = process.env.PORT;
//norbt bel database: how? config: connectDB.js:1/require mongoose
//4 creation server
app.listen(PORT, (error) => {
    error ? console.error(`failed ${error}`) : console.log(`success ${PORT}`)
});
