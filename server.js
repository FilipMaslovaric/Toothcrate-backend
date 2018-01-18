/* Required packages */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

/* Models */
const User = require('./models/User');
const Item = require('./models/Item');
const Procedure = require('./models/Procedure');
const ProcedureHistory = require('./models/ProcedureHistory');

// Use Express.js for the server, and set server port as variable //
const app = express();
const port = process.env.PORT || 3001;

// Use CORS
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

  let user = new User(req.body);

  user.save()
    .then(user => {
      res.status(200).send(user);
      console.log(`User created: ${user}`);
    })
    .catch(err => {
      res.status(500).send('An error ocurred while trying to create a new user')
      console.log('An error ocurred while trying to create new user: ', err);
    })
});

// GET all
app.get('/api/users', (req, res) => {
  console.log('Received GET request for USER', req.body);

  User.find()
      .then(result => {
        res.status(200).send(result.reverse());
        console.log('Current user list sent: ', result);
      })
      .catch(err => {
        res.status(500).send('An error ocurred while trying to get all users');
        console.log('An error ocurred while trying to get all users: ', err);
      })
});

// GET one
app.get('/api/users/:id', (req, res) => {
  console.log('Received GET(one) request for USER', req.body);

  User.findOne({ _id: req.params.id })
      .then(result => {
        res.status(200).send(user);
        console.log('Sent back requested user: ', user);
      })
      .catch(err => {
        res.status(500).send('Error ocurred while trying to retrieve user');
        console.log('Error ocurred while trying to send user: ', err);
      });
});

// UPDATE
app.put('/api/users/:id', (req, res) => {
  console.log('Received UPDATE request for USER');

  User.findOneAndUpdate(
    { _id: req.params.id },
    { $set: Object.assign(req.body, { updatedAt: Date.now() }) },
    { new: true }
  )
    .then(user => {
      res.status(200).send(user);
      console.log('Updated user: ', user);
    })
    .catch(err => {
      res.status(500).send('Error ocurred while trying to update user');
      console.log('Error ocurred while trying to update user: ', err);
    });
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
  console.log('Received DELETE request for USER');

  User.findByIdAndRemove(req.params.id)
    .then(user => {
      res.status(200).send(`User ${user} deleted successfully`);
      console.log(`User ${user} deleted successfully`);
    })
    .catch(err => {
      res.status(500).send('Error ocurred while trying to delete user');
      console.log('Error ocurred while trying to delete user: ', err);
    })
});

/* Items */

// POST
app.post('/api/inventory', (req, res) => {
  console.log('Received POST request for ITEM: ', req.body);

  let item = new Item(req.body);

  item.save()
    .then(result => {
      res.status(200).send(result);
      console.log(result)
    })
    .catch(err => {
      res.status(500).send('Something went wrong')
      console.log(err)
    })
});

// GET all
app.get('/api/inventory', (req, res) => {
  console.log('received GET request for ITEM');

  Item.find()
    .then(result => {
      res.status(200).send(result.reverse());
      console.log('Current item list sent');
    })
    .catch(err => {
      res.status(500).send('An error ocurred while getting list of all items');
      console.log('An error ocurred while getting list of all items: ', err); 
    })
});

// GET one
app.get('/api/inventory/:id', (req, res) => {
  console.log('Received GET(one) request for ITEM', req.body);

  Item.findOne({ _id: req.params.id })
    .then(item => {
      res.status(200).send(item);
      console.log('Sent back item successfully: ', item);
    })
    .catch(err => {
      res.status(500).send('An error ocurred while getting one item');
      console.log('An error ocurred while getting one item: ', err);
    })
});

// UPDATE
app.put('/api/inventory/:id', (req, res) => {
  console.log('Received UPDATE request for ITEM');

  Item.findOneAndUpdate(
    { _id: req.params.id },
    { $set: Object.assign(req.body, { updatedAt: Date.now() }) },
    { new: true }
  )
    .then(item => {
      res.status(200).send(item);
      console.log('Updated item: ', item);
    })
    .catch(err => {
      res.status(500).send('Error ocurred while trying to update item');
      console.log('Error ocurred while trying to update item: ', err);
    });
});

// DELETE
app.delete('/api/inventory/:id', (req, res) => {
  console.log('Received DELETE request for INVENTORY');
  Item.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).send('Item deleted successfully');
      console.log(`Item ${req.params.id} deleted successfully`);
    })
    .catch(err => {
      res.status(500).send('Error ocurred while trying to delete item');
      console.log('Error ocurred while trying to delete item: ', err);
    })
});

/* Procedures */

// POST
app.post('/api/procedure', (req, res) => {
  console.log('Received POST request for PROCEDURE:', req.body);

  let procedure = new Procedure(req.body);

  procedure.save()
    .then(procedure => {
      res.status(200).send(procedure);
      console.log(`Procedure created: ${procedure}`);
    }).catch(err => {
      res.status(500).send('An error ocurred while creating a procedure');
      console.log('An error ocurred while creating a procedure: ', err);
    })
});

// GET all
app.get('/api/procedure', (req, res) => {
  console.log('Received GET request for PROCEDURE', req.body);

  Procedure.find()
    .then(result => {
      res.status(200).send(result.reverse());
      console.log('Current procedure template list sent');
    })
    .catch(err => {
      res.status(500).send('An error ocurred while getting all procedures');
      console.log('An error ocurred while getting all procedures: ', err)
    })
});

// GET one
app.get('/api/procedure/:id', (req, res) => {
  console.log('Received GET(one) request for PROCEDURE', req.body);

  Procedure.findOne({ _id: req.params.id })
    .then(procedure => {
      res.status(200).send(procedure);
      console.log('Sent back item successfully: ', procedure);
    })
    .catch(err => {
      res.status(500).send('An error ocurred while getting one procedure');
      console.log('An error ocurred while getting one procedure: ', err);
    })
});

// UPDATE
app.put('/api/procedure/:id', (req, res) => {
  console.log('Received UPDATE request for PROCEDURE');

  Procedure.findOneAndUpdate(
    { _id: req.params.id },
    { $set: Object.assign(req.body, { updatedAt: Date.now() }) },
    { new: true }
  )
    .then(procedure => {
      res.status(200).send(procedure);
      console.log('Updated item: ', procedure);
    })
    .catch(err => {
      res.status(500).send('Error ocurred while trying to update procedure');
      console.log('Error ocurred while trying to update procedure: ', err);
    });
});

// DELETE
app.delete('/api/procedure/:id', (req, res) => {
  console.log('Received DELETE request for PROCEDURE');

  Procedure.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).send('Procedure deleted successfully', result);
      console.log(`Procedure ${req.params.id} deleted successfully: `, result);
    })
    .catch(err => {
      res.status(500).send('Error ocurred while trying to delete procedure');
      console.log('Error ocurred while trying to delete procedure: ', err);
    })
});

/* Procedure History */

// POST
app.post('/api/procedureshistory', (req, res) => {
  console.log('Received POST request for PROCEDUREHISTORY', req.body);

  let procedureHistory = new ProcedureHistory(req.body);

  procedureHistory.save()
    .then(procedureHistory => {
      res.status(200).send(procedureHistory);
      console.log('Procedure logged successfully: ', procedureHistory);
    })
    .catch(err => {
      res.status(500).send('An error ocurred while logging a new procedure in the history');
      console.log('An error ocurred while logging a new procedure in the history: ', err)
    })
});

// GET all
app.get('/api/procedurehistory', (req, res) => {
  console.log('Received GET request for PROCEDUREHISTORY', req.body);

  ProcedureHistory.find()
    .then(result => {
      res.status(200).send(result.reverse());
      console.log('Current procedure history list sent');
    })
    .catch(err => {
      res.status(500).send('An error ocurred while getting history of all procedures');
      console.log('An error ocurred while getting history of all procedures: ', err);
    })
});

// GET one
app.get('/api/procedurehistory/:id', (req, res) => {
  console.log('Received GET request for PROCEDUREHISTORY', req.body);

  ProcedureHistory.findOne({ _id: req.params.id })
    .then(procedureHistory => {
      res.status(200).send(procedureHistory)
      console.log('Sent back item successfully:', procedureHistory)
    })
    .catch(err => {
      res.status(500).send('An error ocurred while getting one procedure history entry');
      console.log('An error ocurred while getting one procedure history entry: ', err)
    })

  ProcedureHistory.find()
    .then(result => {
      res.status(200).send(result.reverse());
      console.log('Current procedure history list sent');
    })
    .catch(err => {
      res.status(500).send('An error ocurred while getting history of all procedures');
      console.log('An error ocurred while getting history of all procedures: ', err);
    })
});

// UPDATE
app.put('/api/procedurehistory/:id', (req, res) => {
  console.log('Received UPDATE request for PROCEDUREHISTORY');

  ProcedureHistory.findOneAndUpdate(
    { _id: req.params.id },
    { $set: Object.assign(req.body, { updatedAt: Date.now() }) },
    { new: true }
  )
    .then(procedureHistory => {
      res.status(200).send(procedureHistory);
      console.log('Updated item: ', procedureHistory);
    })
    .catch(err => {
      res.status(500).send('Error ocurred while trying to update procedure history entry');
      console.log('Error ocurred while trying to update procedure history entry: ', err);
    });
});

// DELETE
app.delete('/api/procedurehistory/:id', (req, res) => {
  console.log('Received DELETE request for PROCEDUREHISTORY');

  ProcedureHistory.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).send('Procedure history entry deleted successfully', result);
      console.log(`Procedure history entry ${req.params.id} deleted successfully: `, result);
    })
    .catch(err => {
      res.status(500).send('Error ocurred while trying to delete procedure history entry');
      console.log('Error ocurred while trying to delete procedure history entry: ', err);
    })
});

app.listen(port, () =>
  console.log(`Server started - Listening on port ${port}`)
);
