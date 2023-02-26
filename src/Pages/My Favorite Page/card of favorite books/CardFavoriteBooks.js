import React from 'react'
import img from '../../../Assets/images/img.jpg'
import './cardFavorite.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookDetails, getAllBooks } from '../../../redux/booksSlice';
import { removeFromList } from '../../../redux/favoriteListSlice';
export default function CardFavoriteBooks() {
  const dispatch=useDispatch();
  const single_book=useSelector(state=>state.book.individal_book)
  const book=useSelector((state)=> state.list);
  const handleRemoveFromList=(item)=>{
    dispatch(removeFromList(item))
  }
 const handleReadMoreBtn=(book)=>{
  dispatch(bookDetails(book))

 }
  return (
    <div className='card-of-list'>
      {book.listItems.map((item,index)=>{
      
        return <div className='single-card'>
            <img src={item.book_image} alt=''/>
            <h4>{item.title}</h4>
            <div className='btns-single-card'>
              <button className='read-btn' onClick={()=>handleReadMoreBtn(item.rank)}>read more</button>
              <button className='delete-btn' onClick={()=> handleRemoveFromList(item)}><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
        })}
       
        
    </div>
  )
}
