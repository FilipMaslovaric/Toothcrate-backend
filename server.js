/* Required packages */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

/* Dev packages */
const morgan = require('morgan');

/* Models */
const User = require('./models/User');
const Item = require('./models/Item');
const Procedure = require('./models/Procedure');
const ProcedureHistory = require('./models/ProcedureHistory');

// Use Express.js for the server, and set server port as variable //
const app = express();
const port = process.env.PORT || 3001;

// Use CORS to allow

app.use(cors());

// Use Morgan for pretty HTTP request logging
app.use(morgan('dev'));

// Use body parser to parse JSON objects
app.use(bodyParser.json());

/* Endpoints */

/* Users */

// POST
app.post('/api/users', (req, res) => {
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
    res.status(200).send(user);
  });
});

// GET all
app.get('/api/users', (req, res) => {
  console.log('received GET request for USER', req.body);
  User.find().then(result => {
    res.status(200).send(result.reverse());
    console.log('Current user list sent');
  });
});

// GET one
app.get('/api/users/:id', (req, res) => {
  console.log('Received GET(one) request for USER', req.body);
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(user);
    }
  });
});

// UPDATE
app.put('/api/users/:id', (req, res) => {
  console.log('Received UPDATE request for USER');
  User.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name, updated_at: Date.now() } },
    { new: true }
  )
    .then(user => {
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
  console.log('received DELETE request for USER');
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send();
    }
  });
});

/* Items */

// GET all
app.get('/api/inventory', (req, res) => {
  console.log('received GET request for ITEM');
  Item.find().then(result => {
    res.send(result.reverse());
    console.log('Current item list sent');
  });
});

// GET one
app.get('/api/inventory/:id', (req, res) => {
  console.log('Received GET(one) request for ITEM', req.body);
  Item.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(item);
    }
  });
});

// POST
app.post('/api/inventory', (req, res) => {
  console.log('Received POST request for ITEM:', req.body);
  let item = new Item({
    name: req.body.name
  });

  item.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Item created: ${item}`);
    }
    res.status(200).send(item);
  });
});

/* Procedures */

app.get('/api/procedure', (req, res) => {
  console.log('received GET request for PROCEDURE', req.body);
  Procedure.find().then(result => {
    res.status(200).send(result.reverse());
    console.log('Current procedure template list sent');
  });
});

app.post('/api/procedure', (req, res) => {
  console.log('Received POST request for PROCEDURE:', req.body);
  let procedure = new Procedure({
    name: req.body.name,
    items: req.body.items
  });

  procedure.save((err, procedure) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Procedure created: ${procedure}`);
    }
    res.status(200).send(procedure);
  });
});

/* Procedure History */

app.get('/api/procedurehistory', (req, res) => {
  console.log('received GET request for PROCEDUREHISTORY', req.body);
  ProcedureHistory.find().then(result => {
    res.status(200).send(result.reverse());
    console.log('Current procedure history list sent');
  });
});

app.post('/api/procedureshistory', (req, res) => {
  console.log('Received POST request for PROCEDUREHISTORY', req.body);
  let procedureHistory = new ProcedureHistory({
    procedure: req.body.procedure,
    dentist: req.body.dentist,
    location: req.body.location,
    updated_at: Date.now
  });
  console.log('Creating this thing...:', procedureHistory);
  procedureHistory.save((err, procedureHistory) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Procedure created: ${procedureHistory}`);
    }
    res.status(200).send(procedureHistory);
  });
});

app.listen(port, () =>
  console.log(`Server started - Listening on port ${port}`)
);
