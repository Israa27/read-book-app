import React from 'react'
import './show.css'
import { useNavigate } from 'react-router-dom'

export default function ShowAllButton() {
  const navigate=useNavigate()
  return (
    <button className='show-all-btn' onClick={()=>navigate('/all_books')}>Show All</button>
  )
}
