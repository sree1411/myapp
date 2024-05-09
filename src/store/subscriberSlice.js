import { createSlice } from '@reduxjs/toolkit'

 

export const subscriberSlice = createSlice({
  name: 'subscribe',
  initialState:{
    value: 0,
  },
  reducers: {
    incrementSub: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    } 
  },
})

// Action creators are generated for each case reducer function
export const { incrementSub, decrement } = subscriberSlice.actions

export default subscriberSlice.reducer