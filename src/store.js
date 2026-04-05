import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/tasksSlice'
import { loadState, saveState } from './utils/localStorage'
import cartReducer from "./features/cartSlice"

const preloaded = loadState()

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    cart : cartReducer
  },
  preloadedState: preloaded
})

store.subscribe(() => {
  saveState({ tasks: store.getState().tasks })
})

export default store
