/* 
 * @author: znz
*/

const express = require('express');
const path = require('path');
const router = express.Router();
const Book = require('../models/book');
import authenticate from '../src/middlewares/authenticate';

/* Get Books */
router.get('/', authenticate, (req, res) => {
  console.log(req.currentUser);
	Book.find((err, books) => {
		if(err) {
			throw err;
		}
		res.json(books);
	})
});

/* Create Books */
router.post('/', authenticate, (req, res) => {
	var body = req.body;
  console.log(req.currentUser);
	Book.create(body, function(err, books) {
		if(err) {
			throw err;
		}
		res.json(books);
	})
});

/* Delete Book */
router.delete('/:_id', (req, res) => {
	var query = {_id: req.params._id};
	
	Book.remove(query, (err, books) => {
		if(err) {
			throw err;
		}
		res.json(books);
	})
});

/* Update Book */
router.use('/:_id', (req, res) => {
	var book = req.body;
	var query = req.params._id;
	// if the field doesn't exist $set will set a new field
	var update = {
		'$set': {
			title: book.title,
			description: book.description,
			author: book.author
		}
	};

	var options = { new: true }; // newly updated record

	Book.findOneAndUpdate(query, update, options, (err, books) =>{
		if(err) {
			throw err;
		}
		res.json(books);
	})
});

module.exports = router;