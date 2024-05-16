import React from 'react'
import { UseCart } from '../useContext/CartContext'

const FourthComponent = () => {

    const {count, incBtn, decBtn, resetBtn, students} = UseCart()

  return (
      <>
          <h1> count  :{count}</h1>
         <button onClick={incBtn}> +  </button> <br/>
         <button onClick={decBtn}> - </button> <br/>
         <button onClick={resetBtn} > ResetButton  </button>
         

         <h1> student information </h1>
         {
            students.map((student)=>{
              return <>
                       <li> {student.name}</li>
                       <li> {student.age}</li>
                   </>

            })
         }
      </>
  )
}

export default FourthComponent