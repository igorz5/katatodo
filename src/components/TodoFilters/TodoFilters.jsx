import "./TodoFilters.css";

const TodoFilters = () => {
  return (
    <ul className="todo-filters">
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </ul>
  );
};

export default TodoFilters;
