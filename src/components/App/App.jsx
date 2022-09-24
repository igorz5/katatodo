import AppHeader from "../AppHeader/AppHeader";
import TodoList from "../TodoList/TodoList";
import AppFooter from "../AppFooter/AppFooter";
import { useRef, useState } from "react";

import "./App.css";

const App = () => {
  const [todoData, setTodoData] = useState([
    {
      label: "Drink Coffee",
      completed: true,
      id: 1,
      time: new Date(),
    },
    {
      label: "Make Awesome App",
      completed: false,
      id: 2,
      time: new Date(),
    },
    {
      label: "Have a lunch",
      completed: false,
      id: 3,
      time: new Date(),
    },
  ]);

  const [filterType, setFilterType] = useState("all");

  const lastId = useRef(todoData.length);

  const itemsLeft = todoData.reduce((acc, item) => {
    return acc + (item.completed ? 0 : 1);
  }, 0);

  const onUpdate = (id, data) => {
    const i = todoData.findIndex((taskData) => taskData.id === id);
    if (i >= 0) {
      const newTodoData = [...todoData];
      newTodoData[i] = { ...newTodoData[i], ...data };

      setTodoData(newTodoData);
    }
  };

  const addNewTask = (label) => {
    const newTodoData = [...todoData];
    const id = lastId.current + 1;
    lastId.current = id;

    newTodoData.push({
      label: label,
      completed: false,
      time: new Date(),
      id: id,
    });

    setTodoData(newTodoData);
  };

  const deleteTask = (id) => {
    const newTodoData = todoData.filter((taskData) => taskData.id !== id);

    setTodoData(newTodoData);
  };

  const clearCompleted = () => {
    const newTodoData = todoData.filter((taskData) => !taskData.completed);

    setTodoData(newTodoData);
  };

  const filteredTodoData = () => {
    if (filterType === "all") return todoData;

    return todoData.filter((taskData) => {
      if (filterType === "active") {
        return !taskData.completed;
      }

      if (filterType === "completed") {
        return taskData.completed;
      }

      return true;
    });
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
          currentFilterType={filterType}
          onClearCompleted={clearCompleted}
          onFilterTypeChanged={setFilterType}
        />
      </section>
    </section>
  );
};

export default App;
