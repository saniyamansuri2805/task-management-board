import React from 'react'
import TaskList from '../components/TaskList'

export default function CompletedTasks() {
  return (
    <div>
      <TaskList showOnlyCompleted={true} showAddTaskBtn={false} showFilterAndSort={false}/>
    </div>
  );
}
