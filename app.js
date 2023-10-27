require("dotenv").config();
const express = require("express");
const connectToDb = require("./config/db");
const userRoutes = require("./useRoutes/userRoutes");
const app = express();
connectToDb();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/", userRoutes);
module.exports = app;
