import { combineReducers } from 'redux';
import SearchReducer from './header/reducer_search.js';
import BooksReducer from './books/reducer_books.js';
import authReducer from './reducer_auth.js';
import ModalReducer from './reducer_modal';

const rootReducer = combineReducers({
  search: SearchReducer,
  books: BooksReducer,
  auth: authReducer,
  modal: ModalReducer
});

module.exports = rootReducer;