// Setup Express
const express = require("express");
// Include Mongoose in your project
const mongoose = require("mongoose");

// Initializing the MongoDB connection string
// we call our database test
mongoose.connect("mongodb://localhost/test");

// Map the constant db to mongoose.connection so we can refer to it in our code
const db = mongoose.connection;

// Initialize Express and assign Express to a constant
const app = express();
// Assign the port on which the server will listen
const port = 3000;

// Assign a variable called db_status = "MongoDB connection not successful."
// This is handy to notify the user if the connection to the database was not successful.
let db_status = "MongoDB connection not successful.";

// Listen for "error" events about connection issues.
db.on("error", console.error.bind(console, "connection error:"));
// Tell if connection was successful and update status
db.once("open", () => (db_status = "Successfully opened connection to Mongo!"));

// Send the user the status of the database
res.send(db_status);

// we need a port to listen this was declared in the port constant
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// to run this, first install mongodb-runner
// "npm install -g mongodb-runner"
// Then run "mongodb-runner start"
// then run "node mongo.js"
// If connected successfully, one should be able to navigate to http://localhost:3000/ and see the words "Successfully opened connection to Mongo!".
