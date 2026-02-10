import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/tasksSlice'
import { loadState, saveState } from './utils/localStorage'

const preloaded = loadState()

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  preloadedState: preloaded
})

store.subscribe(() => {
  saveState({ tasks: store.getState().tasks })
})

export default store
