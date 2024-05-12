import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const product = useSelector((state)=>state.product.value)

  return (
      <>
        
         <div className="navSection">
           <div className="title">
            <Link to='/'>
              E-Commerce
            </Link>
            
           </div>
            <div className="sub-title">
               <div className="home">
                  Home
               </div>
                 <div className="shop">
                  Shop
                 </div>
            
                 <div className="cart">
                   <Link to='/cart'>
                   Cart Items : {product.length}
                   </Link>
                 </div>
               
               
            </div>
         </div>
          
      </>
  )
}

export default NavBar