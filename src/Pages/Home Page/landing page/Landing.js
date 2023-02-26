import React from 'react'
import './landing.css'
import ShowAllButton from '../../../Components/show all Button/ShowAllButton'
import img from '../../../Assets/images/landing.png'
export default function Landing() {
  return (
   
    <div className='landing'>
        <div className='landing-img'>
            <img src={img} alt=''/>
        </div>
        <div className='text'>
            <h2>There is more treasure in books 
                Than In all the pirate’s 
                loot on Treasure Island</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <ShowAllButton/>
        </div>

    </div>
  )
}
