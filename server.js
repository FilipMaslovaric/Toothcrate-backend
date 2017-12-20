/* Required packages */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/* Dev packages */
const morgan = require('morgan');

// Use Express.js for the server, and set server port as variable //
const app = express();
const port  = 3000;

// Use Morgan for pretty HTTP request logging
app.use(morgan('dev'));

// Use body parser to parse JSON objects
app.use(bodyParser.json());


app.get('/', (req, res) => {
    console.log('Request received!');
    res.send('Hello world!');
});

app.listen(port, () => console.log(`Listening on port ${port}!`));