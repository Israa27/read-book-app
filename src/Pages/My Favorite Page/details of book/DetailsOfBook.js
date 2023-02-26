import React from 'react'
import img from '../../../Assets/images/img.jpg'
import './details.css'
import { useDispatch,useSelector } from 'react-redux';
export default function DetailsOfBook() {
  const dispatch=useDispatch();
  const book=useSelector((state)=> state.book.individual_book);
 
  return (
    <div className='details-card'>
      <img src={book.book_image} alt=''/>
      <div className='text-details-card'>
        <div className='individual-text'>
           <strong className='name'>Book Name</strong>
           <p>{book.title}</p> 
        </div>
        <div className='individual-text'>
           <strong className='name'>Name Of the author</strong>
           <p>{book.author}</p> 
        </div>
        <div className='individual-text'>
           <strong className='name'>Book Summary</strong>
           <p>{book.description}</p> 
        </div>
      </div>
    </div>
  )
}
