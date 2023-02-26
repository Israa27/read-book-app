import { configureStore } from '@reduxjs/toolkit'
import AllBooksReducer, { getAllBooks, searchBooks ,bookDetails} from './booksSlice'
import favoriteListReducer ,{addToListItems,removeFromList} from './favoriteListSlice';

const store = configureStore({
  reducer: {
    book:AllBooksReducer,
    list:favoriteListReducer
 
  },


});



store.dispatch(getAllBooks())
store.dispatch(searchBooks())
store.dispatch(bookDetails())

export default store;