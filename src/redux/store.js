import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from '../redux/counterSlice'
import commentSlice from '../redux/commentSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    comment:commentSlice
  },
})