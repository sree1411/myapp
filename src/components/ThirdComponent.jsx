import React from 'react'
import { UserData } from '../UseContext.jsx/UseCart'

const ThirdComponent = () => {

  const {name} = UserData()

  return (
      <>
      
      <div>ThirdComponent:{name}</div>
      
      </>
  )
}

export default ThirdComponent