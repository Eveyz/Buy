/* 
 * @author: znz
*/

const express = require('express');
const path = require('path');
const router = express.Router();
const Event = require('../models/event');

/* Get Events */
router.get('/', (req, res) => {
  Book.find((err, events) => {
    if(err) {
        throw err;
    }
    res.json(events);
  })
});

/* Create Events */
router.post('/', (req, res) => {
  var body = req.body;

  Book.create(body, function(err, events) {
    if(err) {
      throw err;
    }
    res.json(events);
  })
});

/* Delete Book */
router.delete('/:_id', (req, res) => {
    var query = {_id: req.params._id};
    
    Book.remove(query, (err, events) => {
        if(err) {
            throw err;
        }
        res.json(events);
    })
});

/* Update Book */
router.use('/:_id', (req, res) => {
    var event = req.body;
    var query = req.params._id;
    // if the field doesn't exist $set will set a new field
    var update = {
        '$set': {
            title: event.title,
            description: event.description,
            author: event.author
        }
    };

    var options = { new: true }; // newly updated record

    Event.findOneAndUpdate(query, update, options, (err, events) =>{
        if(err) {
            throw err;
        }
        res.json(events);
    })
});

module.exports = router;