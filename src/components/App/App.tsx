import { FC, useEffect, useRef, useState } from "react";

import { AppHeader } from "../AppHeader/AppHeader";
import { TodoList } from "../TodoList/TodoList";
import { AppFooter } from "../AppFooter/AppFooter";
import { ITaskData } from "../../types/ITaskData";
import { FilterType } from "../TodoFilters/TodoFilters";
import "./App.css";

const App: FC = () => {
  const [todoData, setTodoData] = useState<ITaskData[]>([
    {
      label: "Drink Coffee",
      completed: true,
      id: 1,
      createdTime: new Date(),
      timeLeft: 100000,
      isActive: false,
    },
    {
      label: "Make Awesome App",
      completed: false,
      id: 2,
      createdTime: new Date(),
      timeLeft: 200000,
      isActive: false,
    },
    {
      label: "Have a lunch",
      completed: true,
      id: 3,
      createdTime: new Date(),
      timeLeft: 300000,
      isActive: false,
    },
  ]);

  const [filterType, setFilterType] = useState(FilterType.All);

  const lastId = useRef(todoData.length);

  const itemsLeft = todoData.reduce(
    (acc, item) => acc + (item.completed ? 0 : 1),
    0
  );

  const onUpdate = (id: number, data: Partial<ITaskData>) => {
    const i = todoData.findIndex((taskData) => taskData.id === id);
    if (i >= 0) {
      const newTodoData = [...todoData];
      const task: ITaskData = { ...newTodoData[i], ...data };

      if (task.isActive) {
        task.lastTickTime = Date.now();
      }

      newTodoData[i] = task;

      setTodoData(newTodoData);
    }
  };

  const addNewTask = (label: string, time: number) => {
    const newTodoData = [...todoData];
    const id = lastId.current + 1;
    lastId.current = id;

    const task: ITaskData = {
      id: id,
      label: label,
      completed: false,
      createdTime: new Date(),
      timeLeft: time,
      isActive: false,
    };

    newTodoData.push(task);

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
    }) as ITaskData[];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTodoData = [...todoData];
      newTodoData.forEach((data) => {
        if (!data.isActive) return;

        const now = Date.now();
        const lastTick = data.lastTickTime || now;

        const time = Math.max(data.timeLeft - (now - lastTick), 0);
        data.timeLeft = time;
        data.lastTickTime = now;

        if (time <= 0) {
          data.isActive = false;
        }
      });

      setTodoData(newTodoData);
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, [todoData]);

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
};

export { App };
