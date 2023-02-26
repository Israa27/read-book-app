import React from 'react'
import ReadMoreButton from './ReadMoreButton/ReadMoreButton'
import './card.css'
import img from '../../Assets/images/img.jpg'
export default function Card({name,img,book, id}) {
  
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={img} alt={name}/>
        </div>
        <div className='body'>
            <h5>{name}</h5>
        </div>
        <ReadMoreButton 
        id={id}
        book={book} />

    </div>
  )
}
