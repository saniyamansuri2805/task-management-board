import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import AllTasks from './pages/AllTasks'
import CompletedTasks from './pages/CompletedTasks'
import { useSelector } from 'react-redux'
import { STATUSES } from './constants/statuses'

function Summary() {
  const items = useSelector(s => s.tasks.items)
  const counts = items.reduce((acc, t) => { acc[t.status] = (acc[t.status] || 0) + 1; return acc }, {})
  return (
    <div className="bg-white rounded p-3 shadow flex gap-4">
      {STATUSES.map(s => (
        <div key={s}>{s}: <strong>{counts[s]||0}</strong></div>
      ))}
    </div>
  )
}

export default function App(){
  return (
    <div className="min-h-screen p-4">
      <header className="max-w-6xl mx-auto mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Management Dashboard</h1>
          <nav className="flex gap-2">
            <NavLink to="/" end className={({isActive})=> isActive? 'px-3 py-1 rounded bg-indigo-600 text-white':'px-3 py-1 rounded border'}>All Tasks</NavLink>
            <NavLink to="/completed" className={({isActive})=> isActive? 'px-3 py-1 rounded bg-indigo-600 text-white':'px-3 py-1 rounded border'}>Completed</NavLink>
          </nav>
        </div>
        <div className="mt-4"><Summary /></div>
      </header>

      <main className="max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/completed" element={<CompletedTasks />} />
        </Routes>
      </main>
    </div>
  )
}
