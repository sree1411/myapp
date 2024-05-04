import React from 'react'
import ThirdComponent from './ThirdComponent'
import { useData } from '../useContext/ExampleContext'

const SecondComponent = () => {
  const {userDetails} = useData()
  console.log(userDetails, "user")
  return (
      <>
         second component : <br/>
         <h1>{userDetails.name} </h1>
         <ThirdComponent/> <br/>
      </>
  )
}

export default SecondComponent