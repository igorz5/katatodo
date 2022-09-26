import { FC } from "react";

import TodoFilters, { FilterType } from "../TodoFilters/TodoFilters";
import "./AppFooter.css";

interface AppFooterProps {
  filterType: FilterType;
  itemsLeft: number;
  onClearCompleted: React.MouseEventHandler<HTMLButtonElement>;
  onFilterTypeChanged: (type: FilterType) => void;
}

const AppFooter: FC<AppFooterProps> = ({
  filterType,
  itemsLeft,
  onClearCompleted,
  onFilterTypeChanged,
}) => {
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
};

export default AppFooter;
