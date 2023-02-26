import React from 'react'
import './favoritelist.css'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function FavoriteListButton() {
  const navigate=useNavigate()
  const badge=useSelector((state)=>state.list.listItems)
  return (
   
      <button  className='navbar-btn' onClick={()=>navigate('/my_favorite_books')} >
        <span className='badge'>{badge.length}</span> 
        <i className="far fa-heart"></i>
        <a className='link-nav'>My Favorite</a>
      </button>
   
  )
}
