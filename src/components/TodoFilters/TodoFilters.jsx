import "./TodoFilters.css";

const TodoFilters = ({ current, onFilterTypeChanged }) => {
  return (
    <ul className="todo-filters">
      <li>
        <button
          className={current === "all" ? "selected" : ""}
          onClick={() => onFilterTypeChanged("all")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={current === "active" ? "selected" : ""}
          onClick={() => onFilterTypeChanged("active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={current === "completed" ? "selected" : ""}
          onClick={() => onFilterTypeChanged("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TodoFilters;
