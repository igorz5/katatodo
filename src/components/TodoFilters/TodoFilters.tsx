import { FC } from "react";
import "./TodoFilters.css";

export enum FilterType {
  All,
  Active,
  Completed,
}

interface TodoFiltersProps {
  filterType: FilterType;
  onFilterTypeChanged: (type: FilterType) => void;
}

const TodoFilters: FC<TodoFiltersProps> = ({
  filterType,
  onFilterTypeChanged,
}) => {
  return (
    <ul className="todo-filters">
      <li>
        <button
          className={filterType === FilterType.All ? "selected" : ""}
          onClick={() => onFilterTypeChanged(FilterType.All)}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filterType === FilterType.Active ? "selected" : ""}
          onClick={() => onFilterTypeChanged(FilterType.Active)}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filterType === FilterType.Completed ? "selected" : ""}
          onClick={() => onFilterTypeChanged(FilterType.Completed)}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TodoFilters;
