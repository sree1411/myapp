import React from 'react'
import ThirdComponent from './ThirdComponent';
import { UseCart } from '../useContext/CartContext';

const SecondComponent = ({studentName}) => {
  const {person} = UseCart()
  return (
      <>
      
        <h1> SecondComponent :{person} </h1> 
        <ThirdComponent studentName={studentName} />
      
      </>
  )
}

export default SecondComponent;