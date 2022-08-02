const express = require('express');
const app = express();
const cors = require('cors');

/* 
 * Anytime you make a full-stack app you need to get data from client side
 * you get data through the request body object
 */

// middleware
app.use(cors());
app.use(express.json()); // will reference this a lot (request body object)


// opens a port on the specified location, in this case 5000
app.listen(5000, () => {
  console.log('server has started on port 5000');
});