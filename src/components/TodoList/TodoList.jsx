import TodoTask from "../TodoTask/TodoTask";
import "./TodoList.css";

const TodoList = ({ items }) => {
  const elements = items.map((data) => {
    return (
      <li key={data.id} className="todo-list-item">
        <TodoTask data={data} />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
