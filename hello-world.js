// Import Express
const express = require("express");

// Initialize Express and assign Express to a constant
const app = express();
// Assign the port on which the server will listen
const port = 3000;

// Declare a route at ./ which means this is the 1st thing users see when they navigate to this server -- accessible at localhost:3000
// This route uses GET and passes in a function that includes the request (req) and response (res) objects.
app.get("/", (req, res) => res.send("Hello World!"));

// Once we have a server initialized and ready to send back requests, we need a port to listen on which was already declared in the port constant.
// Now, pass that in like so:
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Start this web server up by running 'node hello-world.js'
// Open a browser to http://localhost:3000/ you should see "Hello World!"
