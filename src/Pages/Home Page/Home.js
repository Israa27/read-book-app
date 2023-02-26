import React from 'react'
import Card from '../../Components/Card/Card'
import Container from '../../Components/Container/Container'
import BookCards from './book card/BookCards'
import './home.css'
import Landing from './landing page/Landing'
import TitleAndButton from './title of section/TitleAndButton'
export default function Home() {
  return (
    
    <Container>
        <Landing/>
        <TitleAndButton/>
        <BookCards/>
    </Container>
  )
}
