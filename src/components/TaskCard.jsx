import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../features/tasks/tasksSlice'
import { STATUSES } from '../constants/statuses'

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString()
  } catch { return d }
}

export default function TaskCard({ task, onEdit }) {
  const dispatch = useDispatch()

  function handleDelete() {
    if (confirm('Delete this task?')) dispatch(deleteTask(task.id))
  }

  function handleStatus(e) {
    dispatch(updateTask({ id: task.id, status: e.target.value }))
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-semibold text-lg">{task.title}</h3>
          <p className="text-sm text-slate-600">{task.description}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <select value={task.status} onChange={handleStatus} className="border rounded px-2 py-1 text-sm">
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <span className="text-xs text-slate-500">Due: {formatDate(task.dueDate)}</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <button onClick={() => onEdit(task)} className="px-3 py-1 bg-indigo-600 text-white rounded">Edit</button>
        <button onClick={handleDelete} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  )
}
