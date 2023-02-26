import React, { useState } from 'react'
import './books.css'
import Card from '../../../Components/Card/Card'
import { useSelector,useDispatch } from 'react-redux';
export default function Books({currentBooks}) {
  
  return (
    <div className='books'>
     {currentBooks.map((book,index)=>{
         
         return<Card name={book.title} img={book.book_image} book={book} id={book.rank} key={index}/>
       }) }

       
    </div>
  )
}
