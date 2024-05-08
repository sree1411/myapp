import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentBtn } from '../redux/commentSlice'

const Navbar = () => {
  
   const [peopleCmt, setPeopleCmt]= useState({
       name:""
   })
   const handleChange = (e)=>{
    setPeopleCmt({...peopleCmt, name:e.target.value})
    
   }
   const dispatch = useDispatch()
    
   function handleCommetBtn(){
       dispatch(commentBtn(peopleCmt.name))
       setPeopleCmt({
        name:""
       })
   }
  return (
      <>
        <h1>comment section </h1>
       
       <input type="text" value={peopleCmt.name} onChange={handleChange}/>
       <button  onClick={handleCommetBtn}> Add Comment </button>
      
      </>
  )
}

export default Navbar