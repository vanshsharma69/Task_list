import React from 'react'
import "./Task.css"
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Task = ({id,title}) => {
   const {attributes,listeners,setNodeRef,transform,transition}= useSortable({id})

   const style={
    transform: CSS.Transform.toString(transform),
    transition
   }
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='task'>
        <input type='checkbox' className='checkbox'></input>
     {title}
    </div>
  )
}

export default Task
