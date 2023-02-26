import React from 'react'
import './filter.css'
export default function Fliter({sort,setSort}) {

  const radioSortButtons=[
    {
      text:'Sorted from A to Z',
      value:'rsc',
      id:'sort-btn1'
    },
    {
      text:'Sorted from Z to A',
      value:'asc',
      id:'sort-btn2'
    }
  ]
  return (
    <div className='filter'>
      <h3>Fliter Options</h3>
      <hr/>
    <div className='sort-options'>
       {radioSortButtons.map((item,index)=>(
      <div className='radio' key={index}>
          <input type='radio' id={item.id} value={item.id}  onChange={(e)=>setSort(e.target.value)} checked={sort ===item.id}/>
          <label htmlFor={item.id}>{item.text}</label>
      </div> 
       ))}
    </div>
    </div>
  )
}
