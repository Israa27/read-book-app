import React,{useState} from 'react'
import './search.css'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchBooks } from '../../../redux/booksSlice';
export default function Search() {
  //search
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[keyword,setKeyWord]=useState('');
  const books=useSelector((state)=>state.book.books)
 //console.log(books)
  const hadleSearch =(e)=>{
    e.preventDefault();
   
    dispatch(searchBooks(keyword.toUpperCase()))
    console.log(books)
    navigate('/all_books')
    setKeyWord('')
   

   
  }
  return (
    <form className='search-form' onSubmit={hadleSearch}>
        <input type='text' placeholder='Search ...' value={keyword} onChange={(e)=> setKeyWord(e.target.value)} />
        <button type='submit' className='search-btn'><i className="fas fa-search"></i></button>
    </form>
  )
}
