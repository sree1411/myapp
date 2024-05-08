import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

const HeroComponent = () => {

    const count = useSelector((state)=>state.counter.value)
    const names = useSelector((state)=>state.comment.value)
    console.log(names)

    const dispatch = useDispatch()
 
   
  return (
      <>
          <h1> likes and dislikesBtn </h1>
         <h1>count :{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment button</button>
        <button onClick={()=>dispatch(decrement())}>decrement button</button>
         
        <ul>
            {names.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </>
  )
}

export default HeroComponent