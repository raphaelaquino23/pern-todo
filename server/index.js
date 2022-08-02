const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

/* 
 * Anytime you make a full-stack app you need to get data from client side
 * you get data through the request body object
 */

// middleware
app.use(cors());
app.use(express.json()); // will reference this a lot (request body object)

// ROUTES //

// Create a todo

// Get all todos

// Get a single todo

// Delete a todo

// opens a port on the specified location, in this case 5000
app.listen(5000, () => {
  console.log('server has started on port 5000');
});