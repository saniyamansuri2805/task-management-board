import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskCard from './TaskCard'
import TaskForm from './TaskForm'
import { addTask, updateTask } from '../features/tasks/tasksSlice'
import { STATUSES, STATUS_COMPLETED } from '../constants/statuses'

export default function TaskList({ showOnlyCompleted = false, showAddTaskBtn = true, showFilterAndSort = true }) {
  const items = useSelector(s => s.tasks.items)
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('All')
  const [sortAsc, setSortAsc] = useState(true)
  const [editing, setEditing] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const list = useMemo(() => {
    let l = items.slice()
    if (showOnlyCompleted) l = l.filter(t => t.status === STATUS_COMPLETED)
    if (filter !== 'All') l = l.filter(t => t.status === filter)
    l.sort((a,b)=> new Date(a.dueDate) - new Date(b.dueDate))
    if (!sortAsc) l.reverse()
    return l
  }, [items, filter, sortAsc, showOnlyCompleted])

  function openNew() {
    setEditing(null)
    setShowForm(true)
  }

  function handleSave(data) {
    if (data.id) dispatch(updateTask(data))
    else dispatch(addTask(data))
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex gap-2 items-center">
          {showAddTaskBtn &&<button onClick={openNew} className="px-3 py-1 bg-green-600 text-white rounded">+ Add Task</button>}
          {showFilterAndSort && <select value={filter} onChange={e=>setFilter(e.target.value)} className="border px-2 py-1 rounded text-sm">
            <option>All</option>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>}
        </div>
        <div className="flex gap-2 items-center">
          {showFilterAndSort &&<button onClick={()=>setSortAsc(!sortAsc)} className="px-2 py-1 border rounded">Sort by due {sortAsc? '↑':'↓'}</button>}
        </div>
      </div>

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(t => <TaskCard task={t} key={t.id} onEdit={(task)=>{setEditing(task); setShowForm(true)}} />)}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded p-4 w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-2">{editing ? 'Edit Task' : 'New Task'}</h3>
            <TaskForm initial={editing || {}} onCancel={() => setShowForm(false)} onSave={handleSave} />
          </div>
        </div>
      )}
    </div>
  )
}
