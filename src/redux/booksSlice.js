import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../Api_key";
const initialState = {
    books:[],
    individual_book:localStorage.getItem('individual_book')?JSON.parse(localStorage.getItem('individual_book')):[],
    status: null,
    isLoading:false,
    error:'',
  };
  // get books 
  export const getAllBooks = createAsyncThunk(
    "all_books",
    async (_,{ rejectWithValue })=> {
      
      try {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`,{
         
         
   
    }
      )
      
      return response.data.results.books;
      
      } catch (error) {
        return rejectWithValue(error.response.status)
      }
    }
  );
 
 
  
  

  const AllBooksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
      bookDetails(state,action){
        console.log(action.payload)
        state.books.map((listItem) => {
          if (listItem.rank===action.payload) {
            const nextListItems = state.books.find(
              (item) => item.rank===action.payload
            );
            console.log(nextListItems)
            state.individual_book = nextListItems;
            
          }
          localStorage.setItem("individual_book", JSON.stringify(state.individual_book));
          return state;
        });
      },
      searchBooks(state,action){
        if(action.payload){
        let NewListbooks=state.books.filter((item) =>item.title.includes(action.payload))
        state.books=NewListbooks
        return state;
        }
        else{
          return state;
        }
        
        }
    },
    extraReducers: {
      //Category
      [getAllBooks.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
        state.error=''
      },
      [getAllBooks.fulfilled]: (state, action) => {
          state.isLoading=false
          state.books=action.payload
          state.status = "success"
          state.error=''
  },
      [getAllBooks.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error=action.payload
      },
    
    
    
    }
  });
  
  export const {searchBooks,bookDetails}=AllBooksSlice.actions;
  export default AllBooksSlice.reducer