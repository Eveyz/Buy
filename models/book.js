/* 
 * @author: znz
*/

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  created_at: Date,
  updated_at: Date
});

bookSchema.pre("save", function(next){
  var currentDate = new Date();
  this.updated_at = currentDate;
  if ( !this.created_at ) {
    this.created_at = currentDate;
  }
  next();
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;