import React from 'react';
import { useNavigate } from 'react-router-dom';
import  Container  from '../Container/Container';
import './secondaryNav.css';
export default function SecondaryNavbar({name}) {
  let navigate=useNavigate()
  let returnToHomePage=()=>{
    navigate('/')
    window.location.reload();
  }
  return<Container>
    <div className='secondary-navs'>
        <button className='secondary-navs-btn' onClick={()=>returnToHomePage()}><a>Home</a></button>
        <span className='secondary-navs-span'></span>
        <button  className='secondary-navs-btn'><a href='#'>{name}</a></button>
  </div>
  </Container>
}