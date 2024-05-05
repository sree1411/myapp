import React from 'react'
import ThirdComponent from './ThirdComponent'
import { useData } from '../useContext/ExampleContext'

const SecondComponent = () => {
  const {userDetails, abc} = useData()
  console.log(userDetails, "user", abc)
   
 
  return (
      <>
         second component : <br/>
         <h1>{userDetails.name} </h1>
         <h1> total Amount :{abc.map((item)=>{
          return <>
                 <li>{item}</li>
              </>
         })}</h1>
         <ThirdComponent/> <br/>
      </>
  )
}

export default SecondComponent