import { createSlice } from '@reduxjs/toolkit'

export const commentSlice = createSlice({
    name: 'comment',
    initialState :{
      value: []
    },
    reducers: {
      
      
      commentBtn: (state, action) => {
        
          state.value.push(action.payload);
        },
      
    },
  })

  export const {commentBtn} = commentSlice.actions

  export default commentSlice.reducer