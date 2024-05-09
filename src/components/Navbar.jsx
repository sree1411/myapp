import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {


   const count = useSelector((state)=>state.counter.value)

  return (
    <>
    
     <div className="container">
         <div className="subscriber">
            Subscriber:
         </div>
         <div className="comments">
            Comments :
         </div>
         <div className="likes">
            Likes : {count}
         </div>
     </div>
    
    </>
  )
}

export default Navbar