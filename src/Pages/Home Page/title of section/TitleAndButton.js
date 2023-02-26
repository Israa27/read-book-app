import React from 'react'
import './titleAnButton.css'
import { useNavigate } from 'react-router-dom'
export default function TitleAndButton() {
  const navigate=useNavigate()
  return (
    <div className='content flex-content'>
        <h3>Best Books</h3>
        <button className='see-all-btn' onClick={()=>navigate('/all_books')}>See All</button>
    </div>
  )
}
