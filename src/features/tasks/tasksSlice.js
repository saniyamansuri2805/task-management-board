import { createSlice, nanoid } from '@reduxjs/toolkit'
import { STATUS_PENDING } from '../../constants/statuses'

const initialState = {
  items: []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload)
      },
      prepare({ title, description = '', status = STATUS_PENDING, dueDate }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            status,
            dueDate
          }
        }
      }
    },
    updateTask(state, action) {
      const idx = state.items.findIndex(t => t.id === action.payload.id)
      if (idx !== -1) state.items[idx] = { ...state.items[idx], ...action.payload }
    },
    deleteTask(state, action) {
      state.items = state.items.filter(t => t.id !== action.payload)
    }
  }
})

export const { addTask, updateTask, deleteTask } = tasksSlice.actions
export default tasksSlice.reducer
