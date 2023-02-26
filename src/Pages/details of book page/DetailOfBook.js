import React from 'react'
import { useSelector } from 'react-redux'
import './detail.css'
import Container from '../../Components/Container/Container'
import SecondaryNavbar from '../../Components/secondary navbar/SecondaryNavbar'
export default function DetailOfBook() {
    const single_book=useSelector((state)=>state.book.individual_book)
    console.log(single_book)
  return<Container>
    <SecondaryNavbar name={single_book.title}/>
    <div className='grid'>
        <div className='main-img'>
            <img src={single_book.book_image} alt=''/>
        </div>
        <div className='text'>
           <h2>{single_book.title}</h2>
           <p><strong>Description</strong>: {single_book.description}</p>
           <span><strong>Author</strong>: {single_book.author}</span>
           <span><strong>Publisher</strong> :{single_book.publisher}</span>
           <span><strong>Contributor</strong> :{single_book.contributor}</span>
           <a href={single_book.amazon_product_url} target='_blank'>Buy directly from Amazon</a>
        </div>
    </div>
    </Container>
}
