export function handleFilter(tasks, filter) {
  let filteredTasks = tasks;
  if (filter === 'completed') {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  if (filter === 'pending') {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  return filteredTasks;
}
