/* Required packages */

// Environmental Variables
require('dotenv').config();
// Server
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const api = require('./routes/api');
const auth = require('./routes/auth');

// Database
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Authorization
const passportLocalMongoose = require('passport-local-mongoose');
const { initialize, requireJWT, verifyAdmin } = require('./middleware/auth');

// Use Express.js for the server, and set server port as variable //
const app = express();
const port = process.env.PORT || 3001;

// Use CORS
app.use(cors());

// Use Morgan for pretty HTTP request logging
app.use(morgan('dev'));

// Use body parser to parse JSON objects
app.use(bodyParser.json());

// Load routes from route folder
app.use('/api', requireJWT, api);
// app.use('/api', api);

app.use('/auth', auth);

// Start server and listen on assigned port for connections
app.listen(port, () =>
  console.log(`Server started - Listening on port ${port}`)
);
