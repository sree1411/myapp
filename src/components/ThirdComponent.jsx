import React from 'react'
import { useData } from '../useContext/ExampleContext'

const ThirdComponent = () => {

  const {name} = useData()
  return (
    <div>
        ThirdComponent:{name}
    </div>
  )
}

export default ThirdComponent