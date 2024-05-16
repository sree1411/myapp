import React from 'react'
import { UseCart } from '../useContext/CartContext'
import FourthComponent from './FourthComponent'

const ThirdComponent = ({studentName}) => {
  const {name} = UseCart()
  return (
    <div>
      <>
      ThirdComponent :{name} and {studentName}
      <FourthComponent/>
      
      </>
     
    
    </div>
  )
}

export default ThirdComponent