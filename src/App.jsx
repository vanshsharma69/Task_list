import { useState } from 'react';
import './App.css';
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import Add from './components/Add';         // ✅ missing import added
import Column from './components/Column';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add text to Homepage" },
    { id: 2, title: "Fix Styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const addTask = title => {
    setTasks(tasks => [...tasks, { id: tasks.length + 1, title }]);
  };

  const getTaskPos = id => tasks.findIndex(task => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTasks(tasks => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className='App'>
      <h1>My Tasks ✅</h1>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Add onSubmit={addTask} />
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App;
