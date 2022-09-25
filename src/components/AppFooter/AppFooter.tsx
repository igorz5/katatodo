import TodoFilters from "../TodoFilters/TodoFilters";
import FilterType from "../../types/FilterType";
import "./AppFooter.css";

interface AppFooterProps {
  filterType: FilterType;
  itemsLeft: number;
  onClearCompleted: React.MouseEventHandler<HTMLButtonElement>;
  onFilterTypeChanged: (type: FilterType) => void;
}

function AppFooter({
  filterType,
  itemsLeft,
  onClearCompleted,
  onFilterTypeChanged,
}: AppFooterProps) {
  return (
    <footer className="app-footer">
      <span className="todo-count">{`${itemsLeft} items left`}</span>
      <TodoFilters
        filterType={filterType}
        onFilterTypeChanged={onFilterTypeChanged}
      />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default AppFooter;
