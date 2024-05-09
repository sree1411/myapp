import { createSlice } from '@reduxjs/toolkit'

 

export const commentSlice = createSlice({
  name: 'comment',
  initialState:{
    value: ["sree"],
  },
  reducers: {
    addcommnetBtn: (state, action) => {
      state.value.push(action.payload)
      console.log(state.value, "state")
      console.log(action.payload, "action")

    },
     
  },
})

// Action creators are generated for each case reducer function
export const { addcommnetBtn } = commentSlice.actions

export default commentSlice.reducer