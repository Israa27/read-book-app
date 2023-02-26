import React ,{useState} from 'react'
import './readMoreButton.css'
import { useSelector,useDispatch } from 'react-redux';
import { addToListItems } from '../../../redux/favoriteListSlice';
import { bookDetails } from '../../../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
export default function ReadMoreButton({id,book}) {
  const[state,setstate]=useState(false);
 const navigate=useNavigate()
  const books=useSelector((state)=> state.list.listItems);
  const dispatch=useDispatch()
  const individualBook=(e)=>{
    dispatch(bookDetails(book.rank))
    navigate('/book_details')
  }
  //function of add to favorit list
  const handleAddToList=(book)=>{
       dispatch(addToListItems(book,book.rank))
      setstate(!state)
  };
   
  return (
    <div className='card-btn'>
        <button className='read-btn' onClick={()=>individualBook(book)}>read more</button>
        
        <button className='heart-btn' onClick={()=>handleAddToList(book) }>
             <i className= {state ? 'fas fa-heart':'far fa-heart'}></i>      
        </button>
          
     
    </div>
  )
}
