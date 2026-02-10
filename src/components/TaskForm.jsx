import React, { useState, useEffect } from 'react'
import { STATUSES, STATUS_PENDING } from '../constants/statuses'

export default function TaskForm({ initial = {}, onCancel, onSave }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState(STATUS_PENDING)
  const [dueDate, setDueDate] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initial) {
      setTitle(initial.title || '')
      setDescription(initial.description || '')
      setStatus(initial.status || STATUS_PENDING)
      setDueDate(initial.dueDate ? initial.dueDate.slice(0,10) : '')
    }
  }, [initial])

  function validate() {
    const e = {}
    if (!title.trim()) e.title = 'Title is required'
    if (!dueDate) e.dueDate = 'Due date is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function submit(e) {
    e.preventDefault()
    if (!validate()) return
    onSave({ ...initial, title, description, status, dueDate })
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="block text-sm">Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border rounded px-2 py-1" />
        {errors.title && <div className="text-xs text-red-600">{errors.title}</div>}
      </div>
      <div>
        <label className="block text-sm">Description</label>
        <textarea value={description} onChange={e=>setDescription(e.target.value)} className="w-full border rounded px-2 py-1" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm">Status</label>
          <select value={status} onChange={e=>setStatus(e.target.value)} className="w-full border rounded px-2 py-1">
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm">Due Date</label>
          <input type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} className="w-full border rounded px-2 py-1" />
          {errors.dueDate && <div className="text-xs text-red-600">{errors.dueDate}</div>}
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
        <button type="submit" className="px-3 py-1 bg-indigo-600 text-white rounded">Save</button>
      </div>
    </form>
  )
}
