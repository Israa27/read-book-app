import React from 'react'
import Container from '../Components/Container/Container'
import Navbar from '../Components/Navbar/Navbar'
import AllBooks from '../Pages/All Books/AllBooks'
import MyFavoritePage from '../Pages/My Favorite Page/MyFavoritePage'
import Home from '../Pages/Home Page/Home'
import { useLocation} from 'react-router-dom'
import DetailOfBook from '../Pages/details of book page/DetailOfBook'
import './style.css'
export default function Layout() {
  const location = useLocation()
  const renderContent = (routeName) => {
    console.log(routeName)
    switch (routeName) {
      case '/':
        return <Home/>
      case '/all_books':
        return <AllBooks/>
      case '/my_favorite_books':
        return <MyFavoritePage/>
      case '/book_details':
        return <DetailOfBook/>
      default:
        return <Home />
    }}
  return<div className='layout'>
     <Navbar/>
     
     {renderContent(location.pathname)}
     
     </div>

  }
