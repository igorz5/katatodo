import { FC } from "react";

import { ITaskData } from "../../types/ITaskData";
import { TodoTask } from "../TodoTask/TodoTask";
import "./TodoList.css";

interface TodoListProps {
  items: ITaskData[];
  onUpdate: (id: number, data: Partial<ITaskData>) => void;
  onDelete: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ items, onUpdate, onDelete }) => {
  return (
    <ul className="todo-list">
      {items.map((taskData: ITaskData) => {
        return (
          <li key={taskData.id} className="todo-list-item">
            <TodoTask
              data={taskData}
              onUpdate={(data) => onUpdate(taskData.id, data)}
              onDelete={() => {
                onDelete(taskData.id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { TodoList };
