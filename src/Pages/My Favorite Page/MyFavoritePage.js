import React from 'react'
import CardFavoriteBooks from './card of favorite books/CardFavoriteBooks'
import SecondaryNavbar from '../../Components/secondary navbar/SecondaryNavbar'
import './myfavorite.css'
import Container from '../../Components/Container/Container'
import DetailsOfBook from './details of book/DetailsOfBook'
import { useSelector } from 'react-redux'
import img from '../../Assets/images/No data-cuate.png'
export default function MyFavoritePage() {
  const list=useSelector(state=>state.list.listItems)
  return<Container>
    <SecondaryNavbar name='My Favorite Books'/>
    {list.length===0?<div className='empty-list'>
      <img src={img} alt=''/>
      <span>Oop -_- your list is empty</span>
      
    </div>:<div className='favorite-books-content'>
      <CardFavoriteBooks/>
      <DetailsOfBook />
    </div>}
    
  </Container>
}
