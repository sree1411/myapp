import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import subscribeReducer from '../store/subscriberSlice'
import  commentSlice from './commentSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    subscribe:subscribeReducer,
    comment:commentSlice
  },
})