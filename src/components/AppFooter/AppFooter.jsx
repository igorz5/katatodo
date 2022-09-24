import TodoFilters from "../TodoFilters/TodoFilters";
import "./AppFooter.css";

const AppFooter = ({
  currentFilterType,
  itemsLeft,
  onClearCompleted,
  onFilterTypeChanged,
}) => {
  return (
    <footer className="app-footer">
      <span className="todo-count">{`${itemsLeft} items left`}</span>
      <TodoFilters
        current={currentFilterType}
        onFilterTypeChanged={onFilterTypeChanged}
      />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default AppFooter;
