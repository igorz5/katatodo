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
  const buttons = [
    {
      type: FilterType.All,
      name: "All",
    },
    {
      type: FilterType.Active,
      name: "Active",
    },
    {
      type: FilterType.Completed,
      name: "Completed",
    },
  ];
  return (
    <ul className="todo-filters">
      {buttons.map((btn) => {
        return (
          <li key={btn.name}>
            <button
              className={filterType === btn.type ? "selected" : ""}
              onClick={() => onFilterTypeChanged(btn.type)}
            >
              {btn.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { TodoFilters };
