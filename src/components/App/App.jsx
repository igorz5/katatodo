import AppHeader from "../AppHeader/AppHeader";
import TodoList from "../TodoList/TodoList";
import AppFooter from "../AppFooter/AppFooter";

import "./App.css";

const App = () => {
  const todoData = [
    {
      label: "Drink Coffee",
      completed: true,
      editing: false,
      id: 1,
      time: new Date(),
    },
    {
      label: "Make Awesome App",
      completed: false,
      editing: true,
      id: 2,
      time: new Date(),
    },
    {
      label: "Have a lunch",
      completed: false,
      editing: false,
      id: 3,
      time: new Date(),
    },
  ];

  const itemsLeft = todoData.reduce((acc, item) => {
    return acc + (item.completed ? 0 : 1);
  }, 0);

  return (
    <section className="todoapp">
      <AppHeader />
      <section className="main">
        <TodoList items={todoData} />
        <AppFooter itemsLeft={itemsLeft} />
      </section>
    </section>
  );
};

export default App;
