// Setup Express
const express = require("express");
// Initialize Express and assign Express to a constant
const app = express();
// Assign the port on which the server will listen
const port = 3000;

// Include Mongoose in your project
const mongoose = require("mongoose");

// Initializing the MongoDB connection string
// we call our database test
mongoose.connect("mongodb://localhost/test");

// Map the constant db to mongoose.connection so we can refer to it in our code
const db = mongoose.connection;

// Assign a variable called db_status = "MongoDB connection not successful."
// This notifies the user if the connection to the DB was not successful.
let db_status = "MongoDB connection not successful.";

// Listen for "error" events about connection issues.
db.on("error", console.error.bind(console, "connection error:"));

// Tell user if connection was successful and update status
db.once("open", () => (db_status = "Successfully opened connection to Mongo!"));

// Send the user the status of the database
app.get("/", (req, res) => {
  res.send(db_status);
});

// we need a port to listen this was declared in the port constant
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// to run this use ... run "node mongo.js"

// If connected successfully, navigate to...
// http://localhost:3000/ and see the words...
//  "Successfully opened connection to Mongo!"
