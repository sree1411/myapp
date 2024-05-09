import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../store/counterSlice'
import { incrementSub } from '../store/subscriberSlice'
import CommentComponent from '../separatecomponent/CommentComponent'

const HeroBanner = () => {


  const dispatch = useDispatch()
   
  const [show , setShow] = useState(false)

  const showBtn = ()=>{
    setShow(true)
  }

  return (
      <div className="herobanner">
          
         <button className='btn' onClick={()=>dispatch(incrementSub())} >subscribe</button>
         <button className='btn' onClick={()=>dispatch(increment())}>Like</button>
         <button className='btn' onClick={showBtn}>Comment</button>
         
       
          {show  ? <CommentComponent /> : "" }
      </div>
  )
}

export default HeroBanner