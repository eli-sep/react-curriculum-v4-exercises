import { useState } from 'react';
import UserProfile from './components/UserProfile';
import TaskFilter from './components/TaskFilter';
import TaskItem from './components/TaskItem';
import { handleFilter } from './utils/handleFilter';
import { useDataloader } from './hooks/useDataLoader';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useDataloader();

  const visibleTasks = handleFilter(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilter filter={filter} onFilterChange={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
