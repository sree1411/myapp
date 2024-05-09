import { createContext, useContext, useState } from "react";


const  cartContext = createContext()

export const CartProvider = ({children})=>{
     

   const name ="sree"
   const students=[
    {
        name:"sree",
        age:19
    },
    {
        name:"kanth",
        age:20
    },
    {
        name:"renati",
        age:21
    }
   ]

   const [count, setCount]= useState(0)
  
   const incBtn = ()=>{
    setCount(count +1 )
   }


    return(
        <>
        <cartContext.Provider value={{name, students, incBtn, count}}>
            {children}
        </cartContext.Provider>
        </>
    )
}


export const UserData =()=>{
    return useContext(cartContext)
}