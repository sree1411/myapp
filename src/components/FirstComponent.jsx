import React from 'react'
import SecondComponent from './SecondComponent'
import { UserData } from '../UseContext.jsx/UseCart'

const FirstComponent = () => {

  const {name} = UserData()
  return (
       <>
       
       <div>FirstComponent:{name}</div>
       <SecondComponent />
       
       
       </>
  )
}

export default FirstComponent