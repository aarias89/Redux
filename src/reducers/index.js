import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //this reduce will add a key to our global application state called books
  //where the key is books: and the value is whatever gets returned from
  //the BooksReducer
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
