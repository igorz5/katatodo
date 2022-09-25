import { useRef, useState } from "react";

import AppHeader from "../AppHeader/AppHeader";
import TodoList from "../TodoList/TodoList";
import AppFooter from "../AppFooter/AppFooter";
import FilterType from "../../types/FilterType";
import TaskData from "../../types/TaskData";
import "./App.css";

function App() {
  const [todoData, setTodoData] = useState([
    {
      label: "Drink Coffee",
      completed: true,
      id: 1,
      createdTime: new Date(),
    },
    {
      label: "Make Awesome App",
      completed: false,
      id: 2,
      createdTime: new Date(),
    },
    {
      label: "Have a lunch",
      completed: false,
      id: 3,
      createdTime: new Date(),
    },
  ]);

  const [filterType, setFilterType] = useState(FilterType.All);

  const lastId = useRef(todoData.length);

  const itemsLeft = todoData.reduce(
    (acc, item) => acc + (item.completed ? 0 : 1),
    0
  );

  const onUpdate = (id: number, data: TaskData) => {
    const i = todoData.findIndex((taskData) => taskData.id === id);
    if (i >= 0) {
      const newTodoData = [...todoData];
      newTodoData[i] = { ...newTodoData[i], ...data };

      setTodoData(newTodoData);
    }
  };

  const addNewTask = (label: string) => {
    const newTodoData = [...todoData];
    const id = lastId.current + 1;
    lastId.current = id;

    newTodoData.push({
      label,
      completed: false,
      createdTime: new Date(),
      id,
    });

    setTodoData(newTodoData);
  };

  const deleteTask = (id: number) => {
    const newTodoData = todoData.filter((taskData) => taskData.id !== id);

    setTodoData(newTodoData);
  };

  const clearCompleted = () => {
    const newTodoData = todoData.filter((taskData) => !taskData.completed);

    setTodoData(newTodoData);
  };

  const filteredTodoData = () => {
    if (filterType === FilterType.All) return todoData;

    return todoData.filter((taskData) => {
      if (filterType === FilterType.Active) {
        return !taskData.completed;
      }

      if (filterType === FilterType.Completed) {
        return taskData.completed;
      }

      return true;
    }) as TaskData[];
  };

  return (
    <section className="todoapp">
      <AppHeader onTaskAdded={addNewTask} />
      <section className="main">
        <TodoList
          items={filteredTodoData()}
          onUpdate={onUpdate}
          onDelete={deleteTask}
        />
        <AppFooter
          itemsLeft={itemsLeft}
          filterType={filterType}
          onClearCompleted={clearCompleted}
          onFilterTypeChanged={setFilterType}
        />
      </section>
    </section>
  );
}

export default App;
