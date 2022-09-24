import TodoFilters from "../TodoFilters/TodoFilters";
import "./AppFooter.css";

const AppFooter = ({ itemsLeft, onClearCompleted }) => {
  return (
    <footer className="app-footer">
      <span className="todo-count">{`${itemsLeft} items left`}</span>
      <TodoFilters />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default AppFooter;
