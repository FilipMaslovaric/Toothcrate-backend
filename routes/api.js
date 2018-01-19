const express = require('express')
const router = express.Router()

/* Database Models */
const User = require('../models/User');
const Item = require('../models/Item');
const Procedure = require('../models/Procedure');
const ProcedureHistory = require('../models/ProcedureHistory');

/* Endpoints */

/* Users */
// app.get('/admin', requireJWT, verifyAdmin, (req, res) => {
//   res.status(200).send('hello admin');
// });
//
// // JSON error handling
// app.use((error, req, res, next) => {
//   res.status(500).send({ error: error.message });
// });
// app.use((req, res, next) => {
//   // No other routes left, must be a 404!
//   res.status(404).send({
//     error: `No route found for ${req.method} ${req.url}`
//   });
// });

// POST
router.post('/users', (req, res) => {
    console.log('Received POST request for USER', req.body);

    let user = new User(req.body);

    user
        .save()
        .then(user => {
            res.status(200).send(user);
            console.log(`User created: ${user}`);
        })
        .catch(err => {
            res
                .status(500)
                .send('An error ocurred while trying to create a new user');
            console.log('An error ocurred while trying to create new user: ', err);
        });
});

// GET all
router.get('/users', (req, res) => {
    console.log('Received GET request for USER', req.body);

    User
        .find()
        .then(result => {
            res.status(200).send(result.reverse());
            console.log('Current user list sent: ', result);
        })
        .catch(err => {
            res.status(500).send('An error ocurred while trying to get all users');
            console.log('An error ocurred while trying to get all users: ', err);
        });
});

// GET one
router.get('/users/:id', (req, res) => {
    console.log('Received GET(one) request for USER', req.body);

    User
        .findOne({ _id: req.params.id })
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
router.put('/users/:id', (req, res) => {
    console.log('Received UPDATE request for USER');

    User
        .findOneAndUpdate(
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
router.delete('/users/:id', (req, res) => {
    console.log('Received DELETE request for USER');

    User
        .findByIdAndRemove(req.params.id)
        .then(user => {
            res.status(200).send(`User ${user} deleted successfully`);
            console.log(`User ${user} deleted successfully`);
        })
        .catch(err => {
            res.status(500).send('Error ocurred while trying to delete user');
            console.log('Error ocurred while trying to delete user: ', err);
        });
});

/* Items */

// POST
router.post('/inventory', (req, res) => {
    console.log('Received POST request for ITEM: ', req.body);

    let item = new Item(req.body);

    item
        .save()
        .then(result => {
            res.status(200).send(result);
            console.log(result);
        })
        .catch(err => {
            res.status(500).send('Something went wrong');
            console.log(err);
        });
});

// GET all
router.get('/inventory', (req, res) => {
    console.log('received GET request for ITEM');

    Item
        .find()
        .then(result => {
            res.status(200).send(result.reverse());
            console.log('Current item list sent');
        })
        .catch(err => {
            res.status(500).send('An error ocurred while getting list of all items');
            console.log('An error ocurred while getting list of all items: ', err);
        });
});

// GET one
router.get('/inventory/:id', (req, res) => {
    console.log('Received GET(one) request for ITEM', req.body);

    Item
        .findOne({ _id: req.params.id })
        .then(item => {
            res.status(200).send(item);
            console.log('Sent back item successfully: ', item);
        })
        .catch(err => {
            res.status(500).send('An error ocurred while getting one item');
            console.log('An error ocurred while getting one item: ', err);
        });
});

// UPDATE
router.put('/inventory/:id', (req, res) => {
    console.log('Received UPDATE request for ITEM');

    Item
        .findOneAndUpdate(
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
router.delete('/inventory/:id', (req, res) => {
    console.log('Received DELETE request for INVENTORY');

    Item
        .findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(200).send('Item deleted successfully');
            console.log(`Item ${req.params.id} deleted successfully`);
        })
        .catch(err => {
            res.status(500).send('Error ocurred while trying to delete item');
            console.log('Error ocurred while trying to delete item: ', err);
        });
});

/* Procedures */

// POST
router.post('/procedure', (req, res) => {
    console.log('Received POST request for PROCEDURE:', req.body);

    let procedure = new Procedure(req.body);

    procedure
        .save()
        .then(procedure => {
            res.status(200).send(procedure);
            console.log(`Procedure created: ${procedure}`);
        })
        .catch(err => {
            res.status(500).send('An error ocurred while creating a procedure');
            console.log('An error ocurred while creating a procedure: ', err);
        });
});

// GET all
router.get('/procedure', (req, res) => {
    console.log('Received GET request for PROCEDURE', req.body);

    Procedure
        .find()
        .then(result => {
            res.status(200).send(result.reverse());
            console.log('Current procedure template list sent');
        })
        .catch(err => {
            res.status(500).send('An error ocurred while getting all procedures');
            console.log('An error ocurred while getting all procedures: ', err);
        });
});

// GET one
router.get('/procedure/:id', (req, res) => {
    console.log('Received GET(one) request for PROCEDURE', req.body);

    Procedure
        .findOne({ _id: req.params.id })
        .then(procedure => {
            res.status(200).send(procedure);
            console.log('Sent back item successfully: ', procedure);
        })
        .catch(err => {
            res.status(500).send('An error ocurred while getting one procedure');
            console.log('An error ocurred while getting one procedure: ', err);
        });
});

// UPDATE
router.put('/procedure/:id', (req, res) => {
    console.log('Received UPDATE request for PROCEDURE');

    Procedure
        .findOneAndUpdate(
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
router.delete('/procedure/:id', (req, res) => {
    console.log('Received DELETE request for PROCEDURE');

    Procedure
        .findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(200).send('Procedure deleted successfully', result);
            console.log(`Procedure ${req.params.id} deleted successfully: `, result);
        })
        .catch(err => {
            res.status(500).send('Error ocurred while trying to delete procedure');
            console.log('Error ocurred while trying to delete procedure: ', err);
        });
});

/* Procedure History */

// POST
router.post('/procedureshistory', (req, res) => {
    console.log('Received POST request for PROCEDUREHISTORY', req.body);

    let procedureHistory = new ProcedureHistory(req.body);

    procedureHistory
        .save()
        .then(procedureHistory => {
            res.status(200).send(procedureHistory);
            console.log('Procedure logged successfully: ', procedureHistory);
        })
        .catch(err => {
            res
                .status(500)
                .send('An error ocurred while logging a new procedure in the history');
            console.log(
                'An error ocurred while logging a new procedure in the history: ',
                err
            );
        });
});

// GET all
router.get('/procedurehistory', (req, res) => {
    console.log('Received GET request for PROCEDUREHISTORY', req.body);

    ProcedureHistory
        .find()
        .then(result => {
            res.status(200).send(result.reverse());
            console.log('Current procedure history list sent');
        })
        .catch(err => {
            res
                .status(500)
                .send('An error ocurred while getting history of all procedures');
            console.log(
                'An error ocurred while getting history of all procedures: ',
                err
            );
        });
});

// GET one
router.get('/procedurehistory/:id', (req, res) => {
    console.log('Received GET request for PROCEDUREHISTORY', req.body);

    ProcedureHistory
        .findOne({ _id: req.params.id })
        .then(procedureHistory => {
            res.status(200).send(procedureHistory);
            console.log('Sent back item successfully:', procedureHistory);
        })
        .catch(err => {
            res
                .status(500)
                .send('An error ocurred while getting one procedure history entry');
            console.log(
                'An error ocurred while getting one procedure history entry: ',
                err
            );
        });

    ProcedureHistory
        .find()
        .then(result => {
            res.status(200).send(result.reverse());
            console.log('Current procedure history list sent');
        })
        .catch(err => {
            res
                .status(500)
                .send('An error ocurred while getting history of all procedures');
            console.log(
                'An error ocurred while getting history of all procedures: ',
                err
            );
        });
});

// UPDATE
router.put('/procedurehistory/:id', (req, res) => {
    console.log('Received UPDATE request for PROCEDUREHISTORY');

    ProcedureHistory
        .findOneAndUpdate(
        { _id: req.params.id },
        { $set: Object.assign(req.body, { updatedAt: Date.now() }) },
        { new: true }
        )
        .then(procedureHistory => {
            res.status(200).send(procedureHistory);
            console.log('Updated item: ', procedureHistory);
        })
        .catch(err => {
            res
                .status(500)
                .send('Error ocurred while trying to update procedure history entry');
            console.log(
                'Error ocurred while trying to update procedure history entry: ',
                err
            );
        });
});

// DELETE
router.delete('/procedurehistory/:id', (req, res) => {
    console.log('Received DELETE request for PROCEDUREHISTORY');

    ProcedureHistory
        .findByIdAndRemove(req.params.id)
        .then(result => {
            res
                .status(200)
                .send('Procedure history entry deleted successfully', result);
            console.log(
                `Procedure history entry ${req.params.id} deleted successfully: `,
                result
            );
        })
        .catch(err => {
            res
                .status(500)
                .send('Error ocurred while trying to delete procedure history entry');
            console.log(
                'Error ocurred while trying to delete procedure history entry: ',
                err
            );
        });
});

module.exports = router