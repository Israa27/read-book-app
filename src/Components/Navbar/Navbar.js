import React from 'react'
import FavoriteListButton from './Favorite list button/FavoriteListButton'
import Search from './search box/Search'
import './navbar.css'
import Container from '../Container/Container'
export default function Navbar() {
  return (
    <div className='nav'>
        <Container>
          <div className='flex'>
            <div className='logo'>
                <h2>ReadBook</h2>
            </div>
            <Search/>
            <FavoriteListButton/>
          </div>
        </Container>
    </div>
  )
}
