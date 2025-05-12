import React from 'react'
import Task from './Task'
import "./Column.css"
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
const Column = ({tasks}) => {
  return (
    <div className='column'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {tasks.map(task=>
       <Task id={task.id} title={task.title} key={task.id}></Task>
      )}
        </SortableContext>
    </div>
  )
}

export default Column
