import { createSlice} from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
const initialState = {
    listItems:localStorage.getItem('listItems')?JSON.parse(localStorage.getItem('listItems')):[],
    qty:0
  };
 
 
 
  
  

  const favoriteListSlice = createSlice({
    name: "favoriteList",
    initialState,
    reducers: {
        addToListItems(state,action){
            const itemIndex = state.listItems.findIndex((item)=> item.rank===action.payload.rank)
            console.log(itemIndex)
            if(itemIndex>=0){
              state.listItems[itemIndex].qty+=1 
              toast.info(`  has been added before  `,{position:'bottom-left'})
              
            }
            else{
              const bookNot={...action.payload,qty:1};
              state.listItems.push(bookNot)
              toast.success(`Added ${action.payload.title} to favourite list  `,{position:'bottom-left'})
            };
            localStorage.setItem('listItems',JSON.stringify(state.listItems.map(item=>item)))
           
          },
          removeFromList(state,action){
            state.listItems.map((listItem) => {
              if (listItem.rank===action.payload.rank) {
                const nextListItems = state.listItems.filter(
                  (item) => item.rank!==action.payload.rank
                );
      
                state.listItems = nextListItems;
      
              }
              localStorage.setItem("listItems", JSON.stringify(state.listItems));
              return state;
            });
          },
          
     
    },
   
  });
  
  export const {addToListItems,removeFromList}=favoriteListSlice.actions;
  export default favoriteListSlice.reducer