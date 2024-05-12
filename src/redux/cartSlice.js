import { createSlice } from '@reduxjs/toolkit'

 

export const cartSlice = createSlice({
  name: 'product',
  initialState:{
    value:[],
    total:0
  },
  reducers: {
     addToCart :(state, action)=>{
         
        const updatedCartList = state.value.concat(action.payload)
        const totalAmount = state.total + (action.payload.price)
         return {...state, value:updatedCartList, total:totalAmount}
     


     },
     removeFromCart:(state,action)=>{
        const updatedCartList = state.value.filter((item)=>item.id !== action.payload.id)
        const totalAmount = state.total - (action.payload.price)
        return {...state, value:updatedCartList, total:totalAmount}

     }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer