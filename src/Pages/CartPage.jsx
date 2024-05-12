import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'

const CartPage = () => {

  const[count, setCount] = useState(1)
  const product = useSelector((state)=>state.product.value)
  const total = useSelector((state)=>state.product.total)
  
  const incBtn =()=>{
    setCount(count + 1)
  }

  const decBtn =()=>{
   if(count > 1){
     setCount(count - 1)
   }
   
 }

  const dispatch = useDispatch()
 const abc =()=>{
  alert("thanks for order the Product")
 }

  return (
       <>
          <NavBar/>
          <div className="special">
          <div className="cartpagesection">
          {
            product.map((item, index)=>(
                <div className="cartpagesection1">
                    <div className='cartImg'>
                    <img src={item.image} alt="" />
                    </div>
                    <div className='cartdetails'>
                        <h4>Title: {item.title}</h4>
                        <h4>Price:$ {item.price}</h4>
                        <h4>Category:{item.category}</h4>
                        <h4>Quantity: {item.quantity}</h4>
                        <div className="count">
                        <div className="quantity">
                            <p> Quantity</p>
                            <button className='btnQ' onClick={incBtn}> + </button>
                              <span> {count}</span>
                            <button className='btnQ' onClick={decBtn} > - </button>
                        </div>
                       
                    </div>
                        <button className='removeBtn' onClick={()=>dispatch(removeFromCart({
                    ...item,
                    quantity:count
                   }))} > Remove From cart </button>
                    </div>
              
                 

              </div>
            ))
          }
          </div>
          <div className='shippingcart'>
              <h1> Total amount :{total *count}</h1>
              <button className='btncheckout' onClick={abc}> check Out </button>
          </div>
          </div>
         
         
       
       </>
  )
}

export default CartPage