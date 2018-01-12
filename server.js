
/* Required packages */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/* Dev packages */
const morgan = require('morgan');

/* Models */
const Item = require('./models/Item');
const Template = require('./models/Template');
const User = require('./models/User');

// Use Express.js for the server, and set server port as variable //
const app = express();
const port = process.env.PORT || 3000;

// Use Morgan for pretty HTTP request logging
app.use(morgan('dev'));

// Use body parser to parse JSON objects
app.use(bodyParser.json());


app.get('/', (req, res) => {
    console.log('Request received!');
    res.send('Hello world!');
});

app.get('/api/users', (req, res) => {
    console.log('received GET request for USER(all)');
    User.find().then(result => {
        res.send(result.reverse());
        console.log('Current user list sent');
    });
});

app.post('/api/users', (req, res) => {
    const ip = req.connection.remoteAddress;
    console.log('Received POST request for USER', req.body);
    let user = new User({
        name: req.body.name
    });

    user.save((err, user) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`User created: ${user}`);
        }
        res.send(user);
    });
});

app.get('/api/inventory', (req, res) => {
    console.log('received GET request for ITEM(all)');
    Item.find().then(result => {
        res.send(result.reverse());
        console.log('Current item list sent');
    });
});

app.get('/api/procedures', (req, res) => {
    console.log('received GET request for TEMPLATE(all)');
    Template.find().then(result => {
        res.send(result.reverse());
        console.log('Current procedure template list sent');
    });
});


app.listen(port, () => console.log(`Server started - Listening on port ${port}`));