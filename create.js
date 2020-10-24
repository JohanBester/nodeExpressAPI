const express = require("express");

// Express comes with a built in body parser that has built in support for JSON
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
const db = mongoose.connection;

const app = express();
const port = 3000;

// Initialize the body parser to the Express app
app.use(bodyParser.json());

let db_status = "MongoDB connection not successful.";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => (db_status = "Successfully opened connection to Mongo!"));
