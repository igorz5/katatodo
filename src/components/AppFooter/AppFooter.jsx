import TodoFilters from "../TodoFilters/TodoFilters";
import "./AppFooter.css";

const AppFooter = ({ itemsLeft }) => {
  return (
    <footer className="app-footer">
      <span className="todo-count">{`${itemsLeft} items left`}</span>
      <TodoFilters />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default AppFooter;
