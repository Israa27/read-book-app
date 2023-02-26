import React from 'react'
import Card from '../../../Components/Card/Card'
import './bookCards.css'
import { useSelector } from 'react-redux';
export default function BookCards() {
  const books=useSelector((state)=> state.book.books); 
 
  return (
    <div className='content'>
      {books.slice(0,4).map((book,index)=>{
         
         return<Card name={book.title} img={book.book_image} book={book} id={book.rank} key={index}/>
       }) }
       
    </div>
  )
}
