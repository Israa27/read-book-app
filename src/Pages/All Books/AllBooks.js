import React ,{useState,useEffect} from 'react'
import SecondaryNavbar from '../../Components/secondary navbar/SecondaryNavbar'
import './allBooks.css'
import Books from './Books/Books'
import Fliter from './Books/Filter options/Fliter'
import { useSelector } from 'react-redux'
import Pagaintion from './pagaintion/Pagaintion'

export default function AllBooks() {
  const books=useSelector((state)=> state.book.books); 
  const[filter,setFilter]=useState([]); 
  const[sort,setSort]=useState(''); //sort
  const[currentPage,setCurrentPage]=useState(1);
  const[booksPerPage]=useState(5);

  useEffect(()=>{
   
    setTimeout(
      () => setFilter(books),
      1000)
   
    ;
    
  
  },[books])
  //sort the books
  useEffect(()=>{
    if (sort === "sort-btn1") {
      const lowestPrice = books
        .map((book) => book)
        .sort((a,b)=>a.title.localeCompare(b.title));
      setFilter(lowestPrice);
      console.log(filter)
    }
   else{
    const lowestPrice = books
        .map((book) => book)
        .sort((a,b)=>b.title.localeCompare(a.title));
      setFilter(lowestPrice)
      
    }
   
   
   },[setFilter,sort])

   //pagination 
   const indexOfLastProduct = currentPage * booksPerPage;
   const indexOfFirstProduct = indexOfLastProduct - booksPerPage;
   const currentBooks = filter.slice(indexOfFirstProduct, indexOfLastProduct);
   const totalPages = Math.ceil(filter.length / booksPerPage);
  return (
    <div className='all-content'>
      <SecondaryNavbar name='All Books'/>
      <div className='books-content'>
        <Fliter  sort={sort}  setSort={setSort} />
        <Books currentBooks={currentBooks} filter={filter}/>
        
        </div>
        <Pagaintion
        setCurrentPage={setCurrentPage} 
        pages = {totalPages}/>
      </div>
    
  )
}
